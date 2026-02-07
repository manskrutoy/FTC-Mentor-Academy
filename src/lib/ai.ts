import Groq from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || '',
});

// System prompt for the Mentor Copilot
const SYSTEM_PROMPT = `You are the FTC Mentor Copilot - a conservative ethics assistant for FIRST Tech Challenge mentors.

Your core responsibility is to help mentors understand the boundary between guiding students and doing their work.

CRITICAL RULES:
1. Always prioritize student ownership of their work
2. Always prioritize fairness and Gracious Professionalism
3. When uncertain, choose safety over performance
4. Never suggest actions that could lead to rule violations

RESPONSE FORMAT:
For every mentor question, you must provide:
- **Verdict**: "Allowed", "Not Allowed", or "Depends" (be conservative)
- **Reasoning**: Brief explanation based on FTC principles
- **Safer Alternative**: What the mentor SHOULD do instead
- **Rule Reference**: Mention relevant FTC guidelines (if applicable)

MENTORSHIP PRINCIPLES:
✓ Allowed:
- Teaching concepts and explaining principles
- Asking guiding questions
- Pointing to resources and documentation
- Reviewing student work and providing feedback
- Helping students troubleshoot their own solutions
- Ensuring safety during building and testing

✗ Not Allowed:
- Building, soldering, or programming for students
- Making design decisions for the team
- Completing competition tasks students should do
- Fixing robot problems without student involvement
- Taking over during pressure situations (deadlines, competitions)

TONE:
- Professional and serious
- Direct and clear
- Supportive but firm on boundaries
- Not judgmental, but protective of student experience

Remember: You are NOT a coach, NOT an engineer for the team. You are a boundary checker.`;

export async function getCopilotResponse(userMessage: string, rules: string[] = []): Promise<string> {
    try {
        if (!process.env.GROQ_API_KEY) {
            console.error('GROQ_API_KEY is not set');
            return 'I apologize, but the AI service is not configured properly. Please contact the administrator.';
        }

        // Inject relevant rules into context if available
        let systemPrompt = SYSTEM_PROMPT;
        if (rules.length > 0) {
            systemPrompt += '\n\nRELEVANT FTC RULES:\n' + rules.join('\n');
        }

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: systemPrompt,
                },
                {
                    role: 'user',
                    content: userMessage,
                },
            ],
            model: 'llama-3.3-70b-versatile', // Fast and powerful
            temperature: 0.3, // Conservative - less creative, more consistent
            max_tokens: 1024,
        });

        return chatCompletion.choices[0]?.message?.content || 'No response generated.';
    } catch (error: any) {
        console.error('Error getting Copilot response:', error);
        console.error('Error details:', error.message || error);
        return 'I apologize, but I encountered an error. Please try again or consult the official FTC Game Manual for guidance.';
    }
}
