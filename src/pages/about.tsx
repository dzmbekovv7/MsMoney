import { Container } from '../components/shared/container'
const authors = [
  {
    name: "Sophia Lee",
    role: "Chief Financial Analyst",
    bio: "Passionate about helping clients reach financial freedom with smart strategies.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    socials: {
      twitter: "https://twitter.com/sophialee",
      linkedin: "https://linkedin.com/in/sophialee",
    },
  },
  {
    name: "James Carter",
    role: "Investment Strategist",
    bio: "Expert in portfolio management and market analysis.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    socials: {
      twitter: "https://twitter.com/jamescarter",
      linkedin: "https://linkedin.com/in/jamescarter",
    },
  },
  {
    name: "Lena Brooks",
    role: "Tax Consultant",
    bio: "Helping you maximize deductions and minimize liabilities.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: {
      twitter: "https://twitter.com/lenabrooks",
      linkedin: "https://linkedin.com/in/lenabrooks",
    },
  },
  {
    name: "Kevin Turner",
    role: "Budget Advisor",
    bio: "Guiding clients towards smarter spending and saving habits.",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    socials: {
      twitter: "https://twitter.com/kevinturner",
      linkedin: "https://linkedin.com/in/kevinturner",
    },
  },
]
export function AboutPage() {
  return (
    <div className="relative">
    {/* Hero Section */}
<section className="relative py-24 md:py-32 bg-white overflow-hidden">
  {/* Background decorations */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6f4ea_1px,transparent_1px),linear-gradient(to_bottom,#e6f4ea_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
    <div className="absolute top-20 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
    <div className="absolute bottom-20 right-1/4 w-4 h-4 bg-green-300 rounded-full animate-bounce"></div>
    <div className="absolute top-1/2 right-16 w-5 h-5 border-2 border-green-400 rounded-full animate-pulse"></div>
  </div>

  <Container className="relative z-10">
    <div className="text-center mb-20">
      <div className="inline-flex items-center justify-center mb-8">
        <div className="flex items-center px-8 py-3 bg-green-50 rounded-full border border-green-200 shadow-md">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
          <span className="text-green-700 font-bold text-sm uppercase tracking-wider">About Us</span>
          <div className="w-2 h-2 bg-green-500 rounded-full ml-3 animate-pulse"></div>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        <h1 className="text-5xl md:text-6xl font-black text-green-800 leading-tight">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-lime-500">MsMoney</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          A blog about money, investing, and mastering your personal finances with confidence and clarity.
        </p>
      </div>

      <div className="flex justify-center items-center space-x-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-400"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-lime-400"></div>
      </div>
    </div>
  </Container>
</section>

{/* About Section */}
<section className="relative py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
  <Container>
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white rounded-[3rem] shadow-2xl rotate-1"></div>

      <div className="relative bg-white rounded-[3rem] shadow-xl border border-green-100 p-8 md:p-12 lg:p-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-green-900 leading-tight">
              A Money Blog <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-lime-500">for Smart Decisions</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              We share knowledge on budgeting, saving, investing, and achieving financial freedom step by step.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Here you’ll find actionable tips, money strategies, and inspirational stories to boost your financial journey.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-green-100 to-lime-100 rounded-3xl"></div>
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
              <img
                src="https://ahkr.b-cdn.net/wp-content/uploads/2022/07/blogs-that-make-money-featured-1.jpg"
                alt="MsMoney intro"
                className="w-full h-[300px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

{/* Mission Section */}
<section className="relative py-20 bg-white overflow-hidden">
  <Container>
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-tl from-green-50 to-lime-50 rounded-[3rem] shadow-2xl -rotate-1"></div>

      <div className="relative bg-white rounded-[3rem] shadow-xl border border-green-100 p-8 md:p-12 lg:p-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative lg:order-2">
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-bl from-green-100 to-lime-100 rounded-3xl"></div>
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*Bvjpr0P7tWM112qgWYSWkQ.png"
                alt="Our mission"
                className="w-full h-[300px] object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-6 lg:order-1">
            <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-green-900 leading-tight">
              Empowering Financial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-lime-500">Literacy for All</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              At MsMoney, our goal is to make financial knowledge simple, accessible, and actionable for everyone.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From beginner tips to advanced strategies, we’re here to guide you on your financial growth journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

    <section className="relative py-24 md:py-32 bg-gradient-to-b from-green-100 to-green-200 overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-20">
          {/* Header Text */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="mb-6">
              <span className="text-sm font-bold text-green-800 uppercase tracking-wider bg-green-50 px-3 py-1 rounded-full border border-green-200">
                Our Team
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-green-900 leading-tight">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400">Our Financial Experts</span>
            </h2>
          </div>

          {/* Authors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:w-1/2">
      {authors.map(({ name, role, bio, img, socials }) => (
        <div
          key={name}
          className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={img}
            alt={name}
            className="w-28 h-28 rounded-full border-4 border-green-300 shadow-md object-cover mb-6"
          />
          <h3 className="text-xl font-bold text-green-900 mb-1">{name}</h3>
          <p className="text-sm text-green-700 font-semibold mb-3">{role}</p>
          <p className="text-gray-600 text-sm mb-6">{bio}</p>
        </div>
      ))}
    </div>
        </div>

        {/* Trust Section */}
        <div className="text-center mt-20">
          <h3 className="text-4xl font-bold text-green-900 mb-4">Why You Can Trust Us</h3>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Our team consists of certified financial professionals with years of experience, delivering transparent and insightful financial solutions tailored to your goals.
          </p>
        </div>
      </Container>
    </section>

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
    </div>
  )
}
