export interface SimulationOption {
  text: { en: string; zh: string }
  requiredGear?: { ielts?: number; internship?: number; research?: number }
  feedback: { en: string; zh: string }
  baseTV: number
}

export interface SimulationQuestion {
  id: string
  question: { en: string; zh: string }
  options: SimulationOption[]
}

export interface Simulation {
  id: string
  title: { en: string; zh: string }
  description: { en: string; zh: string }
  requiredGear?: { ielts?: number; internship?: number; research?: number }
  questions: SimulationQuestion[]
}

export const INTERVIEW_SIMULATIONS: Simulation[] = [
  {
    id: 'behavioral-basic',
    title: { en: 'Behavioral Interview - Basics', zh: '行为面试 - 基础' },
    description: { 
      en: 'Common behavioral questions for graduate school interviews', 
      zh: '研究生面试常见行为问题' 
    },
    questions: [
      {
        id: 'conflict',
        question: { 
          en: 'Tell me about a time you faced a conflict in a group project. How did you handle it?', 
          zh: '请告诉我你在团队项目中遇到冲突的一次经历。你是如何处理的？' 
        },
        options: [
          {
            text: { en: 'Simply describe the event without much detail', zh: '简单描述事件，没有太多细节' },
            feedback: { 
              en: 'Basic answer. Try to provide more context and specific actions you took.', 
              zh: '基础回答。试着提供更多背景和你的具体行动。' 
            },
            baseTV: 20
          },
          {
            text: { en: 'Use STAR法则 to structure the response with situation, task, action, result', zh: '使用STAR法则结构化回答：情境、任务、行动、结果' },
            requiredGear: { ielts: 6.5 },
            feedback: { 
              en: 'Well structured! Consider adding specific data or metrics to strengthen it.', 
              zh: '结构清晰！可以添加具体数据或指标来加强。' 
            },
            baseTV: 35
          },
          {
            text: { 
              en: 'STAR + specific data + reflection on what you learned', 
              zh: 'STAR + 具体数据 + 对学习内容的反思' 
            },
            requiredGear: { ielts: 7.0, internship: 1 },
            feedback: { 
              en: 'Excellent! This demonstrates self-awareness and growth mindset.', 
              zh: '优秀！这展示了自我意识和成长型思维。' 
            },
            baseTV: 50
          }
        ]
      },
      {
        id: 'failure',
        question: { 
          en: 'Tell me about a time you failed. How did you deal with it?', 
          zh: '请告诉我你曾经的一次失败经历。你是如何处理的？' 
        },
        options: [
          {
            text: { en: 'Describe the failure without much reflection', zh: '描述失败，没有太多反思' },
            feedback: { 
              en: 'Consider adding what you learned from this experience.', 
              zh: '考虑添加你从这次经历中学到了什么。' 
            },
            baseTV: 15
          },
          {
            text: { en: 'Describe the failure and the lesson you learned', zh: '描述失败以及你学到的教训' },
            requiredGear: { ielts: 6.5 },
            feedback: { 
              en: 'Good reflection! Showing learning from failure is valuable.', 
              zh: '好的反思！展示从失败中学习是有价值的。' 
            },
            baseTV: 30
          },
          {
            text: { 
              en: 'Show how you turned failure into success later', 
              zh: '展示你如何将失败转化为后来的成功' 
            },
            requiredGear: { ielts: 7.0 },
            feedback: { 
              en: 'Outstanding! This shows resilience and growth mindset.', 
              zh: '出色！这展示了韧性和成长型思维。' 
            },
            baseTV: 45
          }
        ]
      },
      {
        id: 'leadership',
        question: { 
          en: 'Describe a time you demonstrated leadership.', 
          zh: '描述一次你展示领导力的经历。' 
        },
        options: [
          {
            text: { en: 'Simply describe a time you led a team', zh: '简单描述你带领团队的经历' },
            feedback: { 
              en: 'Good start. Focus on your specific actions and impact.', 
              zh: '好的开始。专注于你的具体行动和影响。' 
            },
            baseTV: 20
          },
          {
            text: { en: 'Describe your leadership actions and the team\'s result', zh: '描述你的领导行动和团队成果' },
            requiredGear: { ielts: 6.5 },
            feedback: { 
              en: 'Great! Quantify the results if possible.', 
              zh: '很好！如有可能，量化结果。' 
            },
            baseTV: 35
          },
          {
            text: { 
              en: 'Show leadership in challenging situation with clear impact', 
              zh: '展示在挑战性情况下的领导力和明确影响' 
            },
            requiredGear: { ielts: 7.0, internship: 1 },
            feedback: { 
              en: 'Excellent answer! This shows your leadership potential.', 
              zh: '优秀的回答！这展示了你的领导潜力。' 
            },
            baseTV: 50
          }
        ]
      }
    ]
  },
  {
    id: 'motivation',
    title: { en: 'Motivation & Goals', zh: '动机与目标' },
    description: { 
      en: 'Questions about your study motivation and career goals', 
      zh: '关于学习动机和职业目标的问题' 
    },
    requiredGear: { ielts: 6.5 },
    questions: [
      {
        id: 'why-major',
        question: { 
          en: 'Why do you want to pursue this major?', 
          zh: '你为什么想攻读这个专业？' 
        },
        options: [
          {
            text: { en: 'Express interest in the field', zh: '表达对领域的兴趣' },
            feedback: { 
              en: 'Good start. Make it more personal and specific.', 
              zh: '好的开始。让它更个人化、具体化。' 
            },
            baseTV: 20
          },
          {
            text: { en: 'Connect interest with relevant experiences', zh: '将兴趣与相关经历联系起来' },
            feedback: { 
              en: 'Good connection! Consider adding future goals.', 
              zh: '好的联系！考虑添加未来目标。' 
            },
            baseTV: 35
          },
          {
            text: { 
              en: 'Show clear career plan aligned with the major', 
              zh: '展示与专业一致的职业规划' 
            },
            requiredGear: { internship: 1 },
            feedback: { 
              en: 'Excellent! This shows strategic thinking.', 
              zh: '出色！这展示了战略思维。' 
            },
            baseTV: 50
          }
        ]
      },
      {
        id: 'strength',
        question: { 
          en: 'What is your biggest strength?', 
          zh: '你最大的长处是什么？' 
        },
        options: [
          {
            text: { en: 'Name a skill without evidence', zh: '列出技能但没有证据' },
            feedback: { 
              en: 'Provide an example to support your claim.', 
              zh: '提供一个例子来支持你的说法。' 
            },
            baseTV: 15
          },
          {
            text: { en: 'State strength with a specific example', zh: '用具体例子说明长处' },
            feedback: { 
              en: 'Good! The example makes it believable.', 
              zh: '好！例子让它可信。' 
            },
            baseTV: 30
          },
          {
            text: { 
              en: 'Show how your strength benefits the program', 
              zh: '展示你的长处如何使项目受益' 
            },
            feedback: { 
              en: 'Very strategic! This shows program fit.', 
              zh: '非常有策略！这展示了与项目的契合。' 
            },
            baseTV: 45
          }
        ]
      }
    ]
  },
  {
    id: 'technical-cs',
    title: { en: 'Technical Interview - CS', zh: '技术面试 - 计算机' },
    description: {
      en: 'Technical questions for Computer Science graduate programs',
      zh: '计算机科学研究生项目的技术面试问题'
    },
    requiredGear: { ielts: 6.5 },
    questions: [
      {
        id: 'algo-complexity',
        question: {
          en: 'What is the time complexity of binary search? Explain why.',
          zh: '二分查找的时间复杂度是什么？请解释原因。'
        },
        options: [
          {
            text: { en: 'O(n) because it scans half the array each time', zh: 'O(n)，因为它每次扫描数组的一半' },
            feedback: { en: 'Not quite. It does not scan all elements.', zh: '不太对。它并不会扫描所有元素。' },
            baseTV: 15
          },
          {
            text: { en: 'O(log n) because it halves the search space each iteration', zh: 'O(log n)，因为每次迭代都将搜索空间减半' },
            feedback: { en: 'Correct! Binary search divides the problem in half each time.', zh: '正确！二分查找每次将问题规模减半。' },
            baseTV: 35
          },
          {
            text: { en: 'O(log n), and it requires the input array to be sorted', zh: 'O(log n)，且要求输入数组必须有序' },
            requiredGear: { research: 1 },
            feedback: { en: 'Excellent! You also noted the prerequisite condition.', zh: '优秀！你还提到了前提条件。' },
            baseTV: 50
          }
        ]
      },
      {
        id: 'system-design',
        question: {
          en: 'Design a URL shortening service like bit.ly. What are the key components?',
          zh: '设计一个类似 bit.ly 的短链接服务。关键组件有哪些？'
        },
        options: [
          {
            text: { en: 'Just a database that maps short URLs to long URLs', zh: '只需要一个将短链接映射到长链接的数据库' },
            feedback: { en: 'Too simplistic. Consider scalability and caching.', zh: '过于简单。考虑可扩展性和缓存。' },
            baseTV: 15
          },
          {
            text: { en: 'Database + hash function + caching layer + load balancer', zh: '数据库 + 哈希函数 + 缓存层 + 负载均衡器' },
            feedback: { en: 'Good structure! Mention replication for high availability.', zh: '结构不错！可以提及高可用性的复制。' },
            baseTV: 35
          },
          {
            text: { en: 'Full design with database sharding, CDN, rate limiting, and analytics', zh: '完整设计包含数据库分片、CDN、限流和分析' },
            requiredGear: { internship: 1 },
            feedback: { en: 'Outstanding! This shows real-world system design thinking.', zh: '出色！这展示了真实的系统设计思维。' },
            baseTV: 50
          }
        ]
      },
      {
        id: 'db-normalization',
        question: {
          en: 'Explain database normalization and when you might intentionally denormalize.',
          zh: '解释数据库规范化，以及何时你可能会故意反规范化。'
        },
        options: [
          {
            text: { en: 'Normalization removes duplicate data; denormalization is always bad', zh: '规范化去除重复数据；反规范化总是不好的' },
            feedback: { en: 'Denormalization is not always bad. It has valid use cases.', zh: '反规范化并非总是不好。它有合理的应用场景。' },
            baseTV: 15
          },
          {
            text: { en: 'Normalization reduces redundancy; denormalize for read-heavy workloads', zh: '规范化减少冗余；在读多写少的场景下反规范化' },
            feedback: { en: 'Good answer! Trade-offs between consistency and performance.', zh: '好答案！一致性和性能之间的权衡。' },
            baseTV: 35
          },
          {
            text: { en: '3NF for consistency + strategic denormalization with materialized views for analytics', zh: '3NF 保证一致性 + 用物化视图进行策略性反规范化以支持分析' },
            requiredGear: { research: 1 },
            feedback: { en: 'Excellent! You understand both theory and practical optimization.', zh: '优秀！你理解了理论和实际优化。' },
            baseTV: 50
          }
        ]
      }
    ]
  },
  {
    id: 'research-talk',
    title: { en: 'Research Discussion', zh: '学术讨论' },
    description: {
      en: 'Academic discussion for research-oriented programs (requires Research background)',
      zh: '研究型项目的学术讨论（需要科研背景）'
    },
    requiredGear: { research: 1 },
    questions: [
      {
        id: 'research-interest',
        question: {
          en: 'What research area interests you most and why?',
          zh: '你对哪个研究领域最感兴趣，为什么？'
        },
        options: [
          {
            text: { en: 'Mention a broad field like "AI" without specifics', zh: '提到一个宽泛的领域如"AI"，没有具体方向' },
            feedback: { en: 'Too vague. Show depth by citing specific problems.', zh: '太模糊了。引用具体问题来展示深度。' },
            baseTV: 20
          },
          {
            text: { en: 'Name a specific problem and mention 2-3 recent papers', zh: '指出一个具体问题并提及 2-3 篇近期论文' },
            feedback: { en: 'Great! This shows you follow the literature.', zh: '很好！这表明你关注文献动态。' },
            baseTV: 40
          },
          {
            text: { en: 'Connect the problem to the advisor\'s work and propose an approach', zh: '将问题与导师的工作联系起来并提出研究思路' },
            requiredGear: { research: 2 },
            feedback: { en: 'Outstanding! This demonstrates research maturity.', zh: '出色！这展示了研究成熟度。' },
            baseTV: 55
          }
        ]
      },
      {
        id: 'methodology',
        question: {
          en: 'How would you approach a research problem if the initial hypothesis fails?',
          zh: '如果初始假设失败，你会如何处理一个研究问题？'
        },
        options: [
          {
            text: { en: 'Abandon the project and switch to a new topic', zh: '放弃项目，转向新课题' },
            feedback: { en: 'Research often involves pivoting, but not immediate abandonment.', zh: '研究常涉及调整，但不是立即放弃。' },
            baseTV: 15
          },
          {
            text: { en: 'Analyze why it failed, refine the hypothesis, and redesign experiments', zh: '分析失败原因，改进假设，重新设计实验' },
            feedback: { en: 'Good scientific approach! Iteration is key.', zh: '好的科学方法！迭代是关键。' },
            baseTV: 40
          },
          {
            text: { en: 'Document negative results, explore boundary conditions, and publish if significant', zh: '记录负面结果，探索边界条件，若有意义则发表' },
            requiredGear: { research: 2 },
            feedback: { en: 'Excellent! This shows true research mindset.', zh: '优秀！这展示了真正的研究思维。' },
            baseTV: 55
          }
        ]
      }
    ]
  },
  {
    id: 'case-study',
    title: { en: 'Case Interview', zh: '案例分析' },
    description: {
      en: 'Business case interviews for MBA and management programs',
      zh: 'MBA 和管理类项目的商业案例面试'
    },
    requiredGear: { ielts: 7.0 },
    questions: [
      {
        id: 'market-entry',
        question: {
          en: 'A European luxury brand wants to enter the Chinese market. What factors should they consider?',
          zh: '一个欧洲奢侈品牌想进入中国市场。他们应该考虑哪些因素？'
        },
        options: [
          {
            text: { en: 'Focus only on marketing channels like WeChat and Douyin', zh: '只关注微信和抖音等营销渠道' },
            feedback: { en: 'Too narrow. Consider regulatory, competitive, and cultural factors.', zh: '太局限了。考虑监管、竞争和文化因素。' },
            baseTV: 15
          },
          {
            text: { en: 'Analyze market size, competition, regulations, and localization strategy', zh: '分析市场规模、竞争、法规和本地化策略' },
            feedback: { en: 'Good structured thinking! Add consumer behavior analysis.', zh: '结构化思维不错！加上消费者行为分析。' },
            baseTV: 35
          },
          {
            text: { en: 'Full framework: PESTEL + Porter\'s 5 Forces + consumer segmentation + entry mode', zh: '完整框架：PESTEL + 波特五力 + 消费者细分 + 进入模式' },
            requiredGear: { internship: 1 },
            feedback: { en: 'Outstanding consulting-level analysis!', zh: '出色的咨询级分析！' },
            baseTV: 50
          }
        ]
      },
      {
        id: 'profitability',
        question: {
          en: 'A coffee shop chain\'s profits have dropped 20% this quarter. Diagnose the problem.',
          zh: '一家连锁咖啡店本季度利润下降了 20%。诊断问题所在。'
        },
        options: [
          {
            text: { en: 'Blame external factors like the economy or competition', zh: '归咎于经济或竞争等外部因素' },
            feedback: { en: 'Do not jump to conclusions. Break down revenue and costs first.', zh: '不要急于下结论。先分解收入和成本。' },
            baseTV: 15
          },
          {
            text: { en: 'Use profit tree: Revenue (volume x price) vs Costs (fixed + variable)', zh: '使用利润树：收入（量 x 价）vs 成本（固定 + 变动）' },
            feedback: { en: 'Good framework! Now dig into each branch.', zh: '好框架！现在深入每个分支。' },
            baseTV: 35
          },
          {
            text: { en: 'Profit tree + benchmark against competitors + check for operational inefficiencies', zh: '利润树 + 与竞争对手对标 + 检查运营效率低下' },
            requiredGear: { internship: 1 },
            feedback: { en: 'Excellent! Comprehensive and actionable diagnosis.', zh: '优秀！全面且可操作的诊断。' },
            baseTV: 50
          }
        ]
      }
    ]
  }
]

