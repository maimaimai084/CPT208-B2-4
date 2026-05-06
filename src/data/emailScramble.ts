export interface EmailPhrase {
  id: string;
  text: { en: string; zh: string };
  order: number;
}

export interface EmailScenario {
  id: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  context: { en: string; zh: string };
  phrases: EmailPhrase[];
}

export const EMAIL_SCENARIOS: EmailScenario[] = [
  {
    id: 'email-1',
    title: { en: 'Follow-up Email', zh: '跟进邮件' },
    description: { en: 'Write a polite follow-up email 6 weeks after submitting your application', zh: '提交申请6周后写一封礼貌的跟进邮件' },
    context: {
      en: 'You submitted your application 6 weeks ago and have not received any response. Write a follow-up email to the admissions office.',
      zh: '你6周前提交了申请，至今没有收到任何回复。请给招生办公室写一封跟进邮件。'
    },
    phrases: [
      { id: 'e1-1', text: { en: 'Dear Admissions Committee,', zh: '尊敬的招生委员会：' }, order: 1 },
      { id: 'e1-2', text: { en: 'I am writing to follow up on my application', zh: '我写信跟进我的申请' }, order: 2 },
      { id: 'e1-3', text: { en: 'submitted on [date] for the [program name].', zh: '于[日期]提交的[项目名称]申请。' }, order: 3 },
      { id: 'e1-4', text: { en: 'I remain very interested in the program', zh: '我仍然对该项目非常感兴趣' }, order: 4 },
      { id: 'e1-5', text: { en: 'and would appreciate any update on my application status.', zh: '希望您能告知我的申请状态。' }, order: 5 },
      { id: 'e1-6', text: { en: 'Thank you for your time and consideration.', zh: '感谢您的时间和考虑。' }, order: 6 },
      { id: 'e1-7', text: { en: 'Best regards, [Your Name]', zh: '此致敬礼，[你的名字]' }, order: 7 }
    ]
  },
  {
    id: 'email-2',
    title: { en: 'Request Recommendation', zh: '请求推荐信' },
    description: { en: 'Write a professional email to request a recommendation letter from a professor', zh: '写一封专业邮件向教授请求推荐信' },
    context: {
      en: 'You need a recommendation letter from your Data Structures professor. Write a polite request email.',
      zh: '你需要数据结构课程教授的推荐信。请写一封礼貌的请求邮件。'
    },
    phrases: [
      { id: 'e2-1', text: { en: 'Dear Professor [Name],', zh: '尊敬的[姓名]教授：' }, order: 1 },
      { id: 'e2-2', text: { en: 'I hope this email finds you well.', zh: '希望您一切安好。' }, order: 2 },
      { id: 'e2-3', text: { en: 'I am applying for graduate programs in [field]', zh: '我正在申请[领域]的研究生项目' }, order: 3 },
      { id: 'e2-4', text: { en: 'and would be honored if you could write a recommendation letter for me.', zh: '如果您能为我写一封推荐信，我将不胜荣幸。' }, order: 4 },
      { id: 'e2-5', text: { en: 'I have attached my CV and transcript for your reference.', zh: '附件是我的简历和成绩单供您参考。' }, order: 5 },
      { id: 'e2-6', text: { en: 'The deadline is [date]. Please let me know if this is possible.', zh: '截止日期是[日期]。请告知我是否可行。' }, order: 6 },
      { id: 'e2-7', text: { en: 'Thank you very much for your support.', zh: '非常感谢您的支持。' }, order: 7 },
      { id: 'e2-8', text: { en: 'Sincerely, [Your Name]', zh: '此致敬礼，[你的名字]' }, order: 8 }
    ]
  },
  {
    id: 'email-3',
    title: { en: 'Interview Thank You', zh: '面试感谢信' },
    description: { en: 'Write a thank-you email after a graduate school interview', zh: '研究生面试后写一封感谢信' },
    context: {
      en: 'You just finished a successful interview for a graduate program. Write a thank-you email to the interviewer.',
      zh: '你刚刚完成了一次成功的研究生面试。请给面试官写一封感谢信。'
    },
    phrases: [
      { id: 'e3-1', text: { en: 'Dear Professor [Name],', zh: '尊敬的[姓名]教授：' }, order: 1 },
      { id: 'e3-2', text: { en: 'Thank you so much for taking the time to interview me today.', zh: '非常感谢您今天抽出时间面试我。' }, order: 2 },
      { id: 'e3-3', text: { en: 'I truly enjoyed learning about the [program name] and', zh: '我非常高兴了解了[项目名称]以及' }, order: 3 },
      { id: 'e3-4', text: { en: 'the exciting research opportunities available.', zh: '其中令人兴奋的研究机会。' }, order: 4 },
      { id: 'e3-5', text: { en: 'Our conversation reinforced my enthusiasm for joining the program.', zh: '我们的对话加深了我对加入该项目的热情。' }, order: 5 },
      { id: 'e3-6', text: { en: 'I look forward to hearing from you.', zh: '期待您的回复。' }, order: 6 },
      { id: 'e3-7', text: { en: 'Warm regards, [Your Name]', zh: '此致敬礼，[你的名字]' }, order: 7 }
    ]
  },
  {
    id: 'email-4',
    title: { en: 'Scholarship Inquiry', zh: '奖学金咨询' },
    description: { en: 'Write an email inquiring about scholarship opportunities', zh: '写一封咨询奖学金机会的邮件' },
    context: {
      en: 'You have been admitted to a program but need financial aid. Write an inquiry email about scholarships.',
      zh: '你已被某项目录取但需要经济援助。请写一封关于奖学金的咨询邮件。'
    },
    phrases: [
      { id: 'e4-1', text: { en: 'Dear Financial Aid Office,', zh: '尊敬的财务援助办公室：' }, order: 1 },
      { id: 'e4-2', text: { en: 'I am pleased to have been admitted to the [program name].', zh: '我很高兴被[项目名称]录取。' }, order: 2 },
      { id: 'e4-3', text: { en: 'I am writing to inquire about scholarship opportunities', zh: '我写信咨询奖学金机会' }, order: 3 },
      { id: 'e4-4', text: { en: 'for international graduate students.', zh: '面向国际研究生的奖学金。' }, order: 4 },
      { id: 'e4-5', text: { en: 'My academic record includes a GPA of [X] and [achievements].', zh: '我的学术成绩包括GPA [X]和[成就]。' }, order: 5 },
      { id: 'e4-6', text: { en: 'Could you please provide information on available funding options?', zh: '请问能否提供可用资助选项的信息？' }, order: 6 },
      { id: 'e4-7', text: { en: 'Thank you for your assistance.', zh: '感谢您的帮助。' }, order: 7 },
      { id: 'e4-8', text: { en: 'Respectfully, [Your Name]', zh: '此致敬礼，[你的名字]' }, order: 8 }
    ]
  },
  {
    id: 'email-5',
    title: { en: 'Waitlist Response', zh: '候补回复' },
    description: { en: 'Write a response to a waitlist notification to express continued interest', zh: '回复候补通知，表达持续兴趣' },
    context: {
      en: 'You received a waitlist notification. Write a response expressing your strong continued interest.',
      zh: '你收到了候补通知。请写一封回复表达你持续的强烈兴趣。'
    },
    phrases: [
      { id: 'e5-1', text: { en: 'Dear Admissions Committee,', zh: '尊敬的招生委员会：' }, order: 1 },
      { id: 'e5-2', text: { en: 'Thank you for considering my application.', zh: '感谢您考虑我的申请。' }, order: 2 },
      { id: 'e5-3', text: { en: 'I understand I have been placed on the waitlist', zh: '我了解到我被列入了候补名单' }, order: 3 },
      { id: 'e5-4', text: { en: 'and I want to reaffirm my strong interest in the program.', zh: '我想重申我对该项目的强烈兴趣。' }, order: 4 },
      { id: 'e5-5', text: { en: 'Since applying, I have [new achievement/update].', zh: '申请以来，我取得了[新成就/更新]。' }, order: 5 },
      { id: 'e5-6', text: { en: 'I remain committed to attending if offered admission.', zh: '如果获得录取，我仍承诺入学。' }, order: 6 },
      { id: 'e5-7', text: { en: 'Thank you for your time.', zh: '感谢您的时间。' }, order: 7 },
      { id: 'e5-8', text: { en: 'Sincerely, [Your Name]', zh: '此致敬礼，[你的名字]' }, order: 8 }
    ]
  }
];
