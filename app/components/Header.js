import { Plus, Home } from 'lucide-react';

export default function Header({ currentView, onNavigate, onGoHome }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-6">
        {currentView === 'home' ? (
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechBlog
              </h1>
              <p className="text-slate-600 text-sm mt-1">Your source for tech insights</p>
            </div>
            <button
              onClick={() => onNavigate('create')}
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <Plus className="w-4 h-4" />
              New Post
            </button>
          </div>
        ) : (
          <button
            onClick={onGoHome}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </button>
        )}
      </div>
    </header>
  );
}