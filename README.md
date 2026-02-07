# FTC Mentor Academy

**Master the boundary between guiding and doing.**

FTC Mentor Academy is an educational platform that teaches FIRST Tech Challenge mentors the ethical boundaries of their role. It prevents rule violations by helping mentors understand what they should and should not do.

## 🎯 Project Purpose

This platform exists to solve a specific problem: **Most FTC rule violations are caused by mentors who don't understand where to draw the line between helping and doing the work.**

The platform teaches:
- What mentors ARE responsible for
- What mentors MUST NOT do  
- How to make ethical decisions under pressure
- How to prepare teams without replacing them

**This is NOT a robotics tutorial.** It teaches decision-making, ethics, and mentorship boundaries.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Vanilla CSS with modern design system
- **Database**: Firebase (Firestore + Authentication)
- **AI**: Google Gemini API (Mentor Copilot)
- **Hosting**: Vercel (frontend)

## 📋 Prerequisites

- Node.js 18+ and npm
- Firebase account
- Google Gemini API key

## 🛠️ Installation

### 1. Clone and Install Dependencies

```bash
cd FTCMENT
npm install
```

### 2. Set Up Firebase

1. Create a Firebaseproject at [firebase.google.com](https://firebase.google.com)
2. Enable Firestore Database
3. Enable Authentication (Email/Password)
4. Get your Firebase config from Project Settings

### 3. Set Up Gemini AI

1. Get a Gemini API key from [makersuite.google.com](https://makersuite.google.com)

### 4. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your credentials in `.env.local`:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key
```

### 5. Seed the Database

Add the seed data to your Firestore database. See `SEED_DATA.md` for the complete structure.

The easiest way is through the Firebase Console:

1. Go to Firestore Database
2. Create collections: `modules`, `lessons`, `cases`, `rule_snippets`
3. Add the documents from `SEED_DATA.md`

### 6. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
FTCMENT/
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── page.tsx           # Landing page
│   │   ├── auth/              # Authentication
│   │   ├── curriculum/        # Curriculum overview
│   │   ├── module/[id]/       # Module detail
│   │   ├── lesson/[id]/       # Lesson viewer
│   │   ├── cases/             # Case studies list
│   │   ├── copilot/           # AI Mentor Copilot
│   │   ├── dashboard/         # User dashboard
│   │   └── api/copilot/       # Copilot API endpoint
│   ├── components/            # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ModuleCard.tsx
│   │   ├── QuizComponent.tsx
│   │   └── ProtectedRoute.tsx
│   ├── contexts/              # React contexts
│   │   └── AuthContext.tsx
│   ├── lib/                   # Utilities
│   │   ├── firebase.ts        # Firebase config
│   │   └── ai.ts              # Gemini AI integration
│   └── styles/
│       └── globals.css        # Design system
├── .env.example               # Environment template
├── SEED_DATA.md               # Database seed structure
└── README.md                  # This file
```

## 🎓 User Roles

- **Guest**: Can preview curriculum, cannot track progress or certify
- **Mentor**: Full access, can learn, complete lessons, get certified
- **Admin**: Content management capabilities

## ✨ Key Features

### 1. Sequential Learning
Lessons unlock one at a time. Students must complete previous lessons before advancing.

### 2. Quiz System
Quizzes require 80% to pass. Immediate feedback with explanations.

### 3. Case Studies
Real-world scenarios where mentors make decisions and see consequences.

### 4. AI Mentor Copilot
Conservative AI assistant that helps mentors check their decisions BEFORE making mistakes. Every response includes:
- Verdict (Allowed/Not Allowed/Depends)
- Reasoning
- Safer alternative
- Rule references

### 5. Progress Tracking
Automatic tracking of completed lessons and modules.

### 6. Certification
Users who complete required modules can take the certification exam.

## 🔧 Development

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

## 📝 Content Management

To update curriculum content:

1. **Modules & Lessons**: Edit in Firestore Console
2. **AI Behavior**: Modify system prompt in `src/lib/ai.ts`
3. **Rules**: Add/edit in `rule_snippets` collection

## 🎯 Success Criteria

The MVP is successful if:

✓ New mentors can understand boundaries in under 2 hours  
✓ Common violations are clearly explained  
✓ Certification feels meaningful  
✓ Platform works without live instructors  
✓ Content is updatable once per season  

## 🤝 Contributing

This is an MVP. Future enhancements could include:

- Admin panel for content editing
- Certificate PDF generation
- Analytics dashboard for organizations
- More case scenarios
- Video demonstrations

## ⚖️ License

This project is independent and not officially affiliated with *FIRST*®.

The platform aligns with FTC values and Gracious Professionalism®.

## 📧 Support

For issues or questions about setup, check:
- Firebase documentation
- Next.js documentation
- `SEED_DATA.md` for database structure

---

**Remember**: This platform teaches mentorship ethics, not robotics skills.
