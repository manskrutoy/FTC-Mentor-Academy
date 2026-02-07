import { NextRequest, NextResponse } from 'next/server';
import { getCopilotResponse } from '@/lib/ai';

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // In production, fetch relevant rules from Firestore based on message content
        const rules: string[] = [];

        const response = await getCopilotResponse(message, rules);

        return NextResponse.json({ response });
    } catch (error) {
        console.error('Copilot API error:', error);
        return NextResponse.json(
            { error: 'Failed to get response' },
            { status: 500 }
        );
    }
}
