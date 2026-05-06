export interface TimelineStep {
  id: string;
  label: { en: string; zh: string };
  order: number;
}

export interface TimelineLevel {
  id: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  steps: TimelineStep[];
}

export const TIMELINE_LEVELS: TimelineLevel[] = [
  {
    id: 'timeline-1',
    title: { en: 'Basic Application Flow', zh: '基础申请流程' },
    description: { en: 'Arrange the 6 key steps in the correct order', zh: '将6个关键步骤按正确顺序排列' },
    steps: [
      { id: 't1-1', label: { en: 'Take IELTS / TOEFL exam', zh: '参加雅思/托福考试' }, order: 1 },
      { id: 't1-2', label: { en: 'Request transcripts from university', zh: '向学校申请成绩单' }, order: 2 },
      { id: 't1-3', label: { en: 'Write Personal Statement (PS)', zh: '撰写个人陈述 (PS)' }, order: 3 },
      { id: 't1-4', label: { en: 'Request recommendation letters', zh: '获取推荐信' }, order: 4 },
      { id: 't1-5', label: { en: 'Submit online applications', zh: '提交网申' }, order: 5 },
      { id: 't1-6', label: { en: 'Receive offer & confirm enrollment', zh: '收到offer并确认入学' }, order: 6 }
    ]
  },
  {
    id: 'timeline-2',
    title: { en: 'UK Application Timeline', zh: '英国申请时间线' },
    description: { en: 'Arrange the UK-specific application steps', zh: '排列英国申请的特定步骤' },
    steps: [
      { id: 't2-1', label: { en: 'Research UK universities (Sept Year 2)', zh: '研究英国大学（大二9月）' }, order: 1 },
      { id: 't2-2', label: { en: 'Take IELTS Academic (Oct-Dec)', zh: '参加学术雅思（10-12月）' }, order: 2 },
      { id: 't2-3', label: { en: 'Register on UCAS system (Jan)', zh: '注册UCAS系统（1月）' }, order: 3 },
      { id: 't2-4', label: { en: 'Submit UCAS application (Jan-Mar)', zh: '提交UCAS申请（1-3月）' }, order: 4 },
      { id: 't2-5', label: { en: 'Receive conditional offer (Apr-May)', zh: '收到有条件offer（4-5月）' }, order: 5 },
      { id: 't2-6', label: { en: 'Meet conditions & get CAS (Jun-Jul)', zh: '满足条件获取CAS（6-7月）' }, order: 6 },
      { id: 't2-7', label: { en: 'Apply for Tier 4 student visa (Jul-Aug)', zh: '申请Tier 4学生签证（7-8月）' }, order: 7 }
    ]
  },
  {
    id: 'timeline-3',
    title: { en: 'Multi-Country Parallel', zh: '多国平行申请' },
    description: { en: 'Arrange the parallel application timeline for UK + US + HK', zh: '排列英美港平行申请时间线' },
    steps: [
      { id: 't3-1', label: { en: 'Take GRE + IELTS (Jun-Aug Year 3)', zh: '考GRE+雅思（大三6-8月）' }, order: 1 },
      { id: 't3-2', label: { en: 'Write PS & SOP drafts (Sep-Oct)', zh: '撰写PS和SOP初稿（9-10月）' }, order: 2 },
      { id: 't3-3', label: { en: 'Submit HK applications (Oct-Nov, early round)', zh: '提交香港申请（10-11月，提前批）' }, order: 3 },
      { id: 't3-4', label: { en: 'Submit US applications (Nov-Dec, deadline)', zh: '提交美国申请（11-12月，截止期）' }, order: 4 },
      { id: 't3-5', label: { en: 'Submit UK UCAS application (Jan)', zh: '提交英国UCAS申请（1月）' }, order: 5 },
      { id: 't3-6', label: { en: 'Receive HK offer first (Dec-Jan)', zh: '先收到香港offer（12-1月）' }, order: 6 },
      { id: 't3-7', label: { en: 'Receive US offers (Mar-Apr)', zh: '收到美国offer（3-4月）' }, order: 7 },
      { id: 't3-8', label: { en: 'Compare all offers & decide (Apr-May)', zh: '比较所有offer并做决定（4-5月）' }, order: 8 }
    ]
  },
  {
    id: 'timeline-4',
    title: { en: 'Research Master Track', zh: '研究型硕士路径' },
    description: { en: 'Sort the milestones for a research-focused application', zh: '排列研究导向申请的关键里程碑' },
    steps: [
      { id: 't4-1', label: { en: 'Identify 2-3 research themes (May)', zh: '确定2-3个研究主题（5月）' }, order: 1 },
      { id: 't4-2', label: { en: 'Read 20+ recent papers (Jun-Jul)', zh: '阅读20+篇近期论文（6-7月）' }, order: 2 },
      { id: 't4-3', label: { en: 'Draft research proposal v1 (Aug)', zh: '完成研究计划初稿（8月）' }, order: 3 },
      { id: 't4-4', label: { en: 'Cold email potential advisors (Sep)', zh: '联系潜在导师（9月）' }, order: 4 },
      { id: 't4-5', label: { en: 'Refine proposal with feedback (Oct)', zh: '根据反馈修订研究计划（10月）' }, order: 5 },
      { id: 't4-6', label: { en: 'Submit research-track applications (Nov-Dec)', zh: '提交研究型申请（11-12月）' }, order: 6 },
      { id: 't4-7', label: { en: 'Attend research interviews (Jan-Feb)', zh: '参加研究面试（1-2月）' }, order: 7 }
    ]
  },
  {
    id: 'timeline-5',
    title: { en: 'Funding & Scholarship Route', zh: '奖学金与资金路线' },
    description: { en: 'Arrange funding preparation in the right sequence', zh: '将奖学金与资金准备按顺序排列' },
    steps: [
      { id: 't5-1', label: { en: 'Map scholarship sources (Sept)', zh: '梳理奖学金来源（9月）' }, order: 1 },
      { id: 't5-2', label: { en: 'Draft scholarship essays (Oct)', zh: '起草奖学金文书（10月）' }, order: 2 },
      { id: 't5-3', label: { en: 'Collect evidence of impact (Oct-Nov)', zh: '整理影响力证明材料（10-11月）' }, order: 3 },
      { id: 't5-4', label: { en: 'Submit scholarship applications (Nov-Dec)', zh: '提交奖学金申请（11-12月）' }, order: 4 },
      { id: 't5-5', label: { en: 'Prepare interview stories (Dec-Jan)', zh: '准备奖学金面试故事（12-1月）' }, order: 5 },
      { id: 't5-6', label: { en: 'Finalize proof-of-funds docs (Jan-Feb)', zh: '完成资金证明文件（1-2月）' }, order: 6 }
    ]
  },
  {
    id: 'timeline-6',
    title: { en: 'Offer to Departure Sprint', zh: 'Offer到出发冲刺' },
    description: { en: 'Sort post-offer tasks before departure', zh: '排列拿到offer后的出发前任务' },
    steps: [
      { id: 't6-1', label: { en: 'Accept offer and pay deposit', zh: '确认offer并缴纳押金' }, order: 1 },
      { id: 't6-2', label: { en: 'Obtain CAS / I-20 documents', zh: '获取CAS / I-20文件' }, order: 2 },
      { id: 't6-3', label: { en: 'Submit visa application', zh: '提交签证申请' }, order: 3 },
      { id: 't6-4', label: { en: 'Book accommodation and insurance', zh: '确定住宿与保险' }, order: 4 },
      { id: 't6-5', label: { en: 'Register orientation and modules', zh: '注册迎新与课程' }, order: 5 },
      { id: 't6-6', label: { en: 'Prepare arrival checklist and travel', zh: '完成行前清单并出发' }, order: 6 }
    ]
  }
];
