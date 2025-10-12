import { Calendar, User, ArrowRight } from 'lucide-react';

export default function ArticleCard({ article, onClick }) {
  return (
    <article
      className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {article.title}
      </h2>
      
      <p className="text-slate-600 mb-4 leading-relaxed">
        {article.excerpt}
      </p>
      
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center gap-6 text-sm text-slate-500">
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
        
        <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
          Read More
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </article>
  );
}