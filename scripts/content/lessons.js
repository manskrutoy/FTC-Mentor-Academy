// LESSONS WITH FULL CONTENT
// Each lesson includes: goal, key takeaways, examples, common mistakes, and do-this-instead checklist

const lessons = [
    // === TRACK A: FTC BASICS ===
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

## Examples

**Example 1**: In a typical FTC game, robots might need to:
- Score game elements into goals during a 30-second autonomous period
- Continue scoring during a 2-minute driver-controlled period
- Complete bonus tasks for extra points

**Example 2**: A team might win the championship not by having the highest score, but by:
- Demonstrating exceptional engineering process
- Showing strong community outreach
- Modeling Gracious Professionalism
- Having a well-functioning, student-designed robot

## Common Mistakes Mentors Make

❌ **Treating FTC like a science fair**: Focusing only on the final robot, not the learning journey
❌ **Ignoring the judging component**: Thinking only match performance matters
❌ **Competing against students on other teams**: Forgetting that students should lead inter-team interactions

## Do This Instead

✓ Emphasize the learning journey over winning
✓ Prepare students for both competing AND presenting to judges  
✓ Encourage student-to-student collaboration with other teams
✓ Celebrate growth, creativity, and perseverance

## Rule References

This lesson connects to: Student-Centered Design, Gracious Professionalism, Coopertition`,
        hasQuiz: true
    },
    {
        id: "lesson-ftc-002",
        moduleId: "module-ftc-basics",
        title: "The FTC Season Structure",
        order: 2,
        content: `# The FTC Season Structure

## Goal
Understand the timeline, milestones, and competitions that make up an FTC season.

## Season Timeline

**September**: Game Reveal & Kickoff
- New game announced
- Teams begin strategy and design

**September - November**: Build Season
- Design, prototype, build robot
- Practice and iterate

**November - February**: Qualifier Competitions
- Teams compete at local/regional events
- Top teams advance to championship

**February - April**: Championship Events
- Regional championships
- World Championship (Houston)

## Key Milestones

1. **First Competition** (usually Dec/Jan): Often reveals what works and what doesn't
2. **Robot Evolution**: Most teams make significant changes between first and last competition
3. **Engineering Notebook Deadline**: Before each competition
4. **Advancement Decisions**: Choose which championship to attend if qualified

## Examples

**Example**: A typical team's season:
- Week 1-2: Strategy, research other teams, brainstorm
- Week 3-8: CAD, prototyping, iteration
- Week 9-12: Build primary robot
- Week 13+: Practice, refinement, documentation

## Common Mistakes

❌ **Rushing to build immediately**: Without strategy and planning
❌ **Treating first competition as "the big one"**: It's a learning opportunity
❌ **Stopping development after first competition**: Best teams iterate all season

## Do This Instead

✓ Spend time on strategy before building
✓ View early competitions as tests, not finals
✓ Plan for continuous improvement throughout the season
✓ Document the journey, not just the end result

## Rule References

This lesson connects to: Engineering Design Process, Documentation, Iteration`,
        hasQuiz: true
    },

    // === TRACK B: MENTOR BOUNDARIES ===
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

## Examples

**Example 1 - Teaching vs Doing**:
- ✓ MENTOR: "Here's how a PID controller works. Try implementing one."
- ✗ MENTOR: "Let me write the PID code for you."

**Example 2 - Guiding vs Deciding**:
- ✓ MENTOR: "What are the pros and cons of a claw versus a scoop?"
- ✗ MENTOR: "You should use a claw. Here's how to build it."

## Common Mistakes

❌ **"I'll just do this one thing"**: One thing becomes ten things
❌ **"I'm faster/better"**: Speed and perfection aren't the goal; learning is
❌ **"They asked me to do it"**: Students asking doesn't make it okay

## Do This Instead

✓ Always ask: "Will students be able to explain this to judges?"
✓ When tempted to do something, teach instead
✓ Measure success by student growth, not robot performance
✓ Remember: Your job is to create problem-solvers, not solve problems

## The Test Question

Before doing anything hands-on, ask yourself:

**"If a judge asks a student to explain or demonstrate this, could they?"**

If no, you're crossing the line.

## Rule References

Student Ownership, Mentor Not Build, Teaching vs Doing, Judge Explain`,
        hasQuiz: true
    },
    {
        id: "lesson-bound-002",
        moduleId: "module-boundaries-1",
        title: "Why Student Ownership Matters",
        order: 2,
        content: `# Why Student Ownership Matters

## Goal
Understand the deep reasons why student ownership is a fundamental FTC principle, not just a rule.

## The Learning Argument

**Students learn by doing, not by watching.**

When mentors do the work:
- Students miss hands-on practice
- Students don't develop problem-solving skills
- Students can't explain their own robot
- Students don't build confidence
- Students don't experience failure and recovery

**Real learning happens through struggle.**

## The Fairness Argument

When mentors build robots:
- Competitions become adult skill contests
- Teams with professional engineers have unfair advantages
- Judging becomes meaningless (students can't answer questions)
- Other teams feel cheated
- The playing field is no longer level

**FTC should measure student capability, not mentor capability.**

## The Ethical Argument

Student ownership is about:
- **Integrity**: Representing work honestly
- **Respect**: For other teams competing fairly
- **Honesty**: With judges about who did the work
- **Character**: Teaching students to earn their achievements

**Mentor-built robots are fundamentally dishonest.**

## Real Consequences

Teams where mentors do the work:
- Risk **disqualification** if discovered
- Lose **awards** they didn't truly earn
- Create **entitled students** who expect adults to solve problems
- Build **fragile robots** students can't maintain
- Face **exposure** when students can't answer judges' questions

## Examples

**Example**: Team A's mentor builds an excellent mechanism. At competition:
- **Judge**: "Can you explain how this works?"
- **Student**: "Um... my mentor made it. I'm not sure."
- **Result**: Judge recognizes mentor-built robot. Team loses credibility.

**Example**: Team B struggles with a mechanism all season. At competition:
- **Judge**: "Can you explain how this works?"
- **Student**: "We tried three designs. This one works because..." [detailed explanation]
- **Result**: Judge sees authentic student engineering. Team earns respect.

## Common Mistakes

❌ **"Just this once"**: The first violation makes the next one easier
❌ **"No one will know"**: Judges are trained to spot mentor-built work
❌ **"We need to be competitive"**: Competing unfairly isn't competing

## Do This Instead

✓ Value learning over winning
✓ Celebrate student-built solutions, however imperfect
✓ Prepare students to explain everything about their robot
✓ Build a culture of integrity from day one

## The Ultimate Goal

FTC exists to create:
- Confident problem-solvers
- Ethical leaders
- Technical innovators
- Resilient individuals

**This only happens when students do the work.**

## Rule References

Student Ownership, Gracious Professionalism, Judge Explain, Failure as Learning`,
        hasQuiz: true
    },

    // More lessons...
    {
        id: "lesson-bound-003",
        moduleId: "module-boundaries-2",
        title: "The Spectrum of Mentor Involvement",
        order: 1,
        content: `# The Spectrum of Mentor Involvement

## Goal
Learn to evaluate mentor actions on a spectrum from clearly allowed to clearly not allowed, with special attention to the gray area.

## The Spectrum

### ✅ CLEARLY ALLOWED

**Teaching Concepts**:
- "Let me explain how motors work"
- "Here's a video on gear ratios"
- "This is the formula for calculating torque"

**Providing Resources**:
- Sharing tutorial links
- Lending tools and materials
- Showing reference designs from other teams

**Asking Guiding Questions**:
- "What problem are you trying to solve?"
- "What have you tried so far?"
- "What if you approached it differently?"

**Ensuring Safety**:
- "Stop—you need safety glasses for that"
- "Let me show you the safe way to use this tool"
- Teaching proper procedures

### ⚠️ GRAY AREA - DEPENDS ON CONTEXT

**Demonstrating Techniques**:
- ✓ Demonstrating on practice materials, students do actual work
- ✗ Demonstrating on the actual robot

**Suggesting Solutions**:
- ✓ Offering multiple options for students to evaluate
- ✗ Telling them which solution to use

**Helping Debug**:
- ✓ Teaching debugging process, students find and fix bugs
- ✗ Finding and fixing bugs yourself

**Holding Parts**:
- ✓ Holding for safety or when physically impossible for one person
- ✗ Routinely helping assemble because it's faster

### ❌ CLEARLY NOT ALLOWED

**Building**:
- Soldering connections yourself
- Assembling mechanisms
- Adjusting components during competition

**Programming**:
- Writing code students didn't create
- Fixing bugs without student involvement
- Typing while dictating solutions

**Designing**:
- Making CAD models for students
- Deciding which design to use
- Drawing detailed plans for students to follow

**Competing**:
- Driving the robot in matches
- Making strategy calls during matches
- Speaking for students in judging

## How to Navigate the Gray Area

When unsure, ask yourself:

1. **Who is doing the thinking?** (Should be students)
2. **Who is doing the physical work?** (Should be students)
3. **Who will learn from this?** (Should be students)
4. **Could students explain this to judges?** (Must be yes)

**Rule of thumb**: When in doubt, step back.

## Examples

**Example 1 - Demonstrating (Context Matters)**:
- ✓ "Watch me solder this practice wire using proper technique. Now you try on your own wire."
- ✗ "Watch me solder your robot's motor connections."

**Example 2 - Diagnosing Problems**:
- ✓ "Your code crashes when pressing this button. Use print statements to find where it fails."
- ✗ "Your code crashes here. [points at line] Change this to that."

**Example 3 - Competition Repairs**:
- ✓ "Check the servo connection—it might be loose. Here's a screwdriver."
- ✗ [Takes robot and fixes servo yourself]

## Common Mistakes

❌ **Rationalizing gray-area violations**: "It's technically teaching"
❌ **Doing "just the hard parts"**: If it's hard, that's when students learn most
❌ **Gradually sliding toward doing more**: The boundary erodes over time

## Do This Instead

✓ When in the gray area, choose the more conservative option
✓ Constantly check: Am I teaching or doing?
✓ If you catch yourself doing too much, stop and reset expectations
✓ Discuss boundaries openly with your students

## Rule References

Teaching vs Doing, Student Ownership, Asking Questions, Competition Support`,
        hasQuiz: true
    }
];

console.log(`✅ Created ${lessons.length} lessons with full content (target: 20-35)`);
console.log("Note: More lessons will be added in the full seed script");

export { lessons };
