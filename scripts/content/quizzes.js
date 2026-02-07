// QUIZ QUESTIONS (120-200 total across all lessons)
// Each quiz tests decision-making, not memorization

const quizzes = [
    // Quiz for lesson-ftc-001
    {
        id: "quiz-ftc-001",
        lessonId: "lesson-ftc-001",
        questions: [
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
                explanation: "FTC's primary goal is inspiration and learning, not winning. The competition is a vehicle for education. While college prep and robot quality are benefits, they're not the primary goal.",
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
                explanation: "Coopertition means fierce competition balanced with mutual help and learning. Teams can compete hard while still sharing knowledge and assisting others. It's not about prioritizing cooperation over competition—it's about both.",
                ruleReferences: ["rule-coopertition", "rule-gracious-prof"]
            },
            {
                id: "q-ftc-001-3",
                question: "A team wins every match but is rude to other teams and disrespectful to judges. What is likely to happen?",
                options: [
                    "They will win the championship because performance is what matters",
                    "They may not advance or win awards due to poor Gracious Professionalism",
                    "Nothing, as long as they don't break game rules",
                    "Judges will overlook behavior if the robot is good"
                ],
                correctIndex: 1,
                explanation: "FTC values Gracious Professionalism as highly as robot performance. Teams with poor conduct may not advance even with winning records. Judges evaluate behavior, and awards like Inspire require both strong performance AND values.",
                ruleReferences: ["rule-gracious-prof", "rule-judge-observation"]
            },
            {
                id: "q-ftc-001-4",
                question: "What happens during the autonomous period of a match?",
                options: [
                    "The robot operates based on pre-programmed instructions without human control",
                    "Drivers control the robot using a gamepad",
                    "Mentors can guide the robot using hand signals",
                    "The robot must remain stationary"
                ],
                correctIndex: 0,
                explanation: "Autonomous means the robot runs on pre-programmed code without any human input during that period. Drivers don't control it, mentors certainly don't guide it, and it doesn't have to stay still—it should complete tasks.",
                ruleReferences: []
            },
            {
                id: "q-ftc-001-5",
                question: "Why does FTC include a judging component in addition to matches?",
                options: [
                    "To give teams that lose matches a chance to win awards",
                    "To evaluate the engineering process, team collaboration, and outreach—not just robot performance",
                    "To make sure students can public speak",
                    "To identify which mentors are most involved"
                ],
                correctIndex: 1,
                explanation: "Judging evaluates the full FTC experience: engineering thinking, teamwork, community impact, and values. It's not a consolation prize—many top awards go to teams that excel in judging. It measures student growth, not just robot success.",
                ruleReferences: ["rule-judge-student-speak", "rule-inspire-criteria"]
            }
        ]
    },

    // Quiz for lesson-ftc-002
    {
        id: "quiz-ftc-002",
        lessonId: "lesson-ftc-002",
        questions: [
            {
                id: "q-ftc-002-1",
                question: "What should teams prioritize during the first few weeks of the season?",
                options: [
                    "Building the robot as quickly as possible",
                    "Strategy, research, and planning before building",
                    "Perfecting their engineering notebook",
                    "Recruiting more team members"
                ],
                correctIndex: 1,
                explanation: "Successful teams invest time in understanding the game, researching solutions, and planning strategy before they start building. Rushing to build without a plan leads to wasted effort and redesigns later.",
                ruleReferences: ["rule-design-iterations"]
            },
            {
                id: "q-ftc-002-2",
                question: "A team's robot performs poorly at their first competition. What should the mentor's perspective be?",
                options: [
                    "This is a failure—the team wasted the first half of the season",
                    "This is a valuable learning experience showing what needs improvement",
                    "The team should give up on major changes and just practice driving",
                    "The mentor should rebuild the robot correctly before the next competition"
                ],
                correctIndex: 1,
                explanation: "First competitions are learning opportunities. Seeing what doesn't work inform improvements. The best teams iterate significantly between competitions. Option 4 violates student ownership, and option 3 gives up on growth.",
                ruleReferences: ["rule-failure-resilience", "rule-design-iterations"]
            },
            {
                id: "q-ftc-002-3",
                question: "When should teams stop making improvements to their robot?",
                options: [
                    "After the first competition",
                    "Two weeks before championships to focus on practice",
                    "Never—teams should iterate throughout the entire season",
                    "Once the robot can score points reliably"
                ],
                correctIndex: 2,
                explanation: "The best teams never stop improving. Continuous iteration based on testing and competition experience is a mark of strong engineering. Teams that stop developing early often fall behind those who keep improving.",
                ruleReferences: ["rule-design-iterations"]
            },
            {
                id: "q-ftc-002-4",
                question: "What is the main purpose of the engineering notebook throughout the season?",
                options: [
                    "To create a polished document for judges before competition",
                    "To continuously document the design process, decisions, and learning throughout the season",
                    "To record match scores and competition results",
                    "To prove the robot was built by students"
                ],
                correctIndex: 1,
                explanation: "The notebook is a real-time record of the eng engineering journey—brainstorming, testing, failures, and iterations. It's not created at the end for judges; it's maintained throughout the season as the team works.",
                ruleReferences: ["rule-notebook-process", "rule-notebook-student-only"]
            },
            {
                id: "q-ftc-002-5",
                question: "How many competitions should a team expect to attend in a typical season?",
                options: [
                    "Just one main competition",
                    "Usually 2-4 qualifier competitions, plus championships if they advance",
                    "As many as they can find to maximize practice",
                    "Only the championship event"
                ],
                correctIndex: 1,
                explanation: "Most teams attend several qualifier competitions during the season, with opportunities to advance to regional and world championships. Multiple competitions allow for iteration and improvement throughout the season.",
                ruleReferences: []
            }
        ]
    },

    // Quiz for lesson-bound-001
    {
        id: "quiz-bound-001",
        lessonId: "lesson-bound-001",
        questions: [
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
                explanation: "Option 2 teaches the skill properly while maintaining student ownership. Demonstrating on practice materials, then having students do the real work, is perfect mentoring. Option 1 violates ownership, option 3 abandons them, option 4 avoids teaching.",
                ruleReferences: ["rule-teaching-vs-doing", "rule-tool-training"]
            },
            {
                id: "q-bound-001-2",
                question: "Students are struggling with autonomous code and ask you to 'just write it for us.' You're an experienced programmer. What's the correct response?",
                options: [
                    "Write the code yourself—they can learn by studying your solution",
                    "Refuse to help at all since they need to write their own code",
                    "Sit with them, help them debug, and guide them to write their own solution",
                    "Write pseudocode and have them convert it to real code"
                ],
                correctIndex: 2,
                explanation: "Option 3 provides appropriate support while students own the code. Option 1 violates student ownership. Option 2 is too hands-off—mentors should guide. Option 4 is borderline—you're still essentially writing the logic for them.",
                ruleReferences: ["rule-student-ownership", "rule-asking-questions", "rule-teaching-vs-doing"]
            },
            {
                id: "q-bound-001-3",
                question: "What's the best test for whether you've crossed the student ownership boundary?",
                options: [
                    "Did the students ask you to do it?",
                    "Could a student explain this work to judges?",
                    "Was it done in front of students so they saw how?",
                    "Did students help with at least part of it?"
                ],
                correctIndex: 1,
                explanation: "The ultimate test: Can students explain it? If they can't, they don't truly own it. Students asking doesn't make it okay (option 1). Watching doesn't equal owning (option 3). Partial help doesn't fix full violations (option 4).",
                ruleReferences: ["rule-judge-explain", "rule-student-ownership"]
            },
            {
                id: "q-bound-001-4",
                question: "Which of these IS an appropriate mentor responsibility?",
                options: [
                    "Deciding which intake mechanism the team should build",
                    "Teaching students how to use CAD software",
                    "Adjusting the robot between matches at competition",
                    "Speaking for students during judging interviews"
                ],
                correctIndex: 1,
                explanation: "Teaching software (option 2) is perfect mentoring. Option 1 is making design decisions for students. Option 3 is doing robot work during competition. Option 4 undermines student presentations.",
                ruleReferences: ["rule-teaching-vs-doing", "rule-competition-day-help", "rule-judge-student-speak"]
            },
            {
                id: "q-bound-001-5",
                question: "A mentor says, 'The students asked me to build this—they gave me permission.' Is this acceptable?",
                options: [
                    "Yes, if students consent, mentors can do their work",
                    "No, student consent doesn't override the ownership principle",
                    "Yes, as long as you explain what you're doing",
                    "It depends on how complex the task is"
                ],
                correctIndex: 1,
                explanation: "Students asking doesn't make it okay. Many students would gladly hand over hard work if allowed. The mentor's job is to uphold the ownership boundary even when students don't want to. Explanation (option 3) doesn't fix it either.",
                ruleReferences: ["rule-student-ownership", "rule-mentor-not-build"]
            }
        ]
    },

    // Quiz for lesson-bound-002
    {
        id: "quiz-bound-002",
        lessonId: "lesson-bound-002",
        questions: [
            {
                id: "q-bound-002-1",
                question: "What is the LEARNING argument for why student ownership matters?",
                options: [
                    "Students learn best by watching experts work",
                    "Students learn by doing, and mentors doing the work denies them practice",
                    "Students need to learn to follow instructions from adults",
                    "Learning happens in classrooms, not robotics competitions"
                ],
                correctIndex: 1,
                explanation: "Real learning comes from hands-on practice, struggle, and problem-solving. When mentors do the work, students miss the learning opportunity. Watching (option 1) is far less effective than doing.",
                ruleReferences: ["rule-student-ownership", "rule-failure-resilience"]
            },
            {
                id: "q-bound-002-2",
                question: "How do mentor-built robots create unfair competition?",
                options: [
                    "They don't—all teams have access to adult help",
                    "Teams with professional engineers have an unfair advantage",
                    "Mentor-built robots are usually better, making competition unbalanced",
                    "Both B and C"
                ],
                correctIndex: 3,
                explanation: "Both B and C are true. When mentors build, competitions measure adult skill, not student skill. Teams with engineer mentors gain unfair advantages. It fundamentally changes what FTC measures.",
                ruleReferences: ["rule-student-ownership", "rule-gracious-prof"]
            },
            {
                id: "q-bound-002-3",
                question: "What typically happens when judges ask students about a mentor-built robot?",
                options: [
                    "Students can usually explain it since they watched it being built",
                    "Students struggle to explain how it works, exposing the violation",
                    "Judges don't ask technical questions, so it doesn't matter",
                    "Students can just say their mentor helped"
                ],
                correctIndex: 1,
                explanation: "Students who didn't do the work can't explain it in depth. Judges are trained to spot this. Watching doesn't create understanding (option 1). Judges DO ask detailed questions (option 3). Admitting mentor help is admitting a violation (option 4).",
                ruleReferences: ["rule-judge-explain", "rule-student-ownership"]
            },
            {
                id: "q-bound-002-4",
                question: "What is the ethical problem with mentor-built robots?",
                options: [
                    "It's dishonest representation of student work",
                    "It disrespects teams that compete fairly",
                    "It teaches students that cheating is acceptable",
                    "All of the above"
                ],
                correctIndex: 3,
                explanation: "All three are true. Mentor-built robots are fundamentally dishonest (A), unfair to others (B), and teach the wrong values to students (C). It's an ethical violation on multiple levels.",
                ruleReferences: ["rule-student-ownership", "rule-gracious-prof"]
            },
            {
                id: "q-bound-002-5",
                question: "Beyond rules and fairness, what is the ultimate reason FTC emphasizes student ownership?",
                options: [
                    "To make competitions more difficult",
                    "To ensure equal competition regardless of mentor expertise",
                    "To develop confident, capable problem-solvers who earn their own achievements",
                    "To reduce mentor involvement and workload"
                ],
                correctIndex: 2,
                explanation: "The ultimate goal is student development—creating confident individuals who can solve problems independently. Fairness (option 2) is important but secondary to growth. It's not about difficulty (option 1) or reducing work (option 4).",
                ruleReferences: ["rule-student-ownership", "rule-failure-resilience"]
            }
        ]
    }

    // Continue with more quizzes for all lessons to reach 120-200 questions
];

console.log(`✅ Created comprehensive quiz library`);
console.log(`Current questions: ${quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0)}`);
console.log("Note: Additional quizzes will be generated in full seed script");

export { quizzes };
