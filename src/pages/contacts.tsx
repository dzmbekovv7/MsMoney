import { ContactForm } from '../components/shared/contact-form';

export function ContactsPage() {
  return (
    <section className="relative min-h-screen py-24 px-6 md:px-12 overflow-hidden" style={{ background: 'linear-gradient(to right, white 50%, #d1fae5 50%)' }}>
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

        {/* Floating shapes */}
        <div className="absolute top-20 right-1/4 w-24 h-24 border-4 border-green-200 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-green-100 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-12 w-14 h-14 border-2 border-green-400 rotate-12" style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-black text-gray-900 mb-6">
          Ms<span className="text-green-600">Money</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Discover smart saving tips, investing guides, and money-making strategies to grow your financial knowledge.
        </p>

        {/* Contact Form placed directly under the title */}
        <div className="relative bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
          <ContactForm />
        </div>
      </div>

      {/* Floating styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
}
  