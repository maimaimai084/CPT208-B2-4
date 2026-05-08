# AI Coding Logs & Technical Reflection

This folder documents the primary prompts used for AI-assisted coding in the **MasterApply Quest** project. In accordance with the CPT208 coursework policy, this log focuses on **vibe coding** and **assisted scripting** for functional implementation, while all core design logic and human-centric justifications remain the original work of the team.

---

## 1. Mandatory AI Citation

**Tool:** ChatGPT (OpenAI), version GPT-4o
**Access Date:** 2026-04-15
**URL:** [https://chat.openai.com](https://chat.openai.com)
**Detailed Usage:** Used for **vibe coding** the system's Vue 3 component scaffolding, debugging complex UI logic, and refining responsive Tailwind CSS layouts.



## 2. Technical Reflection & Policy Compliance

### 2.1 How We Verified AI-Generated Code
To ensure the system met user requirements:
* **Peer Review:** Every AI-assisted component was reviewed by at least 2 team members before being merged to ensure code quality.
* **User Testing:** Functional modules (LV/TV economy and mini-games) were tested by 4 real users during development，for example, two DAs and two students. Their feedback was used to manually adjust the design and implementation.
* **Visual Validation:** Components like the **Knowledge Tree** were manually verified across multiple screen sizes to ensure responsive accuracy after AI fixes.

### 2.2 Ethical and Accessibility Considerations
Our team prioritized Human-Centric Design principles:
* **Accessibility:** All UI components follow basic web accessibility standards, including sufficient color contrast and semantic HTML.
* **Bias Mitigation:** We manually audited role descriptions to ensure they are free from cultural bias. Data for university requirements was sourced from official, primary academic links.
* **Human Oversight:** AI-generated code was screened for hard-coded biases, and all user-facing text was manually edited by the team.



## 3. Development Phase Logs (Prompts)

### Phase 1: Project Setup 
**Prompt 1.1 (Router & Deployment):**
- 我在搭一个 Vue 3 + Vite 的项目，要部署到 GitHub Pages。帮我配一下 Vue Router，用 hash history。页面有这些：intro, users, process, prototype, evaluation, conclusion，还有一个单独的 /demo 页面。demo 页面不需要显示 portfolio 的导航栏。router 怎么写比较好？顺便帮我看看 vite.config 的 base 路径怎么设比较好。

**How it was used:** AI provided the base router structure. We manually added route guards to hide the nav on the demo page and set the Vite base path for sub-directory hosting.

### Phase 2: Portfolio Pages (作品集页面)
**Prompt 2.1 (Home Page Layout):**
- 帮我写一个 portfolio 首页，用 Tailwind CSS。上面是 logo 和项目标题，两个按钮，一个跳 portfolio 一个跳 demo，下面是 6 个模块卡片，再下面是团队成员区域和个人贡献表格。Footer 写 CPT208 2026 就行。响应式，手机上卡片要单列。

**How it was used:** AI provided the initial responsive grid layout. We manually replaced the placeholder text with our real research data, added the project logo, and fine-tuned the hover effects on the module cards to make them more playful.

**Prompt 2.2 (Content Templates):**
- 帮我做几个内容页面的通用模板。每个页面需要标题区，包括模块名和编号，下面放文字、图片、表格。要有一个侧边导航或者锚点跳转。风格跟首页统一。

**How it was used:** AI suggested a reusable `ModuleHeader` and `TableOfContents` component. We integrated these into each process page and manually added custom image-zoom logic for our design sketches.

### Phase 3: Core Game Demo (核心功能实现)
**Prompt 3.1 (Role Selection):**
- 我设计了一个角色选择页面，用户可以选 Explorer 或 Sprint 两个角色。帮我用 Vue 3 Composition API 实现这个组件：角色卡片要有颜色主题，名字输入框和确认按钮。选好的结果存 localStorage，然后 emit 一个 role-confirmed 事件给父组件。

**How it was used:** AI provided the functional scaffolding. We manually adjusted the role descriptions to ensure they accurately represented our user personas and added bilingual support，such as Chinese and English,  for the instructions.

**Prompt 3.2 (Game Dashboard):**
- 游戏 demo 的主页需要一个 tab 导航切换模块。上面是玩家信息，角色、名字、LV 和 TV 数值，下面是 tab 按钮。帮我实现 tab 切换逻辑，用动态组件渲染。状态都在父组件里管理，存 localStorage。

**How it was used:** AI implemented the `component :is` dynamic rendering. We connected all sub-modules (Quiz, Store, Q&A) to this dashboard and manually added the auto-save logic to trigger whenever a child component emits a change.

**Prompt 3.3 (Quiz Interface):**
- 帮我写一个 Vue 3 的问答组件。显示题目卡片，三个选项，点选后翻转卡片显示反馈。答对给 LV 奖励，答完一关 emit 完成事件。做一个提示功能，可以用一个 hint token 删掉一个错误选项。

**How it was used:** AI provided the card-flip animation logic. We manually linked this to our `questions.ts` data file and adjusted the reward calculation algorithm to ensure the game economy remained balanced.

**Prompt 3.4 (Economy System Logic):**
- 我已经设计好了游戏的双货币系统：LV 升级装备，GPA, IELTS 等，TV 买道具：回复心、提示卡。帮我实现 GearShop 和 TVStore 组件。GearShop 显示装备等级和费用，TVStore 显示商品列表和购买限制。用 computed 算费用，用 emit 通知父组件。

**How it was used:** AI provided the component structure and computed properties for cost calculations. We manually added the daily purchase limits, item descriptions, and a confirmation modal to prevent accidental purchases.

**Prompt 3.5 (Q&A Form Prototype):**
- 帮我在 Vue 3 里做一个问答表单组件。学生提交问题前要扣掉一个提问次数。表单有姓名、类别、问题内容。提交后存到 localStorage 历史列表里，显示状态标签：待回答或者已回答。预设一些示例回复。

**How it was used:** AI handled the form submission and local storage logic. We manually customized the question categories to match real postgraduate application scenarios and styled the status badges, Pending or Answered,with custom CSS.

### Phase 4: Mini-Games & Progression (小游戏与进度)
**Prompt 4.1 (Mini-Game Framework):**
- 我们设计了 6 个小游戏模块，每个玩法不同。帮我做一个通用的小游戏框架组件：接受难度 prop，有进度条和计时器，完成时 emit 得分和奖励。具体的游戏内容我们自己填，你帮我写好框架的 props 和布局模板就行。

**How it was used:** Using this AI-generated framework, our team manually built 6 unique mini-games (Timeline, Matcher, etc.). We wrote the specific rules, data, and feedback text for each game individually.

**Prompt 4.2 (Progression System):**
- 游戏需要每日/每周任务和成就系统。我已经设计好了规则。帮我实现：数据结构怎么组织，每日自动重置逻辑，不同角色进度分开存，解锁时弹奖励通知。全部用 localStorage。

**How it was used:** AI suggested the data structure for `achievements.ts`. We manually defined the trigger conditions for 15+ badges and implemented the timestamp-based reset logic to ensure daily tasks refresh correctly.

**Prompt 4.3 (Knowledge Tree Fix):**
- 我的 KnowledgeTree 组件里，叶子应该沿着贝塞尔曲线长，但现在位置偏了。帮我看看 getPointOnQuadratic Bezier 函数，应该是法线方向的偏移算错了。顺便加点随机抖动让它自然一点。

**How it was used:** AI corrected the mathematical formula for the curve's normal vector. We manually fine-tuned the "jitter" parameters and added CSS transitions to make the leaves appear to "grow" smoothly when unlocked.

### Phase 5: Polish & Debug (优化与调试)
**Prompt 5.1 (Responsive Polish):**
- 项目在手机上显示有问题，按钮太小、表格溢出。帮我过一遍主要组件的 Tailwind 类，建议怎么改响应式。重点看 GameDemo 的 tab 栏和各个数据表格。

**How it was used:** AI identified several grid and flexbox issues. We manually applied `flex-wrap` to the navigation and converted complex data tables into scrollable card views for mobile users.

**Prompt 5.2 (Data Migration):**
- 我给游戏加了新字段，但老用户 localStorage 还是旧结构会报错。帮我写个 load 函数，读取时检查有没有新字段，没有就补默认值，别覆盖用户已有的进度。

**How it was used:** AI provided an object-merge function. We integrated this into our `loadProgress` utility to ensure that returning users would not lose their saved "Quest" status when we added new features.

**Prompt 5.3 (Deployment Debug):**
- npm run build 之后部署到 GitHub Pages，图片路径全报错。帮我看看 vite.config 和图片引用路径。还有 hash router 在 GitHub Pages 上刷新会 404 的问题。

**How it was used:** AI pointed out that absolute paths like `/images/` do not work on GitHub sub-directories. We updated our configuration and manually refactored our asset imports to use relative paths.


## 4. Final Integrity Declaration
All project motivations, research findings, stakeholders' personas, and design alternatives were defined solely by the group. AI was used strictly as a technical assistant for code implementation and debugging of these human-led decisions.