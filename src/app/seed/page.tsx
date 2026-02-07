'use client';

import { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const seedData = {
    modules: [
        {
            id: "module-1",
            title: "Understanding Mentorship Boundaries",
            description: "Learn the fundamental difference between guiding students and doing their work. Understand your role and responsibilities.",
            order: 1,
            lessonCount: 3,
            requiredFor: "certification"
        },
        {
            id: "module-2",
            title: "Common Violation Scenarios",
            description: "Recognize situations where mentors commonly cross the line. Learn what NOT to do.",
            order: 2,
            lessonCount: 4,
            requiredFor: "certification"
        },
        {
            id: "module-3",
            title: "Ethical Decision Making",
            description: "Develop a framework for making mentorship decisions under pressure.",
            order: 3,
            lessonCount: 3
        }
    ],
    lessons: [
        {
            id: "lesson-1-1",
            moduleId: "module-1",
            title: "What is a Mentor's Role?",
            order: 1,
            content: "# What is a Mentor's Role?\n\n## The Core Principle\n\nIn FIRST Tech Challenge, **students own their robot**. This isn't just a nice idea — it's a fundamental rule.\n\nYour role as a mentor is to:\n\n✓ **Guide** students to find their own solutions\n✓ **Teach** concepts and principles\n✓ **Ask** guiding questions\n✓ **Ensure** safety during building and testing\n✓ **Provide** resources and references\n\n## What You Must NOT Do\n\n✗ Build mechanisms for students\n✗ Write code for the team\n✗ Make design decisions\n✗ Fix problems without student involvement\n✗ Take over during competitions\n\n## Why This Matters\n\nWhen mentors do the work:\n- Students lose learning opportunities\n- Teams compete on adult skill, not student growth\n- The integrity of FTC is compromised\n- Your team risks disqualification\n\n## The Boundary\n\nThe line between helping and doing can be unclear. Throughout this curriculum, you'll learn to recognize that boundary and stay on the right side of it.\n\n**Remember**: Your job is to make students better problem-solvers, not to solve problems for them.",
            hasQuiz: true
        },
        {
            id: "lesson-1-2",
            moduleId: "module-1",
            title: "Student Ownership Explained",
            order: 2,
            content: "# Student Ownership Explained\n\n## What Student Ownership Means\n\nStudent ownership means that **every aspect of the robot** — from design to build to code — should come from student thinking and student hands.\n\n## Levels of Mentor Involvement\n\n### ✓ Allowed: Teaching and Guiding\n\n- Explaining how motors work\n- Showing reference designs from other teams\n- Asking \"What if you tried...?\"\n- Reviewing code and pointing out issues\n- Teaching safety protocols\n\n### ⚠️ Caution Zone: Depends on Context\n\n- Demonstrating a technique (okay if students then do it)\n- Suggesting specific solutions (okay if students evaluate and choose)\n- Helping debug (okay if students drive the process)\n\n### ✗ Not Allowed: Doing the Work\n\n- Soldering connections yourself\n- Writing functions for students\n- Making final design choices\n- Building subsystems without student direction\n- Taking over during matches\n\n## The Test Question\n\nWhen uncertain, ask yourself:\n\n**\"Could a judge ask a student to explain or demonstrate this, and would the student be able to?\"**\n\nIf the answer is no, then you've probably crossed the line.",
            hasQuiz: true
        },
        {
            id: "lesson-1-3",
            moduleId: "module-1",
            title: "Gracious Professionalism in Mentorship",
            order: 3,
            content: "# Gracious Professionalism in Mentorship\n\n## What It Means\n\nGracious Professionalism® is a core FIRST value. For mentors, it means:\n\n- Respecting student autonomy\n- Supporting competitors, not just your team\n- Admitting when you don't know something\n- Modeling ethical behavior\n\n## How to Practice It\n\n✓ Encourage your students to help other teams\n✓ Share knowledge without doing the work\n✓ Celebrate successes of all teams\n✓ Accept losses with dignity\n\nYour behavior sets the tone for your entire team.",
            hasQuiz: false
        }
    ],
    cases: [
        {
            id: "case-1",
            title: "The Soldering Dilemma",
            scenario: "Your team is struggling with soldering connections. The robot needs to be ready for competition tomorrow.",
            difficulty: "Beginner"
        },
        {
            id: "case-2",
            title: "Code Crisis",
            scenario: "Students wrote code that won't compile. They're frustrated and asking you to fix it.",
            difficulty: "Intermediate"
        }
    ],
    ruleSnippets: [
        {
            id: "rule-1",
            title: "Student-Centered",
            content: "The robot is designed, built, and programmed by students. Mentors guide but do not do the work.",
            source: "FTC Core Values"
        },
        {
            id: "rule-2",
            title: "Gracious Professionalism",
            content: "Compete fiercely while treating everyone with respect and kindness.",
            source: "FIRST Core Values"
        }
    ]
};

export default function SeedPage() {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const seedDatabase = async () => {
        setLoading(true);
        setStatus('🌱 Starting database seeding...\n\n');

        try {
            // Seed modules
            setStatus(prev => prev + '📚 Adding modules...\n');
            for (const module of seedData.modules) {
                await setDoc(doc(db, 'modules', module.id), module);
                setStatus(prev => prev + `  ✓ Added: ${module.title}\n`);
            }

            // Seed lessons
            setStatus(prev => prev + '\n📖 Adding lessons...\n');
            for (const lesson of seedData.lessons) {
                await setDoc(doc(db, 'lessons', lesson.id), lesson);
                setStatus(prev => prev + `  ✓ Added: ${lesson.title}\n`);
            }

            // Seed cases
            setStatus(prev => prev + '\n⚖️ Adding cases...\n');
            for (const caseItem of seedData.cases) {
                await setDoc(doc(db, 'cases', caseItem.id), caseItem);
                setStatus(prev => prev + `  ✓ Added: ${caseItem.title}\n`);
            }

            // Seed rules
            setStatus(prev => prev + '\n📋 Adding rules...\n');
            for (const rule of seedData.ruleSnippets) {
                await setDoc(doc(db, 'rule_snippets', rule.id), rule);
                setStatus(prev => prev + `  ✓ Added: ${rule.title}\n`);
            }

            setStatus(prev => prev + '\n✅ Database seeding completed!\n\nYou can now go to /curriculum');
        } catch (error: any) {
            setStatus(prev => prev + `\n❌ Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Database Seeding</h1>
            <p style={{ marginBottom: '2rem' }}>Click the button below to populate your Firestore database with initial content.</p>

            <button
                onClick={seedDatabase}
                disabled={loading}
                className="btn btn-primary"
                style={{ marginBottom: '2rem' }}
            >
                {loading ? 'Seeding...' : 'Seed Database'}
            </button>

            {status && (
                <pre style={{
                    background: '#f5f5f5',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'monospace',
                    fontSize: '14px'
                }}>
                    {status}
                </pre>
            )}
        </div>
    );
}
