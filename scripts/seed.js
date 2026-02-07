const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc } = require('firebase/firestore');

// Firebase config from .env.local
const firebaseConfig = {
    apiKey: "AIzaSyD1V3-d9wJpByBECpw2xOOeX9b3BPqm-rA",
    authDomain: "ftc-mentor-academy.firebaseapp.com",
    projectId: "ftc-mentor-academy",
    storageBucket: "ftc-mentor-academy.firebasestorage.app",
    messagingSenderId: "153980121348",
    appId: "1:153980121348:web:22a9150d1bbd840fac2051"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Seed data
const modules = [
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
];

const lessons = [
    {
        id: "lesson-1-1",
        moduleId: "module-1",
        title: "What is a Mentor's Role?",
        order: 1,
        content: `# What is a Mentor's Role?

## The Core Principle

In FIRST Tech Challenge, **students own their robot**. This isn't just a nice idea — it's a fundamental rule.

Your role as a mentor is to:

✓ **Guide** students to find their own solutions
✓ **Teach** concepts and principles
✓ **Ask** guiding questions
✓ **Ensure** safety during building and testing
✓ **Provide** resources and references

## What You Must NOT Do

✗ Build mechanisms for students
✗ Write code for the team
✗ Make design decisions
✗ Fix problems without student involvement
✗ Take over during competitions

## Why This Matters

When mentors do the work:
- Students lose learning opportunities
- Teams compete on adult skill, not student growth
- The integrity of FTC is compromised
- Your team risks disqualification

## The Boundary

The line between helping and doing can be unclear. Throughout this curriculum, you'll learn to recognize that boundary and stay on the right side of it.

**Remember**: Your job is to make students better problem-solvers, not to solve problems for them.`,
        hasQuiz: true
    },
    {
        id: "lesson-1-2",
        moduleId: "module-1",
        title: "Student Ownership Explained",
        order: 2,
        content: `# Student Ownership Explained

## What Student Ownership Means

Student ownership means that **every aspect of the robot** — from design to build to code — should come from student thinking and student hands.

## Levels of Mentor Involvement

### ✓ Allowed: Teaching and Guiding

- Explaining how motors work
- Showing reference designs from other teams
- Asking "What if you tried...?"
- Reviewing code and pointing out issues
- Teaching safety protocols

### ⚠️ Caution Zone: Depends on Context

- Demonstrating a technique (okay if students then do it)
- Suggesting specific solutions (okay if students evaluate and choose)
- Helping debug (okay if students drive the process)

### ✗ Not Allowed: Doing the Work

- Soldering connections yourself
- Writing functions for students
- Making final design choices
- Building subsystems without student direction
- Taking over during matches

## The Test Question

When uncertain, ask yourself:

**"Could a judge ask a student to explain or demonstrate this, and would the student be able to?"**

If the answer is no, then you've probably crossed the line.

## Real Consequences

Violations of student ownership can result in:
- Team disqualification
- Loss of awards
- Unfair competition
- Students missing out on learning

Protect your students. Protect the integrity of FTC.`,
        hasQuiz: true
    },
    {
        id: "lesson-1-3",
        moduleId: "module-1",
        title: "Gracious Professionalism in Mentorship",
        order: 3,
        content: `# Gracious Professionalism in Mentorship

## What It Means

Gracious Professionalism® is a core FIRST value. For mentors, it means:

- Respecting student autonomy
- Supporting competitors, not just your team
- Admitting when you don't know something
- Modeling ethical behavior

## How to Practice It

✓ Encourage your students to help other teams
✓ Share knowledge without doing the work
✓ Celebrate successes of all teams
✓ Accept losses with dignity

Your behavior sets the tone for your entire team.`,
        hasQuiz: false
    },
    {
        id: "lesson-2-1",
        moduleId: "module-2",
        title: "The Soldering Scenario",
        order: 1,
        content: `# The Soldering Scenario

## The Situation

It's the night before competition. Students are struggling to solder motor connections. The joints keep breaking. Time is running out.

## What Mentors Often Do (Wrong)

"Let me do it. We need this done before tomorrow."

## Why This is a Violation

Soldering is a fundamental build skill. When you do it:
- Students can't explain how connections were made
- You've built part of the robot
- The team may not be able to fix issues at competition

## The Right Approach

1. **Demonstrate** proper soldering technique on a practice board
2. **Watch** as students practice
3. **Guide** them through the actual connections
4. Let students do the work, even if it's not perfect

## What If There's No Time?

This is where it gets hard. If the robot won't be ready:

✓ Students learn time management
✓ Students learn consequences
✓ They'll plan better next time

✗ You doing the work teaches them to rely on adults
✗ You risk rule violations

**The deadline pressure is part of the learning experience.**

## The Principle

You can teach the skill. You cannot do the task.`,
        hasQuiz: true
    }
];

const cases = [
    {
        id: "case-1",
        title: "The Soldering Dilemma",
        scenario: "Your team is struggling with soldering connections. The robot needs to be ready for competition tomorrow. Students have been trying for an hour and keep making cold joints.",
        difficulty: "Beginner",
        choices: JSON.stringify([
            {
                text: "Take over and solder all the connections yourself",
                verdict: "Not Allowed",
                explanation: "This violates student ownership. You are doing the work for them.",
                consequence: "Students can't explain the connections to judges. Team risks disqualification."
            },
            {
                text: "Demonstrate on a practice board, then guide each student through their own connections",
                verdict: "Allowed",
                explanation: "You're teaching the skill, and students are doing the actual work with guidance.",
                consequence: "Students learn and can explain their work. Robot may not be perfect, but it's theirs."
            },
            {
                text: "Find a YouTube tutorial and tell them to figure it out",
                verdict: "Depends",
                explanation: "Providing resources is good, but abandoning struggling students isn't mentorship.",
                consequence: "Students may feel unsupported. Consider watching the tutorial together and practicing."
            }
        ]),
        ruleReferences: JSON.stringify(["Student-Centered", "Gracious Professionalism"])
    },
    {
        id: "case-2",
        title: "Code Crisis",
        scenario: "Students wrote code that won't compile. They're frustrated and asking you to fix it. Competition is in 3 days.",
        difficulty: "Intermediate",
        choices: JSON.stringify([
            {
                text: "Fix the code yourself while explaining what you're doing",
                verdict: "Not Allowed",
                explanation: "Even with explanation, you're doing the work. Students aren't learning by watching.",
                consequence: "Students can't debug future issues. They won't understand the code they're running."
            },
            {
                text: "Help them read error messages and guide them to find the bugs",
                verdict: "Allowed",
                explanation: "You're teaching debugging skills. Students are finding and fixing their own issues.",
                consequence: "Students develop critical debugging skills. They own their solution."
            },
            {
                text: "Rewrite the entire codebase with 'better' structure",
                verdict: "Not Allowed",
                explanation: "This completely replaces student work with your work.",
                consequence: "Severe violation. Robot is now built on adult code, not student code."
            }
        ]),
        ruleReferences: JSON.stringify(["Student-Centered"])
    }
];

const ruleSnippets = [
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
    },
    {
        id: "rule-3",
        title: "Mentor Role",
        content: "Adult mentors may guide and teach, but the work must be done by students.",
        source: "FTC Game Manual Part 1"
    }
];

async function seedDatabase() {
    console.log('🌱 Starting database seeding...\n');

    try {
        // Seed modules
        console.log('📚 Adding modules...');
        for (const module of modules) {
            await setDoc(doc(db, 'modules', module.id), module);
            console.log(`  ✓ Added module: ${module.title}`);
        }

        // Seed lessons
        console.log('\n📖 Adding lessons...');
        for (const lesson of lessons) {
            await setDoc(doc(db, 'lessons', lesson.id), lesson);
            console.log(`  ✓ Added lesson: ${lesson.title}`);
        }

        // Seed cases
        console.log('\n⚖️  Adding case studies...');
        for (const caseStudy of cases) {
            await setDoc(doc(db, 'cases', caseStudy.id), caseStudy);
            console.log(`  ✓ Added case: ${caseStudy.title}`);
        }

        // Seed rules
        console.log('\n📋 Adding rule snippets...');
        for (const rule of ruleSnippets) {
            await setDoc(doc(db, 'rule_snippets', rule.id), rule);
            console.log(`  ✓ Added rule: ${rule.title}`);
        }

        console.log('\n✅ Database seeding completed successfully!');
        console.log('\nYou can now run: npm run dev');
        process.exit(0);
    } catch (error) {
        console.error('\n❌ Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
