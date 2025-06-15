const ArticleCardMediumSkeleton: React.FC = () => {
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white">
      <div className="grid sm:grid-cols-3 gap-6 items-start">
        <div className="sm:col-span-1">
          <div className="w-full h-40 rounded-lg bg-gradient-to-r from-green-200 via-green-300 to-green-200 animate-pulse" />
        </div>
        <div className="sm:col-span-2">
          <span className="inline-block w-16 h-5 rounded-full bg-green-100 animate-pulse" />
          <div className="mt-2 h-6 w-3/4 rounded bg-green-100 animate-pulse"></div>
          <div className="mt-2 h-4 w-full rounded bg-green-100 animate-pulse"></div>
          <div className="mt-1 h-4 w-5/6 rounded bg-green-100 animate-pulse"></div>
          <div className="mt-3 h-4 w-1/4 rounded bg-green-100 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCardMediumSkeleton
