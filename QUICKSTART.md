# Quick Start Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Configure Firebase

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Firestore Database**
3. Enable **Authentication** → Email/Password provider
4. Get your config from Project Settings

## 3. Configure Gemini AI

1. Get API key from [makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

## 4. Set Environment Variables

Create `.env.local`:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# AI
GEMINI_API_KEY=your_gemini_key
```

## 5. Seed Database

Go to Firebase Console → Firestore Database

Create these collections and add data from `SEED_DATA.md`:
- **modules**
- **lessons**
- **cases**
- **rule_snippets**

## 6. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 7. Test the Platform

1. **Sign up** as a mentor at `/auth`
2. **View curriculum** at `/curriculum`
3. **Start a lesson** (click any module → click first lesson)
4. **Take a quiz** (complete lesson to see quiz)
5. **Ask Copilot** at `/copilot`
6. **Check dashboard** at `/dashboard`

## Troubleshooting

- **"Firebase not configured"**: Check .env.local is created with correct values
- **"AI error"**: Verify GEMINI_API_KEY is correct
- **"No modules"**: Add seed data to Firestore
- **Build errors**: Run `npm install` again

## Production Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

Firebase will work automatically in production.
