# CPT208-B2-4: MasterApply Quest

A gamified web application for XJTLU students to learn about postgraduate application processes.

## 🎮 Project Overview

**MasterApply Quest** is an interactive text-based adventure game designed to help students navigate the postgraduate application journey through engaging gameplay and structured learning.


### Key Features

- 🎯 **5 Role-Specific Application Stages**: Tailored paths for Explorers (Discovery → Research & Funding → Craft & Submit → Connect & Interview → Decide & Depart) and Sprinters (Target & Plan → Materials & Funding → Apply & Submit → Interview & Connect → Decide & Go)
- 👥 **Dual Role System**: Explorer (Year 2) and Sprint (Year 3) with customized content and visuals for each
- 🎮 **Mini-Games (TV Quests)**: 6 role-specific interactive challenges (Timeline Puzzle, School Matcher, Document Rush, Email Scramble, Interview Simulation, PS Workshop)
- 📊 **Dual Value & Gear System**: Spend Learning Value (theory) to upgrade gears for Task Value (practice) multipliers (up to +195% total bonus)
- 💬 **Teacher Q&A Credit**: Exchange 50 LV for one teacher question credit; submit questions and view teacher responses
- 🃏 **Admission Case Flip Cards**: 3D CSS flip-card interactive display of real admission cases and statistics
- 🏆 **Achievement System**: Unlock 13 unique badges through gameplay progression
- 📱 **Responsive Design**: Optimized for both mobile and desktop experiences
- 📖 **Story Unlock Mechanism**: Reach value thresholds to unlock exclusive strategy guides
- 🔄 **Role Switch**: Experience both user personas with independent progress tracking
- 📋 **Prototype Showcase**: Module 5 poster content integrated into the application
- ⚡ **Daily & Weekly Quests**: Refreshable daily and weekly challenges for consistent engagement
- 🔥 **Combo System**: Streak rewards for consecutive correct answers (3+ / 5+ / 10+ / 15+)
- 🚀 **Onboarding Tour**: Guided first-time user experience to learn game mechanics

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend Framework | Vue 3 + Composition API |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| State Management | LocalStorage |
| Icons | Emoji + Lucide Vue |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/maimaimai084/CPT208-B2-4.git

