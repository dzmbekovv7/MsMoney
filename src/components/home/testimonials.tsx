const TESTIMONIALS = [
  {
    quote:
      "MSMoney helped me take control of my finances. The tips are simple, practical, and have boosted my savings by 30% this year!",
    author: "Sophia Green",
    title: "Personal Finance Blogger",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "I never thought budgeting could be this easy. MSMoney’s advice made money management stress-free and actually fun.",
    author: "Liam Johnson",
    title: "Freelancer & Investor",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    quote:
      "This blog changed the way I look at money. The community support and clear strategies helped me pay off debt faster than I imagined.",
    author: "Maya Patel",
    title: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "If you want straightforward, actionable advice about money, MSMoney is the place. Real stories, real impact.",
    author: "Noah Smith",
    title: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      {/* Background large green shapes */}
      <div className="absolute -top-24 -left-32 w-[500px] h-[500px] bg-green-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-green-400 rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-green-900 mb-4">
            Real Stories from <span className="text-green-600">MSMoney</span> Readers
          </h2>
          <p className="text-lg text-green-700 font-light">
            Discover how our community transformed their financial life with MSMoney’s simple, trustworthy advice.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.author}
              className="relative bg-white shadow-xl rounded-3xl p-8 border border-green-200 hover:shadow-2xl transition-shadow duration-500"
              style={{ animation: `fadeInUp 0.8s ease forwards`, animationDelay: `${i * 200}ms`, opacity: 0, transform: "translateY(40px)" }}
            >
              {/* Quote Mark */}
              <div className="absolute -top-6 -left-6 text-green-400 text-7xl font-extrabold select-none pointer-events-none">“</div>

              {/* Quote */}
              <p className="text-green-900 text-lg leading-relaxed mb-8 font-semibold">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-5">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-green-600 shadow-md"
                  loading="lazy"
                />
                <div>
                  <p className="text-green-900 font-bold text-xl">{t.author}</p>
                  <p className="text-green-700 text-sm font-medium">{t.title}</p>
                </div>
              </div>

              {/* Bottom green underline */}
              <div className="absolute bottom-0 left-0 w-24 h-1 rounded-full bg-gradient-to-r from-green-400 to-green-600 mt-4"></div>
            </div>
          ))}
        </div>

        {/* Footer tagline */}
        <div className="mt-20 text-center text-green-800 font-medium tracking-wide text-sm sm:text-base">
          Trusted by thousands of MSMoney readers worldwide who took control of their finances.
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
