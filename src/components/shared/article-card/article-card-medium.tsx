import { getArticleLink } from '@/lib/utils'
import type { IArticle } from '@/types/interfaces'

interface ArticleCardMediumProps {
  article: IArticle
}

const ArticleCardMedium: React.FC<ArticleCardMediumProps> = ({ article }) => {
  const formattedDate = article.published_date
    ? new Date(article.published_date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : ''

  return (
    <a
      href={getArticleLink(article)}
      className="block max-w-md mx-auto bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
      aria-label={`Read article: ${article.title}`}
    >
      {/* Image on top */}
      <div className="overflow-hidden rounded-t-3xl">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Text content */}
      <div className="p-6">
        <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-full select-none">
          {article.type}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 leading-tight">
          {article.title}
        </h3>

        <p className="mt-3 text-gray-700 text-base line-clamp-3">
          {article.summary}
        </p>

        <p className="mt-5 text-sm text-gray-500 select-none">
          {formattedDate}
        </p>
      </div>
    </a>
  )
}

export default ArticleCardMedium
