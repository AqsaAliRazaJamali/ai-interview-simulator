import React from 'react';
import { Award, RotateCcw } from 'lucide-react';
import { QuestionAnswerPair } from '../types';

interface Props {
  history: QuestionAnswerPair[];
  onRestart: () => void;
}

export const FinalReport: React.FC<Props> = ({ history, onRestart }) => {
  const avgScore = Math.round(
    history.reduce((acc, curr) => acc + curr.feedback.overall_score, 0) / history.length
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-darkCard border border-darkBorder rounded-2xl space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex p-4 bg-brandPrimary/10 text-brandPrimary rounded-full mb-2">
          <Award className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-extrabold text-white">Interview Performance Summary</h2>
        <p className="text-gray-400">Great job completing your mock session!</p>
        <div className="text-5xl font-black text-brandAccent mt-4">{avgScore} / 100</div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold border-b border-darkBorder pb-2">Session Review</h3>
        {history.map((item, idx) => (
          <div key={idx} className="p-4 bg-darkBg border border-darkBorder rounded-xl space-y-2">
            <div className="font-semibold text-brandPrimary">Q{idx + 1}: {item.question}</div>
            <div className="text-sm text-gray-300 italic">" {item.answer} "</div>
            <div className="text-xs text-gray-400 font-mono">
              Score: {item.feedback.overall_score}/100 | Tech: {item.feedback.technical_accuracy}% | Comm: {item.feedback.communication}%
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="w-full py-4 bg-brandPrimary hover:bg-brandPrimary/80 font-bold rounded-xl flex items-center justify-center gap-2"
      >
        <RotateCcw className="w-5 h-5" /> Start Another Session
      </button>
    </div>
  );
};