export function getAvailableSimulations(gearState: { ielts?: number; internship?: number; research?: number }): Simulation[] {
  return INTERVIEW_SIMULATIONS.filter(sim => {
    if (!sim.requiredGear) return true
    
    if (sim.requiredGear.ielts && (!gearState.ielts || gearState.ielts < sim.requiredGear.ielts)) {
      return false
    }
    if (sim.requiredGear.internship && (!gearState.internship || gearState.internship < sim.requiredGear.internship)) {
      return false
    }
    if (sim.requiredGear.research && (!gearState.research || gearState.research < sim.requiredGear.research)) {
      return false
    }
    return true
  })
}

// export function canSelectOption(option: SimulationOption, gearState: { ielts?: number; internship?: number; research?: number }): boolean {
//   if (!option.requiredGear) return true
  
//   if (option.requiredGear.ielts && (!gearState.ielts || gearState.ielts < option.requiredGear.ielts)) {
//     return false
//   }
//   if (option.requiredGear.internship && (!gearState.internship || gearState.internship < option.requiredGear.internship)) {
//     return false
//   }
//   return true
// }
export function canSelectOption(option: SimulationOption, gearState: { ielts?: number; internship?: number }): boolean {
  // 1. 如果该选项没有装备要求，直接解锁
  if (!option.requiredGear) return true;

  // 2. 雅思等级转换表：明确规定每个 Level 对应的真实分数
  const ieltsScoreMap: Record<number, number> = {
    0: 5.5, // 0 级初始状态
    1: 6.0, // Level 1
    2: 6.5, // Level 2
    3: 7.0, // Level 3
    4: 7.5, // Level 4
    5: 8.0  // Level 5
  };

  // 3. 验证雅思
  if (option.requiredGear.ielts) {
    const ieltsLevel = gearState.ielts || 0;
    const actualIeltsScore = ieltsScoreMap[ieltsLevel] || 5.5; // 查表得出实际分数
    
    if (actualIeltsScore < option.requiredGear.ielts) {
      return false; // 实际分数小于要求分数，锁定
    }
  }

  // 4. 验证实习（假设等级与段数 1:1 对应）
  if (option.requiredGear.internship) {
    const internshipLevel = gearState.internship || 0;
    
    if (internshipLevel < option.requiredGear.internship) {
      return false; // 实习段数不够，锁定
    }
  }

  // 5. 验证科研背景
  if (option.requiredGear.research) {
    const researchLevel = gearState.research || 0;
    
    if (researchLevel < option.requiredGear.research) {
      return false; // 科研背景不够，锁定
    }
  }

  return true; // 所有检查都通过，解锁！
}