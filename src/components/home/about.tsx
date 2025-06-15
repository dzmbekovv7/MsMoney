export function AboutSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Soft abstract background shapes */}
      <div className="absolute inset-0 -z-10 overflow-visible">
        <svg
          className="absolute top-10 left-10 w-48 h-48 opacity-20"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="48" stroke="#34D399" strokeWidth="2" />
        </svg>
        <div className="absolute bottom-16 right-16 w-36 h-36 bg-green-200 rounded-full mix-blend-multiply opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-300 rounded-lg rotate-12 opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-1 bg-green-500 rounded-full"></div>
            <span className="uppercase text-sm font-semibold text-green-700 tracking-wide">
              Finance Insights
            </span>
          </div>

          <h2 className="text-6xl font-extrabold text-green-900 leading-tight">
            MSMoney
            <br />
            <span className="text-4xl font-light text-green-700 block mt-2">
              Your Guide to Smart Wealth
            </span>
          </h2>

          <p className="max-w-xl text-lg text-green-800 font-light leading-relaxed">
            Discover practical tips, deep analysis, and the latest trends in personal finance, investing, and money management. Empower your financial future with MSMoney.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">
                💰
              </div>
              <h3 className="font-semibold text-green-900 text-lg">Smart Investing</h3>
              <p className="text-green-700 text-sm font-light">
                Learn how to grow your money with confidence.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-green-400 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">
                📊
              </div>
              <h3 className="font-semibold text-green-900 text-lg">Market Analysis</h3>
              <p className="text-green-700 text-sm font-light">
                Stay ahead with up-to-date market insights.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-green-300 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">
                🏦
              </div>
              <h3 className="font-semibold text-green-900 text-lg">Money Management</h3>
              <p className="text-green-700 text-sm font-light">
                Practical advice for budgeting and saving.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex items-center gap-6">
            <a
              href="/subscribe"
              className="inline-block px-10 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
            >
              Subscribe Now
            </a>
            <span className="text-green-700 font-light">Join 30,000+ readers</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-green-200">
            <img
              className="w-full object-cover max-h-[600px]"
              src="https://ahkr.b-cdn.net/wp-content/uploads/2024/02/finance-blogging-featured.jpg"
              alt="Money and finance blog"
            />
          </div>

          {/* Floating stat cards */}
          <div className="absolute -top-6 -right-6 bg-green-600 text-white rounded-2xl px-6 py-4 shadow-lg animate-pulse">
            <div className="text-2xl font-extrabold">95%</div>
            <div className="text-xs font-light uppercase tracking-wider">Reader Satisfaction</div>
          </div>

          <div className="absolute bottom-8 left-0 bg-green-400 text-green-900 rounded-2xl px-6 py-4 shadow-lg">
            <div className="text-xs font-semibold">Monthly Visitors</div>
            <div className="text-xl font-bold">18,000+</div>
          </div>
        </div>
      </div>

      {/* Bottom testimonial */}
      <div className="mt-28 border-t border-green-200 pt-16 text-center max-w-3xl mx-auto px-6">
        <blockquote className="text-xl text-green-900 italic font-light leading-relaxed">
          "MSMoney transformed the way I think about money. Clear, trustworthy, and practical advice."
        </blockquote>
        <div className="mt-8 flex justify-center items-center space-x-4 text-green-600 font-semibold text-sm">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <span>Est. 2025</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
