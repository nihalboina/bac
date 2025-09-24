import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, reason, timestamp } = body;

        // Fake API - just log the data and return success
        console.log('Join request received:', {
            email,
            reason,
            timestamp,
            ip: request.headers.get('x-forwarded-for') || 'unknown'
        });

        // Simulate some processing delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Always return success for now (no auth)
        return NextResponse.json({
            success: true,
            message: 'Thank you for your interest! We\'ll be in touch soon.',
            id: Math.random().toString(36).substring(2, 15)
        });

    } catch (error) {
        console.error('Error processing join request:', error);

        return NextResponse.json({
            success: false,
            message: 'Something went wrong. Please try again.'
        }, { status: 500 });
    }
}