# Navigate to project directory
cd CPT208-B2-4

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/CPT208-B2-4/`

### Website Sections

| Route | Description |
|-------|-------------|
| `/` | Portfolio Home - Project overview and module navigation |
| `/intro` | Module 2: Introduction & Problem Statement |
| `/users` | Module 3: Target Users & Personas |
| `/process` | Module 4: Design Process & Methodology |
| `/prototype` | Module 5: Prototype & Implementation (existing) |
| `/evaluation` | Module 6: Evaluation & Results |
| `/conclusion` | Module 7: Conclusion & Future Work |
| `/demo` | Live Game Demo - Playable game interface |

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## 📁 Project Structure

```
├── src/
│   ├── components/                 # Vue components (game + portfolio)
│   │   ├── RoleSelect.vue              # Role selection (Explorer/Sprint)
│   │   ├── GameDashboard.vue           # Main game dashboard (supports `isZh`)
│   │   ├── QuizInterface.vue           # Quiz challenge interface (supports `isZh`)
│   │   ├── QuestHub.vue                # TV quest hub (supports `isZh`)
│   │   ├── InterviewSim.vue            # Interview simulation (supports `isZh`)
│   │   ├── PSWorkshop.vue              # PS/essay workshop (supports `isZh`)
│   │   ├── DocumentRush.vue            # 21-round document proofreading mini-game
│   │   ├── TimelinePuzzle.vue          # 6-level timeline sorting mini-game
│   │   ├── SchoolMatcher.vue           # 7-level university matching mini-game
│   │   ├── EmailScramble.vue           # 5-scenario email sorting mini-game
│   │   ├── GearShop.vue                # Gear upgrade shop (spend LV for TV bonuses)
│   │   ├── TVStore.vue                 # TV item store & reset system
│   │   ├── KnowledgeTree.vue           # SVG knowledge tree visualization
│   │   ├── AdmissionCaseFlipCard.vue   # 3D CSS flip-card for admission cases
│   │   ├── QuestionForm.vue            # Teacher Q&A submit + history (supports `isZh`)
│   │   ├── DailyWeeklyCycle.vue        # Daily/weekly quests (supports `isZh`)
│   │   ├── DailyQuestPanel.vue         # Daily quest panel UI
│   │   ├── FriendTree.vue              # Friend tree / social module
│   │   ├── OnboardingTour.vue          # First-time user guided tour
│   │   ├── ProfilePanel.vue            # Player profile panel (supports `isZh`)
│   │   ├── AdvisorDashboard.vue        # Advisor analytics dashboard (supports `isZh`)
│   │   ├── AIChat.vue                  # Preset AI chat demo (supports `isZh`)
│   │   ├── DemoAdmissionData.vue       # Admission stats demo (supports `isZh`)
│   │   ├── DemoActivities.vue          # Timeline demo (supports `isZh`)
│   │   ├── PrototypeShowcase.vue       # Module 5 poster showcase + TOC
│   │   ├── Navigation.vue              # Top navigation bar
│   │   ├── AchievementNotification.vue # Achievement unlock popup
│   │   ├── GuideModal.vue              # Strategy guide popup modal
│   │   └── portfolio/                  # Portfolio page components
│   │       ├── ModuleHeader.vue        # Shared module page header
│   │       └── TableOfContents.vue     # Auto-generated TOC component
│   ├── views/                          # Portfolio page views (routes)
│   │   ├── Home.vue
│   │   ├── Introduction.vue
│   │   ├── TargetUsers.vue
│   │   ├── DesignProcess.vue
│   │   ├── Evaluation.vue
│   │   ├── Conclusion.vue
│   │   └── GameDemo.vue                # Live game demo entry + global language toggle (`isZh`)
│   ├── router/
│   │   └── index.js                    # Vue Router configuration
│   ├── data/
│   │   ├── questions.ts                # Quiz question bank
│   │   ├── guides.ts                   # Strategy guide content
│   │   ├── achievements.ts             # Achievement definitions (13 badges)
│   │   ├── dailyquests.ts              # Daily & weekly quest challenges
│   │   ├── combos.ts                   # Combo reward tiers
│   │   ├── admissionData.ts            # Admission case data for flip cards
│   │   ├── gearConfig.ts               # Gear upgrade configuration
│   │   ├── documentRush.ts             # DocumentRush mini-game data
│   │   ├── schoolMatcher.ts            # SchoolMatcher mini-game data
│   │   ├── timelinePuzzle.ts           # TimelinePuzzle mini-game data
│   │   ├── emailScramble.ts            # EmailScramble mini-game data
│   │   ├── simulations.ts              # Interview simulation scenarios
│   │   └── questionTranslations.ts     # EN/ZH question translations
│   ├── utils/
│   │   └── CooldownManager.js          # Cooldown & rate-limit utility
│   ├── App.vue                         # Main application component
│   ├── main.js                         # Application entry point
│   ├── i18n.js                         # i18n entry (currently empty/reserved)
│   └── style.css                       # Global styles
├── ailogs/                             # AI usage retrospective (coursework requirement)
│   ├── README.md
│   └── retrospective.md
├── public/
│   ├── images/                         # Game assets and prototype images
│   ├── favicon.svg
│   └── icons.svg
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎮 Game Mechanics

### User Roles

| Role | Target User | Content Focus |
|------|-------------|---------------|
| **Explorer** | Year 2 Students | Process introduction, timeline planning, option exploration |
| **Sprint** | Year 3 Students | Advanced strategies, essay techniques, interview prep |

### Value System & Economic Loop

The game features a fully integrated economic loop driven by two core currencies:

- **📚 Learning Value (LV)**: Earned by answering Journey quiz questions correctly.
  - **Primary Use**: Spend LV in the **Gear Shop** to upgrade your background gears (e.g., IELTS, GPA, Internship).
  - Upgraded gears provide permanent multipliers (up to +195%) to your future TV earnings.
  
- **✅ Task Value (TV)**: Earned by completing practical mini-games (TV Quests).
  - **Primary Use**: Spend TV in the **TV Store** to purchase tactical items to help you progress: Heart Refills, Hint Tokens, XP Boosts, and Time Freezes.

