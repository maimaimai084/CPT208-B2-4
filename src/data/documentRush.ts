export interface DocumentRound {
  id: string;
  type: 'spelling' | 'grammar' | 'punctuation';
  difficulty: 'easy' | 'medium' | 'hard';
  document: { en: string };
  errorSegments: { en: string }[];
  correctSegments: { en: string }[];
  explanation: { en: string };
}

export const DOCUMENT_ROUNDS: DocumentRound[] = [
  {
    id: 'doc-1',
    type: 'spelling',
    difficulty: 'easy',
    document: {
      en: 'Dear Professor Smith,\n\nI am writing to apply for the Computer Science master program at your unversity. I am currently a senoir student at XJTLU with a GPA of 3.8.\n\nBest regards,\nJohn Chen'
    },
    errorSegments: [{ en: 'unversity' }, { en: 'senoir' }],
    correctSegments: [{ en: 'university' }, { en: 'senior' }],
    explanation: { en: 'Two common Misspellings: "unversity" → "university", "senoir" → "senior". Always double-check university names!' }
  },
  {
    id: 'doc-2',
    type: 'grammar',
    difficulty: 'medium',
    document: {
      en: 'Personal Statement\n\nI have always been passionated about artificial intelligence. The first time I wrote a program, I was very excitated. This experience has effected my career choice.'
    },
    errorSegments: [{ en: 'passionated' }, { en: 'excitated' }, { en: 'effected' }],
    correctSegments: [{ en: 'passionate' }, { en: 'excited' }, { en: 'affected' }],
    explanation: { en: 'Word form errors: "passionated" (verb→adj), "excitated" (verb→adj), "effected" (verb→noun). Use -ed for past tense, -ing for continuous!' }
  },
  {
    id: 'doc-3',
    type: 'punctuation',
    difficulty: 'medium',
    document: {
      en: 'Dear Admissions Committee I am writing to inquire about my application status. I submitted it on January 15th 2024; and I have not received a response yet. Could you please help me?'
    },
    errorSegments: [{ en: '. I are' }, { en: ', and' }],
    correctSegments: [{ en: ', I are' }, { en: ';; and' }],
    explanation: { en: 'Two punctuation errors: 1) "Committee" needs a comma after it (address). 2) "; and" should be "and" (semicolon misuse). Check your capitalizations too!' }
  }
];

export interface GrammarChallenge {
  id: string;
  sentence: string;
  errorType: string;
  options: { text: string; correct: boolean }[];
  explanation: string;
}

export const GRAMMAR_CHALLENGES: GrammarChallenge[] = [
  {
    id: 'gram-1',
    sentence: 'She are the best student in the class.',
    errorType: 'Subject-Verb Agreement',
    options: [
      { text: 'She is the best student in the class.', correct: true },
      { text: 'She are the best students in the class.', correct: false },
      { text: 'She were the best student in the class.', correct: false }
    ],
    explanation: '"She" (singular) takes "is" not "are". Remember: I am, you are, he/she/it is!'
  },
  {
    id: 'gram-2',
    sentence: 'Me and him went to the library yesterday.',
    errorType: 'Pronoun Case',
    options: [
      { text: 'He and I went to the library yesterday.', correct: true },
      { text: 'Me and him went to the library yesterday.', correct: false },
      { text: 'Him and me went to the library yesterday.', correct: false }
    ],
    explanation: 'Use subjective pronouns as subject: "He and I" not "Me and him". Subjective: I, you, he, she, we, they.'
  },
  {
    id: 'gram-3',
    sentence: 'If I was you, I would accept the offer.',
    errorType: 'Subjunctive Mood',
    options: [
      { text: 'If I were you, I would accept the offer.', correct: true },
      { text: 'If I was you, I would accept the offer.', correct: false },
      { text: 'If I am you, I would accept the offer.', correct: false }
    ],
    explanation: 'Use "were" for unreal conditions (subjunctive): "If I were you" not "If I was you". This is a hypothetical situation!'
  },
  {
    id: 'gram-4',
    sentence: 'There is many reasons why I chose this program.',
    errorType: 'Subject-Verb Agreement',
    options: [
      { text: 'There are many reasons why I chose this program.', correct: true },
      { text: 'There is many reasons why I chose this program.', correct: false },
      { text: 'There are many reason why I chose this program.', correct: false }
    ],
    explanation: '"There are" because "reasons" (plural). "There is" for singular: "There is one reason". Check the noun after "there"!'
  }
];

export interface PunctuationChallenge {
  id: string;
  sentence: string;
  errorType: string;
  correctPunctuation: string;
  options: { text: string; correct: boolean }[];
  explanation: string;
}

export const PUNCTUATION_CHALLENGES: PunctuationChallenge[] = [
  {
    id: 'punc-1',
    sentence: 'Dear Professor Smith I would like to ask you a question.',
    errorType: 'Apposition/Address',
    options: [
      { text: 'Dear Professor Smith, I would like to ask you a question.', correct: true },
      { text: 'Dear Professor Smith I would like to ask you a question.', correct: false },
      { text: 'Dear Professor: Smith I would like to ask you a question.', correct: false }
    ],
    explanation: 'Add a comma after the person\'s name when addressing them directly: "Dear Professor Smith," not "Dear Professor Smith"'
  },
  {
    id: 'punc-2',
    sentence: 'The program starts on January 15 2024 and ends on June 30 2024.',
    errorType: 'Dates',
    options: [
      { text: 'The program starts on January 15, 2024, and ends on June 30, 2024.', correct: true },
      { text: 'The program starts on January 15 2024 and ends on June 30 2024.', correct: false },
      { text: 'The program starts: on January 15 2024 and ends: on June 30 2024.', correct: false }
    ],
    explanation: 'Use commas in dates: "January 15, 2024" (American) or "15 January 2024" (British). Never "January 15 2024"!'
  },
  {
    id: 'punc-3',
    sentence: 'However; the application deadline has passed.',
    errorType: 'Conjunctive Adverb',
    options: [
      { text: 'However, the application deadline has passed.', correct: true },
      { text: 'However; the application deadline has passed.', correct: false },
      { text: 'However. The application deadline has passed.', correct: false }
    ],
    explanation: '"However" as a conjunctive adverb needs a comma, not a semicolon. Use semicolon only between independent clauses!'
  },
  {
    id: 'punc-4',
    sentence: 'I need these documents: CV, transcript and recommendation letter.',
    errorType: 'Series/List',
    options: [
      { text: 'I need these documents: CV, transcript, and recommendation letter.', correct: true },
      { text: 'I need these documents: CV, transcript and recommendation letter.', correct: false },
      { text: 'I need these documents - CV, transcript and recommendation letter.', correct: false }
    ],
    explanation: 'Use the Oxford comma: "CV, transcript, and recommendation letter". The comma before "and" prevents ambiguity!'
  }
];