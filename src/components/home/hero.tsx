export function Hero() {
	return (
<section className="relative min-h-screen bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
  {/* Subtle floating circles */}
  <div className="absolute top-20 left-10 w-24 h-24 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
  <div className="absolute bottom-32 right-20 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-bounce"></div>

  <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center min-h-[80vh] px-6 lg:px-0">
    
    {/* Left Content */}
    <div className="lg:w-7/12 space-y-8">
      <div className="inline-flex items-center space-x-3 bg-green-200 text-green-800 font-semibold px-6 py-2 rounded-full shadow-sm">
        <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
        <span>Welcome to Ms Money</span>
      </div>

   <h1 className="text-6xl md:text-7xl font-extrabold text-green-800 tracking-tight leading-tight">
        Ms <span className="text-gradient bg-gradient-to-r from-green-500 via-teal-500 to-green-400 bg-clip-text text-transparent">Money</span>
      </h1>

         <p className="text-xl md:text-2xl font-semibold text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Your trusted blog dedicated to mastering personal finance, smart investing, and money management strategies that empower your financial future.
      </p>

      <div className="flex justify-center gap-6 pt-8">
        <a
          href="/blog"
          className="px-8 py-4 bg-green-700 hover:bg-green-800 text-white rounded-full font-semibold shadow-lg transition"
        >
          Explore Articles
        </a>
        <a
          href="/about"
          className="px-8 py-4 border-2 border-green-700 hover:bg-green-100 text-green-700 rounded-full font-semibold transition"
        >
          About Ms Money
        </a>
      </div>
    </div>

    {/* Right Visual Card */}
    <div className="lg:w-5/12 mt-12 lg:mt-0 relative">
      <div className="rounded-3xl bg-white shadow-2xl p-10 border border-green-200 hover:shadow-3xl transition-shadow duration-500">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            💰
          </div>
          <blockquote className="text-green-900 italic text-center text-lg font-light max-w-xs">
            "Smart money management is the key to freedom and lasting wealth."
          </blockquote>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-green-50 rounded-xl py-4 text-center">
              <div className="text-3xl font-bold text-green-700">85%</div>
              <div className="text-sm text-green-600">Savings Rate</div>
            </div>
            <div className="bg-green-50 rounded-xl py-4 text-center">
              <div className="text-3xl font-bold text-green-700">4.9</div>
              <div className="text-sm text-green-600">Reader Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-6 -right-6 bg-green-700 text-white rounded-xl px-4 py-2 shadow-lg animate-bounce text-sm font-semibold">
        New Money Tips!
      </div>
    </div>
  </div>
</section>

	)
}