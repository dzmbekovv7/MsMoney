import { useGetArticles } from '@/hooks/useArticles';
import ArticleCardMedium from '../shared/article-card/article-card-medium';

export function LatestArticlesSection() {
  const { data: articles, isLoading } = useGetArticles();

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-white via-gray-50 to-indigo-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-24 left-12 w-4 h-4 bg-indigo-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-6 h-6 bg-purple-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-12 w-3 h-3 bg-pink-400 transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-20 w-5 h-5 border-2 border-indigo-300 rounded-full animate-spin" style={{animationDuration: '4s'}}></div>
        
        {/* Large background circles */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-indigo-100/40 to-purple-100/30 rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-100/30 to-pink-100/20 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="flex items-center px-8 py-3 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-full border border-indigo-100 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-indigo-700 font-bold text-sm uppercase tracking-wider">Fresh Content</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-3 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          
          {/* Main heading */}
          <div className="space-y-6 mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              Latest
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Articles
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                Discover the newest insights into grammar mastery, writing excellence, and linguistic perfection from our expert authors.
              </p>
            </div>
          </div>
          
          {/* Decorative line with dots */}
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-indigo-300"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-r from-purple-300 to-pink-300"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="h-px w-20 bg-gradient-to-r from-pink-300 to-transparent"></div>
          </div>
        </div>

        {/* Articles Container */}
        <div className="relative">
          
          {/* Background layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-indigo-50/60 rounded-[3rem] shadow-2xl transform rotate-1"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-50/40 to-pink-50/30 rounded-[3rem] shadow-xl transform -rotate-1"></div>
          
          {/* Main content container */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-[3rem] shadow-2xl border border-gray-100/50 p-8 md:p-12 lg:p-16">
            
            {/* Articles Grid */}
            <div className="grid gap-8 lg:grid-cols-2">
              {isLoading ? (
                <>
                  {[...Array(4)].map((_, index) => (
                    <div 
                      key={index}
                      className="group relative"
                      style={{
                        animationDelay: `${index * 150}ms`,
                        animation: 'fadeInScale 0.8s ease-out forwards'
                      }}
                    >
                      {/* Enhanced skeleton with gradient shimmer */}
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full animate-shimmer"></div>
                        <div className="space-y-4">
                          <div className={`h-48 rounded-2xl animate-pulse ${
                            index % 4 === 0 ? 'bg-gradient-to-br from-indigo-100 to-purple-100' :
                            index % 4 === 1 ? 'bg-gradient-to-br from-purple-100 to-pink-100' :
                            index % 4 === 2 ? 'bg-gradient-to-br from-pink-100 to-red-100' :
                            'bg-gradient-to-br from-blue-100 to-indigo-100'
                          }`}></div>
                          <div className="space-y-3">
                            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
                            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-4/5 animate-pulse"></div>
                            <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-2/3 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                articles?.slice(3, 7).map((article, index) => (
                  <div 
                    key={article.id} 
                    className="group relative"
                    style={{
                      animationDelay: `${index * 200}ms`,
                      animation: 'slideInUp 0.8s ease-out forwards'
                    }}
                  >
                    {/* Hover glow effect */}
                    <div className={`absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                      index % 4 === 0 ? 'bg-gradient-to-r from-indigo-200/50 to-purple-200/50' :
                      index % 4 === 1 ? 'bg-gradient-to-r from-purple-200/50 to-pink-200/50' :
                      index % 4 === 2 ? 'bg-gradient-to-r from-pink-200/50 to-red-200/50' :
                      'bg-gradient-to-r from-blue-200/50 to-indigo-200/50'
                    }`}></div>
                    
                    {/* Article number badge */}
                    <div className="absolute -top-3 -left-3 z-20 w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                    
                    <div className="relative group-hover:scale-[1.02] transition-transform duration-500">
                      <ArticleCardMedium article={article} />
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-indigo-100/60 to-purple-100/40 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-tl from-purple-100/40 to-pink-100/30 rounded-full"></div>
            <div className="absolute top-1/2 -right-4 w-12 h-12 bg-gradient-to-bl from-pink-100/50 to-red-100/30 rounded-full"></div>
          </div>
        </div>

        {/* Bottom decorative section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-6">
            
            {/* Left animated dots */}
            <div className="flex space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full animate-pulse ${
                  i === 0 ? 'bg-indigo-300' : 
                  i === 1 ? 'bg-purple-300' : 
                  i === 2 ? 'bg-pink-300' : 'bg-red-300'
                }`} style={{animationDelay: `${i * 200}ms`}}></div>
              ))}
            </div>
            
            <span className="text-gray-500 font-medium px-4 py-2 bg-white/50 rounded-full border border-gray-200/50">
              Stay updated with fresh insights
            </span>
            
            {/* Right animated dots */}
            <div className="flex space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full animate-pulse ${
                  i === 0 ? 'bg-red-300' : 
                  i === 1 ? 'bg-pink-300' : 
                  i === 2 ? 'bg-purple-300' : 'bg-indigo-300'
                }`} style={{animationDelay: `${i * 200 + 800}ms`}}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}