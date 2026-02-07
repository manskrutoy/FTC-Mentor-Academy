import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || '',
});

const SCENARIO_CATEGORIES = {
    'technical-help': 'Technical Help (coding, CAD, building)',
    'competition-pressure': 'Competition Day Pressure',
    'time-management': 'Deadline & Time Management',
    'team-dynamics': 'Team Decisions & Leadership',
    'judging': 'Judging & Presentation',
    'safety': 'Safety & Lab Management'
};

export async function POST(request: NextRequest) {
    try {
        const { category } = await request.json();

        if (!category || !SCENARIO_CATEGORIES[category as keyof typeof SCENARIO_CATEGORIES]) {
            return NextResponse.json(
                { error: 'Valid category is required' },
                { status: 400 }
            );
        }

        const categoryName = SCENARIO_CATEGORIES[category as keyof typeof SCENARIO_CATEGORIES];

        const prompt = `Generate a realistic FTC (FIRST Tech Challenge) mentor ethical dilemma scenario in the category: "${categoryName}".

REQUIREMENTS:
1. Create a specific, realistic situation a mentor might face
2. Make it feel real - include details like team number, student names, specific robot parts
3. Present a clear ethical dilemma about the boundary between helping and doing
4. The scenario should be 2-3 sentences, detailed and engaging

RESPONSE FORMAT (JSON):
{
  "title": "Short catchy title (4-6 words)",
  "category": "${category}",
  "difficulty": "easy" | "medium" | "hard",
  "prompt": "The detailed scenario (2-3 sentences)",
  "options": [
    {"text": "Option A description", "isCorrect": false},
    {"text": "Option B description", "isCorrect": false},
    {"text": "Option C description", "isCorrect": true},
    {"text": "Option D description", "isCorrect": false}
  ],
  "verdict": "Clear verdict: Allowed/Not Allowed/Depends",
  "explanation": "Why this is the right approach (2-3 sentences)",
  "safeAlternative": "What the mentor SHOULD do instead (1-2 sentences)",
  "ruleReferences": ["Relevant FTC rule or principle"]
}

Make it realistic and educational. The correct option should preserve student ownership.`;

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: 'You are an FTC ethics expert who creates realistic mentor training scenarios. Always respond with valid JSON only.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.8, // More creative for variety
            max_tokens: 2048,
            response_format: { type: 'json_object' }
        });

        const generatedCase = JSON.parse(completion.choices[0]?.message?.content || '{}');

        return NextResponse.json({ case: generatedCase });
    } catch (error: any) {
        console.error('Case generation error:', error);
        return NextResponse.json(
            { error: 'Failed to generate case', details: error.message },
            { status: 500 }
        );
    }
}
