from pydantic import BaseModel
from typing import List, Optional

class InterviewConfig(BaseModel):
    role: str
    experience: str
    type: str
    question_count: int

class AnswerSubmission(BaseModel):
    role: str
    experience: str
    question: str
    answer: str

class FeedbackResponse(BaseModel):
    technical_accuracy: int  # 0 to 100
    communication: int        # 0 to 100
    confidence: int           # 0 to 100
    completeness: int         # 0 to 100
    overall_score: int        # 0 to 100
    strengths: List[str]
    improvements: List[str]
    suggested_answer: str

class FinalReportRequest(BaseModel):
    role: str
    experience: str
    history: List[dict]  # Contains questions, answers, and feedback scores