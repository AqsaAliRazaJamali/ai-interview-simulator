# AI Interview Simulator

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google-Gemini%202.5%20Flash-4285F4?logo=google&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![License](https://img.shields.io/badge/License-MIT-green)

An intelligent full-stack mock interview platform that simulates realistic technical and behavioral interviews using **Google Gemini 2.5 Flash**. The application generates AI-powered interview questions, evaluates candidate responses in real time, and provides detailed feedback to help users improve their interview performance.

---

## 📌 Project Overview

AI Interview Simulator is designed to help students, job seekers, and professionals prepare for interviews through interactive AI-driven sessions. Users can customize interviews based on role, experience level, and interview type while receiving instant performance analysis and personalized improvement suggestions.

---

## Features

-  **Role-Based Configuration:** Customize interview sessions by job role, experience level, and interview type.
-  **AI-Powered Question Generation:** Dynamic questions tailored to user skills and background.
-  **Real-Time Evaluation:** Instant scoring across Technical Accuracy, Communication, Confidence, and Completeness.
-  **Actionable Feedback:** Get detailed strengths, areas for improvement, and model answers after every response.
-  **Comprehensive Final Report:** End-of-session performance summary with cumulative score tracking.
-  **Modern Dark SaaS UI:** Clean, developer-focused interface designed for optimal user experience.

---

##  Tech Stack

### Frontend
- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **HTTP Client:** Axios

### Backend
- **Framework:** FastAPI (Python 3.10+)
- **AI Model:** Google Gemini 2.5 Flash (`google-genai` SDK)
- **Data Validation:** Pydantic
- **Server:** Uvicorn

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Node.js 18+
- Google Gemini API Key

---

## 📂 Project Structure

```text
ai-interview-simulator/
│
├── backend/
│   ├── app/
│   │   ├── prompts.py
│   │   ├── schemas.py
│   │   └── services.py
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   └── hero.png
│   │   ├── components/
│   │   │   ├── FinalReport.tsx
│   │   │   ├── InterviewSession.tsx
│   │   │   └── SetupConfig.tsx
│   │   ├── api.ts
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── types.ts
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
│
└── README.md
```

---
## ▶️ How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/AqsaAliRazaJamali/ai-interview-simulator.git
```

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Create and activate a virtual environment:

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

Install the required packages:

```bash
pip install -r requirements.txt
```

Create a `.env` file inside the backend folder:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the backend server:

```bash
python main.py
```

Backend runs at:

```text
http://127.0.0.1:8000
```

---

### 3. Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

##  Evaluation Criteria

The AI evaluates each response based on:

- Technical Accuracy
- Communication Skills
- Confidence
- Completeness
- Overall Performance

---

##  Key Highlights

- AI-generated interview questions
- Real-time answer evaluation
- Personalized improvement suggestions
- Interactive full-stack web application
- Google Gemini integration
- Modern responsive UI
- FastAPI REST backend

---

## 👩‍💻 Author

**Aqsa Jamali**

GitHub: https://github.com/AqsaAliRazaJamali

---

## 📄 License

This project is licensed under the MIT License.
