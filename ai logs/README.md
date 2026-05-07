# AI Coding Logs

This folder records the main AI prompts used during the development of **MasterApply Quest**. The prompts below are grouped by feature because several coding sessions were iterative. AI was used as a coding assistant for structure, debugging, and UI refinement. Final code, wording, data, styling, and integration decisions were reviewed and adjusted manually by the team.

## Project Context

**Project name:** MasterApply Quest  
**Course:** CPT208 Human-Centric Computing  
**Framework:** Vue 3, Vite, Vue Router, Tailwind CSS  
**Purpose:** A gamified web application that helps XJTLU students understand postgraduate application planning through role-based learning, quizzes, mini-games, profile upgrades, Q&A, and portfolio documentation.

## AI Tools Used

- ChatGPT
- GitHub Copilot-style code suggestions during editing

## How AI Was Used

AI was mainly used for:

- planning Vue component structure
- drafting first versions of interactive UI components
- debugging state and localStorage logic
- improving Tailwind CSS layouts and responsive behavior
- refining game mechanics such as LV, TV, gear upgrades, quests, and rewards
- checking wording and page organization for the portfolio sections

AI output was not copied blindly. The team changed component names, route structure, content, images, visual style, data, and interaction logic to match the project requirements.

---

## Prompt 1: Vue Portfolio Structure and Routing

**Used for:** Setting up the overall portfolio website structure, route list, page titles, and the separation between portfolio pages and the live game demo.

**Prompt:**

> I am building a Vue 3 + Vite portfolio website for a CPT208 group project called MasterApply Quest. Please help me design a simple Vue Router structure for these pages: Home, Introduction, Target Users, Design Process, Prototype, Evaluation, Conclusion, and a separate Live Demo page. The navigation should work with hash history for GitHub Pages deployment. Also suggest how App.vue should use router-view and a reusable Navigation component.

**How it was used:**

The generated route idea was used as a starting point for `src/router/index.js`. The final version uses `createWebHashHistory`, page metadata for document titles, and a route for `/demo`. The team adjusted route names, titles, imports, and the navigation behavior so that the live demo page can hide the portfolio navigation.

---

## Prompt 2: Home Page and Module Navigation

**Used for:** Creating the portfolio home page with project overview, module cards, team member section, contribution table, and GitHub source link.

**Prompt:**

> Help me create a Vue 3 home page for a project portfolio named MasterApply Quest. It should introduce a text-based game for postgraduate application learning, show a logo, two call-to-action buttons, module navigation cards, a team member section, an individual contribution table, and a footer. Use Tailwind CSS and keep the layout responsive for desktop and mobile.

**How it was used:**

The AI helped draft the first page layout and Tailwind utility classes. The team then filled in real module names, team roles, contribution details, project images, and links. The final implementation is in `src/views/Home.vue`.

---

## Prompt 3: Role Selection Flow

**Used for:** Designing the first step of the demo where users choose between the Explorer and Sprint personas.

**Prompt:**

> I need a Vue component for a gamified postgraduate application demo. The first screen should let the user choose one of two roles: Explorer for Year 2 students who are unsure about applications, and Sprint for Year 3 students who already have clearer goals. After selecting a role, the user should enter their name and confirm. Please use Vue 3 Composition API, emit the selected role and name to the parent component, and save the basic choice in localStorage.

**How it was used:**

The AI's component structure was adapted into `src/components/RoleSelect.vue`. The final version includes role cards, role descriptions, visual themes, name input, localStorage use, and a `role-confirmed` event used by `GameDemo.vue`.

---

## Prompt 4: Main Demo Dashboard and Tab System

**Used for:** Building the playable demo shell with tabs for Journey, Gear, TV Quest, TV Shop, Daily, Profile, AI, Q&A, Data, Events, and advisor view.

**Prompt:**

> Please help me organize a Vue 3 live demo page for MasterApply Quest. The page should have a role-based player header, Learning Value and Task Value counters, a tab bar with large tactile buttons, and conditional rendering for different game modules. The state should include selected role, user name, completed levels, unlocked stories, gear state, inventory, achievements, daily quest progress, and localStorage saving.

**How it was used:**

This prompt informed the structure of `src/views/GameDemo.vue`. The team manually integrated all child components, adjusted tab colors, added bilingual state, connected event handlers, and refined localStorage progress loading and saving.

---

## Prompt 5: Journey Quiz Interface

**Used for:** Creating the interactive quiz level interface with question cards, answer options, flip-card feedback, reward calculation, and hint-token support.

**Prompt:**

> I am making a Vue 3 quiz interface for a text-based application planning game. Each level should load questions based on the player's role, show three answer choices, flip the selected card to reveal feedback, calculate Learning Value and Task Value rewards, and emit the final results when the level is finished. Please include a hint-token feature that can remove one weaker option if the player has a hint available.

**How it was used:**

The AI gave a structure for the quiz interaction, which was modified into `src/components/QuizInterface.vue`. The team connected it to `src/data/questions.ts` and `src/data/questionTranslations.ts`, added Chinese/English switching, tuned the card animations, and connected completion results back to the game dashboard.

---

## Prompt 6: LV, TV, Gear Shop, and TV Store Logic

**Used for:** Developing the game economy, including Learning Value, Task Value, profile gear upgrades, purchasable boosts, teacher question credits, and purchase limits.

**Prompt:**

