export interface Guide {
  id: string
  title: string
  icon: string
  content: string
}

export const GUIDES: Record<string, Guide> = {
  'story-cv': {
    id: 'story-cv',
    title: 'CV Writing Excellence',
    icon: '📝',
    content: `
      <div class="space-y-6">
        <div class="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
          <h4 class="font-bold text-blue-900 mb-2">What is a CV?</h4>
          <p class="text-gray-700">A CV (Curriculum Vitae) is a concise document summarizing your academic background, skills, experiences, and achievements. Unlike a resume, CVs for postgraduate applications are typically 1-2 pages.</p>
        </div>

        <div>
          <h4 class="font-bold text-gray-900 mb-3 text-lg">📋 Essential CV Sections</h4>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">•</span><span><strong>Personal Information:</strong> Name, contact details, LinkedIn profile (optional)</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">•</span><span><strong>Education:</strong> Degree, university, GPA (if 3.5+), relevant coursework</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">•</span><span><strong>Research Experience:</strong> Labs, projects, supervisors, outcomes</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">•</span><span><strong>Work Experience:</strong> Internships, part-time jobs relevant to your field</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">•</span><span><strong>Publications:</strong> Papers, conference presentations (if any)</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">•</span><span><strong>Skills:</strong> Technical skills, languages, tools</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-1">•</span><span><strong>Awards & Honors:</strong> Scholarships, competitions, recognitions</span></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-gray-900 mb-3 text-lg">✍️ Writing Tips</h4>
          <div class="space-y-3">
            <div class="bg-green-50 rounded-lg p-3">
              <p class="font-medium text-green-900">Use Action Verbs</p>
              <p class="text-gray-600 text-sm">Start bullet points with strong verbs: "Developed," "Analyzed," "Led," "Implemented"</p>
            </div>
            <div class="bg-green-50 rounded-lg p-3">
              <p class="font-medium text-green-900">Quantify Achievements</p>
              <p class="text-gray-600 text-sm">Include numbers: "Improved efficiency by 40%", "Managed team of 5 students"</p>
            </div>
            <div class="bg-green-50 rounded-lg p-3">
              <p class="font-medium text-green-900">Tailor for Each Application</p>
              <p class="text-gray-600 text-sm">Highlight experiences most relevant to the specific program you're applying to</p>
            </div>
            <div class="bg-green-50 rounded-lg p-3">
              <p class="font-medium text-green-900">Keep It Concise</p>
              <p class="text-gray-600 text-sm">Use bullet points, not paragraphs. Be specific but brief.</p>
            </div>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-gray-900 mb-3 text-lg">❌ Common Mistakes to Avoid</h4>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2"><span class="text-red-500 mt-1">✕</span><span>Using colorful or creative templates - keep it professional</span></li>
            <li class="flex items-start gap-2"><span class="text-red-500 mt-1">✕</span><span>Including irrelevant personal information (age, marital status)</span></li>
            <li class="flex items-start gap-2"><span class="text-red-500 mt-1">✕</span><span>Spelling or grammar errors - always proofread multiple times</span></li>
            <li class="flex items-start gap-2"><span class="text-red-500 mt-1">✕</span><span>Using generic objective statements</span></li>
            <li class="flex items-start gap-2"><span class="text-red-500 mt-1">✕</span><span>Lying or exaggerating - background checks are common</span></li>
          </ul>
        </div>

        <div class="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500">
          <h4 class="font-bold text-purple-900 mb-2">💡 Pro Tip</h4>
          <p class="text-gray-700">Ask 2-3 people to review your CV before submitting. Get feedback from your academic supervisor, career center, and ideally someone who has successfully applied to similar programs.</p>
        </div>
      </div>
    `
  },
  'story-interview': {
    id: 'story-interview',
    title: 'Interview Preparation Guide',
    icon: '🎤',
    content: `
      <div class="space-y-6">
        <div class="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
          <h4 class="font-bold text-blue-900 mb-2">Why Interviews Matter</h4>
          <p class="text-gray-700">Interviews are your opportunity to bring your application to life. Admissions officers want to verify your communication skills, confirm your genuine interest, and assess if you're a good fit for their program.</p>
        </div>

        <div>
          <h4 class="font-bold text-gray-900 mb-3 text-lg">📝 Common Interview Types</h4>
          <div class="space-y-3">
            <div class="bg-gray-50 rounded-lg p-3">
              <p class="font-medium text-gray-900">Traditional Admissions Interview</p>
              <p class="text-gray-600 text-sm">One-on-one with admissions officers or alumni. Focuses on your motivations, background, and fit.</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-3">
              <p class="font-medium text-gray-900">Technical Interview</p>
              <p class="text-gray-600 text-sm">Common for STEM programs. May include problem-solving, coding, or domain-specific questions.</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-3">
              <p class="font-medium text-gray-900">Group Interview</p>
              <p class="text-gray-600 text-sm">Evaluates teamwork and communication skills through group discussions or activities.</p>
            </div>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-gray-900 mb-3 text-lg">🎯 Top 10 Common Questions</h4>
          <ol class="space-y-3 text-gray-700">
            <li class="bg-yellow-50 rounded-lg p-3"><strong>Tell me about yourself.</strong> <span class="text-gray-600">Keep it concise, 2-3 minutes, focus on academic/professional journey.</span></li>
            <li class="bg-yellow-50 rounded-lg p-3"><strong>Why do you want to study at this program/university?</strong> <span class="text-gray-600">Show specific knowledge about the program.</span></li>
            <li class="bg-yellow-50 rounded-lg p-3"><strong>What are your career goals?</strong> <span class="text-gray-600">Connect your past experience with future aspirations.</span></li>
            <li class="bg-yellow-50 rounded-lg p-3"><strong>Tell me about a challenge you overcame.</strong> <span class="text-gray-600">Use the STAR method (Situation, Task, Action, Result).</span></li>
            <li class="bg-yellow-50 rounded-lg p-3"><strong>What are your strengths and weaknesses?</strong> <span class="text-gray-600">Be honest, show self-awareness, and discuss how you're improving.</span></li>
            <li class="bg-yellow-50 rounded-lg p-3"><strong>Why did you choose this major?</strong> <span class="text-gray-600">Connect your passion with practical applications.</span></li>
            <li class="bg-yellow-50 rounded-lg p-3"><strong>Describe a research/project you've done.</strong> <span class="text-gray-600">Explain your role, methods, and outcomes clearly.</span></li>
            <li class="bg-yellow-50 rounded-lg p-3"><strong>What books have you read recently?</strong> <span class="text-gray-600">Mention academic or industry-relevant books.</span></li>
            <li class="bg-yellow-50 rounded-lg p-3"><strong>What questions do you have for me?</strong> <span class="text-gray-600">Always prepare 2-3 thoughtful questions.</span></li>
            <li class="bg-yellow-50 rounded-lg p-3"><strong>Where else have you applied?</strong> <span class="text-gray-600">Be honest but diplomatic - don't name competitors directly.</span></li>
          </ol>
        </div>

        <div>
          <h4 class="font-bold text-gray-900 mb-3 text-lg">✅ Preparation Checklist</h4>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-green-50 rounded-lg p-3 flex items-start gap-2">
              <span class="text-green-600">✓</span>
              <span class="text-gray-700 text-sm">Re-read your application materials thoroughly</span>
            </div>
            <div class="bg-green-50 rounded-lg p-3 flex items-start gap-2">
              <span class="text-green-600">✓</span>
              <span class="text-gray-700 text-sm">Research the program, faculty, and recent news</span>
            </div>
            <div class="bg-green-50 rounded-lg p-3 flex items-start gap-2">
              <span class="text-green-600">✓</span>
              <span class="text-gray-700 text-sm">Prepare 2-3 questions to ask the interviewer</span>
            </div>
            <div class="bg-green-50 rounded-lg p-3 flex items-start gap-2">
              <span class="text-green-600">✓</span>
              <span class="text-gray-700 text-sm">Practice with friends or in front of a mirror</span>
            </div>
            <div class="bg-green-50 rounded-lg p-3 flex items-start gap-2">
              <span class="text-green-600">✓</span>
              <span class="text-gray-700 text-sm">Test your technology (camera, microphone, internet)</span>
            </div>
            <div class="bg-green-50 rounded-lg p-3 flex items-start gap-2">
              <span class="text-green-600">✓</span>
              <span class="text-gray-700 text-sm">Prepare a quiet, well-lit environment</span>
            </div>
            <div class="bg-green-50 rounded-lg p-3 flex items-start gap-2">
              <span class="text-green-600">✓</span>
              <span class="text-gray-700 text-sm">Dress professionally, even for virtual interviews</span>
            </div>
            <div class="bg-green-50 rounded-lg p-3 flex items-start gap-2">
              <span class="text-green-600">✓</span>
              <span class="text-gray-700 text-sm">Have backup plans for technical issues</span>
            </div>
          </div>
        </div>

        <div class="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-500">
          <h4 class="font-bold text-orange-900 mb-2">💡 Interview Day Tips</h4>
          <ul class="space-y-2 text-gray-700">
            <li>• Arrive (log in) 5-10 minutes early</li>
            <li>• Maintain eye contact with the camera, not the screen</li>
            <li>• Speak clearly and at a moderate pace</li>
            <li>• It's okay to pause and think before answering</li>
            <li>• Be yourself - authenticity is valued</li>
            <li>• Send a thank-you email within 24 hours</li>
          </ul>
        </div>
      </div>
    `
  }
}

export function getGuideById(id: string): Guide | undefined {
  return GUIDES[id]
}