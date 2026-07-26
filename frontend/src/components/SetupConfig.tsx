import React, { useState } from 'react';
import { Zap, Play } from 'lucide-react';
import { InterviewConfig } from '../types';

interface Props {
  onStart: (config: InterviewConfig) => void;
  loading: boolean;
}

export const SetupConfig: React.FC<Props> = ({ onStart, loading }) => {
  const [role, setRole] = useState('Frontend Developer');
  const [experience, setExperience] = useState('Junior');
  const [type, setType] = useState('Technical Interview');
  const [count] = useState(5);

  const roles = [
    'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
    'Python Developer', 'AI/ML Engineer', 'Data Scientist',
    'Cybersecurity Analyst', 'DevOps Engineer', 'UI/UX Designer'
  ];

  const expLevels = ['Beginner', 'Intern', 'Junior', 'Mid-Level', 'Senior'];
  const types = ['Technical Interview', 'Behavioral Interview', 'HR Interview', 'System Design'];

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
          <Zap className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Configure Your Interview</h2>
          <p className="text-gray-400 text-sm">Tailor your AI session based on target job role & experience</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Target Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
          >
            {roles.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Experience Level</label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
            >
              {expLevels.map((e) => <option key={e} value={e}>{e}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Interview Mode</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
            >
              {types.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <button
          onClick={() => onStart({ role, experience, type, question_count: count })}
          disabled={loading}
          className="w-full mt-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 font-semibold rounded-xl flex items-center justify-center gap-2 text-lg shadow-lg transition-all cursor-pointer disabled:opacity-50"
        >
          {loading ? "Preparing Session..." : <> <Play className="w-5 h-5 fill-current" /> Start AI Mock Interview </>}
        </button>
      </div>
    </div>
  );
};