import React, { useState } from 'react';
import { X, Lock, User, KeyRound, ShieldAlert } from 'lucide-react';

interface POSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POSModal: React.FC<POSModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError(false);
    
    // Simulate auth request
    setTimeout(() => {
      setIsLoggingIn(false);
      if (username === 'Branch1' && password === '786786') {
        window.location.href = 'https://pos.esoft.website/public/login';
      } else {
        setError(true);
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#070b14]/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-[#0c1222] border border-brand-amber/20 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.15)] overflow-hidden transform animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-white/5 border-b border-white/10 p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-amber/20 flex items-center justify-center text-brand-amber">
              <Lock size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">POS Portal</h3>
              <p className="text-xs text-brand-amber uppercase tracking-wider">Staff Access Only</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-3 text-red-500 items-start">
              <ShieldAlert size={20} className="shrink-0 mt-0.5" />
              <p className="text-sm">Authentication failed. Invalid branch credentials or access denied.</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-400 pl-1">Terminal / Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-500" />
                </div>
                <input 
                  type="text" 
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white focus:outline-none focus:border-brand-amber/50 transition-colors" 
                  placeholder="e.g. Branch1" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-400 pl-1">Secure Passkey</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <KeyRound size={18} className="text-gray-500" />
                </div>
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white focus:outline-none focus:border-brand-amber/50 transition-colors" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-4 mt-4 rounded-xl font-bold bg-brand-amber hover:bg-orange-500 text-brand-dark shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoggingIn ? (
                <>
                  <div className="w-5 h-5 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
                  Authenticating...
                </>
              ) : (
                'Access Terminal'
              )}
            </button>
          </form>
          
          <p className="text-xs text-center text-gray-500 mt-6">
            Unauthorized access to the HAJI TOFEEQ AL MADINA network is strictly prohibited and monitored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default POSModal;
