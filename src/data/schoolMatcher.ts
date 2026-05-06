export interface MatchPair {
  id: string;
  left: { en: string; zh: string };
  right: { en: string; zh: string };
}

export interface MatchLevel {
  id: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  pairs: MatchPair[];
}

export const MATCH_LEVELS: MatchLevel[] = [
  {
    id: 'match-1',
    title: { en: 'School & Strategy', zh: '学校与策略' },
    description: { en: 'Match each school type with the best application strategy', zh: '将学校类型与最佳申请策略配对' },
    pairs: [
      { id: 'p1-1', left: { en: 'UK G5 + GPA 3.3', zh: '英国G5 + GPA 3.3' }, right: { en: 'Emphasize research & strong PS', zh: '强调研究经历与优质PS' } },
      { id: 'p1-2', left: { en: 'US Top 30 + No GRE', zh: '美国Top 30 + 无GRE' }, right: { en: 'Target test-optional programs', zh: '瞄准免GRE项目' } },
      { id: 'p1-3', left: { en: 'HK Top 3 + IELTS 7.0', zh: '香港前三 + 雅思7.0' }, right: { en: 'Apply early, fast-track offers', zh: '尽早申请，快速获取offer' } },
      { id: 'p1-4', left: { en: 'Australia G8 + Working Visa', zh: '澳洲八大 + 工签' }, right: { en: 'Emphasize career outcomes & PR path', zh: '强调职业前景与移民路径' } }
    ]
  },
  {
    id: 'match-2',
    title: { en: 'Document & Purpose', zh: '材料与用途' },
    description: { en: 'Match each document with its primary purpose', zh: '将材料与其主要用途配对' },
    pairs: [
      { id: 'p2-1', left: { en: 'Personal Statement (PS)', zh: '个人陈述 (PS)' }, right: { en: 'Show motivation & fit', zh: '展示申请动机与匹配度' } },
      { id: 'p2-2', left: { en: 'CV / Resume', zh: '简历' }, right: { en: 'Summarize achievements & skills', zh: '总结成就与技能' } },
      { id: 'p2-3', left: { en: 'Recommendation Letter', zh: '推荐信' }, right: { en: 'Third-party validation', zh: '第三方评价背书' } },
      { id: 'p2-4', left: { en: 'WES Authentication', zh: 'WES认证' }, right: { en: 'Convert grades to US standard', zh: '将成绩转换为美国标准' } },
      { id: 'p2-5', left: { en: 'Research Proposal', zh: '研究计划' }, right: { en: 'Demonstrate research capability', zh: '展示研究能力' } }
    ]
  },
  {
    id: 'match-3',
    title: { en: 'Major & Career', zh: '专业与职业' },
    description: { en: 'Match each major with its typical career path', zh: '将专业与典型职业路径配对' },
    pairs: [
      { id: 'p3-1', left: { en: 'Computer Science', zh: '计算机科学' }, right: { en: 'Software Engineer / Data Scientist', zh: '软件工程师 / 数据科学家' } },
      { id: 'p3-2', left: { en: 'Finance', zh: '金融学' }, right: { en: 'Investment Banking / Analyst', zh: '投行 / 分析师' } },
      { id: 'p3-3', left: { en: 'Education', zh: '教育学' }, right: { en: 'Teacher / Curriculum Designer', zh: '教师 / 课程设计师' } },
      { id: 'p3-4', left: { en: 'Data Science', zh: '数据科学' }, right: { en: 'ML Engineer / Business Analyst', zh: '机器学习工程师 / 商业分析师' } }
    ]
  },
  {
    id: 'match-4',
    title: { en: 'Timeline & Task', zh: '时间线与任务' },
    description: { en: 'Match each time period with the correct application task', zh: '将时间段与正确的申请任务配对' },
    pairs: [
      { id: 'p4-1', left: { en: 'Year 2, Semester 1', zh: '大二上学期' }, right: { en: 'Explore majors & take IELTS', zh: '探索专业方向 & 考雅思' } },
      { id: 'p4-2', left: { en: 'Year 2, Semester 2', zh: '大二下学期' }, right: { en: 'Build CV & seek internships', zh: '构建简历 & 寻找实习' } },
      { id: 'p4-3', left: { en: 'Year 3, Semester 1', zh: '大三上学期' }, right: { en: 'Write PS & get recommendations', zh: '撰写PS & 获取推荐信' } },
      { id: 'p4-4', left: { en: 'Year 3, Semester 2', zh: '大三下学期' }, right: { en: 'Submit applications & interview', zh: '提交申请 & 准备面试' } },
      { id: 'p4-5', left: { en: 'Year 4, Semester 1', zh: '大四上学期' }, right: { en: 'Receive offers & apply for visa', zh: '接收offer & 办理签证' } }
    ]
  }
];
