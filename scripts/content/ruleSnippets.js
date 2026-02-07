import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

// ============================================================================
// RULE SNIPPETS (40-70 items)
// Short paraphrases from official FTC sources with metadata
// ============================================================================

const ruleSnippets = [
    // Student Ownership & Mentor Boundaries
    {
        id: "rule-student-ownership",
        title: "Student-Centered Design",
        content: "Robots in FTC must be designed, built, and programmed by students. Adult mentors serve as guides who teach concepts and provide resources, but they must not do the work for students. This ensures that students own their learning journey and competition experience.",
        sourceName: "FTC Game Manual Part 1",
        sourceSection: "Core Values",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-mentor-role",
        title: "Mentor Responsibilities",
        content: "Mentors are adults who assist teams in achieving goals. Each team requires at least two screened adult mentors. Their role is to guide, teach, and ensure safety—not to build or program the robot themselves.",
        sourceName: "FTC Program Overview",
        sourceSection: "Team Requirements",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-gracious-prof",
        title: "Gracious Professionalism",
        content: "Gracious Professionalism means competing fiercely while treating all participants with respect and kindness. It emphasizes high-quality work, valuing others, and respecting the community. Mentors must model this behavior for their students.",
        sourceName: "FIRST Core Values",
        sourceSection: "Gracious Professionalism",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-coopertition",
        title: "Coopertition",
        content: "Coopertition highlights that teams learn from one another and help each other succeed even while competing. Mentors should encourage their teams to share knowledge and assist other teams without violating student ownership principles.",
        sourceName: "FIRST Core Values",
        sourceSection: "Coopertition",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-mentor-not-build",
        title: "Mentors Must Not Build",
        content: "Mentors should avoid building or programming the robot themselves. When mentors do the work, teams become 'mentor-bots' where adult skill replaces student learning. This violates the core principle of student ownership.",
        sourceName: "FTC Mentoring Best Practices",
        sourceSection: "What Not To Do",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-inspection-safety",
        title: "Robot Safety Requirements",
        content: "Robots must have no sharp edges, dangerous protrusions, or loose wiring that could cause entanglement or injury. Inspectors will fail any robot that poses a safety risk to people, the field, or other robots.",
        sourceName: "FTC Game Manual Part 1",
        sourceSection: "Robot Inspection - Safety",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-size-limits",
        title: "Robot Size Constraints",
        content: "Robots must fit within an 18-inch cube at the start of each match. This is verified during inspection. Robots that exceed this size will not pass inspection.",
        sourceName: "FTC Game Manual Part 1",
        sourceSection: "Robot Construction Rules",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-team-numbers",
        title: "Robot Identification",
        content: "Two team number signs must be displayed on the robot on opposite or adjacent sides, readable horizontally, and at least 90 degrees apart. These must be robust and unpowered.",
        sourceName: "FTC Game Manual Part 1",
        sourceSection: "Robot Inspection Checklist",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-motor-limits",
        title: "Motor and Servo Limits",
        content: "Teams are limited to 8 motors and 10 servos on their robot. Using more than the allowed number is a violation that will result in inspection failure.",
        sourceName: "FTC Game Manual Part 1",
        sourceSection: "Electrical Components",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-battery-requirements",
        title: "Battery and Power Rules",
        content: "Robots must use exactly one approved battery pack, securely mounted and properly connected to the main power switch. The power switch must be easily accessible and control all robot power.",
        sourceName: "FTC Game Manual Part 1",
        sourceSection: "Electrical System",
        updatedAt: new Date().toISOString()
    },
    // Engineering Notebook
    {
        id: "rule-notebook-student-only",
        title: "Student-Generated Notebook",
        content: "Engineering notebooks must contain only content written by students during the current season. Content from mentors, AI tools, or previous seasons is not allowed. All sources must be properly cited.",
        sourceName: "FTC Judging Guidelines",
        sourceSection: "Engineering Notebook Requirements",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-notebook-process",
        title: "Document Design Process",
        content: "Notebooks should document the engineering design process, including brainstorming, prototyping, testing, iteration, and lessons learned. Failed designs should be documented as part of the learning journey.",
        sourceName: "FTC Judging Guidelines",
        sourceSection: "Engineering Content",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-notebook-authenticity",
        title: "Notebook Authenticity",
        content: "Teams should use techniques like initializing across taped photos and marking unused space as 'intentionally left blank' to demonstrate authenticity. Mistakes should be struck through, not erased, to show the evolution of ideas.",
        sourceName: "FTC Best Practices",
        sourceSection: "Engineering Notebook Tips",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-notebook-organization",
        title: "Notebook Organization",
        content: "Notebooks should include a table of contents, numbered pages, dates, team information, and clear section markers. Both handwritten and electronic notebooks are equally acceptable if well-organized.",
        sourceName: "FTC Judging Guidelines",
        sourceSection: "Notebook Format",
        updatedAt: new Date().toISOString()
    },
    // Judging & Interviews
    {
        id: "rule-judge-observation",
        title: "Continuous Judge Evaluation",
        content: "Judges observe team behavior throughout the event, including pit interactions, match conduct, and how teams treat others. Gracious Professionalism is evaluated at all times, not just during formal interviews.",
        sourceName: "FTC Judging Guide",
        sourceSection: "Evaluation Process",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-judge-student-speak",
        title: "Students Must Present",
        content: "During judging interviews, students—not mentors—should answer questions and present their robot. Mentors speaking for students undermines the student-centered nature of FTC.",
        sourceName: "FTC Judging Best Practices",
        sourceSection: "Interview Conduct",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-pit-professionalism",
        title: "Pit Etiquette",
        content: "Teams should wait for judges to approach them in the pits rather than actively soliciting attention. When judges visit, teams should be respectful, answer questions professionally, and demonstrate their robot's capabilities truthfully.",
        sourceName: "FTC Competition Guide",
        sourceSection: "Pit Behavior",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-interview-time",
        title: "Interview Time Limits",
        content: "Formal judging interviews typically last 15 minutes. Teams should not expect to use elaborate presentations or canned speeches that exceed this time. Focus on authentic conversation and answering judges' questions.",
        sourceName: "FTC Judging FAQ",
        sourceSection: "interview Format",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-inspire-criteria",
        title: "Inspire Award Standard",
        content: "The Inspire Award is the highest honor, recognizing teams that embody the FTC challenge, act as strong ambassadors for FIRST, and are strong contenders in robot performance, team attributes, and engineering process awards.",
        sourceName: "FTC Awards Guide",
        sourceSection: "Inspire Award",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-compass-mentor",
        title: "Compass Award for Mentors",
        content: "The Compass Award celebrates outstanding mentor guidance. Teams nominate their mentor via a short video highlighting contributions and what makes them exceptional as a guide (not a builder).",
        sourceName: "FTC Awards Guide",
        sourceSection: "Compass Award",
        updatedAt: new Date().toISOString()
    },
    // More rules continuing...
    {
        id: "rule-match-conduct",
        title: "Match Behavior",
        content: "Students should maintain composure during matches, congratulate opponents regardless of outcome, and handle both wins and losses graciously. Unsportsmanlike conduct reflects poorly on the entire team.",
        sourceName: "FTC Competition Rules",
        sourceSection: "Expected Conduct",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-alliance-communication",
        title: "Alliance Partner Interaction",
        content: "Students should introduce themselves to alliance partners before matches and communicate their robot's capabilities truthfully. Good alliance communication is part of Gracious Professionalism.",
        sourceName: "FTC Competition Guide",
        sourceSection: "Alliance Etiquette",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-design-plagiarism",
        title: "Design Originality",
        content: "While teams can be inspired by other robots, directly copying designs without understanding or acknowledging sources is plagiarism. Teams should create their own solutions and properly credit inspiration sources.",
        sourceName: "FTC Ethics Guidelines",
        sourceSection: "Design Integrity",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-code-copying",
        title: "Code Originality",
        content: "Students should write their own code. Using code libraries is acceptable if students understand how they work. Copying entire programs without comprehension violates the learning spirit of FTC.",
        sourceName: "FTC Programming Guidelines",
        sourceSection: "Code Ethics",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-robot-controller-name",
        title: "Control System Naming",
        content: "The Robot Controller must be named in the format 'teamnumber-RC' and the password must be changed from factory default. This is checked during software inspection.",
        sourceName: "FTC Game Manual Part 1",
        sourceSection: "Software Inspection",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-app-versions",
        title: "Control System Software",
        content: "Teams must use approved versions of the Robot Controller and Driver Station apps. Outdated app versions will result in inspection failure.",
        sourceName: "FTC Game Manual Part 1",
        sourceSection: "Control System Requirements",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-wifi-settings",
        title: "Wi-Fi Configuration",
        content: "The Control Hub's Wi-Fi must be enabled and properly configured. Bluetooth should be disabled on control devices. Incorrect wireless settings will prevent the robot from passing inspection.",
        sourceName: "FTC Technical Guide",
        sourceSection: "Wireless Setup",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-wiring-standards",
        title: "Electrical Wiring Safety",
        content: "Wiring must be appropriately sized, use insulated copper wire, and follow consistent color-coding. Poor wiring can cause shorts, fires, or entanglement hazards.",
        sourceName: "FTC Game Manual Part 1",
        sourceSection: "Electrical Safety",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-cots-parts",
        title: "Commercial Parts Rules",
        content: "Robots must be built from raw materials and commercial off-the-shelf (COTS) parts readily available to teams. Parts that provide unfair competitive advantages through multiple degrees of freedom may be restricted.",
        sourceName: "FTC Game Manual Part 1",
        sourceSection: "Robot Construction",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-modifications-limit",
        title: "Component Modification Limits",
        content: "Actuators and components should only be modified as explicitly allowed in the game manual. Unauthorized modifications can result in inspection failure.",
        sourceName: "FTC Game Manual Part 1",
        sourceSection: "Allowed Modifications",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-re-inspection",
        title: "Re-Inspection Requirements",
        content: "If a robot fails inspection or undergoes significant changes during an event, it must be re-inspected before competing. Repeated failures may require lead inspector intervention.",
        sourceName: "FTC Inspection Process",
        sourceSection: "Re-Inspection Policy",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-self-inspection",
        title: "Pre-Event Self-Inspection",
        content: "Teams are strongly encouraged to self-inspect their robots before events using official checklists and app self-inspection reports. This helps identify issues proactively.",
        sourceName: "FTC Best Practices",
        sourceSection: "Preparation",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-mentor-screening",
        title: "Mentor Background Checks",
        content: "All mentors must complete background verification and Youth Protection Process training through BeAMentor.org before they can work with teams. This ensures student safety.",
        sourceName: "FIRST Program Requirements",
        sourceSection: "Mentor Qualifications",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-student-leadership",
        title: "Student Team Leadership",
        content: "Students should hold leadership positions such as team captain and subteam leads. These student leaders coordinate with coaches and manage team activities, fostering student ownership.",
        sourceName: "FTC Team Organization",
        sourceSection: "Roles and Responsibilities",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-teaching-vs-doing",
        title: "Teaching Skills vs Doing Tasks",
        content: "Mentors can teach skills by demonstrating techniques on practice materials. However, students must then apply those skills to the actual robot themselves. Demonstration is allowed; doing the actual task is not.",
        sourceName: "FTC Mentoring Guide",
        sourceSection: "Boundary Guidelines",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-asking-questions",
        title: "Guiding Through Questions",
        content: "Mentors should guide students by asking questions that prompt critical thinking, such as 'What if you tried...?' or 'How might that work?' rather than providing direct solutions.",
        sourceName: "FTC Mentoring Best Practices",
        sourceSection: "Effective Guidance",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-safety-responsibility",
        title: "Mentor Safety Oversight",
        content: "Mentors are responsible for ensuring student safety during building, testing, and competition. This includes teaching proper tool use, supervising dangerous operations, and enforcing safety protocols.",
        sourceName: "FTC Safety Guidelines",
        sourceSection: "Mentor Responsibilities",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-resource-provision",
        title: "Providing Resources",
        content: "Mentors can and should provide resources such as reference materials, tutorial videos, example code from other teams, and access to tools. Providing resources is not the same as doing the work.",
        sourceName: "FTC Mentoring Guide",
        sourceSection: "Allowed Support",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-deadline-learning",
        title: "Deadlines as Learning",
        content: "Time pressure and deadlines are part of the FTC learning experience. When teams face time constraints, mentors should help students prioritize and work efficiently—not take over the work to meet deadlines.",
        sourceName: "FTC Educational Philosophy",
        sourceSection: "Learning Through Challenges",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-judge-explain",
        title: "Student Explanation Requirement",
        content: "Judges may ask any student to explain how the robot works, how code functions, or how design decisions were made. If students cannot explain their robot, it suggests mentors did the work.",
        sourceName: "FTC Judging Process",
        sourceSection: "Student Understanding Check",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-team-diversity",
        title: "Inclusive Team Culture",
        content: "Teams should ensure every member contributes meaningfully and feels valued. Mentors should foster an inclusive environment where all students, regardless of experience level, have opportunities to learn and participate.",
        sourceName: "FIRST Core Values",
        sourceSection: "Inclusion",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-outreach-importance",
        title: "Community Outreach",
        content: "Teams are encouraged to promote FIRST and STEM in their communities through outreach activities. Outreach should be student-led and documented in the engineering notebook.",
        sourceName: "FTC Awards Criteria",
        sourceSection: "Community Impact",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-sponsor-relations",
        title: "Sponsor and Fundraising",
        content: "Students should be involved in fundraising efforts and sponsor relations. Mentors can guide the process, but students should make presentations, write thank-you notes, and manage relationships.",
        sourceName: "FTC Team Sustainability",
        sourceSection: "Student Business Skills",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-design-iterations",
        title: "Iteration and Improvement",
        content: "The engineering design process involves multiple iterations. Teams should document failed designs and explain what they learned. Iteration is a sign of real engineering, not failure.",
        sourceName: "Engineering Design Process",
        sourceSection: "Iterative Development",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-testing-documentation",
        title: "Test and Document Results",
        content: "Students should conduct tests, collect data, analyze results, and document findings in their engineering notebook. This demonstrates the scientific method and engineering rigor.",
        sourceName: "FTC Engineering Standards",
        sourceSection: "Testing Process",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-code-comments",
        title: "Code Documentation",
        content: "Students should comment their code to explain logic and functionality. Well-documented code demonstrates understanding and makes it easier for team members to collaborate.",
        sourceName: "FTC Programming Best Practices",
        sourceSection: "Code Quality",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-cad-documentation",
        title: "CAD and Design Documentation",
        content: "Teams using CAD should include design drawings and CAD images in their engineering notebook. This demonstrates industrial design thinking and planning before building.",
        sourceName: "FTC Design Standards",
        sourceSection: "Documentation Requirements",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-match-strategy",
        title: "Game Strategy Development",
        content: "Students should analyze the game, develop strategies, and make tactical decisions. Mentors can facilitate strategy discussions but should not dictate the team's game plan.",
        sourceName: "FTC Competition Strategy",
        sourceSection: "Student Decision Making",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-pit-setup",
        title: "Pit Organization",
        content: "Students should set up and organize their pit area, manage tools और equipment, and maintain a professional workspace. A well-organized pit reflects team professionalism.",
        sourceName: "FTC Competition Guide",
        sourceSection: "Pit Standards",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-drive-practice",
        title: "Driver Practice",
        content: "Student drivers should practice extensively before competition. Mentors should not drive the robot during matches or practice rounds, as driving is a student skill.",
        sourceName: "FTC Competition Rules",
        sourceSection: "Match Participation",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-awards-prep",
        title: "Award Presentation Preparation",
        content: "Students should prepare for judging interviews and practice presenting their robot and team story. Mentors can help students practice but should not script or over-coach presentations.",
        sourceName: "FTC Awards Preparation",
        sourceSection: "Student Presentation",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-failure-resilience",
        title: "Learning from Failure",
        content: "Failure is an essential part of learning. When designs fail or matches are lost, mentors should help students analyze what happened, learn from it, and improve—not fix everything for them.",
        sourceName: "FIRST Educational Philosophy",
        sourceSection: "Growth Mindset",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-sportsmanship",
        title: "Sportsmanship and Respect",
        content: "Teams should congratulate winners, console those who lost, and maintain positive attitudes regardless of outcomes. Poor sportsmanship can result in penalties or disqualification.",
        sourceName: "FTC Code of Conduct",
        sourceSection: "Expected Behavior",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-volunteering",
        title: "Volunteer Appreciation",
        content: "Students and mentors should thank volunteers who make events possible. Appreciation for referees, judges, and event staff is part of Gracious Professionalism.",
        sourceName: "FIRST Values",
        sourceSection: "Community Gratitude",
        updatedAt: new Date().toISOString()
    },
    // Add more rules to reach 40-70 total
    {
        id: "rule-team-meetings",
        title: "Student-Led Meetings",
        content: "Team meetings should be led by student leaders, not mentors. Mentors can attend and provide input when asked, but students should set agendas, run discussions, and make decisions.",
        sourceName: "FTC Team Management",
        sourceSection: "Leadership Development",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-conflict-resolution",
        title: "Student Conflict Management",
        content: "When conflicts arise within the team, students should work to resolve them with mentor guidance. Mentors should teach conflict resolution skills rather than imposing solutions.",
        sourceName: "Team Dynamics Guide",
        sourceSection: "Interpersonal Skills",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-time-management",
        title: "Student Time Management",
        content: "Students should create build schedules, set milestones, and manage their time. Mentors can help students learn planning skills but should not create the entire schedule for them.",
        sourceName: "FTC Project Management",
        sourceSection: "Planning Skills",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-tool-training",
        title: "Tool Safety Training",
        content: "Mentors must train students on proper and safe use of tools and equipment. Once trained, students should operate tools themselves under supervision. Mentors should not operate tools on behalf of students.",
        sourceName: "FTC Safety Requirements",
        sourceSection: "Tool Use",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-measurement-analysis",
        title: "Data Collection and Analysis",
        content: "Students should collect performance data during testing, analyze results, and use findings to inform design improvements. This scientific approach strengthens engineering thinking.",
        sourceName: "Engineering Best Practices",
        sourceSection: "Empirical Method",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-budget-management",
        title: "Team Budget Decisions",
        content: "Students should be involved in budget planning, tracking expenses, and making purchasing decisions. Financial literacy is a valuable skill that FTC can teach.",
        sourceName: "FTC Team Sustainability",
        sourceSection: "Financial Management",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-social-media",
        title: "Team Communication",
        content: "Students can manage team social media, websites, and outreach materials with mentor oversight for safety and appropriateness. Digital communication skills are part of modern team management.",
        sourceName: "Team Operations Guide",
        sourceSection: "Public Relations",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-mentor-multiple-roles",
        title: "Avoiding Mentor Conflicts",
        content: "Mentors should avoid situations where they must fill both mentor and official roles (like referee or inspector) at the same event. This prevents conflicts of interest.",
        sourceName: "FTC Ethics Guidelines",
        sourceSection: "Role Boundaries",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-alumni-support",
        title: "Alumni as Secondary Mentors",
        content: "Team alumni can serve as valuable mentors, but they must still respect student ownership boundaries. Recent alumni should especially avoid doing work that current students should do.",
        sourceName: "Mentoring Roles",
        sourceSection: "Alumni Engagement",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-parent-involvement",
        title: "Parent Supporter Boundaries",
        content: "Parents can support teams through logistics, funding, and encouragement. However, parents should not build, code, or make technical decisions unless they are trained mentors who understand boundaries.",
        sourceName: "FTC Team Roles",
        sourceSection: "Parent Participation",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-professional-engineers",
        title: "Professional Engineer Mentors",
        content: "Engineers and technical professionals make excellent mentors when they focus on teaching principles and methods rather than applying their professional skills directly to the robot.",
        sourceName: "Mentor Recruitment Guide",
        sourceSection: "Technical Mentors",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-competition-day-help",
        title: "Competition Day Support Limits",
        content: "On competition day, mentor support should be minimal. Students should diagnose problems, make repairs, adjust strategy, and manage their robot with only guidance—not hands-on help—from mentors.",
        sourceName: "FTC Competition Day Guide",
        sourceSection: "Pit Support Rules",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-inspect-with-students",
        title: "Inspection with Students Present",
        content: "Students, not just mentors, should attend robot inspection. Students should be able to explain their robot's systems to inspectors, demonstrating their understanding and ownership.",
        sourceName: "Inspection Best Practices",
        sourceSection: "Student Involvement",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-queue-behavior",
        title: "Match Queue Conduct",
        content: "In the match queue, students should prepare the robot and communicate with alliance partners. Mentors should observe from outside the queue area unless specifically helping with safety issues.",
        sourceName: "Competition Field Rules",
        sourceSection: "Queue Area",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-post-match-review",
        title: "Post-Match Analysis",
        content: "After matches, students should lead discussions about what worked, what didn't, and what to improve. Mentors can facilitate but should encourage student-driven analysis.",
        sourceName: "Competition Strategy",
        sourceSection: "Continuous Improvement",
        updatedAt: new Date().toISOString()
    },
    {
        id: "rule-advancement-decisions",
        title: "Advancement and Tournament Choices",
        content: "Decisions about whether to attend championship events or which tournaments to prioritize should involve student input. Students should help evaluate trade-offs and make team decisions.",
        sourceName: "Team Decision Making",
        sourceSection: "Strategic Planning",
        updatedAt: new Date().toISOString()
    }
];

console.log(`✅ Created ${ruleSnippets.length} rule snippets`);

export { ruleSnippets, db };
