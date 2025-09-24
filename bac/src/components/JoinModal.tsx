"use client";

import React, { useState } from "react";
import { GlassCard } from '@developer-hub/liquid-glass';

interface JoinModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Fake API call
        try {
            await fetch('/api/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    reason,
                    timestamp: new Date().toISOString(),
                }),
            });

            // Simulate success regardless of actual response
            console.log('Join request submitted:', { email, reason });

            // Reset form and close modal
            setEmail("");
            setReason("");
            onClose();
        } catch (error) {
            console.error('Error submitting join request:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <GlassCard
                cornerRadius={16}
                displacementScale={80}
                blurAmount={0.05}
                className="w-full max-w-lg"
                padding="32px"
                style={{ backgroundColor: 'rgba(0, 38, 118, 0.8)' }}
            >
                <form id="join-form" onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                            Berkeley Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your-email@berkeley.edu"
                            required
                            disabled={isSubmitting}
                            className="w-1/2 h-12 px-3 py-2 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 disabled:opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-white mb-2">
                            Why do you want to join?
                        </label>
                        <textarea
                            id="reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            placeholder="Build the future. Ship your dreams. Change the world. Create impact. Turn ideas into reality. Code with purpose. Innovate fearlessly. Make it happen."
                            rows={3}
                            required
                            disabled={isSubmitting}
                            className="w-1/2 h-12 px-3 py-2 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 disabled:opacity-50 resize-none"
                        />
                    </div>

                    <div className="pt-2">
                        <GlassCard
                            cornerRadius={8}
                            padding="12px 16px"
                            onClick={!isSubmitting ? () => {
                                const form = document.getElementById('join-form') as HTMLFormElement;
                                if (form) form.requestSubmit();
                            } : undefined}
                            className="w-full cursor-pointer hover:scale-105 transition-transform"
                        >
                            <div className="text-center text-white font-medium">
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </div>
                        </GlassCard>
                    </div>
                </form>
            </GlassCard>
        </div>
    );
}