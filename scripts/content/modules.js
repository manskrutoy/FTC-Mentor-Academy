// MODULES & TRACKS
// 5 tracks covering all aspects of FTC mentorship

const modules = [
    // === TRACK A: FTC BASICS ===
    {
        id: "module-ftc-basics",
        title: "Track A: Understanding FTC",
        description: "Learn what FIRST Tech Challenge is, how the season works, and what makes FTC unique as an educational robotics competition.",
        order: 1,
        lessonCount: 4,
        track: "A"
    },

    // === TRACK B: MENTOR ROLE & BOUNDARIES (CORE) ===
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
    },
    {
        id: "module-boundaries-3",
        title: "Track B3: The Line Between Help and Harm",
        description: "Learn to recognize when you're helping vs when you're doing the work. Master the art of guiding without controlling.",
        order: 4,
        lessonCount: 5,
        requiredFor: "certification",
        track: "B"
    },

    // === TRACK C: MENTORSHIP IN PRACTICE ===
    {
        id: "module-practice-1",
        title: "Track C1: Communication & Motivation",
        description: "Develop skills for effective communication with students, managing team dynamics, and keeping students motivated through challenges.",
        order: 5,
        lessonCount: 4,
        track: "C"
    },
    {
        id: "module-practice-2",
        title: "Track C2: Teaching Technical Skills",
        description: "Learn how to teach programming, CAD, building, and electrical skills without doing the work for students.",
        order: 6,
        lessonCount: 5,
        track: "C"
    },

    // === TRACK D: COMPETITIONS & JUDGING ===
    {
        id: "module-comp-1",
        title: "Track D1: Competition Day Preparation",
        description: "Prepare your team for competition day: inspection, pit setup, match strategy, and maintaining student ownership under pressure.",
        order: 7,
        lessonCount: 4,
        track: "D"
    },
    {
        id: "module-comp-2",
        title: "Track D2: Judging & Awards",
        description: "Understand the judging process, help students prepare for interviews, and learn proper mentor conduct during judging.",
        order: 8,
        lessonCount: 4,
        requiredFor: "certification",
        track: "D"
    },

    // === TRACK E: ETHICS & RULES ===
    {
        id: "module-ethics-1",
        title: "Track E1: Gracious Professionalism",
        description: "Master the core FIRST value of Gracious Professionalism and how mentors model this behavior for students.",
        order: 9,
        lessonCount: 3,
        requiredFor: "certification",
        track: "E"
    },
    {
        id: "module-ethics-2",
        title: "Track E2: Common Violations & Safe Alternatives",
        description: "Learn about the most common mentor boundary violations and discover safe alternatives that preserve student learning.",
        order: 10,
        lessonCount: 5,
        requiredFor: "certification",
        track: "E"
    }
];

console.log(`✅ Created ${modules.length} modules across 5 tracks`);

export { modules };
