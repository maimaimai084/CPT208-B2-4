export interface SimulationOption {
  text: { en: string; zh: string }
  requiredGear?: { ielts?: number; internship?: number }
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
  requiredGear?: { ielts?: number; internship?: number }
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
  }
]

export function getAvailableSimulations(gearState: { ielts?: number; internship?: number }): Simulation[] {
  return INTERVIEW_SIMULATIONS.filter(sim => {
    if (!sim.requiredGear) return true
    
    if (sim.requiredGear.ielts && (!gearState.ielts || gearState.ielts < sim.requiredGear.ielts)) {
      return false
    }
    if (sim.requiredGear.internship && (!gearState.internship || gearState.internship < sim.requiredGear.internship)) {
      return false
    }
    return true
  })
}

export function canSelectOption(option: SimulationOption, gearState: { ielts?: number; internship?: number }): boolean {
  if (!option.requiredGear) return true
  
  if (option.requiredGear.ielts && (!gearState.ielts || gearState.ielts < option.requiredGear.ielts)) {
    return false
  }
  if (option.requiredGear.internship && (!gearState.internship || gearState.internship < option.requiredGear.internship)) {
    return false
  }
  return true
}