# CPT208-B2-4: MasterApply Quest

A gamified web application for XJTLU students to learn about postgraduate application processes.

## 🎮 Project Overview

**MasterApply Quest** is an interactive text-based adventure game designed to help students navigate the postgraduate application journey through engaging gameplay and structured learning.

### Key Features

- 🎯 **5 Application Stages**: School Selection → Document Preparation → Essay Writing → Application Submission → Interview Preparation
- 👥 **Dual Role System**: Explorer (Year 2) and Sprint (Year 3) with tailored content for each
- 📊 **Dual Value System**: Learning Value (theoretical knowledge) + Task Value (practical skills)
- 🏆 **Achievement System**: Unlock badges and rewards as you progress
- 📱 **Responsive Design**: Optimized for both mobile and desktop experiences
- 📖 **Story Unlock Mechanism**: Reach value thresholds to unlock exclusive strategy guides
- 🔄 **Role Switch**: Experience both user personas with independent progress tracking
- 📋 **Prototype Showcase**: Module 5 poster content integrated into the application
- ⚡ **Daily Quests**: Refreshable daily challenges for consistent engagement
- 🔥 **Combo System**: Streak rewards for consecutive correct answers

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
│   ├── components/          # Vue components
│   │   ├── RoleSelect.vue          # Role selection with switch support
│   │   ├── GameDashboard.vue       # Main game interface
│   │   ├── QuizInterface.vue       # Quiz challenge interface
│   │   ├── AdvisorDashboard.vue    # Advisor analytics panel
│   │   ├── PrototypeShowcase.vue   # Module 5 poster showcase
│   │   ├── Navigation.vue          # Top navigation bar
│   │   ├── AchievementNotification.vue # Achievement unlock popup
│   │   ├── GuideModal.vue          # Strategy guide popup modal
│   │   └── portfolio/              # Portfolio page components
│   │       ├── ModuleHeader.vue    # Shared module page header
│   │       └── TableOfContents.vue # Auto-generated TOC component
│   ├── views/               # Portfolio page views
│   │   ├── Home.vue                # Portfolio home
│   │   ├── Introduction.vue        # Module 2: Introduction
│   │   ├── TargetUsers.vue         # Module 3: User Personas
│   │   ├── DesignProcess.vue       # Module 4: Design Process
│   │   ├── Evaluation.vue          # Module 6: Evaluation
│   │   ├── Conclusion.vue          # Module 7: Conclusion
│   │   └── GameDemo.vue            # Live game demo entry
│   ├── router/
│   │   └── index.js                # Vue Router configuration
│   ├── data/                       # Game data files
│   │   ├── questions.ts            # Question bank for quizzes
│   │   ├── guides.ts               # Strategy guide content
│   │   ├── achievements.ts         # Achievement definitions
│   │   ├── dailyquests.ts          # Daily quest challenges
│   │   └── combos.ts               # Combo reward calculations
│   ├── App.vue              # Main application component
│   ├── main.js              # Application entry point
│   └── style.css            # Global styles
├── public/
│   └── images/              # Game assets and prototype images
├── index.html
├── package.json
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

### Value System

- **📚 Learning Value**: Earned by answering quiz questions correctly
  - Unlock PS Writing Guide at 100 points
  - Unlock CV Guide at 80 points
  
- **✅ Task Value**: Earned by completing practical tasks
  - Unlock School Selection Guide at 200 points
  - Unlock Interview Guide at 150 points (requires both values)

### 5 Application Stages

1. 🎓 **School Selection** - Choose the right university and major
2. 📄 **Document Preparation** - Prepare transcripts and certificates
3. ✍️ **Essay Writing** - Craft compelling PS, CV, and recommendations
4. 📨 **Application Submission** - Navigate online application systems
5. 🎤 **Interview Preparation** - Master interview techniques

### Daily Quests

Refreshable daily challenges that reset every 24 hours:
- Complete 3 quiz questions
- Earn 50 Learning Value
- Earn 30 Task Value
- Maintain a 3+ combo streak

### Combo System

Streak rewards for consecutive correct answers:

| Combo | Bonus |
|-------|-------|
| 3+ | +15% points |
| 5+ | +25% points |
| 10+ | +50% points |

### Achievement System

Unlock badges through gameplay achievements:
- First Quiz Complete
- Explorer/Sprint Role Master
- Combo Champion
- Daily Quest Hero
- Guide Collector

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
| Gemini 2.0 | UI design inspiration, mockup generation, content optimization | [1] |

**Core design logic**, user research, game mechanics, and project motivation are original work by the team.

### Citation

[1] Gemini 2.0, Google, accessed on 2026-04-07, available at https://gemini.google.com/. 
    Used for generating low-fi wireframes, UI mockups, and content optimization assistance.
    All core game mechanics and design decisions were made by the team.

## 📄 License

This project is for academic purposes only - XJTLU CPT208 Coursework (2026).

## 🙏 Acknowledgments

- XJTLU Student Affairs Office for project requirements and guidance
- Course instructors Dr Yue Li and Dr Teng Ma for supervision
- Fellow students who participated in user testing

---

*Last Updated: May 2026*
*Project Status: Active Development*
