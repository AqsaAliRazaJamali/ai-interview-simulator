import axios from 'axios';
import { Feedback } from './types';

const API_BASE = 'http://127.0.0.1:8000/api';

export const fetchQuestion = async (
  role: string,
  experience: string,
  type: string,
  question_count: number
): Promise<string> => {
  const res = await axios.post(`${API_BASE}/generate-question`, {
    role,
    experience,
    type,
    question_count
  });
  return res.data.question;
};

export const submitAnswer = async (
  role: string,
  experience: string,
  question: string,
  answer: string
): Promise<Feedback> => {
  const res = await axios.post(`${API_BASE}/evaluate-answer`, {
    role,
    experience,
    question,
    answer
  });
  return res.data;
};