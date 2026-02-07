import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { CURRICULUM_MODULES } from './curriculum-data.js';


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

async function seedCurriculum() {
    console.log('🚀 Starting curriculum seed...\n');

    try {
        // Seed modules
        for (const module of CURRICULUM_MODULES) {
            const { lessons, ...moduleData } = module;

            console.log(`📚 Adding module: ${module.title}`);
            await setDoc(doc(db, 'modules', module.id), moduleData);

            // Seed lessons for this module
            for (const lesson of lessons) {
                console.log(`  📖 Adding lesson: ${lesson.title}`);
                await setDoc(doc(db, 'lessons', lesson.id), {
                    ...lesson,
                    moduleId: module.id
                });
            }
        }

        console.log('\n✅ Curriculum seeding completed successfully!');
        console.log(`\n📊 Summary:`);
        console.log(`   - ${CURRICULUM_MODULES.length} modules created`);
        console.log(`   - ${CURRICULUM_MODULES.reduce((sum, m) => sum + m.lessons.length, 0)} lessons created`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding curriculum:', error);
        process.exit(1);
    }
}

seedCurriculum();
