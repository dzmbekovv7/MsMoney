import { useGetArticles } from '@/hooks/useArticles';
import ArticleCardSmall from '../shared/article-card/article-card-small';

export function FeaturedArticlesSection() {
  const { data: articles, isLoading } = useGetArticles();

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="moneyPattern"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#22c55e" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#moneyPattern)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-6xl font-extrabold text-green-900 leading-tight">
            Ms<span className="text-green-600">Money</span>
          </h1>
          <p className="mt-4 text-lg text-green-700 font-medium">
            Your daily dose of smart money insights, investing wisdom, and financial freedom tips.
          </p>

          {/* Badge */}
          <div className="inline-block mt-8 px-5 py-2 bg-green-100 border border-green-300 rounded-full text-green-700 font-semibold tracking-wide select-none">
            Financial Highlights
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            [...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-xl shadow-md p-6 space-y-4">
                <div className="h-44 bg-green-100 rounded-lg"></div>
                <div className="h-5 bg-green-200 rounded w-3/4"></div>
                <div className="h-4 bg-green-200 rounded w-5/6"></div>
                <div className="h-3 bg-green-200 rounded w-2/3"></div>
              </div>
            ))
          ) : (
            articles?.slice(0, 3).map((article, i) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-lg border border-green-200 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                style={{ animation: `fadeInUp 0.6s ease forwards`, animationDelay: `${i * 0.2}s` }}
              >
                {i === 0 && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    ★ Featured
                  </div>
                )}
                <div className="p-6">
                  <ArticleCardSmall article={article} />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-green-600 font-semibold tracking-wide select-none">
          Curated with passion for your financial success.
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
