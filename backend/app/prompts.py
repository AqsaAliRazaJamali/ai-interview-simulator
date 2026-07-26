QUESTION_PROMPT = """
You are an expert technical recruiter and senior engineering manager.
Generate ONE interview question for a candidate applying for the position of {role} at the {experience} level.
Interview Type: {interview_type}.

Rules:
1. Make the question realistic, engaging, and clear.
2. Ensure the difficulty matches the {experience} level.
3. Output ONLY the question text. Do not add introductory conversational text or extra commentary.
"""

EVALUATION_PROMPT = """
You are a senior tech lead evaluating a candidate's answer during an interview.

Job Role: {role}
Experience Level: {experience}
Question: {question}
Candidate's Answer: {answer}

Analyze the response and return strict JSON with this structure:
{{
  "technical_accuracy": <number 0-100>,
  "communication": <number 0-100>,
  "confidence": <number 0-100>,
  "completeness": <number 0-100>,
  "overall_score": <number 0-100>,
  "strengths": ["point 1", "point 2"],
  "improvements": ["point 1", "point 2"],
  "suggested_answer": "<a high quality model answer>"
}}
Return ONLY valid JSON with no markdown formatting around it.
"""
