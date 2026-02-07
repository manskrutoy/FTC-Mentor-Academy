# Manual Database Seeding Guide

Since automated seeding has module conflicts with Next.js, follow this manual approach to populate your Firebase database.

## Step 1: Open Firebase Console

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Open your project: **ftc-mentor-academy**
3. Navigate to **Firestore Database** in the left sidebar

## Step 2: Seed Rule Snippets Collection

1. Click **Start collection**
2. Collection ID: `rule_snippets`

Add these sample documents (copy the data from `scripts/content/ruleSnippets.js`):

### Document 1: `rule-student-ownership`
```
id: "rule-student-ownership"
title: "Student-Centered Design"
content: "Robots in FTC must be designed, built, and programmed by students. Adult mentors serve as guides who teach concepts and provide resources, but they must not do the work for students. This ensures that students own their learning journey and competition experience."
sourceName: "FTC Game Manual Part 1"
sourceSection: "Core Values"
updatedAt: [current timestamp]
```

### Document 2: `rule-mentor-role`
```
id: "rule-mentor-role"
title: "Mentor Responsibilities"
content: "Mentors are adults who assist teams in achieving goals. Each team requires at least two screened adult mentors. Their role is to guide, teach, and ensure safety—not to build or program the robot themselves."
sourceName: "FTC Program Overview"
sourceSection: "Team Requirements"
updatedAt: [current timestamp]
```

**Continue adding** all 60+ rule snippets from the file, or start with just these 2 for testing.

## Step 3: Seed Modules Collection

1. Create new collection: `modules`

### Document 1: `module-ftc-basics`
```
id: "module-ftc-basics"
title: "Track A: Understanding FTC"
description: "Learn what FIRST Tech Challenge is, how the season works, and what makes FTC unique as an educational robotics competition."
order: 1
lessonCount: 4
track: "A"
```

### Document 2: `module-boundaries-1`
```
id: "module-boundaries-1"
title: "Track B1: What is a Mentor's Role?"
description: "Define the fundamental responsibilities and boundaries of an FTC mentor. This is the core of the entire curriculum."
order: 2
lessonCount: 5
requiredFor: "certification"
track: "B"
```

**Continue with** all 10 modules from `scripts/content/modules.js`.

## Step 4: Seed Lessons Collection

1. Create new collection: `lessons`

### Document 1: `lesson-ftc-001`
```
id: "lesson-ftc-001"
moduleId: "module-ftc-basics"
title: "What is FIRST Tech Challenge?"
order: 1
content: [Full markdown content from scripts/content/lessons.js]
hasQuiz: true
```

**Add** the full markdown content for each lesson (300-600 words each).

## Step 5: Seed Cases Collection

1. Create new collection: `cases`

### Document 1: `case-prog-001`
```
id: "case-prog-001"
title: "The Autonomous Night Before"
category: "programming"
difficulty: "easy"
prompt: "It's 11 PM the night before your first competition. Your students have been trying to write autonomous code for 3 hours, but the robot keeps driving into the wall. They're exhausted and frustrated. One student says, 'I give up, can you just fix it?' You've written thousands of lines of code professionally and could solve this in 10 minutes."
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
]
correctIndex: 1
verdict: "Allowed / Not Allowed / Not Allowed / Depends"
explanation: "Option 2 is the only fully allowed approach. You're teaching debugging skills and guiding them to find their own solution. Option 1 violates student ownership—even if they watch, you're doing the work. Option 3 is plagiarism if they don't understand the code. Option 4 is unnecessarily harsh—you could still guide them even if they don't finish tonight."
safeAlternative: "Help students identify the bug by asking questions: 'What do you expect to happen? What's actually happening? What part of the code controls that movement?' Even if they don't finish, they'll learn valuable debugging skills."
ruleReferences: ["rule-student-ownership", "rule-teaching-vs-doing", "rule-deadline-learning"]
timestamp: [current timestamp]
```

**Continue with** all 25+ cases from `scripts/content/cases.js`.

## Step 6: Add Quiz Questions to Lessons

For each lesson with quizzes, **update the lesson document** and add a `quizQuestions` field:

Example for `lesson-ftc-001`:
```
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
    explanation: "FTC's primary goal is inspiration and learning, not winning. The competition is a vehicle for education. While college prep and robot quality are benefits, they're not the primary goal.",
    ruleReferences: ["rule-student-ownership"]
  },
  // ... more questions
]
```

## Quick Start (Minimal Test Data)

If you just want to test the app quickly, add:

1. **2-3 rule snippets** (enough to reference)
2. **2 modules** (one from Track A, one from Track B)
3. **2-3 lessons** (one from each module)
4. **5-10 cases** (mix of categories and difficulties)
5. **Quiz questions** for the lessons you added

This will let you test the entire flow without manually entering hundreds of items.

## Alternative: Firebase Import/Export

For bulk import:
1. Export the JavaScript objects from each content file to JSON
2. Use Firebase CLI: `firebase firestore:import ./data`

This requires converting the JS files to JSON format first.

## Verification

After seeding, test the app:
1. Visit `http://localhost:3000` (with `npm run dev` running)
2. Log in as a mentor
3. Navigate to Curriculum page
4. Verify modules appear
5. Click into a lesson and take the quiz
6. Try a case scenario

## Need Help?

All the content is ready in these files:
- `scripts/content/ruleSnippets.js` - 60+ rules
- `scripts/content/cases.js` - 25+ scenarios
- `scripts/content/modules.js` - 10 modules
- `scripts/content/lessons.js` - Detailed lesson content
- `scripts/content/quizzes.js` - Quiz questions

Just copy the data manually into Firestore!
