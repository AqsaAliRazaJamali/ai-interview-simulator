import os
import json
from google import genai
from dotenv import load_dotenv
from app.prompts import QUESTION_PROMPT, EVALUATION_PROMPT

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def generate_question(role: str, experience: str, interview_type: str) -> str:
    prompt = QUESTION_PROMPT.format(
        role=role, experience=experience, interview_type=interview_type
    )
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )
    return response.text.strip()

def evaluate_answer(role: str, experience: str, question: str, answer: str) -> dict:
    prompt = EVALUATION_PROMPT.format(
        role=role, experience=experience, question=question, answer=answer
    )
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )
    
    # Sanitize markdown formatting if returned
    raw_text = response.text.strip()
    if raw_text.startswith("```json"):
        raw_text = raw_text.split("```json")[1].rsplit("```", 1)[0].strip()
    elif raw_text.startswith("```"):
        raw_text = raw_text.split("```")[1].rsplit("```", 1)[0].strip()

    return json.loads(raw_text)