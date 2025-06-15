import React from 'react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-100 overflow-hidden font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-lime-300 rounded-full opacity-10 blur-2xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 tracking-tight">
            Welcome to <span className="text-emerald-600">MsMoney</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your financial privacy matters. Here's how we protect and respect your data.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12">
          {[
            {
              title: '🔒 Privacy You Can Trust',
              content:
                'We’re committed to keeping your personal information safe. At MsMoney, privacy isn’t just a policy — it’s a priority.',
              bg: 'from-emerald-50 to-white',
              border: 'border-emerald-200',
            },
            {
              title: '📋 What We Collect',
              content:
                'To provide you with a tailored experience, we collect essential data like your login details, preferences, and usage stats — never more than necessary.',
              bg: 'from-lime-50 to-white',
              border: 'border-lime-200',
            },
            {
              title: '💡 Why We Use It',
              content:
                'We use your data to improve your financial journey — think personalized recommendations, faster access, and smarter tools.',
              bg: 'from-green-50 to-white',
              border: 'border-green-200',
            },
            {
              title: '🛡️ Ironclad Security',
              content:
                'From encryption to secure servers, we take your security seriously. You can focus on your money — we’ll guard your data.',
              bg: 'from-teal-50 to-white',
              border: 'border-teal-200',
            },
            {
              title: '🔄 Keeping You Informed',
              content:
                'Whenever we update our privacy practices, you’ll be the first to know. We believe in full transparency.',
              bg: 'from-green-100 to-emerald-50',
              border: 'border-green-300',
            },
            {
              title: '✅ By Using MsMoney...',
              content:
                '...you agree to these privacy guidelines. It’s our way of building a better, safer experience — together.',
              bg: 'from-emerald-50 to-white',
              border: 'border-emerald-200',
            },
          ].map(({ title, content, bg, border }, i) => (
            <div
              key={i}
              className={`p-6 md:p-8 rounded-2xl shadow-lg bg-gradient-to-br ${bg} border ${border}`}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-3">{title}</h2>
              <p className="text-gray-700 leading-relaxed text-md md:text-lg">{content}</p>
            </div>
          ))}
        </div>

        {/* Contact Us */}
        <div className="mt-20 text-center">
          <p className="text-gray-700 text-lg mb-6">Still have questions or concerns?</p>
          <a
            href="/contacts"
            className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-lg rounded-xl font-medium shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
};
