import { Container } from './container'
import { useState } from 'react'

export function Footer() {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contacts', href: '/contacts' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
  }


  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    // Simulate async subscription API call
    setTimeout(() => {
      setSuccess(true)
      setEmail('')
    }, 1000)
  }

  return (
    <footer className="relative bg-white text-gray-800 overflow-hidden border-t border-gray-300">
      {/* Background patterns and effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-white"></div>
        <div className="absolute top-8 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-16 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-4 h-4 border-2 border-lime-400 rounded-full animate-bounce"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-emerald-400/10 to-lime-400/10 rounded-full opacity-30"></div>
      </div>

      <Container>
        <div className="relative z-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left: Brand + Stats */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                MsMoney
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-400 to-lime-400">
                  Your Trusted Money Blog
                </span>
              </h2>
              <p className="mt-6 max-w-sm text-lg text-gray-600 leading-relaxed font-light">
                Empowering you with smart financial tips, investment insights, and money management strategies to grow your wealth confidently.
              </p>
            </div>

            <div className="flex space-x-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-xs text-green-500 uppercase tracking-wider">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-xs text-green-500 uppercase tracking-wider">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Daily</div>
                <div className="text-xs text-green-500 uppercase tracking-wider">Updates</div>
              </div>
            </div>
          </div>

          {/* Middle: Navigation Links */}
          <div className="md:col-span-3 flex flex-col space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Quick Links</h3>
            <nav className="flex flex-col space-y-4" aria-label="Footer navigation">
              {navigation.main.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards',
                  }}
                >
                  <div
                    className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                      index % 3 === 0
                        ? 'bg-green-400 group-hover:bg-green-300'
                        : index % 3 === 1
                        ? 'bg-emerald-400 group-hover:bg-emerald-300'
                        : 'bg-lime-400 group-hover:bg-lime-300'
                    }`}
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Newsletter + Social */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              >
                Subscribe
              </button>
            </form>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            {success && <p className="text-green-600 text-sm mt-1 animate-fadeIn">Thank you for subscribing!</p>}

      
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-green-100 py-8 mt-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} MsMoney. All rights reserved.
            </p>

            {/* Animated decorative dots */}
            <div className="flex items-center justify-center space-x-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full animate-pulse ${
                    i % 3 === 0 ? 'bg-green-400' : i % 3 === 1 ? 'bg-emerald-400' : 'bg-lime-400'
                  }`}
                  style={{ animationDelay: `${i * 300}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in forwards;
        }
      `}</style>
    </footer>
  )
}
