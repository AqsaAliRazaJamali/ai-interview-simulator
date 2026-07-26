import React, { useState } from 'react';
import { Send, CheckCircle, AlertTriangle, Lightbulb, ArrowRight } from 'lucide-react';
import { Feedback } from '../types';

interface Props {
  question: string;
  questionIndex: number;
  totalQuestions: number;
  onSubmit: (answer: string) => void;
  onNext: () => void;
  feedback: Feedback | null;
  loading: boolean;
}

export const InterviewSession: React.FC<Props> = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  onNext,
  feedback,
  loading
}) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (!answer.trim()) return;
    onSubmit(answer);
  };

  const handleNextClick = () => {
    setAnswer('');
    onNext();
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 space-y-6">
      {/* Question Card */}
      <div className="p-6 bg-darkCard border border-darkBorder rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs uppercase tracking-wider bg-brandPrimary/20 text-brandPrimary px-3 py-1 rounded-full font-semibold">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-white leading-relaxed">{question}</h3>
      </div>

      {/* Answer Box */}
      <div className="bg-darkCard border border-darkBorder rounded-2xl p-6">
        <textarea
          rows={6}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={!!feedback || loading}
          placeholder="Type your response here... Be detailed and structure your thoughts clearly."
          className="w-full bg-darkBg border border-darkBorder rounded-xl p-4 text-white focus:outline-none focus:border-brandPrimary resize-none disabled:opacity-50"
        />

        {!feedback && (
          <button
            onClick={handleSubmit}
            disabled={loading || !answer.trim()}
            className="mt-4 px-6 py-3 bg-brandPrimary hover:bg-brandPrimary/80 font-medium rounded-xl flex items-center gap-2 ml-auto transition-all disabled:opacity-50"
          >
            {loading ? "Evaluating..." : <> <Send className="w-4 h-4" /> Submit Answer </>}
          </button>
        )}
      </div>

      {/* Feedback Card */}
      {feedback && (
        <div className="p-6 bg-darkCard border border-brandPrimary/40 rounded-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-darkBorder pb-4">
            <h4 className="text-lg font-bold text-white">AI Response Evaluation</h4>
            <div className="text-2xl font-black text-brandPrimary">
              Score: {feedback.overall_score}/100
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-darkBg p-3 rounded-lg border border-darkBorder">
              <div className="text-xs text-gray-400">Technical Accuracy</div>
              <div className="text-lg font-bold">{feedback.technical_accuracy}%</div>
            </div>
            <div className="bg-darkBg p-3 rounded-lg border border-darkBorder">
              <div className="text-xs text-gray-400">Communication</div>
              <div className="text-lg font-bold">{feedback.communication}%</div>
            </div>
            <div className="bg-darkBg p-3 rounded-lg border border-darkBorder">
              <div className="text-xs text-gray-400">Confidence</div>
              <div className="text-lg font-bold">{feedback.confidence}%</div>
            </div>
            <div className="bg-darkBg p-3 rounded-lg border border-darkBorder">
              <div className="text-xs text-gray-400">Completeness</div>
              <div className="text-lg font-bold">{feedback.completeness}%</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-950/20 border border-emerald-800/40 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2">
                <CheckCircle className="w-4 h-4" /> Strengths
              </div>
              <ul className="text-sm space-y-1 text-gray-300 list-disc list-inside">
                {feedback.strengths.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>

            <div className="bg-amber-950/20 border border-amber-800/40 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-2">
                <AlertTriangle className="w-4 h-4" /> Areas for Improvement
              </div>
              <ul className="text-sm space-y-1 text-gray-300 list-disc list-inside">
                {feedback.improvements.map((imp, i) => <li key={i}>{imp}</li>)}
              </ul>
            </div>
          </div>

          <div className="bg-darkBg border border-darkBorder p-4 rounded-xl">
            <div className="flex items-center gap-2 text-brandAccent font-semibold mb-2">
              <Lightbulb className="w-4 h-4" /> Suggested Model Answer
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{feedback.suggested_answer}</p>
          </div>

          <button
            onClick={handleNextClick}
            className="w-full py-3 bg-brandPrimary hover:bg-brandPrimary/90 font-semibold rounded-xl flex items-center justify-center gap-2"
          >
            Next Question <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};