import { useState } from 'react';
import { useGetArticles } from '@/hooks/useArticles';
import { Link } from 'react-router';
import { Container } from './container';
import { Logo } from './logo';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Contacts', href: '/contacts' },
	{ label: 'Articles', href: '/blog'},
	{ label: 'Privacy', href: '/privacy-policy' },
];

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { data: articles, isLoading } = useGetArticles();
	const types = [...new Set(articles?.map((article) => article.type))];

	const handleLinkClick = () => setMenuOpen(false);

	return (
		<header className="relative bg-white border-b border-gray-100 shadow-sm">
			<Container>
				{/* TOP BAR */}
				<div className="relative z-10 flex items-center justify-between py-4">
					{/* Logo */}
					<Logo />

					{/* Title (hidden on mobile) */}
					<h1 className="hidden md:block text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 text-center tracking-wide py-6">
						Financial Freedom Awaits 🚀
					</h1>

					{/* Desktop About Button */}
					<Link
						to="/about"
						className="hidden md:inline-block px-6 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
					>
						About
					</Link>

					{/* Burger Menu Button (mobile only) */}
					<button
						className="md:hidden text-3xl text-green-600 focus:outline-none"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{menuOpen ? <IoMdClose /> : <IoMdMenu />}
					</button>
				</div>

				{/* Desktop NAV */}
				<nav className="mt-4 hidden h-[80px] md:flex justify-center">
					{isLoading ? (
						<div className="flex gap-8">
							{Array.from({ length: 4 }).map((_, index) => (
								<div key={index} className="h-8 w-24 bg-gray-300 rounded-full animate-pulse"></div>
							))}
						</div>
					) : (
						<ul className="flex gap-8">
							{LINKS.map((item) => (
								<Link key={item.label} to={item.href}>
									<li className="text-lg font-medium text-gray-800 hover:text-green-500 transition-all">
										{item.label}
									</li>
								</Link>
							))}
						</ul>
					)}
				</nav>

				{/* Desktop Categories */}
				{/* <nav className="mt-6 hidden md:flex justify-center">
					{isLoading ? (
						<div className="flex gap-6">
							{Array.from({ length: 5 }).map((_, index) => (
								<div key={index} className="h-8 w-20 bg-gray-300 rounded-full animate-pulse"></div>
							))}
						</div>
					) : (
						<ul className="flex gap-8">
							{types.map((item) => (
								<Link key={item} to={`/blog?type=${encodeURIComponent(item || '')}`}>
									<li className="group relative cursor-pointer">
										<div className="px-6 py-3 bg-gradient-to-r from-green-50 to-green-100 rounded-full shadow-md hover:shadow-lg transition-all">
											<span className="text-sm font-semibold text-green-700 hover:text-green-800">
												💰 {item}
											</span>
										</div>
									</li>
								</Link>
							))}
						</ul>
					)}
				</nav> */}

				{/* Mobile Dropdown Menu */}
				<div
					className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
						menuOpen ? 'translate-y-0' : '-translate-y-full'
					}`}
				>
					<div className="flex justify-between items-center p-4 border-b">
						<Logo />
						<button onClick={() => setMenuOpen(false)} className="text-3xl text-green-600">
							<IoMdClose />
						</button>
					</div>

					<ul className="flex flex-col items-center gap-6 mt-6">
						{LINKS.map((item) => (
							<Link key={item.label} to={item.href} onClick={handleLinkClick}>
								<li className="text-xl font-medium text-gray-800 hover:text-green-500 transition-all">
									{item.label}
								</li>
							</Link>
						))}

						<Link to="/about" onClick={handleLinkClick}>
							<li className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all">
								About
							</li>
						</Link>
					</ul>

					<div className="mt-10 px-6">
						<h2 className="text-gray-600 font-semibold mb-2">Categories</h2>
						<ul className="flex flex-wrap gap-4 justify-center">
							{types.map((item) => (
								<Link
									key={item}
									to={`/blog?type=${encodeURIComponent(item || '')}`}
									onClick={handleLinkClick}
								>
									<li className="px-4 py-2 bg-green-100 rounded-full text-green-700 hover:bg-green-200 text-sm transition">
										💰 {item}
									</li>
								</Link>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</header>
	);
}