- **📖 Story Unlocks**: As you accumulate LV and TV, you will automatically hit thresholds to unlock exclusive, in-depth strategy guides from the `guides.ts` database:
  - CV Writing Excellence
  - Interview Preparation Guide
  - Research Proposal & Cold Email Guide
  - Pre-Departure Checklist

### 5 Role-Specific Application Stages

To provide a highly personalized experience, the system abandons the "one-size-fits-all" approach and offers two distinct 5-stage learning paths tailored to the specific needs of each user persona:

**🧭 The Explorer Path (Year 2 Focus)**
1. **Discovery** - Interest analysis, university research, major matching, and creating a target list.
2. **Research & Funding** - Material checklists, scholarships, recommendation letters, and grade accreditation.
3. **Craft & Submit** - PS writing, CV optimization, online application submission, and research proposals.
4. **Connect & Interview** - Interview simulation, cold emailing professors, Q&A practice, and interview follow-ups.
5. **Decide & Depart** - Offer comparison, scholarship evaluation, visa processing, and pre-departure checklists.

**🚀 The Sprint Path (Year 3 Focus)**
1. **Target & Plan** - Application targets, ranking analysis, timelines, and reach/safety strategies.
2. **Materials & Funding** - Material preparation, scholarships, recommendation follow-ups, and score reporting.
3. **Apply & Submit** - Essay finalization, CV finalization, online application filling, and material confirmation.
4. **Interview & Connect** - Interview question banks, mock interviews, email templates, and contacting professors.
5. **Decide & Go** - Offer decisions, tuition evaluation, visa processing, and departure checklists.
### Daily Quests

Refreshable daily challenges that reset every 24 hours:
- Complete 3 quiz questions
- Earn 50 Learning Value
- Earn 30 Task Value
- Maintain a 3+ combo streak

### Combo System

Streak rewards for consecutive correct answers:

| Combo | Bonus | Achievement |
|-------|-------|-------------|
| 3+ | +15% points | - |
| 5+ | +25% points | - |
| 10+ | +50% points | Unlocks "Combo Master" |
| 15+ | +75% points | Unlocks "Combo Legend" | 


### Achievement System

Unlock 13 unique badges through gameplay progression:
- **First Step**: Complete your first level
- **Quiz Master**: Get 50 correct answers
- **Combo Master & Legend**: Reach 10 and 15 max combos
- **Week Warrior**: Maintain a 7-day streak
- **Learning Guru & Task Master**: Accumulate large amounts of LV and TV
- **Perfect Student**: Achieve perfect scores on 3 levels
- **Halfway There & Journey Complete**: Complete 3 and 5 levels respectively
- **Big Spender**: Spend 500 TV in the store
- **Hint Master**: Use 10 Hint Tokens
- **Gear Master**: Max out all gears

## 🎓 Course Information

- **Course**: CPT208 Human-Centric Computing
- **Module Leaders**: Dr Yue Li and Dr Teng Ma
- **Group**: B2-4
- **Theme**: Postgraduate Application Gamification (Theme B2)
- **Project Type**: Web-based Interactive Application

## 🤖 AI Usage Declaration

This project uses AI tools as permitted by course guidelines:

| Tool | Usage | Citation |
|------|-------|----------|
| Gemini 2.0 | Non-substantive tasks: visual assets generation (Core Design Concept diagram, Double Diamond Design Process diagram, system architecture diagrams, data-flow visualizations), grammatical polishing | [1] |

**Core design logic**—including the Dual-Value system, narrative unlocking mechanics, five-stage application structure, user research methodology, and evaluation design—was developed entirely by the team. No AI was used to generate user personas, survey questions, or heuristic evaluation results.

For coding, the project was built with **Vue 3 and Tailwind CSS** written directly by team members. During the main development period, we did not keep a prompt-by-prompt AI coding log; `/ailogs` contains retrospective (non-verbatim) notes documenting the AI tools used and the core features they assisted with.

### Citation

[1] Gemini 2.0, Google, accessed on 2026-04-07, available at https://gemini.google.com/.

## 📄 License

This project is for academic purposes only - XJTLU CPT208 Coursework (2026).

## 🙏 Acknowledgments

- XJTLU Student Affairs Office for project requirements and guidance
- Course instructors Dr Yue Li and Dr Teng Ma for supervision
- Fellow students who participated in user testing

---

*Last Updated: May 2026*
*Project Status: Active Development*