> Help me design a simple game economy for a Vue student application game. The user earns Learning Value from quiz learning and Task Value from practical tasks. Learning Value should upgrade profile gears such as IELTS, GPA, internship, research, award, and recommendation. Task Value should buy items like heart refill, hint token, 24h LV boost, and time freeze. Please suggest Vue component logic, props, emits, computed values, and localStorage-friendly state.

**How it was used:**

The AI helped with the initial economy model and component boundaries. The final project uses `src/components/GearShop.vue`, `src/components/TVStore.vue`, and `src/data/gearConfig.ts`. The team added the teacher Q&A chance purchase, daily and weekly purchase limits, inventory state, and reward integration in `GameDemo.vue`.

---

## Prompt 7: Daily Quests, Achievements, and Progress Saving

**Used for:** Adding retention mechanics such as daily quests, weekly quests, combo rewards, achievement badges, streak-like progress, and persistent role-based saves.

**Prompt:**

> I want to add game progression features to a Vue demo: daily quests, weekly quests, combo rewards for consecutive perfect quiz results, achievement badges, and role-specific progress saving. Please help me structure the data files and the update functions. The system should reset daily and weekly progress when needed and store each role's progress separately in localStorage.

**How it was used:**

The AI suggestions were used to plan the progression system. The team implemented and adjusted the final logic in `src/views/GameDemo.vue`, `src/data/dailyquests.ts`, `src/data/achievements.ts`, and `src/data/combos.ts`. The final behavior includes quest progress updates, reward popups, achievement checks, and separate saved progress for different user roles.

---

## Prompt 8: Mini-Game Modules

**Used for:** Building or refining the TV Quest mini-games such as timeline sorting, school matching, document checking, email sorting, interview simulation, and PS workshop.

**Prompt:**

> Please help me create several small Vue mini-games for a postgraduate application learning demo. The games should be lightweight and suitable for a browser prototype: timeline ordering, school matching, document proofreading, email sorting, interview simulation, and personal statement workshop. Each mini-game should return a Task Value or Learning Value reward when completed and should be easy to connect to a parent dashboard component.

**How it was used:**

AI helped outline reusable patterns for mini-game components and event outputs. The team then implemented the project-specific content, data, rules, and UI in components such as `TimelinePuzzle.vue`, `SchoolMatcher.vue`, `DocumentRush.vue`, `EmailScramble.vue`, `InterviewSim.vue`, `PSWorkshop.vue`, and related files under `src/data/`.

---

## Prompt 9: Q&A Feature and Advisor Simulation

**Used for:** Creating the teacher Q&A demo, sample advisor responses, question submission form, category labels, and saved question history.

**Prompt:**

> I need a simple Q&A module for a Vue application demo. Students should spend one teacher question credit before submitting a question. The form should include name, category, and question text. The page should also show recent questions with status labels such as pending or answered, sample advisor replies, and save the history in localStorage. This is only a prototype, so no backend is needed.

**How it was used:**

The AI helped draft the component flow. The final feature appears in `src/components/QuestionForm.vue`, with the credit purchase connected through `GearShop.vue` and `GameDemo.vue`. The team edited categories, sample questions, styling, and localStorage behavior.

---

## Prompt 10: Portfolio Content Pages and Prototype Showcase

**Used for:** Presenting project documentation, design process, target users, prototype images, evaluation results, and conclusion inside the web app instead of only in a written report.

**Prompt:**

> Help me turn CPT208 project report content into Vue portfolio pages. The website should have sections for introduction, target users, design process, prototype showcase, evaluation, and conclusion. Please suggest a clean layout using Tailwind CSS, reusable module headers, image sections, tables, and navigation anchors. The pages should feel like a project portfolio rather than a plain report.

**How it was used:**

The AI supported the page organization and layout ideas. The team added real project images, report content, module structure, and portfolio navigation in files under `src/views/` and `src/components/portfolio/`. The prototype assets were placed under `public/images/`.

---

## Prompt 11: Responsive UI and Visual Polish

**Used for:** Improving mobile layout, spacing, button sizing, card layout, and general readability across the demo and portfolio pages.

**Prompt:**

> Review this Vue + Tailwind interface and suggest improvements for responsive layout. The project has a portfolio website and a playable demo with many buttons and cards. Please help make the spacing, grid layout, mobile behavior, and hover/active states cleaner without changing the main visual identity.

**How it was used:**

AI suggestions helped identify where responsive classes and layout adjustments were needed. The team manually revised Tailwind classes, grid layouts, card padding, sticky headers, tab button sizes, and mobile spacing across pages and components.

---

## Prompt 12: Debugging and Deployment

**Used for:** Fixing build issues, route behavior, asset paths, localStorage bugs, and GitHub Pages deployment concerns.

**Prompt:**

> I have a Vue 3 + Vite project that will be deployed to GitHub Pages. Please help me check common issues: hash router setup, base path configuration, image paths from the public folder, npm build errors, and state bugs related to localStorage. Explain what to check and suggest fixes without changing the project architecture.

**How it was used:**

The AI debugging checklist was used during final testing. The team checked `vite.config.js`, `src/router/index.js`, image paths such as `/images/logo.png`, and localStorage keys used by the demo. Final fixes were tested through `npm run build` before deployment.

---

## Final Note

AI was used to speed up development and help with implementation ideas, but the final project is a team-edited prototype. The team selected the final features, wrote and revised the content, connected components together, adjusted visual design, tested interactions, and prepared the deployed version.
