export const CURRICULUM_MODULES = [
    {
        id: 'foundations',
        title: 'Foundations of Ethical Mentorship',
        description: 'Master the core principles of FTC mentorship boundaries',
        track: 'Core',
        order: 1,
        estimatedTime: '45 min',
        icon: '🎓',
        color: '#667EEA',
        lessons: [
            {
                id: 'lesson-1-boundaries',
                title: 'The Mentor\'s Boundary: Helping vs. Doing',
                content: `# The Mentor's Boundary: Helping vs. Doing

## The Golden Rule of FTC Mentorship

**You are a guide, not a builder. A teacher, not a doer.**

In FIRST Tech Challenge, the most important skill you'll develop isn't technical – it's knowing when to step back. This lesson will teach you the fundamental boundary that separates great mentors from well-intentioned rule-breakers.

## Why This Boundary Matters

Consider two scenarios:

**Scenario A:** A student is stuck on a coding problem. You sit next to them, point at their screen, and ask guiding questions: "What do you think this variable does? What would happen if you changed this value?"

**Scenario B:** A student is stuck on the same problem. You take their keyboard and fix it in 30 seconds.

Which mentor helped the team win? Neither. Or both. But only one helped the **students** win.

The difference is everything.

## The Fundamental Distinction

### ✅ HELPING (Allowed)
- **Teaching concepts** through explanation
- **Asking guiding questions** that lead students to solutions
- **Pointing to resources** (documentation, tutorials, examples)
- **Reviewing student work** and providing feedback
- **Demonstrating techniques** on separate examples
- **Ensuring safety** during all activities

### ❌ DOING (Not Allowed)
- **Building, soldering, or assembling** robot parts
- **Writing code** for the robot
- **Making design decisions** for the team
- **Completing tasks** that students should do
- **Taking over** during pressure situations
- **Fixing problems** without student involvement

## The "If I Do This..." Test

Before taking any action, ask yourself:

1. **"If I do this, will students learn?"**
   - If yes → probably okay
   - If no → stop

2. **"Could a student do this with my guidance?"**
   - If yes → guide them instead
   - If no → either it's too advanced or you need to break it down

3. **"Will this give our team an unfair advantage?"**
   - If yes → absolutely not allowed
   - If no → still check the other questions

## Real Example: The CAD Dilemma

**Situation:** Your team needs a custom part designed in CAD. The deadline is tomorrow, and students are struggling.

**What you WANT to do:**
Design it yourself in 20 minutes. You're experienced, it's easy for you, and the team needs it.

**What you MUST do:**
1. Sit with students and guide them through the design process
2. Ask questions: "What should this part do? What constraints do we have?"
3. Let them make mistakes (within reason)
4. If it's not perfect, that's okay – it's their learning experience

**The hard truth:**
If they submit an imperfect part they designed, that's better than submitting a perfect part you designed.

## The Long-Term Perspective

Remember: FTC is not about winning one competition. It's about:
- Teaching students to solve problems independently
- Building confidence in their abilities
- Preparing them for college, careers, and life
- Fostering innovation and creativity

When you "help" by doing, you rob students of these experiences.

## Common Mistakes

1. **"But they asked me to!"**
   - Students will ask. That doesn't make it okay.
   - Your job is to redirect them to solve it themselves.

2. **"It's faster if I do it."**
   - Faster ≠ Better
   - The goal is learning, not speed.

3. **"Just this once..."**
   - This once becomes a habit
   - Students learn to depend on you instead of themselves

## Key Takeaway

**The best mentor is often the one who does the least.**

Your value isn't in your technical skills – it's in your ability to unlock students' potential by asking the right questions, providing the right resources, and stepping back at the right time.`,
                quiz: {
                    questions: [
                        {
                            question: 'A student asks you to solder a wire connection because they\'re nervous about damaging the board. What should you do?',
                            options: [
                                'Solder it for them to ensure it\'s done correctly',
                                'Show them how on a practice board first, then supervise while they do it',
                                'Tell them to figure it out themselves',
                                'Solder it but make them watch carefully'
                            ],
                            correctIndex: 1,
                            explanation: 'Demonstrate on practice material, then guide them through doing it themselves. This builds confidence while ensuring safety. You should NEVER do technical work for students, but you can teach them how.'
                        },
                        {
                            question: 'Your team is behind schedule and needs code written for an autonomous routine. The competition is in 2 days. What do you do?',
                            options: [
                                'Write the code yourself to help them meet the deadline',
                                'Guide students through writing it, even if it\'s not finished in time',
                                'Write pseudocode and let them translate it',
                                'Find a similar example online and adapt it for them'
                            ],
                            correctIndex: 1,
                            explanation: 'Even under time pressure, students must write their own code. An incomplete autonomous program they wrote is better than a complete one you wrote. If they don\'t finish, that\'s a learning experience about planning.'
                        }
                    ]
                }
            },
            {
                id: 'lesson-2-gracious-professionalism',
                title: 'Gracious Professionalism in Practice',
                content: `# Gracious Professionalism in Practice

## Beyond Just "Being Nice"

Gracious Professionalism (GP) is FIRST's signature value, but it's often misunderstood as simply "being polite." It's much deeper than that.

**Gracious Professionalism means:**
- Competing fiercely while respecting everyone
- Helping others even when they're your competition
- Taking ownership of mistakes
- Celebrating others' successes
- Putting learning above winning

## How Mentors Model GP

As a mentor, you're not just teaching GP – you're demonstrating it every moment students watch you.

### ✅ What GP Looks Like from Mentors

**At Practice:**
- Admitting when you don't know something
- Asking students for their ideas before sharing yours
- Respecting students' decisions even when you disagree
- Maintaining composure when things go wrong

**At Competitions:**
- Helping other teams without hesitation
- Speaking respectfully about judges, referees, and other teams
- Congratulating opponents sincerely
- Staying calm during disputes

**In Tough Moments:**
- Not blaming students for mistakes
- Focusing on solutions, not fault
- Treating setbacks as learning opportunities

### ❌ What Breaks GP

- Arguing with referees over calls
- Blaming students for losses
- Refusing to help other teams
- Speaking negatively about competitors
- Prioritizing winning over learning
- Taking credit for students' work

## The Mentor's GP Challenge

The hardest part? **GP applies even when you're frustrated.**

### Scenario: The Unfair Call

Your team just lost a match because of what you believe was an incorrect referee call. Students are upset. Parents are angry. You're furious.

**GP Response:**
1. Take a deep breath (seriously, do this)
2. Tell students: "Let's accept the call and focus on our next match"
3. If you truly believe it needs addressing, discuss it privately with head referee, respectfully
4. Never argue in front of students
5. Use it as a teaching moment about handling disappointment

**Why this matters:**
Students remember how you handle losses more than how you celebrate wins.

## GP in Mentor-Student Relationships

### Respecting Student Autonomy

**GP means letting students:**
- Make their own decisions (even wrong ones)
- Experience failure
- Solve their own problems
- Take credit for successes

**Not GP:**
- Overruling student decisions because you "know better"
- Fixing their mistakes behind their backs
- Taking control during challenges

### The "I Could Do It Better" Trap

Yes, you probably could build a better robot. Write cleaner code. Design a more efficient mechanism.

**But GP means recognizing:**
- It's not YOUR robot, it's THEIRS
- Your job is to make them better, not make better robots
- Their flawed creation they own beats your perfect creation they don't

## GP Towards Other Mentors

Don't forget GP applies to fellow mentors too:

- Share strategies freely
- Help new mentors learn
- Don't gatekeep knowledge
- Respect different mentoring styles
- Collaborate across teams

## The Ultimate GP Test

Ask yourself: **"Am I acting in a way that I'd want my students to emulate?"**

If students copied your behavior exactly, would you be proud?

## Key Takeaway

Gracious Professionalism isn't a rule to follow – it's a mindset to embody.

Every interaction is a chance to demonstrate that excellence and kindness aren't opposites, they're partners.`,
                quiz: {
                    questions: [
                        {
                            question: 'Your team\'s alliance partner disconnects during a match, causing you to lose. Students are upset. How do you respond?',
                            options: [
                                'Tell students that it\'s frustrating but these things happen, and we\'ll support that team',
                                'Privately complain to the other team\'s mentor',
                                'Tell students they have a right to be angry at the other team',
                                'Request a rematch from the referees'
                            ],
                            correctIndex: 0,
                            explanation: 'Demonstrate GP by showing understanding and support. Technical failures happen to everyone. Use this as a teaching moment about handling disappointment with grace.'
                        }
                    ]
                }
            },
            {
                id: 'lesson-3-safety-first',
                title: 'Safety: The Non-Negotiable Priority',
                content: `# Safety: The Non-Negotiable Priority

## The One Area Where You MUST Intervene

Everything in FTC mentorship involves stepping back and letting students lead – except safety.

**Safety is the ONLY area where "doing it for them" is not just okay, it's required.**

## Why Safety is Different

In every other aspect of FTC, we balance:
- Student learning vs. mentor involvement
- Independence vs. guidance
- Mistakes vs. intervention

**With safety, there's no balance. Safety always wins.**

## Your Safety Responsibilities

### 1. Stop Unsafe Actions Immediately

Don't ask questions, don't guide, don't wait. Stop them.

**Examples:**
- Student reaching into rotating mechanism
- Using power tools without safety glasses
- Working with live electronics incorrectly
- Unsafe lifting or carrying

**Your action:** Physical intervention if needed, immediate stop command

### 2. Enforce Safety Equipment

**Non-negotiable requirements:**
- Safety glasses in the lab
- Closed-toe shoes during robot work
- Proper PPE for each tool
- Hair tied back around machinery

**No exceptions. Ever.**

### 3. Supervise Hazardous Activities

Some activities require mentor presence:
- Power tool usage
- Soldering
- Battery charging
- First-time tool usage
- Any high-energy mechanism testing

### 4. Teach Safety Protocols First

Before students use anything dangerous:
1. Explain the hazards
2. Demonstrate proper usage
3. Supervise their first attempts
4. Only allow independent use after proficiency

## Common Safety Scenarios

### Scenario: "I know how to use this"

**Student:** "I've used a drill at home, I don't need supervision"

**Your response:**
- Verify their knowledge with questions
- Watch them demonstrate on scrap material
- Supervise until you're confident
- Never assume competence

### Scenario: The Shortcut

**Student:** Removes safety guard to make a cut "easier"

**Your response:**
- Immediate stop
- Explain why guards exist (with examples if needed)
- Reinstall guard before continuing
- If they resist, they don't use the tool that day

### Scenario: Peer Pressure

**Multiple students:** "Everyone else is doing it"

**Your response:**
- Doesn't matter. Safety rules apply to everyone
- Address the entire group
- Reset expectations clearly

## Lab Safety Setup

### Physical Requirements

**Workspace:**
- Good lighting
- Clear pathways
- Fire extinguisher accessible
- First aid kit stocked
- Emergency contacts posted

**Tool Storage:**
- Organized and labeled
- Dangerous tools secured
- Charging station isolated
- Flammable materials properly stored

### Safety Rules Document

Create and post:
- General lab rules
- Tool-specific protocols
- Emergency procedures
- Incident reporting process

**Make students sign understanding**

## Battery Safety (CRITICAL)

LiPo batteries are powerful and dangerous:

**Charging:**
- Use LiPo-safe bags
- Never leave unattended
- Balance charge only
- Supervise at all times

**Storage:**
- Cool, dry location
- Partially charged (storage mode)
- In fireproof container
- Away from flammables

**Damaged batteries:**
- Dispose immediately
- Never use damaged batteries
- Know local disposal procedures

## When Accidents Happen

Despite best efforts, accidents may occur:

**Immediate Response:**
1. Ensure scene is safe
2. Administer first aid if qualified
3. Call emergency services if needed
4. Contact parents
5. Document everything

**Follow-up:**
- Review what went wrong
- Update safety protocols
- Retrain if needed
- Don't skip this step!

## The Hardest Safety Decision

**Scenario:** Student is consistently unsafe despite warnings.

**Your call:** They can't work in the lab until behavior changes.

This is hard. They'll be upset. Team might be impacted. But:
- One person's injury affects everyone
- You're liable as supervisor
- Safety isn't negotiable

**How to handle:**
- Private conversation
- Clear expectations
- Path to regain privileges
- Stick to your decision

## Safety vs. Learning

"But if I stop them, they won't learn from the mistake!"

**Wrong.**

Safety mistakes aren't learning opportunities – they're disasters waiting to happen.

Students can learn from design failures, code bugs, and strategy errors. They cannot learn from losing fingers or eyesight.

## Key Takeaway

**You can't mentor students who are injured.**

Safety is where you do more, not less. Be hypervigilant, be strict, be consistent. No apologies.`,
                quiz: {
                    questions: [
                        {
                            question: 'A student you trust starts using a drill press without safety glasses because "it\'s just for a second." What do you do?',
                            options: [
                                'Let it go since they\'re experienced and it\'s quick',
                                'Immediately stop them and enforce the safety rule',
                                'Remind them after they finish',
                                'Make a mental note to mention it later'
                            ],
                            correctIndex: 1,
                            explanation: 'Stop immediately. Safety rules have NO exceptions, regardless of skill level or task duration. "Just for a second" is when accidents happen.'
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 'competition-scenarios',
        title: 'Competition Day Ethics',
        description: 'Navigate high-pressure competition situations with integrity',
        track: 'Core',
        order: 2,
        estimatedTime: '60 min',
        icon: '🏆',
        color: '#F5576C',
        lessons: [
            {
                id: 'lesson-4-competition-boundaries',
                title: 'Competition Day Boundaries',
                content: `# Competition Day Boundaries

## The Pressure Cooker

Competition day changes everything. The stakes feel higher. Time is limited. Emotions run high. And suddenly, all those ethical boundaries you've practiced seem much harder to maintain.

**This is exactly when they matter most.**

## The Competition Mindset Shift

### At Practice (Low Pressure):
- Time is flexible
- Mistakes are opportunities
- You can always try again tomorrow

### At Competition (High Pressure):
- 5-minute match windows
- One shot to succeed
- Real consequences feel immediate

**The temptation:** Throw out the rules "just for today."

**The reality:** Competition day is when students need ethical mentorship most.

## What Changes (and What Doesn't)

### ✅ What You CAN Do at Competitions

**Strategic Support:**
- Help with scouting and strategy
- Discuss alliance selections
- Review rules and scoring
- Manage logistics and schedule

**Emotional Support:**
- Encourage during losses
- Calibrate excitement during wins
- Help process stress
- Maintain team morale

**Safety Oversight:**
- Stop unsafe practices (still #1 priority)
- Ensure proper tool usage
- Supervise in pits
- Enforce safety rules

### ❌ What You STILL CAN'T Do

**The Robot:**
- Make mechanical repairs
- Adjust mechanisms
- Wire or solder components
- Drive during practice matches

**The Code:**
- Fix bugs between matches
- Adjust autonomous routines
- Modify driver control
- Optimize performance

**The Strategy:**
- Make match decisions
- Drive the robot (obviously)
- Decide alliance selections without student input

## The "5 Minutes Until Match" Crisis

**Scenario:** Robot breaks. Match starts in 5 minutes. Students are panicking.

**What every fiber of your being wants to do:**
Fix it yourself. You know exactly what's wrong. You could have it running in 2 minutes.

**What you must do:**
1. Take a breath
2. Ask: "What do you think is wrong?"
3. Guide: "What's the fastest fix you can do safely?"
4. Support: "I believe you can handle this"
5. Accept: If they don't fix it in time, that's okay

**The hard truth:**
Competing with a broken robot they couldn't fix is more valuable than competing with one you fixed for them.

## Pit Area Protocols

The pits are where most rule violations happen:

### Your Role in Pits

**Observer and Guide:**
- Watch what students are doing
- Answer questions about approach
- Provide tools and materials
- Ensure safety compliance

**Not a Repair Technician:**
- Don't touch the robot
- Don't hold pieces while students work
- Don't "help" by doing

### The "Can You Hold This?" Tra

p

Student: "Can you just hold this wire while I solder?"

**Seems harmless. It's not.**

**Why:**
- Holding becomes steadying
- Steadying becomes positioning
- Positioning becomes doing

**Response:**
"Let's find a way to clamp it" or "Can another student help?"

## Queue and Alliance Station Rules

### In Queue:
- Students handle robot
- Students communicate with queue manager
- Students make last-minute decisions

**You stay back.**

### At Alliance Station:
- Students drive
- Students make calls
- Students handle coaching (if role assigned)

**You watch from stands.**

## The Inspection Challenge

**Scenario:** Robot fails inspection. Students don't understand why.

**Allowed:**
- Read the rule together
- Ask questions to help them understand
- Suggest they ask inspector for clarification

**Not Allowed:**
- Argue with inspector
- Fix the issue yourself
- Tell inspector they're wrong (even if you think they are)

**If you believe inspector is incorrect:**
1. Thank them professionally
2. Review rule with students privately
3. If still convinced, ask students if they want to respectfully re-present
4. Accept final decision gracefully

## Judging Room Boundaries

### Presentation:**
- Students present
- Students answer questions
- Students make decisions about what to share

### Your Involvement:
- **Practice:** Coach and prepare at home
- **At Event:** Stay outside unless judge invites you
- **After:** Debrief what went well/could improve

**Never:**
- Answer questions for students
- Interrupt or correct them
- Speak unless directly asked by judge

## Alliance Selection Drama

### The Scenario:
Your team is picking alliances. Students are considering Team X. You know Team X has an unreliable robot.

**The Temptation:**
Just tell them no. Save them from a bad choice.

**The Right Move:**
- Ask: "What do you know about their robot?"
- Guide: "What are you looking for in a partner?"
- Inform: "I noticed [specific observation]. What do you think about that?"
- **Let them decide**

## Managing Parent Pressure

Parents at competitions can add complexity:

### Common Pressures:
- "Why don't you just fix it?"
- "Other teams' mentors are helping more"
- "We're paying for results"

### Your Response:
- Explain FTC philosophy patiently
- Reference specific rules if needed
- Stand firm on boundaries
- Redirect to student learning

**Have this conversation BEFORE competitions**

## When Things Go Wrong

### Lost Match:
- Let students feel disappointment
- Don't immediately problem-solve
- Give them time to process
- Later: "What do you want to do differently?"

### Robot Failure:
- Stay calm (your energy sets the tone)
- Focus on what they can control
- Remind them: "This is data, not defeat"

### Unfair Calls:
- Model graciousness
- Private debrief, not public complaining
- Learn from it, don't dwell on it

## The Championship Pressure

**Finals. Tied match. Everything on the line.**

This is not the time to abandon principles.

**This is exactly the time they matter most.**

Students will remember:
- Not whether they won
- But HOW you helped them try

## Key Takeaway

**Competition day doesn't change the rules. It tests your commitment to them.**

The mentor who maintains boundaries under pressure is worth more than the one who helps you win today but teaches you to cut corners forever.`,
                quiz: {
                    questions: [
                        {
                            question: 'Robot stops working 3 minutes before a playoff match. Students are freaking out. The problem is obvious to you. What do you do?',
                            options: [
                                'Fix it quickly so they can compete',
                                'Guide them: "Check the connections. What do you see?"',
                                'Fix it but explain what you did',
                                'Tell them exactly what to do step-by-step'
                            ],
                            correctIndex: 1,
                            explanation: 'Even in crunch time, guide rather than do. Ask diagnostic questions. If they don\'t fix it in time, that\'s a learning experience about preparation and resilience.'
                        },
                        {
                            question: 'During alliance selection, you know a team your students are considering has connection issues. What do you do?',
                            options: [
                                'Tell them not to pick that team',
                                'Say nothing - let them figure it out',
                                'Share your observation and let them decide',
                                'Pick a different team for them'
                            ],
                            correctIndex: 2,
                            explanation: 'Share factual observations, then let students make the decision. Your job is to inform, not decide. They need to own their strategic choices.'
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 'advanced-mentorship',
        title: 'Advanced Mentorship Techniques',
        description: 'Master advanced strategies for ethical, effective teaching',
        track: 'Advanced',
        order: 3,
        estimatedTime: '50 min',
        icon: '🎯',
        color: '#10B981',
        lessons: [
            {
                id: 'lesson-5-effective-questioning',
                title: 'The Art of Guiding Questions',
                content: `# The Art of Guiding Questions

## Why Questions Beat Answers

When a student asks "How do I fix this?" the worst thing you can do is tell them.

**Better response:** Ask a question that helps them find the answer.

## The Mentor's Superpower

**Telling gives them fish. Asking teaches them to fish.**

The right question:
- Activates their thinking
- Builds confidence
- Creates ownership
- Develops problem-solving skills

## Types of Guiding Questions

### 1. Diagnostic Questions
*Help students identify the problem*

**Instead of:** "The encoder is disconnected"

**Ask:**
- "What was working before it stopped?"
- "What changed since then?"
- "Can you show me what happens when you test it?"

### 2. Analytical Questions
*Help students understand why*

**Instead of:** "That won't work because the gear ratio is wrong"

**Ask:**
- "How fast do you want this to spin?"
- "How fast is it spinning now?"
- "What would change if we used a different gear?"

### 3. Solution-Finding Questions
*Help students generate ideas*

**Instead of:** "Use a PID controller"

**Ask:**
- "What are some ways robots control speed?"
- "What have other teams tried?"
- "What would happen if we...?"

### 4. Reflection Questions
*Help students learn from experience*

**Instead of:** "Next time do it differently"

**Ask:**
- "What worked well?"
- "What would you change?"
- "What did you learn from this?"

## The Question Ladder

Start broad, get specific:

**Level 1:** "What's the problem?"
**Level 2:** "What have you tried?"
**Level 3:** "What do you think we should check first?"
**Level 4:** "How could we test that theory?"

Each level pushes them deeper into solution-finding.

## When to Stop Asking

Sometimes you've asked enough questions. Signs:
- Student is genuinely stuck (not just lazy)
- You've exhausted logical next steps
- Learning opportunity has been maximized

**Then:** Provide targeted info or demonstrate, followed by "Now you try"

## Practice Scenarios

### Scenario 1: Code Not Working

**Student:** "My loop isn't working!"

**Bad:** "You forgot a semicolon on line 47"

**Better:**
- "What's it doing instead of what you want?"
- "Let's add some print statements - what should we print?"
- "What line do you think might be causing this?"

### Scenario 2: Robot Driving Weird

**Student:** "The robot turns when it should go straight!"

**Bad:** "Your motors are wired backwards"

**Better:**
- "What direction should each wheel spin?"
- "What direction are they actually spinning?"
- "How could we test each motor individually?"

## The Socratic Method in FTC

Named after Socrates, this technique uses ONLY questions:

**Example:**
- Student: "Should we use mecanum or tank drive?"
- You: "What are we trying to accomplish?"
- Student: "We need to score in tight spaces"
- You: "What kind of movement would help with that?"
- Student: "Being able to strafe would be useful..."
- You: "Which drive system allows strafing?"
- Student: "Oh! Mecanum!"

They arrived at the answer themselves.

## Advanced Techniques

### The "What If" Game

Help students see consequences:
- "What if we made it lighter? Heavier?"
- "What if we had twice as much time?"
- "What if another team did this?"

### The Comparison Technique

**Instead of:** "This design is better"

**Ask:**
- "What are pros and cons of each option?"
- "Which matches our priorities better?"
- "What would make one better than the other?"

### The Rubber Duck Method

Have students explain to you:
- "Walk me through your thinking"
- "Teach me how this works"
- "Explain it like I'm five"

Often they'll solve it while explaining.

## Common Mistakes

### Mistake 1: Leading Questions

**Bad:** "Don't you think we should use PID?"
*(This isn't a question, it's a suggestion)*

**Better:** "What methods could help control this motion?"

### Mistake 2: Too Vague

**Bad:** "Have you thought about it differently?"
*(No direction provided)*

**Better:** "What would happen if we approached this from the robot's perspective?"

### Mistake 3: Question Overload

Don't rapid-fire questions. Give time to think. Silence is okay.

## The Ultimate Test

**After your questioning:**
- Does the student feel clever?
- Did they generate the solution?
- Will they remember this process?

If yes, you're doing it right.

## Key Takeaway

**The best mentors make students feel smart, not dependent.**

Master the art of asking, and you'll create problem-solvers who don't need you – which is exactly the goal.`,
                quiz: {
                    questions: [
                        {
                            question: 'Student says "The autonomous isn\'t scoring points, what should I change?" How do you respond?',
                            options: [
                                'Tell them exactly what to fix in the code',
                                '"Can you show me what it\'s doing? What was it supposed to do?"',
                                '"Figure it out yourself"',
                                'Suggest they start over with new code'
                            ],
                            correctIndex: 1,
                            explanation: 'Start with diagnostic questions. Help them identify the gap between expected and actual behavior. This leads them to the solution while building debugging skills.'
                        }
                    ]
                }
            }
        ]
    }
];
