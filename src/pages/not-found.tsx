export function NotFoundPage() {
	return (
	  <>
		<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
		  {/* Background decorative elements */}
		  <div className="absolute inset-0">
			{/* Grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
			
			{/* Floating geometric shapes */}
			<div className="absolute top-20 left-1/4 w-32 h-32 border-2 border-indigo-200 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
			<div className="absolute bottom-32 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl rotate-12 animate-pulse"></div>
			<div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-rose-200" style={{
			  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
			  animation: 'float 6s ease-in-out infinite'
			}}></div>
			
			{/* Animated dots */}
			<div className="absolute top-1/4 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-ping"></div>
			<div className="absolute bottom-1/3 left-16 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
			<div className="absolute top-2/3 right-1/3 w-4 h-4 border-2 border-pink-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
			
			{/* Large decorative circles */}
			<div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-20"></div>
			<div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-15"></div>
		  </div>
  
		  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			
			{/* Main Content Container */}
			<div className="relative">
			  
			  {/* Background decorative cards */}
			  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-[3rem] shadow-2xl transform rotate-1"></div>
			  <div className="absolute inset-0 bg-gradient-to-tl from-indigo-50/50 to-purple-50/50 rounded-[3rem] shadow-xl transform -rotate-1"></div>
			  
			  {/* Main content card */}
			  <div className="relative bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-12 md:p-16 lg:p-20 text-center">
				
				{/* Badge */}
				<div className="inline-flex items-center justify-center mb-8">
				  <div className="flex items-center px-8 py-3 bg-gradient-to-r from-red-50 via-pink-50 to-purple-50 rounded-full border border-red-100 shadow-lg">
					<div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-3 animate-pulse"></div>
					<span className="text-red-700 font-bold text-sm uppercase tracking-wider">Page Not Found</span>
					<div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full ml-3 animate-pulse" style={{animationDelay: '0.5s'}}></div>
				  </div>
				</div>
  
				{/* 404 Number */}
				<div className="space-y-6 mb-12">
				  <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-none animate-pulse">
					404
				  </h1>
				  
				  {/* Grammar-themed subtitle */}
				  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
					Grammatically
					<span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
					  Incorrect Path
					</span>
				  </h2>
				  
				  <div className="max-w-2xl mx-auto space-y-4">
					<p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
					  This page seems to have committed a syntax error and wandered off into the digital void.
					</p>
					<p className="text-lg text-gray-500">
					  Let's get you back to where perfect grammar lives and thrives.
					</p>
				  </div>
				</div>
  
				{/* Decorative line */}
				<div className="flex items-center justify-center space-x-4 mb-12">
				  <div className="h-px w-20 bg-gradient-to-r from-transparent to-indigo-300"></div>
				  <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
				  <div className="h-px w-20 bg-gradient-to-r from-purple-300 to-pink-300"></div>
				  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
				  <div className="h-px w-20 bg-gradient-to-r from-pink-300 to-transparent"></div>
				</div>
  
				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
				  <a
					href="/"
					className="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-gray-800 hover:scale-105 overflow-hidden"
				  >
					<span className="relative z-10 flex items-center">
					  Return Home
					  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					  </svg>
					</span>
					
					{/* Animated background */}
					<div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
				  </a>
  
				  <a
					href="/blog"
					className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold text-lg hover:border-indigo-400 hover:text-indigo-600 transition-all duration-300 hover:scale-105"
				  >
					<span className="flex items-center">
					  Browse Articles
					  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					  </svg>
					</span>
				  </a>
				</div>
  
				{/* Grammar tips */}
				<div className="mt-12 pt-8 border-t border-gray-100">
				  <p className="text-sm text-gray-500 mb-4 font-medium">Grammar tip while you're here:</p>
				  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
					<p className="text-gray-700 italic">
					  "Remember: It's 'you're' (you are) not 'your' (possessive) when expressing state of being. 
					  <span className="font-semibold text-indigo-600"> You're</span> going to get back on track!"
					</p>
				  </div>
				</div>
  
				{/* Bottom decorative elements inside the container */}
				<div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-60"></div>
				<div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full opacity-40"></div>
			  </div>
			</div>
  
			{/* Bottom section */}
			<div className="mt-16 text-center">
			  <div className="inline-flex items-center space-x-4 text-gray-400">
				<div className="flex space-x-1">
				  {[...Array(3)].map((_, i) => (
					<div key={i} className="w-2 h-2 bg-red-200 rounded-full animate-pulse" style={{animationDelay: `${i * 200}ms`}}></div>
				  ))}
				</div>
				<span className="text-sm">Error 404: Grammar perfection continues elsewhere</span>
				<div className="flex space-x-1">
				  {[...Array(3)].map((_, i) => (
					<div key={i} className="w-2 h-2 bg-purple-200 rounded-full animate-pulse" style={{animationDelay: `${i * 200 + 1000}ms`}}></div>
				  ))}
				</div>
			  </div>
			</div>
		  </div>
  
		  <style>{`
			@keyframes float {
			  0%, 100% {
				transform: translateY(0px) rotate(0deg);
			  }
			  50% {
				transform: translateY(-15px) rotate(5deg);
			  }
			}
		  `}</style>
		</section>
	  </>
	);
  }