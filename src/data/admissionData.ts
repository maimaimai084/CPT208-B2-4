export interface MajorStat {
  id: string
  name: string
  fullName: string
  top10Rate: number
  top50Rate: number
  scoreTiers: ScoreTier[]
  caseStudies: CaseStudy[]
}

export interface ScoreTier {
  range: string
  degreeClass: string
  targets: string
  note: string
}

export interface CaseStudy {
  id: string
  year: string
  route: string
  gpa: string
  ielts: string
  gre?: string
  offers: string[]
  highlight: string
}

export const majorStats: MajorStat[] = [
  {
    id: 'CST',
    name: 'CST',
    fullName: 'BEng Computer Science and Technology',
    top10Rate: 45,
    top50Rate: 90,
    scoreTiers: [
      { range: '82+', degreeClass: 'First Class', targets: 'G5, Ivy League, US Top 20, CMU, NUS', note: 'Strong research background recommended' },
      { range: '70-81', degreeClass: '2:1', targets: 'Manchester, Edinburgh, Nanyang, ANU', note: 'Solid internships can compensate' },
      { range: '60-69', degreeClass: '2:2', targets: 'Mid-tier UK, Australia, HK', note: 'Portfolio projects are critical' },
    ],
    caseStudies: [
      {
        id: 'CST-1',
        year: '25fall',
        route: '2+2',
        gpa: '82+',
        ielts: '7.5',
        gre: '325+',
        offers: ['UCLA — MSc ECE', 'UPenn — MSc EE', 'Cornell — MSc ECE', 'UMich — MSc ECE', 'UIUC — MSc ECE', 'UCSD — MSc CS'],
        highlight: 'Leveraged Liverpool degree advantage for US ECE programs; strong research portfolio with conference-level projects.'
      }
    ]
  },
  {
    id: 'AI',
    name: 'AI',
    fullName: 'BEng Artificial Intelligence',
    top10Rate: 45,
    top50Rate: 90,
    scoreTiers: [
      { range: '85+', degreeClass: 'First Class', targets: 'Cambridge DS, Imperial AI, CMU ECE/AI, UCL ML', note: 'Top conference experience highly valued' },
      { range: '78-82', degreeClass: 'Upper 2:1', targets: 'Edinburgh, Manchester, Nanyang AI/DS', note: 'Algorithm internships help significantly' },
      { range: '60-77', degreeClass: '2:2 / Lower 2:1', targets: 'Mid-tier UK, Australia, HK', note: 'Project quality matters more than GPA' },
    ],
    caseStudies: [
      {
        id: 'AI-1',
        year: '25fall',
        route: '4+0',
        gpa: '85+',
        ielts: '7.0',
        offers: ['Cambridge — MPhil Data Science', 'Imperial — MSc AI', 'UCL — MSc Machine Learning'],
        highlight: 'Deep learning research + top-tier Python/algorithm projects secured multiple G5 offers.'
      }
    ]
  },
  {
    id: 'MRS',
    name: 'MRS',
    fullName: 'BEng Mechatronics and Robotic Systems',
    top10Rate: 40,
    top50Rate: 81,
    scoreTiers: [
      { range: '83+', degreeClass: 'First Class', targets: 'JHU BME #1, Imperial, Duke, Georgia Tech', note: 'Cross-disciplinary research is a major advantage' },
      { range: '70-82', degreeClass: '2:1', targets: 'Manchester, Bristol, NUS Robotics', note: 'Engineering projects strengthen applications' },
      { range: '60-69', degreeClass: '2:2', targets: 'Australia, Mid-tier UK', note: 'iGEM or lab experience helps' },
    ],
    caseStudies: [
      {
        id: 'MRS-1',
        year: '24fall',
        route: '4+0',
        gpa: '83+',
        ielts: '7.0',
        offers: ['JHU — MSc BME (#1 in US)', 'Imperial — MSc Biomedical Eng', 'Duke — MSc BME', 'Georgia Tech — MSc BME'],
        highlight: 'Cross-disciplinary robot+biomedical research and iGEM competition created a standout cross-application profile.'
      }
    ]
  },
  {
    id: 'TE',
    name: 'TE',
    fullName: 'BEng Telecommunications Engineering',
    top10Rate: 35,
    top50Rate: 80,
    scoreTiers: [
      { range: '82+', degreeClass: 'First Class', targets: 'Imperial, UCL, UPenn, JHU', note: 'Signal processing research is a plus' },
      { range: '70-81', degreeClass: '2:1', targets: 'Manchester, Warwick, Bristol, Nanyang', note: 'Telecom internships strengthen profile' },
      { range: '60-69', degreeClass: '2:2', targets: 'Mid-tier UK, Australia', note: 'Strong SOP can compensate for lower GPA' },
    ],
    caseStudies: [
      {
        id: 'TE-1',
        year: '25fall',
        route: '4+0',
        gpa: '65',
        ielts: '7.0',
        offers: ['UPenn — MSc EE (Ivy)', 'JHU — MSc EE', 'UW — MSc ECE', 'USC — MSc EE', 'NTU — MSc Computer Engineering'],
        highlight: 'Lowest-GPA Ivy acceptance in SAT TE history. Differentiated SOP emphasized XJTLU British curriculum and cross-disciplinary fit.'
      }
    ]
  },
  {
    id: 'EST',
    name: 'EST',
    fullName: 'BEng Electronic Science and Technology',
    top10Rate: 32,
    top50Rate: 83,
    scoreTiers: [
      { range: '81+', degreeClass: 'First Class', targets: 'Imperial, UCL, NUS ECE/CS', note: 'Chip/embedded projects are highly valued' },
      { range: '72-80', degreeClass: '2:1', targets: 'Manchester, NUS, Warwick', note: 'Hardware internships boost chances' },
      { range: '60-71', degreeClass: '2:2', targets: 'Mid-tier UK, Australia, Glasgow', note: 'Programming certificates help' },
    ],
    caseStudies: [
      {
        id: 'EST-1',
        year: '25fall',
        route: '2+2',
        gpa: '70→81',
        ielts: '7.0',
        offers: ['Imperial — MSc Control and Optimisation', 'NUS — MSc ECE'],
        highlight: 'Upward GPA trend + chip/control research secured G5 and Asia Top 2 offers.'
      }
    ]
  },
  {
    id: 'EE',
    name: 'EE',
    fullName: 'BEng Electrical Engineering',
    top10Rate: 30,
    top50Rate: 85,
    scoreTiers: [
      { range: '84+', degreeClass: 'First Class', targets: 'Imperial Energy, UCL EEE, NUS EE', note: 'Power systems research is a plus' },
      { range: '70-83', degreeClass: '2:1', targets: 'Manchester, Warwick, Bristol, UNSW, USyd', note: 'Grid/energy internships help' },
      { range: '55-69', degreeClass: '2:2', targets: 'Australia (EA accredited), UK mid-tier', note: 'Project experience is essential' },
    ],
    caseStudies: [
      {
        id: 'EE-1',
        year: '25fall',
        route: '4+0',
        gpa: '84+',
        ielts: '7.0',
        offers: ['Imperial — MSc Power/Energy', 'UCL — MSc EEE', 'Edinburgh — MSc EE', 'NUS — MSc EE'],
        highlight: 'Power systems research + State Grid internship created a strong energy-sector profile.'
      }
    ]
  },
  {
    id: 'ICS',
    name: 'ICS',
    fullName: 'BSc Information and Computing Science',
    top10Rate: 30,
    top50Rate: 80,
    scoreTiers: [
      { range: '80+', degreeClass: 'First Class', targets: 'UCL DS, Edinburgh AI, HKU CS, NUS Computing', note: 'Math modeling competitions strengthen profile' },
      { range: '70-79', degreeClass: '2:1', targets: 'Manchester, Bristol, Nanyang DS', note: 'Data analysis projects are critical' },
      { range: '60-69', degreeClass: '2:2', targets: 'Mid-tier UK, Australia', note: 'Programming portfolio helps' },
    ],
    caseStudies: [
      {
        id: 'ICS-1',
        year: '25fall',
        route: '4+0',
        gpa: '80+',
        ielts: '6.5',
        offers: ['UCL — MSc Data Science', 'Edinburgh — MSc AI', 'HKU — MSc CS', 'NUS — MSc Computing Science'],
        highlight: 'Math modeling + data analysis projects secured multiple global Top 50 offers.'
      }
    ]
  },
  {
    id: 'DMT',
    name: 'DMT',
    fullName: 'BEng Digital Media Technology',
    top10Rate: 25,
    top50Rate: 75,
    scoreTiers: [
      { range: '75+', degreeClass: 'First / Upper 2:1', targets: 'UCL HCI, UAL, CUHK New Media', note: 'Portfolio of interactive projects is essential' },
      { range: '65-74', degreeClass: '2:1', targets: 'Goldsmiths, Bristol, European media programs', note: 'Design/development projects help' },
      { range: '60-64', degreeClass: '2:2', targets: 'Australia, Mid-tier UK media programs', note: 'Strong creative portfolio compensates' },
    ],
    caseStudies: [
      {
        id: 'DMT-1',
        year: '25fall',
        route: '4+0',
        gpa: '72+',
        ielts: '6.5',
        offers: ['UAL — MA Interaction Design', 'UCL — MSc HCI', 'CUHK — MSc New Media Technology'],
        highlight: 'Interaction design + digital imaging projects built a competitive creative-technical profile.'
      }
    ]
  }
]

export const overallStats = {
  destinations: [
    { region: 'United Kingdom', share: 80, note: 'G5 focus: Imperial, UCL, Edinburgh, Manchester' },
    { region: 'United States', share: 10, note: 'Ivy League + Top ECE/CS programs' },
    { region: 'Singapore', share: 7, note: 'NUS, NTU — ECE / CS / Robotics' },
    { region: 'Australia', share: 3, note: 'Group of Eight as safety net' }
  ],
  languageReqs: [
    { target: 'UK G5', ielts: '7.0 (6.5)', gre: 'Not required', note: 'Some programs accept 6.5 overall' },
    { target: 'US Top 30', ielts: '7.0+', gre: '320+ recommended', note: 'Holistic review; strong LORs help' },
    { target: 'Singapore NUS/NTU', ielts: '6.5–7.0', gre: 'Varies by program', note: 'Course match is critical' },
    { target: 'Australia Group of Eight', ielts: '6.0–6.5', gre: 'Not required', note: 'Engineering Australia accreditation available' }
  ],
  rankingByAdmitRate: ['CST/AI', 'MRS', 'EST', 'TE', 'EE', 'ICS', 'DMT']
}
