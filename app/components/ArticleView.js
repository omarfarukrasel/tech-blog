import { Calendar, User } from 'lucide-react';

export default function ArticleView({ article }) {
  return (
    <div className="max-w-4xl mx-auto">
      <article className="bg-white rounded-xl p-10 shadow-lg">
        <div className="flex flex-wrap gap-2 mb-6">
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          {article.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-slate-600 mb-8 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <span>{article.readTime}</span>
        </div>

        <div className="prose max-w-none">
          <p className="text-xl text-slate-700 mb-6 leading-relaxed font-medium">
            {article.excerpt}
          </p>
          <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
            {article.content}
          </div>
        </div>
      </article>
    </div>
  );
}