import { useGetArticles } from '@/hooks/useArticles';

export function CategoriesSection() {
  const { data: articles, isLoading } = useGetArticles();
  const categories = [...new Set(articles?.map(article => article.type))];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-1/4 w-80 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
        <div className="absolute bottom-24 right-1/3 w-72 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>

        <div className="absolute top-1/4 right-12 w-4 h-4 bg-green-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute bottom-1/3 left-14 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-5 h-5 border-2 border-yellow-300 rounded-full animate-pulse opacity-60" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-green-600"></div>
            <div className="mx-5 px-8 py-3 bg-gradient-to-r from-green-100 to-yellow-100 rounded-full border border-green-300 shadow-sm">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">Finance Categories</span>
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-green-600 to-transparent"></div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Browse Topics by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-yellow-600 to-yellow-500">
              Your Wealth Interest
            </span>
          </h2>

          <p className="text-lg md:text-xl text-green-800 font-light max-w-xl mx-auto leading-relaxed">
            Explore in-depth guides, investment tips, budgeting strategies, and market trends to grow and manage your money wisely.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-36 rounded-3xl bg-gradient-to-br from-green-100 to-yellow-100 animate-pulse"
                />
              ))
            : categories.map((category, idx) => (
                <a
                  key={category}
                  href={`/blog?type=${encodeURIComponent(category || '')}`}
                  className="group relative block h-36 bg-white rounded-3xl shadow-lg border border-green-200 hover:border-yellow-400 hover:shadow-xl transition-transform transform hover:-translate-y-2 overflow-hidden"
                  style={{
                    animationDelay: `${idx * 120}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards',
                  }}
                >
                  {/* Overlay gradient on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 ${
                    idx % 4 === 0 ? 'bg-gradient-to-br from-green-200 to-yellow-200' :
                    idx % 4 === 1 ? 'bg-gradient-to-br from-yellow-200 to-green-100' :
                    idx % 4 === 2 ? 'bg-gradient-to-br from-green-300 to-yellow-300' :
                    'bg-gradient-to-br from-yellow-100 to-green-200'
                  }`} />

                  {/* Icon circle */}
                  <div className={`absolute top-5 right-5 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg ${
                    idx % 4 === 0 ? 'bg-gradient-to-br from-green-600 to-yellow-600' :
                    idx % 4 === 1 ? 'bg-gradient-to-br from-yellow-600 to-green-600' :
                    idx % 4 === 2 ? 'bg-gradient-to-br from-green-700 to-yellow-700' :
                    'bg-gradient-to-br from-yellow-700 to-green-700'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {category?.charAt(0)?.toUpperCase() || '?'}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <h3 className="text-xl font-extrabold text-green-900 group-hover:text-yellow-800 transition-colors duration-300 mb-1">
                      {category}
                    </h3>
                    <p className="text-sm text-green-700 group-hover:text-yellow-700 transition-colors duration-300">
                      Browse related articles
                    </p>
                  </div>

                  {/* Bottom hover line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${
                    idx % 4 === 0 ? 'bg-gradient-to-r from-green-700 to-yellow-700' :
                    idx % 4 === 1 ? 'bg-gradient-to-r from-yellow-700 to-green-700' :
                    idx % 4 === 2 ? 'bg-gradient-to-r from-green-800 to-yellow-800' :
                    'bg-gradient-to-r from-yellow-800 to-green-800'
                  }`} />
                </a>
              ))}
        </div>

        {/* Footer text */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center space-x-3 text-green-600 font-semibold tracking-wide">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span>Unlock your financial potential</span>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
