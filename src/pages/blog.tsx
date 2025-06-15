import { Container } from '@/components/shared/container'
import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { useGetArticles } from '@/hooks/useArticles'
import { Link, useSearchParams } from 'react-router'
import { X } from 'lucide-react'

export function BlogPage() {
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') || ''
  const { data: articles = [], isLoading, isError } = useGetArticles()

const filteredArticles = type ? (articles || []).filter(article => article.type === type) : (articles || []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-teal-100 text-gray-900">
      <Container>
        <section className="relative py-24 overflow-hidden">

          {/* Background Glows */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-12 left-1/3 w-96 h-96 bg-gradient-to-tr from-teal-300 via-emerald-300 to-green-400 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-16 right-16 w-72 h-72 bg-gradient-to-br from-green-200 to-teal-300 rounded-full blur-2xl opacity-40 animate-bounce" />
            <div className="absolute top-1/2 left-10 w-40 h-40 bg-emerald-200 rounded-full blur-xl opacity-30 animate-ping" />
          </div>

          {/* Header */}
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-20 px-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Welcome to <span className="bg-gradient-to-r from-green-700 via-teal-600 to-cyan-500 bg-clip-text text-transparent">MsMoney</span>
            </h1>
            <p className="text-xl text-gray-700">
              Your trusted source for smart money tips, investment insights, and personal finance strategies. 
              Empower yourself with knowledge to grow wealth and secure your financial future.
            </p>
          </div>

          {/* Filter Bar */}
          {type && (
            <div className="relative z-10 max-w-4xl mx-auto mb-12">
              <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-teal-200 shadow rounded-xl p-6">
                <span className="text-teal-900 font-semibold">
                  Filtering by <code className="bg-teal-100 px-2 py-1 rounded">{type}</code>
                </span>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-teal-100 text-teal-800 hover:bg-teal-200 rounded-full transition"
                >
                  <X className="w-4 h-4" />
                  Clear Filter
                </Link>
              </div>
            </div>
          )}

          {/* Articles */}
          <div className="relative z-10">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {[...Array(6)].map((_, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl bg-white p-6 animate-pulse border border-teal-100 shadow"
                  >
                    <div className="h-48 bg-teal-100 rounded-2xl mb-4" />
                    <div className="space-y-3">
                      <div className="h-4 bg-teal-200 rounded-full w-3/4" />
                      <div className="h-4 bg-teal-200 rounded-full w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : isError ? (
              <div className="text-center text-red-600 font-semibold text-lg">
                Error loading articles. Please refresh.
              </div>
            ) : filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredArticles.map((article, idx) => (
                  <div
                    key={article.id}
                    className="relative group transition-transform duration-300 transform hover:scale-105 shadow-lg rounded-3xl overflow-hidden"
                    style={{
                      animation: 'slideInUp 0.5s ease-out forwards',
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-emerald-100 blur-xl opacity-0 group-hover:opacity-60 transition" />
                    <ArticleCardMedium article={article} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg font-medium text-gray-500">No articles found.</p>
                {type && (
                  <Link
                    to="/blog"
                    className="mt-6 inline-block bg-teal-600 text-white px-6 py-3 rounded-xl shadow hover:bg-teal-700"
                  >
                    View All Articles
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>
      </Container>

      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
