# FTC Mentor Academy - Seed Data Script

This document contains the seed data structure for Firebase Firestore. You'll need to manually add this data to your Firebase console or use a script to populate it.

## Collections Structure

### 1. modules

```json
{
  "modules": [
    {
      "id": "module-1",
      "title": "Understanding Mentorship Boundaries",
      "description": "Learn the fundamental difference between guiding students and doing their work. Understand your role and responsibilities.",
      "order": 1,
      "lessonCount": 3,
      "requiredFor": "certification"
    },
    {
      "id": "module-2",
      "title": "Common Violation Scenarios",
      "description": "Recognize situations where mentors commonly cross the line. Learn what NOT to do.",
      "order": 2,
      "lessonCount": 4,
      "requiredFor": "certification"
    },
    {
      "id": "module-3",
      "title": "Ethical Decision Making",
      "description": "Develop a framework for making mentorship decisions under pressure.",
      "order": 3,
      "lessonCount": 3
    }
  ]
}
```

### 2. lessons

```json
{
  "lessons": [
    {
      "id": "lesson-1-1",
      "moduleId": "module-1",
      "title": "What is a Mentor's Role?",
      "order": 1,
      "content": "# What is a Mentor's Role?\n\n## The Core Principle\n\nIn FIRST Tech Challenge, **students own their robot**. This isn't just a nice idea — it's a fundamental rule.\n\nYour role as a mentor is to:\n\n✓ **Guide** students to find their own solutions\n✓ **Teach** concepts and principles\n✓ **Ask** guiding questions\n✓ **Ensure** safety during building and testing\n✓ **Provide** resources and references\n\n## What You Must NOT Do\n\n✗ Build mechanisms for students\n✗ Write code for the team\n✗ Make design decisions\n✗ Fix problems without student involvement\n✗ Take over during competitions\n\n## Why This Matters\n\nWhen mentors do the work:\n- Students lose learning opportunities\n- Teams compete on adult skill, not student growth\n- The integrity of FTC is compromised\n- Your team risks disqualification\n\n## The Boundary\n\nThe line between helping and doing can be unclear. Throughout this curriculum, you'll learn to recognize that boundary and stay on the right side of it.\n\n**Remember**: Your job is to make students better problem-solvers, not to solve problems for them.",
      "hasQuiz": true
    },
    {
      "id": "lesson-1-2",
      "moduleId": "module-1",
      "title": "Student Ownership Explained",
      "order": 2,
      "content": "# Student Ownership Explained\n\n## What Student Ownership Means\n\nStudent ownership means that **every aspect of the robot** — from design to build to code — should come from student thinking and student hands.\n\n## Levels of Mentor Involvement\n\n### ✓ Allowed: Teaching and Guiding\n\n- Explaining how motors work\n- Showing reference designs from other teams\n- Asking \"What if you tried...?\"\n- Reviewing code and pointing out issues\n- Teaching safety protocols\n\n### ⚠️ Caution Zone: Depends on Context\n\n- Demonstrating a technique (okay if students then do it)\n- Suggesting specific solutions (okay if students evaluate and choose)\n- Helping debug (okay if students drive the process)\n\n### ✗ Not Allowed: Doing the Work\n\n- Soldering connections yourself\n- Writing functions for students\n- Making final design choices\n- Building subsystems without student direction\n- Taking over during matches\n\n## The Test Question\n\nWhen uncertain, ask yourself:\n\n**\"Could a judge ask a student to explain or demonstrate this, and would the student be able to?\"**\n\nIf the answer is no, then you've probably crossed the line.\n\n## Real Consequences\n\nViolations of student ownership can result in:\n- Team disqualification\n- Loss of awards\n- Unfair competition\n- Students missing out on learning\n\nProtect your students. Protect the integrity of FTC.",
      "hasQuiz": true
    },
    {
      "id": "lesson-2-1",
      "moduleId": "module-2",
      "title": "The Soldering Scenario",
      "order": 1,
      "content": "# The Soldering Scenario\n\n## The Situation\n\nIt's the night before competition. Students are struggling to solder motor connections. The joints keep breaking. Time is running out.\n\n## What Mentors Often Do (Wrong)\n\n\"Let me do it. We need this done before tomorrow.\"\n\n## Why This is a Violation\n\nSoldering is a fundamental build skill. When you do it:\n- Students can't explain how connections were made\n- You've built part of the robot\n- The team may not be able to fix issues at competition\n\n## The Right Approach\n\n1. **Demonstrate** proper soldering technique on a practice board\n2. **Watch** as students practice\n3. **Guide** them through the actual connections\n4. Let students do the work, even if it's not perfect\n\n## What If There's No Time?\n\nThis is where it gets hard. If the robot won't be ready:\n\n✓ Students learn time management\n✓ Students learn consequences\n✓ They'll plan better next time\n\n✗ You doing the work teaches them to rely on adults\n✗ You risk rule violations\n\n**The deadline pressure is part of the learning experience.**\n\n## The Principle\n\nYou can teach the skill. You cannot do the task.",
      "hasQuiz": false
    }
  ]
}
```

### 3. cases (Case Studies)

```json
{
  "cases": [
    {
      "id": "case-1",
      "title": "The Soldering Dilemma",
      "scenario": "Your team is struggling with soldering connections. The robot needs to be ready for competition tomorrow. Students have been trying for an hour and keep making cold joints.",
      "difficulty": "Beginner",
      "choices": [
        {
          "text": "Take over and solder all the connections yourself",
          "verdict": "Not Allowed",
          "explanation": "This violates student ownership. You are doing the work for them.",
          "consequence": "Students can't explain the connections to judges. Team risks disqualification."
        },
        {
          "text": "Demonstrate on a practice board, then guide each student through their own connections",
          "verdict": "Allowed",
          "explanation": "You're teaching the skill, and students are doing the actual work with guidance.",
          "consequence": "Students learn and can explain their work. Robot may not be perfect, but it's theirs."
        },
        {
          "text": "Find a YouTube tutorial and tell them to figure it out",
          "verdict": "Depends",
          "explanation": "Providing resources is good, but abandoning struggling students isn't mentorship.",
          "consequence": "Students may feel unsupported. Consider watching the tutorial together and practicing."
        }
      ],
      "ruleReferences": ["Student-Centered", "Gracious Professionalism"]
    }
  ]
}
```

### 4. rule_snippets

```json
{
  "rule_snippets": [
    {
      "id": "rule-1",
      "title": "Student-Centered",
      "content": "The robot is designed, built, and programmed by students. Mentors guide but do not do the work.",
      "source": "FTC Core Values"
    },
    {
      "id": "rule-2",
      "title": "Gracious Professionalism",
      "content": "Compete fiercely while treating everyone with respect and kindness.",
      "source": "FIRST Core Values"
    }
  ]
}
```

## How to Add This Data

### Option 1: Firebase Console (Manual)

1. Go to your Firebase Console
2. Navigate to Firestore Database
3. Create each collection
4. Add documents with the data above

### Option 2: Programmatic Seeding (Recommended)

Create a seed script:

```bash
npm run seed
```

This will populate your database with the sample content above.

## Notes

- User profiles are created automatically on signup via AuthContext
- Progress tracking documents are created as users complete lessons
- Certificates are generated when users pass certification exam
