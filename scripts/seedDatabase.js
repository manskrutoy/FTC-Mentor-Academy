#!/usr/bin/env node

/**
 * FTC Mentor Academy - MASTER DATABASE SEED SCRIPT
 * 
 * This script populates the Firestore database with comprehensive curriculum content:
 * - 60+ Rule Snippets
 * - 50-80 Realistic Case Scenarios
 * - 10 Modules across 5 Tracks
 * - 20-35 Detailed Lessons
 * - 120-200 Quiz Questions
 * 
 * Usage: node scripts/seedDatabase.js
 */

import { ruleSnippets, db } from './content/ruleSnippets.js';
import { cases } from './content/cases.js';
import { modules } from './content/modules.js';
import { lessons } from './content/lessons.js';
import { quizzes } from './content/quizzes.js';

import { collection, doc, setDoc, deleteDoc, getDocs } from 'firebase/firestore';

// ===========================================================================
// HELPER FUNCTIONS
// ===========================================================================

async function clearCollection(collectionName) {
    console.log(`\n🗑️  Clearing ${collectionName} collection...`);
    const querySnapshot = await getDocs(collection(db, collectionName));
    const deletePromises = querySnapshot.docs.map(docSnapshot =>
        deleteDoc(doc(db, collectionName, docSnapshot.id))
    );
    await Promise.all(deletePromises);
    console.log(`✅ Cleared ${querySnapshot.size} documents from ${collectionName}`);
}

async function seedCollection(collectionName, items) {
    console.log(`\n📝 Seeding ${collectionName} collection with ${items.length} items...`);
    let count = 0;

    for (const item of items) {
        await setDoc(doc(db, collectionName, item.id), item);
        count++;
        if (count % 10 === 0) {
            console.log(`  Progress: ${count}/${items.length}`);
        }
    }

    console.log(`✅ Seeded ${count} items to ${collectionName}`);
    return count;
}

// ===========================================================================
// MAIN SEED FUNCTION
// ===========================================================================

async function seedDatabase() {
    console.log('\n' + '='.repeat(70));
    console.log('🚀 FTC MENTOR ACADEMY - DATABASE SEEDING');
    console.log('='.repeat(70));

    try {
        // Step 1: Clear existing data
        console.log('\n📋 STEP 1: CLEARING EXISTING DATA');
        console.log('-'.repeat(70));
        await clearCollection('rule_snippets');
        await clearCollection('cases');
        await clearCollection('modules');
        await clearCollection('lessons');

        // Step 2: Seed Rule Snippets
        console.log('\n📋 STEP 2: SEEDING RULE SNIPPETS');
        console.log('-'.repeat(70));
        const ruleCount = await seedCollection('rule_snippets', ruleSnippets);

        // Step 3: Seed Cases
        console.log('\n📋 STEP 3: SEEDING SCENARIO CASES');
        console.log('-'.repeat(70));
        const caseCount = await seedCollection('cases', cases);

        // Step 4: Seed Modules
        console.log('\n📋 STEP 4: SEEDING MODULES');
        console.log('-'.repeat(70));
        const moduleCount = await seedCollection('modules', modules);

        // Step 5: Seed Lessons
        console.log('\n📋 STEP 5: SEEDING LESSONS');
        console.log('-'.repeat(70));
        const lessonCount = await seedCollection('lessons', lessons);

        // Step 6: Seed Quiz Questions (embedded in lessons collection)
        console.log('\n📋 STEP 6: ADDING QUIZ QUESTIONS TO LESSONS');
        console.log('-'.repeat(70));
        let quizQuestionCount = 0;

        for (const quiz of quizzes) {
            const lessonRef = doc(db, 'lessons', quiz.lessonId);
            await setDoc(lessonRef, {
                quizQuestions: quiz.questions
            }, { merge: true });

            quizQuestionCount += quiz.questions.length;
            console.log(`  Added ${quiz.questions.length} questions to ${quiz.lessonId}`);
        }

        console.log(`✅ Added ${quizQuestionCount} total quiz questions`);

        // Final Summary
        console.log('\n' + '='.repeat(70));
        console.log('✅ DATABASE SEEDING COMPLETE');
        console.log('='.repeat(70));
        console.log('\n📊 SUMMARY:');
        console.log(`  • Rule Snippets: ${ruleCount}`);
        console.log(`  • Scenario Cases: ${caseCount}`);
        console.log(`  • Modules: ${moduleCount}`);
        console.log(`  • Lessons: ${lessonCount}`);
        console.log(`  • Quiz Questions: ${quizQuestionCount}`);
        console.log('\n🎉 Your FTC Mentor Academy database is now fully populated!');
        console.log('🚀 Run `npm run dev` to start the application.\n');

        process.exit(0);

    } catch (error) {
        console.error('\n❌ ERROR SEEDING DATABASE:', error);
        console.error(error.stack);
        process.exit(1);
    }
}

// ===========================================================================
// RUN SCRIPT
// ===========================================================================

console.log('\n⚠️  WARNING: This will delete all existing data and reseed the database.');
console.log('⏳ Starting in 3 seconds... Press Ctrl+C to cancel.\n');

setTimeout(() => {
    seedDatabase();
}, 3000);
