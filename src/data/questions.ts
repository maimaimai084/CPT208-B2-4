// Question Type Definition
export interface QuestionOption {
  text: string;
  learning: number;
  task: number;
  hint?: string; // Hint after answering
}

export interface Question {
  id: string;
  stageId: string;
  type: 'confused' | 'sprint' | 'both'; // Adapt to user type
  question: string;
  character?: string; // Mentor/character prompt
  characterAvatar?: string;
  options: QuestionOption[];
  correctIndex?: number; // Optional standard answer for true/false questions
}

// Question Bank for 5 Stages
export const QUESTIONS: Question[] = [
  // ==================== Stage 1: School Selection & Major Matching ====================
  {
    id: 'q1-1',
    stageId: 'level-1',
    type: 'confused',
    question: 'You are a sophomore with no direction for postgraduate applications. Faced with multiple options like the UK, US, Hong Kong, what should you do first?',
    character: 'Development Advisor',
    characterAvatar: '👨‍🏫',
    options: [
      {
        text: 'First determine your desired major, then consider the country',
        learning: 15,
        task: 5,
        hint: 'Correct! Confused students should first clarify their major direction, which is the foundation of school selection.'
      },
      {
        text: 'Only look at QS rankings and apply to the highest-ranked schools',
        learning: 5,
        task: 0,
        hint: 'Not recommended. Focusing only on rankings may ignore major compatibility and personal interests.'
      },
      {
        text: 'Follow the crowd and apply where your classmates apply',
        learning: 0,
        task: 0,
        hint: 'Not recommended. Postgraduate applications are personal choices based on your own situation.'
      }
    ]
  },
  {
    id: 'q1-2',
    stageId: 'level-1',
    type: 'sprint',
    question: 'You have decided to apply for CS, but your GPA is 3.3 (not top-tier). For IC and UCL in the UK G5, and US Top 30, how should you formulate your school selection strategy?',
    character: 'Senior Student',
    characterAvatar: '👨‍🎓',
    options: [
      {
        text: 'Mainly target US Top 30, use UK as safety schools',
        learning: 10,
        task: 5,
        hint: 'Risky. UK G5 are not "safety schools", and application strategies differ greatly. Mixed UK-US applications with reasonable allocation are recommended.'
      },
      {
        text: 'CS at IC and UCL is highly competitive; check specific curriculum and admission data, and select 2-3 matching schools',
        learning: 15,
        task: 10,
        hint: 'Great! Sprint students need precise positioning. Researching specific program requirements is more important than blind targeting.'
      },
      {
        text: 'Only apply to the UK because the US requires GRE which is troublesome',
        learning: 5,
        task: 0,
        hint: 'Too conservative. Sprint students should challenge higher goals, and GRE is not an insurmountable obstacle.'
      }
    ]
  },
  {
    id: 'q1-3',
    stageId: 'level-1',
    type: 'both',
    question: 'When selecting schools, which of the following factors should NOT be the main basis for your decision?',
    character: 'Mentor',
    characterAvatar: '👩‍🏫',
    options: [
      {
        text: 'Overall school ranking and major ranking',
        learning: 5,
        task: 0,
        hint: 'Rankings are a reference factor, not something to ignore entirely.'
      },
      {
        text: 'School location and climate',
        learning: 5,
        task: 5,
        hint: 'Although important, this should not be the main basis compared to academic resources.'
      },
      {
        text: 'Choosing an uninteresting major just because the school is easy to get into for "safety"',
        learning: 15,
        task: 10,
        hint: 'Correct! Applying for an uninteresting major just for admission is a common mistake that harms future development.'
      }
    ]
  },

  // ==================== Stage 2: Document Preparation ====================
  {
    id: 'q2-1',
    stageId: 'level-2',
    type: 'confused',
    question: 'Your target UK and US programs require sealed transcript packets plus digital uploads. The school office has a 7-10 day queue and deadlines are close. What is the best strategy?',
    character: 'Academic Affairs Teacher',
    characterAvatar: '👩‍💼',
    options: [
      {
        text: 'Ask your counselor directly and wait for ad-hoc processing',
        learning: 5,
        task: 0,
        hint: 'Risky and inefficient. Informal channels are unstable and may miss hard deadlines.'
      },
      {
        text: 'Submit formal requests via the official system first, create a per-school deadline tracker, then schedule stamping and courier dispatch in batches',
        learning: 15,
        task: 10,
        hint: 'Correct. Parallel planning (request + logistics + tracking) is what prevents last-minute failure.'
      },
      {
        text: 'Wait until all recommendation letters are ready, then start transcript prep',
        learning: 0,
        task: 0,
        hint: 'Incorrect. Transcript and recommendation workflows are independent; delaying one blocks the whole pipeline.'
      }
    ]
  },
  {
    id: 'q2-2',
    stageId: 'level-2',
    type: 'sprint',
    question: 'A famous professor agreed to sign but barely knows your work; your TA supervised your project deeply but lacks title weight. Which recommendation plan is strongest?',
    character: 'Application Mentor',
    characterAvatar: '🧑‍🏫',
    options: [
      {
        text: 'Use only the professor letter because title always beats content',
        learning: 10,
        task: 5,
        hint: 'Not optimal. A generic high-title letter often underperforms against a specific evidence-based letter.'
      },
      {
        text: 'Use only the TA letter because details matter more than everything else',
        learning: 10,
        task: 10,
        hint: 'Partially right, but committee perception still values referee seniority in many programs.'
      },
      {
        text: 'Build a co-authored workflow: TA drafts evidence-rich content, professor validates and signs, and you provide a concise achievement brief',
        learning: 15,
        task: 15,
        hint: 'Best answer. This combines credibility and specificity while reducing referee workload.'
      }
    ]
  },
  {
    id: 'q2-3',
    stageId: 'level-2',
    type: 'both',
    question: 'Two US programs require credential evaluation (WES/ECE), while UK programs do not. Which action is most correct under tight timelines?',
    character: 'Study Abroad Advisor',
    characterAvatar: '👨‍💼',
    options: [
      {
        text: 'Authenticate everything immediately for all countries to be safe',
        learning: 5,
        task: 0,
        hint: 'Inefficient and costly. Authentication should follow program-specific requirements.'
      },
      {
        text: 'Create a requirement matrix by program, launch evaluations only for required schools, and reserve 3-6 weeks buffer for verification delays',
        learning: 15,
        task: 15,
        hint: 'Correct. Requirement mapping + buffer time is the professional approach.'
      },
      {
        text: 'Delay evaluation until decisions arrive to avoid unnecessary spending',
        learning: 0,
        task: 0,
        hint: 'Too late for many deadlines. Late evaluations can invalidate otherwise strong applications.'
      }
    ]
  },

  // ==================== Stage 3: Personal Statement Writing ====================
  {
    id: 'q3-1',
    stageId: 'level-3',
    type: 'confused',
    question: 'For a competitive Data Science PS, which opening is the weakest for top programs?',
    character: 'Personal Statement Mentor',
    characterAvatar: '👩‍💻',
    options: [
      {
        text: '"Since childhood I have always loved technology and innovation..."',
        learning: 15,
        task: 5,
        hint: 'Correct. Generic childhood passion claims are overused and low-information.'
      },
      {
        text: 'Open with a concrete project problem, your methodological choice, and the resulting insight that motivated graduate study',
        learning: 10,
        task: 10,
        hint: 'Strong opening: evidence-based and directly tied to academic motivation.'
      },
      {
        text: 'Briefly anchor with one advanced course, then pivot to how it exposed a real research gap you want to pursue',
        learning: 10,
        task: 5,
        hint: 'Acceptable if written tightly; still weaker than project-first storytelling.'
      }
    ]
  },
  {
    id: 'q3-2',
    stageId: 'level-3',
    type: 'sprint',
    question: 'You are applying to Data Science programs emphasizing reproducibility and impact. Which experience deserves the deepest PS space?',
    character: 'Admissions Officer',
    characterAvatar: '🧑‍💼',
    options: [
      {
        text: 'A high school math award that first sparked your confidence',
        learning: 5,
        task: 5,
        hint: 'Low priority evidence for graduate applications unless directly tied to recent excellence.'
      },
      {
        text: 'A recent end-to-end project with data cleaning decisions, model validation, error analysis, and stakeholder-facing interpretation',
        learning: 15,
        task: 15,
        hint: 'Best choice. It demonstrates technical depth, rigor, and communication impact.'
      },
      {
        text: 'General leadership in student organizations without technical deliverables',
        learning: 5,
        task: 5,
        hint: 'Useful as supporting evidence, but not your PS core for a technical degree.'
      }
    ]
  },
  {
    id: 'q3-3',
    stageId: 'level-3',
    type: 'both',
    question: 'For graduate CV optimization, which statement is most problematic?',
    character: 'Career Development Advisor',
    characterAvatar: '👨‍💼',
    options: [
      {
        text: 'Keep CV concise (typically 1-2 pages for taught master applications)',
        learning: 5,
        task: 0,
        hint: 'This is the correct practice.'
      },
      {
        text: 'Use visually flashy templates and icons to make your CV stand out',
        learning: 15,
        task: 10,
        hint: 'Correct. Academic CVs should prioritize readability, evidence hierarchy, and professionalism.'
      },
      {
        text: 'Tailor bullet points by program focus (research-heavy vs industry-heavy)',
        learning: 5,
        task: 5,
        hint: 'This is the correct practice.'
      }
    ]
  },

  // ==================== Stage 4: Application Submission ====================
  {
    id: 'q4-1',
    stageId: 'level-4',
    type: 'confused',
    question: 'You\'re ready to submit applications but don\'t know how many schools to apply for in one season. As a sophomore, what\'s the best advice?',
    character: 'Senior Student',
    characterAvatar: '👨‍🎓',
    options: [
      {
        text: 'The more the better, apply to 20 schools to increase admission chances',
        learning: 5,
        task: 0,
        hint: 'Too many. Application fees are expensive and energy is limited; quality matters more than quantity.'
      },
      {
        text: '8-10 schools, divided into target, match, and safety tiers',
        learning: 15,
        task: 10,
        hint: 'Reasonable range! Confused students need a certain number to spread risk.'
      },
      {
        text: 'Only apply to 3 dream schools',
        learning: 5,
        task: 5,
        hint: 'Too risky for confused students; more applications are recommended to explore options.'
      }
    ]
  },
  {
    id: 'q4-2',
    stageId: 'level-4',
    type: 'sprint',
    question: 'You find a paragraph in your PS can be reused for multiple schools during online application, but the ending needs customization. What should you do?',
    character: 'Application Expert',
    characterAvatar: '🧑‍💻',
    options: [
      {
        text: 'To save time, only change the school name and keep other content',
        learning: 0,
        task: 0,
        hint: 'Dangerous! Admissions officers can spot templates, which may lead to direct rejection.'
      },
      {
        text: 'Rewrite the entire PS for each school to ensure uniqueness',
        learning: 10,
        task: 15,
        hint: 'Ideal but inefficient. Sprint students should balance quality and efficiency.'
      },
      {
        text: 'Keep core experience descriptions, but deeply research each program\'s curriculum, professors and research for the "Why This School" section',
        learning: 15,
        task: 15,
        hint: 'Best practice! Show your knowledge of each school—key for applying to top universities.'
      }
    ]
  },
  {
    id: 'q4-3',
    stageId: 'level-4',
    type: 'both',
    question: 'How long after application submission can you send a follow-up email if you haven\'t received a reply?',
    character: 'Admissions Office',
    characterAvatar: '👩‍💻',
    options: [
      {
        text: 'Follow up after 1 week of no reply',
        learning: 0,
        task: 0,
        hint: 'Too urgent. Reviews take time; frequent follow-ups leave a bad impression.'
      },
      {
        text: 'Politely inquire after 6-8 weeks',
        learning: 15,
        task: 10,
        hint: 'Correct! This is a reasonable waiting time—shows interest without being disruptive.'
      },
      {
        text: 'Never follow up, just wait',
        learning: 5,
        task: 5,
        hint: 'If beyond the official timeline, a proper inquiry is acceptable.'
      }
    ]
  },

  // ==================== Stage 4b: Interview Preparation ====================
  {
    id: 'q5-1',
    stageId: 'level-4',
    type: 'confused',
    question: 'You received your first interview invitation and are very nervous. Which preparation method should you NOT do?',
    character: 'Interview Mentor',
    characterAvatar: '👩‍🏫',
    options: [
      {
        text: 'Memorize every detail on your PS and CV',
        learning: 10,
        task: 5,
        hint: 'This is essential preparation.'
      },
      {
        text: 'Prepare "universal answers" and use the same examples for any question',
        learning: 15,
        task: 5,
        hint: 'Correct! Interviews are interactive; rigid answers will be noticed—respond flexibly.'
      },
      {
        text: 'Practice mock interviews with friends',
        learning: 5,
        task: 10,
        hint: 'This is an excellent preparation method.'
      }
    ]
  },
  {
    id: 'q5-2',
    stageId: 'level-4',
    type: 'sprint',
    question: 'The interviewer asks: "Which other schools have you applied to? If all accept you, how will you choose?" What should you do?',
    character: 'Admissions Officer',
    characterAvatar: '🧑‍💼',
    options: [
      {
        text: 'Honestly say I applied to XX and XX, and I will definitely choose you if accepted because... (specific reasons)',
        learning: 15,
        task: 15,
        hint: 'Honest and persuasive! Show your knowledge of the school and strong interest—this is the confidence sprint students need.'
      },
      {
        text: 'I only applied to your school',
        learning: 0,
        task: 0,
        hint: 'Obvious lie. Admissions officers know students apply to multiple schools; dishonesty is a major red flag.'
      },
      {
        text: 'Avoid the question and say you haven\'t decided which to apply to',
        learning: 5,
        task: 5,
        hint: 'Avoidance shows poor preparation and no interest in the school.'
      }
    ]
  },
  {
    id: 'q5-3',
    stageId: 'level-4',
    type: 'both',
    question: 'Regarding interview etiquette, which statement is correct?',
    character: 'Career Development Advisor',
    characterAvatar: '👨‍💼',
    options: [
      {
        text: 'For online interviews, you can only wear formal clothes on the top half; pajama pants are fine for the bottom',
        learning: 5,
        task: 0,
        hint: 'Too risky. Embarrassing if you need to stand up or the camera shifts unexpectedly.'
      },
      {
        text: 'Enter the meeting room 10 minutes early to test equipment',
        learning: 15,
        task: 10,
        hint: 'Correct! Technical issues are common in online interviews; early preparation shows professionalism.'
      },
      {
        text: 'Close the video immediately after the interview',
        learning: 5,
        task: 5,
        hint: 'Wait for the interviewer to end first, or say goodbye politely and wait a few seconds.'
      }
    ]
  },

  // ==================== Stage 5a: Visa Preparation ====================
  {
    id: 'q6-1',
    stageId: 'level-5',
    type: 'confused',
    question: 'You received your first offer and need to apply for a student visa. Where should you start?',
    character: 'Visa Advisor',
    characterAvatar: '🛂',
    options: [
      {
        text: 'Wait until the last minute before departure to apply',
        learning: 0,
        task: 0,
        hint: 'Too risky. Visa processing can take weeks or even months. Start early!'
      },
      {
        text: 'Check the official embassy website for the latest document checklist and timeline',
        learning: 15,
        task: 10,
        hint: 'Correct! Official sources are the most reliable. Requirements change frequently.'
      },
      {
        text: 'Ask a travel agency to handle everything without reviewing the requirements yourself',
        learning: 5,
        task: 0,
        hint: 'Agencies can help, but you must understand your own visa requirements. You are responsible for your application.'
      }
    ]
  },
  {
    id: 'q6-2',
    stageId: 'level-5',
    type: 'sprint',
    question: 'Your target country requires proof of funds covering tuition + living expenses. What is the best preparation strategy?',
    character: 'Financial Advisor',
    characterAvatar: '💰',
    options: [
      {
        text: 'Deposit a large sum one week before visa application',
        learning: 0,
        task: 0,
        hint: 'Red flag! Sudden large deposits look suspicious. Funds should be seasoned for several months.'
      },
      {
        text: 'Prepare bank statements showing consistent funds over 3-6 months; include scholarship letters if applicable',
        learning: 15,
        task: 15,
        hint: 'Excellent! Demonstrating financial stability over time is the key to visa approval.'
      },
      {
        text: 'Borrow money temporarily and return it after getting the visa',
        learning: 0,
        task: 0,
        hint: 'Never do this. Visa fraud can lead to permanent bans. Always use legitimate funds.'
      }
    ]
  },
  {
    id: 'q6-3',
    stageId: 'level-5',
    type: 'both',
    question: 'Regarding visa interviews, which statement is correct?',
    character: 'Consular Officer',
    characterAvatar: '👮',
    options: [
      {
        text: 'Memorize scripted answers to guarantee approval',
        learning: 0,
        task: 0,
        hint: 'Consular officers can spot rehearsed answers. Be genuine and natural.'
      },
      {
        text: 'Dress professionally, answer honestly, and clearly explain your study plans and post-graduation intentions',
        learning: 15,
        task: 10,
        hint: 'Correct! Credibility and clear intent are the most important factors.'
      },
      {
        text: 'Bring as many documents as possible to overwhelm the officer',
        learning: 5,
        task: 5,
        hint: 'Quality over quantity. Only bring required and relevant documents.'
      }
    ]
  },

  // ==================== Stage 2b: Scholarship & Funding ====================
  {
    id: 'q7-1',
    stageId: 'level-2',
    type: 'confused',
    question: 'You want to reduce tuition burden through scholarships but do not know where to look. What should you do first?',
    character: 'Scholarship Mentor',
    characterAvatar: '🎓',
    options: [
      {
        text: 'Only apply for one famous full scholarship and hope for the best',
        learning: 5,
        task: 0,
        hint: 'Too risky. Apply broadly to multiple scholarships at different tiers.'
      },
      {
        text: 'Check the university\'s financial aid page, external databases like ScholarshipPortal, and government programs',
        learning: 15,
        task: 10,
        hint: 'Correct! Scholarships come from many sources—cast a wide net.'
      },
      {
        text: 'Assume your GPA is too low for any scholarship and give up',
        learning: 0,
        task: 0,
        hint: 'Many scholarships consider leadership, community service, and unique backgrounds beyond GPA.'
      }
    ]
  },
  {
    id: 'q7-2',
    stageId: 'level-2',
    type: 'sprint',
    question: 'A scholarship requires a separate essay besides your PS. How should you approach it?',
    character: 'Essay Reviewer',
    characterAvatar: '📝',
    options: [
      {
        text: 'Copy and paste your PS with minor edits',
        learning: 0,
        task: 0,
        hint: 'Scholarship essays have different prompts and evaluation criteria. Generic answers will be rejected.'
      },
      {
        text: 'Address the specific prompt, highlight leadership and impact, and align with the scholarship\'s mission',
        learning: 15,
        task: 15,
        hint: 'Perfect! Scholarship committees look for candidates who embody their values.'
      },
      {
        text: 'Focus entirely on financial need without mentioning achievements',
        learning: 5,
        task: 5,
        hint: 'Financial need matters, but merit and potential are equally important for competitive scholarships.'
      }
    ]
  },
  {
    id: 'q7-3',
    stageId: 'level-2',
    type: 'both',
    question: 'You have been invited to a scholarship interview. Which preparation is most important?',
    character: 'Panel Interviewer',
    characterAvatar: '🎤',
    options: [
      {
        text: 'Emphasize how much you need the money',
        learning: 5,
        task: 0,
        hint: 'Need alone is not compelling. Show how you will use the opportunity to create impact.'
      },
      {
        text: 'Research past recipients, understand the scholarship goals, and prepare concrete examples of your contributions',
        learning: 15,
        task: 10,
        hint: 'Correct! Understanding the scholarship\'s purpose and showing fit is key.'
      },
      {
        text: 'Wear the most expensive suit to impress the panel',
        learning: 0,
        task: 0,
        hint: 'Professional attire is good, but substance and authenticity matter far more than appearance.'
      }
    ]
  },

  // ==================== Stage 3b: Research Proposal & Cold Email ====================
  {
    id: 'q8-1',
    stageId: 'level-3',
    type: 'confused',
    question: 'You are considering a research-based master\'s but have never written a Research Proposal (RP). What is your first step?',
    character: 'Research Mentor',
    characterAvatar: '🔬',
    options: [
      {
        text: 'Write a generic RP and send it to every professor',
        learning: 0,
        task: 0,
        hint: 'Generic proposals show lack of effort. Each RP should be tailored to the program and potential advisor.'
      },
      {
        text: 'Read recent papers from your target department and identify a research gap you are genuinely interested in',
        learning: 15,
        task: 10,
        hint: 'Correct! A good RP starts with understanding the current research landscape.'
      },
      {
        text: 'Hire a ghostwriter to create the RP for you',
        learning: 0,
        task: 0,
        hint: 'Academic dishonesty can lead to severe consequences. Your RP must reflect your own ideas and ability.'
      }
    ]
  },
  {
    id: 'q8-2',
    stageId: 'level-3',
    type: 'sprint',
    question: 'You want to reach out to a potential advisor via cold email. Which approach is most effective?',
    character: 'Professor',
    characterAvatar: '👨‍🏫',
    options: [
      {
        text: 'Send a long email detailing your entire life story and attach 10 files',
        learning: 0,
        task: 0,
        hint: 'Professors are busy. Long emails get ignored. Be concise and respectful of their time.'
      },
      {
        text: 'Keep it under 200 words, mention their specific paper, explain your relevant skills, and attach a concise CV',
        learning: 15,
        task: 15,
        hint: 'Excellent! Personalized, concise emails that show genuine interest get the best response rates.'
      },
      {
        text: 'Email the department head asking them to assign you an advisor',
        learning: 5,
        task: 0,
        hint: 'Proactive outreach to specific advisors shows initiative. Generic requests to admin are less effective.'
      }
    ]
  },
  {
    id: 'q8-3',
    stageId: 'level-3',
    type: 'both',
    question: 'A strong Research Proposal should include which core components?',
    character: 'Graduate Coordinator',
    characterAvatar: '📑',
    options: [
      {
        text: 'Only a detailed methodology section',
        learning: 5,
        task: 0,
        hint: 'Methodology is important, but context and significance are equally necessary.'
      },
      {
        text: 'Research background, literature review, research questions, methodology, timeline, and expected outcomes',
        learning: 15,
        task: 10,
        hint: 'Correct! A comprehensive RP demonstrates your ability to plan and execute research.'
      },
      {
        text: 'A list of all courses you have taken',
        learning: 0,
        task: 0,
        hint: 'Course lists belong in transcripts, not research proposals.'
      }
    ]
  },

  // ==================== Stage 5b: Offer Decision ====================
  {
    id: 'q9-1',
    stageId: 'level-5',
    type: 'confused',
    question: 'You received multiple offers and feel overwhelmed. How should you begin comparing them?',
    character: 'Decision Coach',
    characterAvatar: '🧭',
    options: [
      {
        text: 'Choose the highest-ranked school without considering other factors',
        learning: 5,
        task: 0,
        hint: 'Rankings matter, but fit, cost, location, and career outcomes are equally important.'
      },
      {
        text: 'Create a weighted comparison matrix including ranking, cost, location, career services, and personal fit',
        learning: 15,
        task: 10,
        hint: 'Correct! A structured approach reduces emotion and clarifies priorities.'
      },
      {
        text: 'Let your parents decide for you',
        learning: 0,
        task: 0,
        hint: 'Advice is helpful, but this is your education and career. You should own the decision.'
      }
    ]
  },
  {
    id: 'q9-2',
    stageId: 'level-5',
    type: 'sprint',
    question: 'You must choose between a top-10 school with no funding and a top-30 school with a full scholarship. How do you decide?',
    character: 'Alumni Mentor',
    characterAvatar: '⚖️',
    options: [
      {
        text: 'Always choose the higher-ranked school regardless of cost',
        learning: 5,
        task: 0,
        hint: 'Prestige has value, but debt burden and financial stress can impact your experience and outcomes.'
      },
      {
        text: 'Analyze ROI: compare total cost, alumni network strength, average salary by program, and your financial situation',
        learning: 15,
        task: 15,
        hint: 'Smart! Data-driven decisions considering long-term financial and career impact are optimal.'
      },
      {
        text: 'Choose the scholarship because free education is always better',
        learning: 5,
        task: 5,
        hint: 'Cost matters, but program fit and career alignment should not be ignored.'
      }
    ]
  },
  {
    id: 'q9-3',
    stageId: 'level-5',
    type: 'both',
    question: 'You received a conditional offer requiring you to submit your final transcript with a specific GPA. What should you do?',
    character: 'Admissions Officer',
    characterAvatar: '📋',
    options: [
      {
        text: 'Ignore the conditions and focus on celebrating',
        learning: 0,
        task: 0,
        hint: 'Conditional offers are binding. Failing to meet conditions can result in offer revocation.'
      },
      {
        text: 'Prioritize maintaining the required GPA, submit documents before the deadline, and confirm receipt with admissions',
        learning: 15,
        task: 10,
        hint: 'Correct! Proactive communication and meeting conditions protect your offer.'
      },
      {
        text: 'Assume the conditions are just a formality and will not be checked',
        learning: 0,
        task: 0,
        hint: 'Universities definitely verify conditions. Do not jeopardize your admission.'
      }
    ]
  },

  // ==================== Stage 5c: Pre-departure & Enrollment ====================
  {
    id: 'q10-1',
    stageId: 'level-5',
    type: 'confused',
    question: 'You have an unconditional offer and need to prepare for departure. What should be your top priority?',
    character: 'Pre-departure Advisor',
    characterAvatar: '✈️',
    options: [
      {
        text: 'Buy the cheapest flight available immediately',
        learning: 5,
        task: 0,
        hint: 'Flight price matters, but arrival timing relative to orientation and housing move-in is more important.'
      },
      {
        text: 'Secure accommodation, register for orientation, arrange health insurance, and create a pre-departure checklist',
        learning: 15,
        task: 10,
        hint: 'Correct! Systematic preparation prevents last-minute crises.'
      },
      {
        text: 'Wait until one week before departure to start preparing',
        learning: 0,
        task: 0,
        hint: 'Too late. Housing, insurance, and visas all require advance planning.'
      }
    ]
  },
  {
    id: 'q10-2',
    stageId: 'level-5',
    type: 'sprint',
    question: 'How can you maximize the value of the summer before graduate school starts?',
    character: 'Career Strategist',
    characterAvatar: '🚀',
    options: [
      {
        text: 'Travel and relax completely; you have worked hard enough',
        learning: 5,
        task: 5,
        hint: 'Rest is important, but complete disengagement wastes a valuable preparation window.'
      },
      {
        text: 'Review foundational courses, learn tools/software you will need, and connect with future classmates online',
        learning: 15,
        task: 15,
        hint: 'Excellent! Hitting the ground running gives you a significant advantage in your first semester.'
      },
      {
        text: 'Start a full-time job to save money',
        learning: 5,
        task: 5,
        hint: 'Saving money is good, but burnout before school starts can hurt your performance.'
      }
    ]
  },
  {
    id: 'q10-3',
    stageId: 'level-5',
    type: 'both',
    question: 'Regarding accommodation and pre-departure arrangements, which approach is most correct?',
    character: 'International Student Office',
    characterAvatar: '🏠',
    options: [
      {
        text: 'Book temporary housing after arrival and look for permanent housing later',
        learning: 5,
        task: 0,
        hint: 'Risky in competitive housing markets. Secure housing before arrival when possible.'
      },
      {
        text: 'Research university housing, off-campus options, and local rental laws; book early and join student groups for advice',
        learning: 15,
        task: 10,
        hint: 'Correct! Early planning and peer networks help you find safe, affordable housing.'
      },
      {
        text: 'Choose housing based only on Instagram photos without reading reviews',
        learning: 0,
        task: 0,
        hint: 'Photos can be misleading. Read reviews, check distances, and verify contracts carefully.'
      }
    ]
  }
];

// Get questions by stage and user type
export function getQuestionsByLevel(levelId: string, userType: 'confused' | 'sprint'): Question[] {
  // Filter questions for the corresponding stage
  const levelQuestions = QUESTIONS.filter(q => q.stageId === levelId);

  // Filter questions suitable for the user type (both type fits all)
  const filtered = levelQuestions.filter(q =>
    q.type === 'both' || q.type === userType
  );

  // If no specific questions for this stage, return general questions (fallback)
  if (filtered.length === 0) {
    return QUESTIONS.filter(q => q.stageId === 'level-2'); // Default to stage 2 questions
  }

  return filtered;
}

// Get a single question by ID
export function getQuestionById(id: string): Question | undefined {
  return QUESTIONS.find(q => q.id === id);
}
