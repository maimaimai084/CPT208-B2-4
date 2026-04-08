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
    question: 'You need to prepare an enrollment certificate and transcript but don\'t know the process. Which approach is most correct?',
    character: 'Academic Affairs Teacher',
    characterAvatar: '👩‍💼',
    options: [
      {
        text: 'Ask your counselor directly for the certificate',
        learning: 5,
        task: 0,
        hint: 'Not entirely correct. XJTLU has a dedicated academic system application process.'
      },
      {
        text: 'Log in to e-Bridge to download the electronic version, then go to the administration building for stamping',
        learning: 15,
        task: 10,
        hint: 'Correct! Familiarity with the school system is a basic skill for sophomores.'
      },
      {
        text: 'Wait until application time to prepare; it\'s too early now',
        learning: 0,
        task: 0,
        hint: 'Documents need to be prepared in advance, especially those requiring translation and notarization.'
      }
    ]
  },
  {
    id: 'q2-2',
    stageId: 'level-2',
    type: 'sprint',
    question: 'Your professor is busy but has a high title; your TA knows you well but is junior. What\'s your recommendation letter strategy?',
    character: 'Application Mentor',
    characterAvatar: '🧑‍🏫',
    options: [
      {
        text: 'Choose the professor, because admissions officers value the recommender\'s academic status more',
        learning: 10,
        task: 5,
        hint: 'Partially true, but a vague letter from a professor is counterproductive.'
      },
      {
        text: 'Choose the TA, because they can write specific details and examples',
        learning: 10,
        task: 10,
        hint: 'Specific details matter, but it\'s better to have the TA write under the professor\'s guidance or co-sign.'
      },
      {
        text: 'Ask the professor and TA to collaborate: professor signs, TA provides content',
        learning: 15,
        task: 15,
        hint: 'Optimal strategy! Sprint students should prioritize recommendation letter quality over just title.'
      }
    ]
  },
  {
    id: 'q2-3',
    stageId: 'level-2',
    type: 'both',
    question: 'Regarding transcript authentication (WES), which statement is correct?',
    character: 'Study Abroad Advisor',
    characterAvatar: '👨‍💼',
    options: [
      {
        text: 'All UK schools require WES authentication',
        learning: 5,
        task: 0,
        hint: 'Incorrect. Most UK schools do not require WES; some US schools do.'
      },
      {
        text: 'WES authentication takes 2-4 weeks and should be prepared in advance',
        learning: 15,
        task: 15,
        hint: 'Correct! Document preparation requires time planning, which is key to task completion.'
      },
      {
        text: 'You can do authentication after receiving an offer',
        learning: 0,
        task: 0,
        hint: 'Too late. Authentication must be completed before or during application.'
      }
    ]
  },

  // ==================== Stage 3: Personal Statement Writing ====================
  {
    id: 'q3-1',
    stageId: 'level-3',
    type: 'confused',
    question: 'You\'re writing your first PS with no ideas. Which opening is the most inappropriate?',
    character: 'Personal Statement Mentor',
    characterAvatar: '👩‍💻',
    options: [
      {
        text: 'I have been passionate about computers since I was a child...',
        learning: 15,
        task: 5,
        hint: 'Correct! This opening is cliché and lacks personal characteristics.'
      },
      {
        text: 'Describe a specific project experience to lead into your interest in the major',
        learning: 10,
        task: 10,
        hint: 'This is a good opening approach.'
      },
      {
        text: 'Directly list your completed courses and grades',
        learning: 10,
        task: 5,
        hint: 'Although not attractive, it is slightly better than clichés.'
      }
    ]
  },
  {
    id: 'q3-2',
    stageId: 'level-3',
    type: 'sprint',
    question: 'You are applying for Data Science. Which experience should you elaborate on most in your PS?',
    character: 'Admissions Officer',
    characterAvatar: '🧑‍💼',
    options: [
      {
        text: 'Winning first prize in a high school math competition',
        learning: 5,
        task: 5,
        hint: 'High school experience is outdated; only briefly mention unless highly relevant.'
      },
      {
        text: 'An independent data analysis project completed in sophomore year, including data cleaning, modeling and visualization',
        learning: 15,
        task: 15,
        hint: 'Perfect! Specific recent experience demonstrates skill matching and practical ability.'
      },
      {
        text: 'Leadership experience as Student Union President',
        learning: 5,
        task: 5,
        hint: 'Soft skills are important, but hard skills are prioritized for technical majors like DS.'
      }
    ]
  },
  {
    id: 'q3-3',
    stageId: 'level-3',
    type: 'both',
    question: 'Which statement about CV (Curriculum Vitae) is incorrect?',
    character: 'Career Development Advisor',
    characterAvatar: '👨‍💼',
    options: [
      {
        text: 'CV should be limited to 1-2 pages',
        learning: 5,
        task: 0,
        hint: 'This is the correct practice.'
      },
      {
        text: 'You can use colorful templates to show personality',
        learning: 15,
        task: 10,
        hint: 'Correct! Academic/postgraduate CVs should be concise and professional, avoid fancy designs.'
      },
      {
        text: 'Need to adjust the focus for each applied program',
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

  // ==================== Stage 5: Interview Preparation ====================
  {
    id: 'q5-1',
    stageId: 'level-5',
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
    stageId: 'level-5',
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
    stageId: 'level-5',
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