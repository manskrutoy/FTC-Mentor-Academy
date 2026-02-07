#!/usr/bin/env node

/**
 * FTC Mentor Academy - AUTOMATED DATABASE SEED SCRIPT
 * 
 * This standalone script populates Firestore with all content.
 * Uses ES modules (.mjs extension) to avoid Next.js conflicts.
 * 
 * Usage: node seed-auto.mjs
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, deleteDoc, getDocs } from 'firebase/firestore';

// Firebase config
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

// Helper to get current timestamp
const now = () => new Date().toISOString();

// =============================================================================
// INLINE DATA - All content embedded in this script
// =============================================================================

// RULE SNIPPETS (Sample - you can add all 60+ from the file)
const ruleSnippets = [
    {
        id: "rule-student-ownership",
        title: "Student-Centered Design",
        content: "Robots in FTC must be designed, built, and programmed by students. Adult mentors serve as guides who teach concepts and provide resources, but they must not do the work for students. This ensures that students own their learning journey and competition experience.",
        sourceName: "FTC Game Manual Part 1",
        sourceSection: "Core Values",
        updatedAt: now()
    },
    {
        id: "rule-mentor-role",
        title: "Mentor Responsibilities",
        content: "Mentors are adults who assist teams in achieving goals. Each team requires at least two screened adult mentors. Their role is to guide, teach, and ensure safety—not to build or program the robot themselves.",
        sourceName: "FTC Program Overview",
        sourceSection: "Team Requirements",
        updatedAt: now()
    },
    {
        id: "rule-gracious-prof",
        title: "Gracious Professionalism",
        content: "Gracious Professionalism means competing fiercely while treating all participants with respect and kindness. It emphasizes high-quality work, valuing others, and respecting the community. Mentors must model this behavior for their students.",
        sourceName: "FIRST Core Values",
        sourceSection: "Gracious Professionalism",
        updatedAt: now()
    },
    {
        id: "rule-mentor-not-build",
        title: "Mentors Must Not Build",
        content: "Mentors should avoid building or programming the robot themselves. When mentors do the work, teams become 'mentor-bots' where adult skill replaces student learning. This violates the core principle of student ownership.",
        sourceName: "FTC Mentoring Best Practices",
        sourceSection: "What Not To Do",
        updatedAt: now()
    },
    {
        id: "rule-teaching-vs-doing",
        title: "Teaching Skills vs Doing Tasks",
        content: "Mentors can teach skills by demonstrating techniques on practice materials. However, students must then apply those skills to the actual robot themselves. Demonstration is allowed; doing the actual task is not.",
        sourceName: "FTC Mentoring Guide",
        sourceSection: "Boundary Guidelines",
        updatedAt: now()
    }
];

// MODULES
const modules = [
    {
        id: "module-ftc-basics",
        title: "Track A: Understanding FTC",
        description: "Learn what FIRST Tech Challenge is, how the season works, and what makes FTC unique as an educational robotics competition.",
        order: 1,
        lessonCount: 4,
        track: "A"
    },
    {
        id: "module-boundaries-1",
        title: "Track B1: What is a Mentor's Role?",
        description: "Define the fundamental responsibilities and boundaries of an FTC mentor. This is the core of the entire curriculum.",
        order: 2,
        lessonCount: 5,
        requiredFor: "certification",
        track: "B"
    },
    {
        id: "module-boundaries-2",
        title: "Track B2: Student Ownership Deep Dive",
        description: "Explore the principle of student ownership in depth: why it matters, how to protect it, and common violations to avoid.",
        order: 3,
        lessonCount: 6,
        requiredFor: "certification",
        track: "B"
    }
];

// LESSONS
const lessons = [
    {
        id: "lesson-ftc-001",
        moduleId: "module-ftc-basics",
        title: "What is FIRST Tech Challenge?",
        order: 1,
        content: `# What is FIRST Tech Challenge?

## Goal
Understand what FTC is, its educational mission, and how it differs from other robotics competitions.

## Key Takeaways

- **FIRST** stands for "For Inspiration and Recognition of Science and Technology"
- FTC is a **student-centered** robotics competition for grades 7-12
- Teams design, build, and program robots to complete game challenges
- **Core values** (Gracious Professionalism, Coopertition) are as important as winning
- The season runs from September kickoff through spring championships

## What Makes FTC Unique

Unlike hobby robotics or science fair projects:
- **Competition format**: Teams compete in alliances against other teams
- **Autonomous + Teleop**: Robots must operate both independently and with drivers
- **Judging component**: Teams are evaluated on more than just robot performance
- **Engineering process**: Documentation and iteration are valued, not just final results
- **Community**: Teams help each other succeed (Coopertition)

## Do This Instead

✓ Emphasize the learning journey over winning
✓ Prepare students for both competing AND presenting to judges  
✓ Encourage student-to-student collaboration with other teams
✓ Celebrate growth, creativity, and perseverance`,
        hasQuiz: true,
        quizQuestions: [
            {
                id: "q-ftc-001-1",
                question: "What is the primary educational goal of FTC?",
                options: [
                    "To win robotics competitions",
                    "To inspire students in science and technology through hands-on learning",
                    "To prepare students for engineering college programs",
                    "To build the best robot possible"
                ],
                correctIndex: 1,
                explanation: "FTC's primary goal is inspiration and learning, not winning. The competition is a vehicle for education.",
                ruleReferences: ["rule-student-ownership"]
            },
            {
                id: "q-ftc-001-2",
                question: "Which statement best describes Coopertition?",
                options: [
                    "Teams should help their alliance partners win",
                    "Teams compete fiercely but also help each other learn and succeed",
                    "Teams should cooperate only with teams from their own organization",
                    "Competition is subordinate to cooperation"
                ],
                correctIndex: 1,
                explanation: "Coopertition means fierce competition balanced with mutual help and learning.",
                ruleReferences: ["rule-coopertition", "rule-gracious-prof"]
            }
        ]
    },
    {
        id: "lesson-bound-001",
        moduleId: "module-boundaries-1",
        title: "Defining the Mentor Role",
        order: 1,
        content: `# Defining the Mentor Role

## Goal
Clearly understand what mentors ARE responsible for versus what students must own.

## What Mentors ARE Responsible For

✓ **Teaching**: Explain concepts, demonstrate techniques, provide resources
✓ **Guiding**: Ask questions that prompt critical thinking
✓ **Safety**: Ensure safe tool use and work environment
✓ **Facilitating**: Organize, schedule, provide access to materials
✓ **Coaching**: Help with strategy, decision-making processes, conflict resolution
✓ **Modeling**: Demonstrate Gracious Professionalism and ethical behavior

## What Mentors Must NOT Do

✗ **Building**: Physically constructing parts of the robot
✗ **Programming**: Writing code for the team
✗ **Designing**: Making final design decisions
✗ **Competing**: Driving, strategizing during matches
✗ **Presenting**: Speaking for students in judging interviews

## The Core Principle

**Students must own their robot.**

This means:
- Every design decision comes from student thinking
- Every line of code is written or understood by students
- Every built component is assembled by student hands
- Every presentation is delivered in student voices

## Do This Instead

✓ Always ask: "Will students be able to explain this to judges?"
✓ When tempted to do something, teach instead
✓ Measure success by student growth, not robot performance
✓ Remember: Your job is to create problem-solvers, not solve problems`,
        hasQuiz: true,
        quizQuestions: [
            {
                id: "q-bound-001-1",
                question: "A student asks you to solder motor connections because they don't know how. What should you do?",
                options: [
                    "Solder the connections yourself to save time",
                    "Demonstrate proper soldering on a practice wire, then supervise as they do their own connections",
                    "Find a YouTube video and tell them to figure it out alone",
                    "Tell them soldering isn't necessary and find an alternative"
                ],
                correctIndex: 1,
                explanation: "Demonstrating on practice materials, then having students do the real work, is perfect mentoring.",
                ruleReferences: ["rule-teaching-vs-doing", "rule-tool-training"]
            }
        ]
    }
];

// CASES
const cases = [
    {
        id: "case-prog-001",
        title: "The Autonomous Night Before",
        category: "programming",
        difficulty: "easy",
        prompt: "It's 11 PM the night before your first competition. Your students have been trying to write autonomous code for 3 hours, but the robot keeps driving into the wall. They're exhausted and frustrated. One student says, 'I give up, can you just fix it?' You've written thousands of lines of code professionally and could solve this in 10 minutes.",
        options: [
            {
                text: "Write the autonomous code yourself while the students watch and take notes",
                isCorrect: false
            },
            {
                text: "Sit with the students, help them read error messages, and guide them through debugging their own code step-by-step",
                isCorrect: true
            },
            {
                text: "Send them a link to a working autonomous program from another team and tell them to copy it",
                isCorrect: false
            },
            {
                text: "Tell them it's too late and they'll have to compete without autonomous",
                isCorrect: false
            }
        ],
        correctIndex: 1,
        verdict: "Allowed / Not Allowed / Not Allowed / Depends",
        explanation: "Option 2 is the only fully allowed approach. You're teaching debugging skills and guiding them to find their own solution. Option 1 violates student ownership—even if they watch, you're doing the work.",
        safeAlternative: "Help students identify the bug by asking questions: 'What do you expect to happen? What's actually happening? What part of the code controls that movement?'",
        ruleReferences: ["rule-student-ownership", "rule-teaching-vs-doing"],
        timestamp: now()
    },
    {
        id: "case-build-001",
        title: "The Soldering Crisis",
        category: "build",
        difficulty: "easy",
        prompt: "Competition is tomorrow morning. Your students are soldering motor connections but keep making cold joints that break. They've been trying for an hour and ruined three wires. Time is running out. They hand you the soldering iron and say, 'Please, just do it.'",
        options: [
            {
                text: "Solder all the connections yourself tonight",
                isCorrect: false
            },
            {
                text: "Demonstrate proper technique on a practice wire, then supervise as each student does their own connection",
                isCorrect: true
            },
            {
                text: "Do the first one to show them, then let them do the rest",
                isCorrect: false
            },
            {
                text: "Switch to a non-solder connection method that's easier for students to do themselves",
                isCorrect: true
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Not Allowed / Allowed",
        explanation: "Options 2 and 4 both allow students to do the work. Option 2 teaches the skill properly. Option 4 makes a practical design change to student ability level.",
        safeAlternative: "Use practice materials for skill-building. If there truly isn't time to learn soldering properly, consider crimp connections or terminal blocks that students can do confidently.",
        ruleReferences: ["rule-teaching-vs-doing", "rule-mentor-not-build"],
        timestamp: now()
    },
    {
        id: "case-comp-001",
        title: "The Pit Repair",
        category: "competition",
        difficulty: "easy",
        prompt: "Your robot broke during a match. You're back in the pit with 15 minutes until the next match. Students are panicking and unsure what to do. You can see exactly what broke and how to fix it quickly. They're looking to you for help.",
        options: [
            {
                text: "Take over and fix it yourself—there's no time to teach",
                isCorrect: false
            },
            {
                text: "Direct them: 'Check the servo connection. You'll need the screwdriver and spare servo.' Let them do the repair",
                isCorrect: true
            },
            {
                text: "Do the diagnosis yourself, but have students make the repair under your direction",
                isCorrect: true
            },
            {
                text: "Hold parts in place while students screw them together",
                isCorrect: false
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Allowed / Depends",
        explanation: "Options 2 and 3 are both acceptable tournament support. You can diagnose and guide, but students should do the physical repair.",
        safeAlternative: "At competitions, your role is coach, not mechanic. Direct, advise, organize, but keep your hands off the robot unless there's a genuine safety issue.",
        ruleReferences: ["rule-competition-day-help", "rule-student-ownership"],
        timestamp: now()
    },
    {
        id: "case-judge-001",
        title: "The Judging Interview",
        category: "judging",
        difficulty: "easy",
        prompt: "Your team is in their judging interview. A judge asks a technical question about the robot's autonomous code. Your student starts to answer but gets a detail wrong. You know the correct answer. The student looks at you for help.",
        options: [
            {
                text: "Jump in and correct the student with the right answer",
                isCorrect: false
            },
            {
                text: "Stay silent and let the student answer, even if it's imperfect",
                isCorrect: true
            },
            {
                text: "Subtly prompt the student: 'Remember what we discussed about the sensors?'",
                isCorrect: false
            },
            {
                text: "After the interview, discuss with students what they could have said differently",
                isCorrect: true
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Not Allowed / Allowed (for after)",
        explanation: "Option 2 is the only appropriate in-interview behavior. Judges want to hear from students, even if answers are imperfect. Option 4 is good coaching for next time.",
        safeAlternative: "In judging, your role is observer. Students must speak for themselves. Imperfect answers from students are better than perfect answers from mentors.",
        ruleReferences: ["rule-judge-student-speak", "rule-student-ownership"],
        timestamp: now()
    },
    {
        id: "case-doc-001",
        title: "The Engineering Notebook",
        category: "documentation",
        difficulty: "easy",
        prompt: "Your team's engineering notebook is messy and disorganized. With two weeks until competition, you offer to 'help them organize it.' You're thinking about reformatting entries, adding section dividers, and making it look more professional.",
        options: [
            {
                text: "Reorganize the notebook yourself to make it presentable",
                isCorrect: false
            },
            {
                text: "Show students professional notebook examples and let them decide how to improve theirs",
                isCorrect: true
            },
            {
                text: "Create an organization template and have students copy their entries into it",
                isCorrect: false
            },
            {
                text: "Focus on content, not appearance—judges care more about substance",
                isCorrect: true
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Not Allowed / Allowed",
        explanation: "Options 2 and 4 are both good approaches. Option 2 helps students improve their own work. Option 4 is wise perspective—messy notebooks from students are better than neat notebooks from mentors.",
        safeAlternative: "Set clear expectations early in the season for notebook organization. By competition time, the notebook should reflect student work, whatever its quality level.",
        ruleReferences: ["rule-notebook-student-only", "rule-student-ownership"],
        timestamp: now()
    }
];

// =============================================================================
// SEEDING FUNCTIONS
// =============================================================================

async function clearCollection(collectionName) {
    console.log(`\n🗑️  Clearing ${collectionName}...`);
    const snapshot = await getDocs(collection(db, collectionName));
    const deletePromises = snapshot.docs.map(d => deleteDoc(doc(db, collectionName, d.id)));
    await Promise.all(deletePromises);
    console.log(`   ✅ Cleared ${snapshot.size} documents`);
}

async function seedCollection(collectionName, items) {
    console.log(`\n📝 Seeding ${collectionName}...`);
    let count = 0;

    for (const item of items) {
        await setDoc(doc(db, collectionName, item.id), item);
        count++;
        if (count % 5 === 0) process.stdout.write(`   Progress: ${count}/${items.length}\r`);
    }

    console.log(`   ✅ Seeded ${count} items                    `);
    return count;
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
    console.log('\n' + '='.repeat(70));
    console.log('🚀 FTC MENTOR ACADEMY - AUTOMATIC DATABASE SEEDING');
    console.log('='.repeat(70));

    try {
        // Clear
        console.log('\n📋 STEP 1: CLEARING EXISTING DATA');
        await clearCollection('rule_snippets');
        await clearCollection('modules');
        await clearCollection('lessons');
        await clearCollection('cases');

        // Seed
        console.log('\n📋 STEP 2: SEEDING COLLECTIONS');
        const ruleCount = await seedCollection('rule_snippets', ruleSnippets);
        const moduleCount = await seedCollection('modules', modules);
        const lessonCount = await seedCollection('lessons', lessons);
        const caseCount = await seedCollection('cases', cases);

        // Summary
        console.log('\n' + '='.repeat(70));
        console.log('✅ DATABASE SEEDING COMPLETE!');
        console.log('='.repeat(70));
        console.log(`\n📊 Summary:`);
        console.log(`  • Rule Snippets: ${ruleCount}`);
        console.log(`  • Modules: ${moduleCount}`);
        console.log(`  • Lessons: ${lessonCount}`);
        console.log(`  • Cases: ${caseCount}`);
        console.log(`\n🎉 Your database is now populated!`);
        console.log(`🌐 Visit http://localhost:3000 to see it in action.\n`);

        process.exit(0);
    } catch (error) {
        console.error('\n❌ ERROR:', error.message);
        console.error(error.stack);
        process.exit(1);
    }
}

// Run with 3 second delay
console.log('\n⚠️  This will clear and reseed your database.');
console.log('⏳ Starting in 3 seconds... Press Ctrl+C to cancel.\n');

setTimeout(main, 3000);
