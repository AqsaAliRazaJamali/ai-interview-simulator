from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import InterviewConfig, AnswerSubmission, FeedbackResponse
from app.services import generate_question, evaluate_answer

app = FastAPI(title="AI Interview Simulator API")

# Configure CORS so our React frontend can connect seamlessly
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "AI Interview Simulator Backend is running!"}

@app.post("/api/generate-question")
def get_question(config: InterviewConfig):
    try:
        q = generate_question(config.role, config.experience, config.type)
        return {"question": q}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/evaluate-answer", response_model=FeedbackResponse)
def evaluate(sub: AnswerSubmission):
    try:
        result = evaluate_answer(sub.role, sub.experience, sub.question, sub.answer)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)