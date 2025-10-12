'use client';

import { useState } from 'react';
import Header from './components/Header';
import ArticleCard from './components/ArticleCard';
import ArticleView from './components/ArticleView';
import CreatePost from './components/CreatePost';

const initialArticles = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn the fundamentals of Next.js 14 and discover how to build modern web applications with React's most powerful framework.",
    content: "Next.js 14 introduces exciting new features including improved performance with Turbopack, enhanced Server Actions, and better caching strategies. The framework continues to lead in providing the best developer experience while maintaining top-tier performance for end users.",
    author: "Alex Chen",
    date: "2024-10-08",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    id: 2,
    title: "Understanding TypeScript Generics",
    excerpt: "Master TypeScript generics to write more flexible and reusable code. A comprehensive guide with practical examples.",
    content: "TypeScript generics provide a way to create reusable components that work with multiple types rather than a single one. They allow you to write functions, classes, and interfaces that can work with any data type while maintaining type safety. This powerful feature helps reduce code duplication and improves maintainability.",
    author: "Sarah Johnson",
    date: "2024-10-05",
    readTime: "8 min read",
    tags: ["TypeScript", "Programming", "Best Practices"]
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Explore best practices for creating robust, scalable APIs using Node.js and Express framework.",
    content: "Building APIs that can handle growth is crucial for modern applications. Node.js provides an excellent platform for creating scalable backend services. Key considerations include proper error handling, implementing rate limiting, using connection pooling for databases, and designing RESTful endpoints that follow industry standards.",
    author: "Michael Park",
    date: "2024-10-01",
    readTime: "10 min read",
    tags: ["Node.js", "API", "Backend"]
  }
];

export default function Home() {
  const [articles, setArticles] = useState(initialArticles);
  const [currentView, setCurrentView] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleCreatePost = (newArticle) => {
    const article = {
      ...newArticle,
      id: articles.length + 1,
      date: new Date().toISOString().split('T')[0],
      readTime: `${Math.ceil(newArticle.content.split(' ').length / 200)} min read`,
    };

    setArticles([article, ...articles]);
    setCurrentView('home');
  };

  const openArticle = (article) => {
    setSelectedArticle(article);
    setCurrentView('article');
  };

  const goHome = () => {
    setCurrentView('home');
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header 
        currentView={currentView}
        onNavigate={setCurrentView}
        onGoHome={goHome}
      />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {currentView === 'home' && (
          <div className="grid gap-8">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => openArticle(article)}
              />
            ))}
          </div>
        )}

        {currentView === 'article' && selectedArticle && (
          <ArticleView article={selectedArticle} />
        )}

        {currentView === 'create' && (
          <CreatePost
            onSubmit={handleCreatePost}
            onCancel={goHome}
          />
        )}
      </main>
    </div>
  );
}