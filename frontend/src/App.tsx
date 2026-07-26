import React, { useState } from 'react';
import { SetupConfig } from './components/SetupConfig';
import { InterviewSession } from './components/InterviewSession';
import { FinalReport } from './components/FinalReport';
import { InterviewConfig, QuestionAnswerPair, Feedback } from './types';
import { fetchQuestion, submitAnswer } from './api';

export function App() {
  const [stage, setStage] = useState<'config' | 'interview' | 'report'>('config');
  const [config, setConfig] = useState<InterviewConfig | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [history, setHistory] = useState<QuestionAnswerPair[]>([]);
  const [currentFeedback, setCurrentFeedback] = useState<Feedback | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleStart = async (selectedConfig: InterviewConfig) => {
    setConfig(selectedConfig);
    setLoading(true);
    try {
      const q = await fetchQuestion(
        selectedConfig.role,
        selectedConfig.experience,
        selectedConfig.type,
        selectedConfig.question_count
      );
      setCurrentQuestion(q);
      setStage('interview');
    } catch (err) {
      alert("Failed to start session. Verify API key and backend server.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitAnswer = async (answer: string) => {
    if (!config) return;
    setLoading(true);
    try {
      const feedback = await submitAnswer(
        config.role,
        config.experience,
        currentQuestion,
        answer
      );
      setCurrentFeedback(feedback);
      setHistory(prev => [...prev, { question: currentQuestion, answer, feedback }]);
    } catch (err) {
      alert("Failed to evaluate answer.");
    } finally {
      setLoading(false);
    }
  };

  const handleNextQuestion = async () => {
    if (!config) return;
    setCurrentFeedback(null);
    const nextIdx = questionIndex + 1;

    if (nextIdx >= config.question_count) {
      setStage('report');
    } else {
      setQuestionIndex(nextIdx);
      setLoading(true);
      try {
        const q = await fetchQuestion(
          config.role,
          config.experience,
          config.type,
          config.question_count
        );
        setCurrentQuestion(q);
      } catch (err) {
        alert("Failed to fetch next question.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRestart = () => {
    setStage('config');
    setHistory([]);
    setQuestionIndex(0);
    setCurrentFeedback(null);
  };

  return (
    <div className="min-h-screen bg-darkBg text-gray-100 p-6">
      <header className="max-w-6xl mx-auto flex justify-between items-center border-b border-darkBorder pb-4 mb-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-brandPrimary to-brandAccent bg-clip-text text-transparent">
          AI Interview Simulator
        </h1>
        <div className="text-xs text-gray-400">Powered by Gemini 2.5 & FastAPI</div>
      </header>

      <main className="max-w-6xl mx-auto">
        {stage === 'config' && <SetupConfig onStart={handleStart} loading={loading} />}
        {stage === 'interview' && config && (
          <InterviewSession
            question={currentQuestion}
            questionIndex={questionIndex}
            totalQuestions={config.question_count}
            onSubmit={handleSubmitAnswer}
            onNext={handleNextQuestion}
            feedback={currentFeedback}
            loading={loading}
          />
        )}
        {stage === 'report' && <FinalReport history={history} onRestart={handleRestart} />}
      </main>
    </div>
  );
}

export default App;