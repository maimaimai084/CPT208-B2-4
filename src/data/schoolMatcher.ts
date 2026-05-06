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
  },
  {
    id: 'match-5',
    title: { en: 'Scholarship Fit', zh: '奖学金匹配' },
    description: { en: 'Match scholarship profile with strongest evidence', zh: '将奖学金类型与最佳证明材料配对' },
    pairs: [
      { id: 'p5-1', left: { en: 'Research Excellence Scholarship', zh: '科研卓越奖学金' }, right: { en: 'Publications + methodology depth', zh: '论文成果 + 方法论深度' } },
      { id: 'p5-2', left: { en: 'Leadership Scholarship', zh: '领导力奖学金' }, right: { en: 'Team impact + measurable outcomes', zh: '团队影响力 + 可量化结果' } },
      { id: 'p5-3', left: { en: 'Community Impact Award', zh: '社区贡献奖' }, right: { en: 'Sustained service + beneficiaries', zh: '长期服务 + 受益人规模' } },
      { id: 'p5-4', left: { en: 'Need-based Grant', zh: '助学金（经济需求）' }, right: { en: 'Verified financial statements', zh: '可核验的资金证明' } },
      { id: 'p5-5', left: { en: 'Women in STEM Award', zh: '女性STEM奖' }, right: { en: 'STEM achievements + mentoring evidence', zh: 'STEM成果 + 帮扶证明' } }
    ]
  },
  {
    id: 'match-6',
    title: { en: 'Visa Docs Mapping', zh: '签证材料映射' },
    description: { en: 'Match each document with the correct visa purpose', zh: '将签证材料与用途配对' },
    pairs: [
      { id: 'p6-1', left: { en: 'CAS / I-20', zh: 'CAS / I-20' }, right: { en: 'Proof of institutional sponsorship', zh: '证明学校录取与担保关系' } },
      { id: 'p6-2', left: { en: 'Bank Statement', zh: '银行流水' }, right: { en: 'Demonstrate stable proof of funds', zh: '证明稳定资金能力' } },
      { id: 'p6-3', left: { en: 'TB Test Certificate', zh: '肺结核检测证明' }, right: { en: 'Health compliance for entry clearance', zh: '满足入境健康要求' } },
      { id: 'p6-4', left: { en: 'Biometric Appointment', zh: '生物信息采集' }, right: { en: 'Identity verification in visa workflow', zh: '签证流程中的身份核验' } },
      { id: 'p6-5', left: { en: 'ATAS Clearance', zh: 'ATAS许可' }, right: { en: 'Security review for sensitive majors', zh: '敏感专业的安全审查' } }
    ]
  },
  {
    id: 'match-7',
    title: { en: 'Program-Outcome Match', zh: '项目与结果匹配' },
    description: { en: 'Match program features with realistic outcomes', zh: '将项目特征与合理结果配对' },
    pairs: [
      { id: 'p7-1', left: { en: 'Coursework-heavy taught master', zh: '授课型硕士（课程密集）' }, right: { en: 'Fast skill build, shorter thesis exposure', zh: '技能提升快，论文训练相对少' } },
      { id: 'p7-2', left: { en: 'Research-intensive master', zh: '研究型硕士' }, right: { en: 'Stronger PhD pipeline readiness', zh: '更强的博士衔接能力' } },
      { id: 'p7-3', left: { en: 'Co-op integrated program', zh: '带实习合作项目' }, right: { en: 'Higher short-term employability', zh: '短期就业竞争力提升' } },
      { id: 'p7-4', left: { en: 'Small cohort seminar format', zh: '小班研讨课' }, right: { en: 'More direct professor interaction', zh: '与教授互动更频繁' } },
      { id: 'p7-5', left: { en: 'Urban campus with industry clusters', zh: '位于产业集群城市' }, right: { en: 'Denser internship networking opportunities', zh: '更密集的实习与人脉机会' } },
      { id: 'p7-6', left: { en: 'High tuition + strong alumni network', zh: '学费较高 + 强校友网络' }, right: { en: 'Need ROI analysis before commit', zh: '入学前需做ROI测算' } }
    ]
  }
];
