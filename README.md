# 🚀 AI Interview Simulator

An intelligent, full-stack mock interview and career preparation platform that simulates realistic technical and behavioral interview sessions using Large Language Models (LLMs).

Built with **React**, **TypeScript**, **Tailwind CSS**, **FastAPI**, and powered by **Google Gemini 2.5 Flash**.

---

## ✨ Features

- 🎯 **Role-Based Configuration:** Customize interview sessions by job role, experience level, and interview type.
- ⚡ **AI-Powered Question Generation:** Dynamic questions tailored to user skills and background.
- 📊 **Real-Time Evaluation:** Instant scoring across Technical Accuracy, Communication, Confidence, and Completeness.
- 💡 **Actionable Feedback:** Get detailed strengths, areas for improvement, and model answers after every response.
- 🏆 **Comprehensive Final Report:** End-of-session performance summary with cumulative score tracking.
- 🌙 **Modern Dark SaaS UI:** Clean, developer-focused interface designed for optimal user experience.

---

## 🛠️ Tech Stack

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
