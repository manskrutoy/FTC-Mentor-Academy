// Continue adding more realistic cases to reach 50-80 total

const moreCases = [
    // LEADERSHIP
    {
        id: "case-lead-001",
        title: "The Team Conflict",
        category: "leadership",
        difficulty: "medium",
        prompt: "Two experienced students on your team are fighting over who should be team captain. The argument is getting personal and affecting team morale. Other students are taking sides. They want you to decide who should be captain.",
        options: [
            {
                text: "Pick the captain yourself based on who you think is better",
                isCorrect: false
            },
            {
                text: "Facilitate a team discussion where students create captain criteria and vote",
                isCorrect: true
            },
            {
                text: "Suggest they be co-captains and share the role",
                isCorrect: true
            },
            {
                text: "Tell them neither can be captain if they can't work together",
                isCorrect: false
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Allowed / Too Harsh",
        explanation: "Options 2 and 3 facilitate student-led solutions. Option 2 teaches democratic processes. Option 3 offers a compromise. Option 1 makes you the decider when students should decide. Option 4 is unnecessarily punitive.",
        safeAlternative: "Guide conflict resolution. Help students define what makes a good leader, establish selection criteria, and make their own decision. The process is as valuable as the outcome.",
        ruleReferences: ["rule-student-leadership", "rule-conflict-resolution", "rule-team-diversity"],
        timestamp: new Date().toISOString()
    },
    {
        id: "case-ethics-001",
        title: "The Missing Parts",
        category: "ethics",
        difficulty: "hard",
        prompt: "After a competition, you notice your team has motors and servos in their bin that don't match your inventory. A student admits they 'borrowed' them from another team's pit when no one was looking, intending to return them later. They forgot, and now you're at a different event two weeks later.",
        options: [
            {
                text: "Quietly mail the parts back without making a big deal",
                isCorrect: false
            },
            {
                text: "Have students contact the other team, apologize, and arrange to return the parts immediately",
                isCorrect: true
            },
            {
                text: "Report the incident to event organizers",
                isCorrect: true
            },
            {
                text: "Use it as a teaching moment but keep it internal to avoid embarrassing the team",
                isCorrect: false
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Allowed (but harsh) / Not Sufficient",
        explanation: "Options 2 and 3 both address the ethics violation properly. Option 2 teaches accountability and requires students to make things right. Option 3 ensures proper reporting but is very serious. Option 1 sweeps it under the rug. Option 4 doesn't full address the harm to the other team.",
        safeAlternative: "This is a serious Gracious Professionalism violation. Students must face consequences, apologize personally, and understand why this behavior violates FTC values. Use it to teach integrity.",
        ruleReferences: ["rule-gracious-prof", "rule-sportsmanship", "rule-student-leadership"],
        timestamp: new Date().toISOString()
    },
    // More cases continue...
    {
        id: "case-prog-004",
        title: "The Teleop Control lag",
        category: "programming",
        difficulty: "medium",
        prompt: "Students are complaining that their teleop driving feels sluggish. You look at the code and immediately see they're reading sensor values in the main loop unnecessarily, causing delays. This is a common beginner mistake.",
        options: [
            {
                text: "Fix the code yourself and show them the result",
                isCorrect: false
            },
            {
                text: "Point out which lines are slow and ask them to research why and how to optimize",
                isCorrect: true
            },
            {
                text: "Give them a link to a tutorial on loop optimization",
                isCorrect: true
            },
            {
                text: "Explain the concept of blocking code and have them fix it",
                isCorrect: true
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Allowed / Allowed",
        explanation: "Options 2, 3, and 4 are all good teaching approaches. They all guide students to find and fix their own bug through research, resources, or understanding concepts. Option 1 does the debugging for them.",
        safeAlternative: "When you spot code issues, point students toward the problem area and let them diagnose and fix it. Teaching them HOW to debug is more valuable than giving them the answer.",
        ruleReferences: ["rule-teaching-vs-doing", "rule-asking-questions", "rule-resource-provision"],
        timestamp: new Date().toISOString()
    },
    {
        id: "case-build-004",
        title: "The Weight Problem",
        category: "build",
        difficulty: "hard",
        prompt: "Your robot is overweight and slow. You know the issue: they built everything from heavy aluminum when lighter materials would work. Redesigning would take weeks. Competition is in 10 days. Students ask what to do.",
        options: [
            {
                text: "Redesign the heavy subsystems yourself to save time",
                isCorrect: false
            },
            {
                text: "Help students prioritize: What MUST be lighter? What can wait until after this competition?",
                isCorrect: true
            },
            {
                text: "Compete with the heavy robot and use it as a learning experience",
                isCorrect: true
            },
            {
                text: "Work together: you redesign one part while students redesign another",
                isCorrect: false
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Allowed / Not Allowed",
        explanation: "Options 2 and 3 are both valid. Option 2 teaches triage—a real engineering skill. Option 3 accepts the consequences and focuses on learning. Option 1 takes over the work. Option 4 divides the work but you're still doing robot design.",
        safeAlternative: "Real engineering involves trade-offs and time constraints. Help students make informed decisions about what's feasible, but let them own the consequences of past design choices.",
        ruleReferences: ["rule-deadline-learning", "rule-design-iterations", "rule-teaching-vs-doing"],
        timestamp: new Date

            ().toISOString()
    },
    {
        id: "case-comp-004",
        title: "The Alliance Partner No-Show",
        category: "competition",
        difficulty: "medium",
        prompt: "Your team's alliance partner's robot is broken and won't be ready for the match. The partner team's mentor asks if your students can quickly help fix their robot. Your students want to help but don't know what to do.",
        options: [
            {
                text: "You go help fix the other team's robot",
                isCorrect: false
            },
            {
                text: "Send your students to help diagnose and guide the other team's students through the fix",
                isCorrect: true
            },
            {
                text: "Politely decline—each team is responsible for their own robot",
                isCorrect: false
            },
            {
                text: "Lend tools or spare parts but let each team fix their own robot",
                isCorrect: true
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Acceptable but not GP / Allowed",
        explanation: "Options 2 and 4 demonstrate Gracious Professionalism and Coopertition. Students helping students is ideal. Option 1 has you doing another team's work. Option 3 is technically fine but misses the GP spirit.",
        safeAlternative: "Encourage student-to-student collaboration. Your students can share knowledge and even hands-on help with other students. This builds community and leadership skills.",
        ruleReferences: ["rule-coopertition", "rule-gracious-prof", "rule-competition-day-help"],
        timestamp: new Date().toISOString()
    },
    {
        id: "case-judge-003",
        title: "The Portfolio Presentation",
        category: "judging",
        difficulty: "medium",
        prompt: "Before the judging interview, you review your team's presentation plan. They're planning to show a PowerPoint and explain their process. But you know from experience that 15 minute interviews don't leave time for elaborate presentations. You want to help them refine their approach.",
        options: [
            {
                text: "Create a better presentation for them",
                isCorrect: false
            },
            {
                text: "Share feedback: 'Judges prefer conversation over slides. Focus on being ready to answer questions'",
                isCorrect: true
            },
            {
                text: "Let them present how they planned—they'll learn from the experience",
                isCorrect: true
            },
            {
                text: "Practice with them using mock interviews",
                isCorrect: true
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Allowed / Allowed",
        explanation: "Options 2, 3, and 4 all respect student ownership while providing support. Option 2 shares wisdom. Option 3 allows learning from experience. Option 4 provides practice. Option 1 takes over their presentation.",
        safeAlternative: "Coach students on judging expectations through practice and feedback, but let them own their presentation style and content. Authentic student presentations beat polished mentor presentations.",
        ruleReferences: ["rule-awards-prep", "rule-judge-student-speak", "rule-interview-time"],
        timestamp: new Date().toISOString()
    },
    {
        id: "case-doc-003",
        title: "The Last-Minute Documentation",
        category: "documentation",
        difficulty: "easy",
        prompt: "The night before competition, students realize they forgot to document their final robot in the engineering notebook. They have photos but haven't written descriptions. They ask if you can write the technical descriptions since you understand the systems well.",
        options: [
            {
                text: "Write the descriptions yourself—you know the systems",
                isCorrect: false
            },
            {
                text: "Stay up with them and guide them to write their own descriptions",
                isCorrect: true
            },
            {
                text: "Let them submit the incomplete notebook—facing consequences teaches time management",
                isCorrect: true
            },
            {
                text: "Help them prioritize what to document in the limited time",
                isCorrect: true
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Allowed (harsh) / Allowed",
        explanation: "Options 2, 3, and 4 maintain student ownership. Option 2 provides support while they do the work. Option 3 enforces natural consequences. Option 4 teaches prioritization. Option 1 violates the student-only notebook rule.",
        safeAlternative: "Poor planning is a learning opportunity. Support students but don't do their documentation. Next season, they'll manage time better.",
        ruleReferences: ["rule-notebook-student-only", "rule-deadline-learning", "rule-time-management"],
        timestamp: new Date().toISOString()
    },
    {
        id: "case-build-005",
        title: "The Dangerous Design",
        category: "build",
        difficulty: "hard",
        prompt: "Students designed a spring-loaded mechanism that you recognize as potentially dangerous. If it fails, the spring could cause injury. They're excited about it and have started building. This is a genuine safety concern.",
        options: [
            {
                text: "Stop the project and redesign it yourself safely",
                isCorrect: false
            },
            {
                text: "Explain the safety risks and have students redesign with safeguards",
                isCorrect: true
            },
            {
                text: "Let them build it but require safety testing protocols",
                isCorrect: true
            },
            {
                text: "Veto the design entirely",
                isCorrect: false
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Allowed / Too Restrictive",
        explanation: "Options 2 and 3 balance safety with student ownership. Option 2 teaches risk mitigation. Option 3 allows the design with safety protocols. Option 1 takes over their work. Option 4 stifles learning without teaching why.",
        safeAlternative: "As a mentor, you have veto power over genuine safety issues. But use this as a teaching moment to help students learn to identify and mitigate risks themselves.",
        ruleReferences: ["rule-safety-responsibility", "rule-teaching-vs-doing", "rule-design-iterations"],
        timestamp: new Date().toISOString()
    },
    {
        id: "case-cad-003",
        title: "The Perfect CAD Model",
        category: "cad",
        difficulty: "medium",
        prompt: "Students CADed their robot but made several errors: wrong measurements, parts that won't fit, unrealistic assembly. You could fix all these issues in the CAD file in about an hour.",
        options: [
            {
                text: "Fix the CAD errors yourself—it's faster than teaching",
                isCorrect: false
            },
            {
                text: "Mark the errors and have students fix each one",
                isCorrect: true
            },
            {
                text: "Let them build from the flawed CAD and learn when parts don't fit",
                isCorrect: true
            },
            {
                text: "Review the model together and ask guiding questions to help them find the errors",
                isCorrect: true
            }
        ],
        correctIndex: 1,
        verdict: "Not Allowed / Allowed / Allowed (tough love) / Allowed",
        explanation: "Options 2, 3, and 4 are all valid teaching approaches. Option 2 identifies problems, students fix them. Option 3 uses real-world consequences. Option 4 guides discovery. Option 1 does their work.",
        safeAlternative: "CAD errors are valuable learning moments. Students learn more from finding and fixing their own mistakes than from having correct models handed to them.",
        ruleReferences: ["rule-teaching-vs-doing", "rule-asking-questions", "rule-design-iterations"],
        timestamp: new Date().toISOString()
    },
    {
        id: "case-ethics-002",
        title: "The Parent-Built Robot",
        category: "ethics",
        difficulty: "hard",
        prompt: "You suspect another team at your competition has a robot largely built by adults. The mechanism is too sophisticated for the students' skill level, and when you ask students about it, they can't explain how it works. You have no proof, just strong suspicion.",
        options: [
            {
                text: "Report your suspicions to judges",
                isCorrect: false
            },
            {
                text: "Focus on your own team—it's not your place to police others",
                isCorrect: true
            },
            {
                text: "Use it as a teaching moment with your students about why YOUR team does it the right way",
                isCorrect: true
            },
            {
                text: "Confront the other team's mentor directly",
                isCorrect: false
            }
        ],
        correctIndex: 1,
        verdict: "Maybe / Allowed / Allowed / Not Allowed",
        explanation: "Options 2 and 3 maintain your focus on what you can control. Option 3 reinforces your values. Option 1 might be justified with evidence but suspicion alone isn't enough. Option 4 is confrontational and not your role.",
        safeAlternative: "Model Gracious Professionalism by focusing on your own team's integrity. If judges suspect mentor-built robots, they will investigate. Your job is to ensure YOUR students own their work.",
        ruleReferences: ["rule-gracious-prof", "rule-student-ownership", "rule-judge-observation"],
        timestamp: new Date().toISOString()
    }
];

const allCases = [...cases, ...moreCases];

console.log(`✅ Total scenario cases created: ${allCases.length}`);

export { allCases as cases };
