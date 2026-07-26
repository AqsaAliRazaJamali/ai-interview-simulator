export interface InterviewConfig {
  role: string;
  experience: string;
  type: string;
  question_count: number;
}

export interface Feedback {
  technical_accuracy: number;
  communication: number;
  confidence: number;
  completeness: number;
  overall_score: number;
  strengths: string[];
  improvements: string[];
  suggested_answer: string;
}

export interface QuestionAnswerPair {
  question: string;
  answer: string;
  feedback: Feedback;
}