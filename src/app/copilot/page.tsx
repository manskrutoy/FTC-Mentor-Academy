'use client';

import { useState, useRef, useEffect } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import styles from './page.module.css';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export default function CopilotPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: "Hello! I'm the FTC Mentor Copilot. I help mentors check whether their actions stay within ethical boundaries. Ask me about any situation where you're unsure if you should intervene or step back."
        }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch('/api/copilot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to get response');
            }

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.response || 'Sorry, I received an empty response.'
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error: any) {
            console.error('Error:', error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: error.message || 'Sorry, I encountered an error. Please try again.'
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProtectedRoute requireAuth={true}>
            <div className={styles.page}>
                <div className={`container ${styles.container}`}>
                    <div className={`card ${styles.chatCard}`}>
                        <div className={styles.header}>
                            <h1>🤖 Mentor Copilot</h1>
                            <p className={styles.subtitle}>Ask before you act. Prevent violations.</p>
                        </div>

                        <div className={styles.messagesContainer}>
                            {messages.map(message => (
                                <div
                                    key={message.id}
                                    className={`${styles.message} ${message.role === 'user' ? styles.userMessage : styles.assistantMessage}`}
                                >
                                    <div className={styles.messageContent}>
                                        {message.content}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className={`${styles.message} ${styles.assistantMessage}`}>
                                    <div className={`${styles.messageContent} ${styles.loading}`}>
                                        Thinking...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <form onSubmit={handleSubmit} className={styles.inputForm}>
                            <input
                                type="text"
                                className={styles.input}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about a mentorship decision..."
                                disabled={loading}
                            />
                            <button type="submit" className="btn btn-primary" disabled={loading || !input.trim()}>
                                Send
                            </button>
                        </form>
                    </div>

                    <div className={`card-glass ${styles.infoCard}`}>
                        <h3>Example Questions:</h3>
                        <ul className={styles.exampleList}>
                            <li onClick={() => setInput("Can I solder parts for my students?")}>
                                "Can I solder parts for my students?"
                            </li>
                            <li onClick={() => setInput("How do I help my team with CAD without doing it for them?")}>
                                "How do I help my team with CAD without doing it for them?"
                            </li>
                            <li onClick={() => setInput("My team is behind schedule. Can I write code to help them catch up?")}>
                                "My team is behind schedule. Can I write code to help them catch up?"
                            </li>
                            <li onClick={() => setInput("What should I do if students want me to fix their robot at competition?")}>
                                "What should I do if students want me to fix their robot at competition?"
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
