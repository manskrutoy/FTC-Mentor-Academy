# Database Seeding Guide

## Quick Start

To populate the database with all content:

```bash
node scripts/seedDatabase.js
```

This will:
1. Clear existing data from all collections
2. Seed **60+ Rule Snippets** (paraphrased from official FTC sources)
3. Seed **25+ Realistic Scenario Cases** (target: 50-80)
4. Seed **10 Modules** across 5 curriculum tracks
5. Seed **5+ Detailed Lessons** (target: 20-35)
6. Add **20+ Quiz Questions** (target: 120-200)

## Content Structure

### Rule Snippets (`rule_snippets` collection)
Short, paraphrased segments from official FTC documentation covering:
- Student ownership & mentor boundaries
- Inspection requirements (hardware & software)
- Engineering notebooks
- Judging & interviews
- Competition conduct
- Ethics & Gracious Professionalism

### Scenario Cases (`cases` collection)
Realistic, detailed scenarios mentors face with:
- **Categories**: Programming, CAD/Design, Build, Competition, Judging, Documentation, Leadership, Ethics
- **Difficulty**: Easy, Medium, Hard
- Multiple choice options with verdicts
- Detailed explanations and safe alternatives
- Rule references

### Modules (`modules` collection)
10 modules organized into 5 tracks:
- **Track A**: Understanding FTC
- **Track B**: Mentor Role & Boundaries (3 modules - CORE)
- **Track C**: Mentorship in Practice (2 modules)
- **Track D**: Competitions & Judging (2 modules)
- **Track E**: Ethics & Rules (2 modules)

### Lessons (`lessons` collection)
20-35 detailed lessons with:
- Learning goals
- Key takeaways
- Realistic examples
- Common mistakes
- Do-this-instead checklists
- Rule references
- Quiz questions

### Quiz Questions (embedded in `lessons`)
120-200 questions testing:
- Decision-making ability
- Understanding of boundaries
- Application of principles
- Scenario judgment calls

## Development Workflow

### Adding More Content

To expand the content library:

1. **Add Rules**: Edit `scripts/content/ruleSnippets.js`
2. **Add Cases**: Edit `scripts/content/cases.js`
3. **Add Modules**: Edit `scripts/content/modules.js`
4. **Add Lessons**: Edit `scripts/content/lessons.js`
5. **Add Quizzes**: Edit `scripts/content/quizzes.js`

Then run the seed script again:
```bash
node scripts/seedDatabase.js
```

### Content Quality Standards

**Rule Snippets**:
- Paraphrase, don't copy verbatim
- Include source name and section
- Keep concise (2-4 sentences)
- Focus on actionable boundaries

**Scenario Cases**:
- Be specific with details (times, quotes, contexts)
- Include 4 options: one clearly right, one clearly wrong, two nuanced
- Provide detailed verdict explanations
- Offer safe alternatives

**Lessons**:
- 300-600 words of content
- Real FTC examples
- Balance theory with practice
- Include common mistakes section

**Quizzes**:
- Test judgment, not memorization
- Include detailed explanations
- Reference relevant rules
- 5 questions per lesson minimum

## Current Progress

As of now:
- ✅ 60+ Rule Snippets
- 🔄 25+ Cases (target: 50-80)
- ✅ 10 Modules
- 🔄 5 Lessons (target: 20-35)
- 🔄 20+ Quiz Questions (target: 120-200)

**Next Steps**:
1. Add 25-55 more realistic scenario cases
2. Add 15-30 more detailed lessons
3. Add 100-180 more quiz questions

## Safety Notes

⚠️ **The seed script deletesall existing data** before seeding. Make sure you have backups if needed.

🔒 **Never commit** `.env.local` with real API keys to version control.

## Troubleshooting

**Error: PERMISSION_DENIED**
- Ensure Firestore security rules allow writes
- Check Firebase project configuration

**Error: Module not found**
- Run `npm install` first
- Check that all content files exist in `scripts/content/`

**Seeding takes too long**
- Content library is large (potentially 15,000+ lines)  
- Consider seeding in chunks for testing
- Production seeding should complete in 2-5 minutes
