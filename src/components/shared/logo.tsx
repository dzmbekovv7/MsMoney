import { cn } from '@/lib/utils';
import { DollarSign, Euro, JapaneseYen } from 'lucide-react';
import { Link } from 'react-router';

export function Logo({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
	return (
		<Link to='/' className='group flex items-center gap-3 no-underline'>
			{/* Logo Icon - Money theme */}
			<div className="relative flex items-center justify-center">
				{/* Animated background glow */}
				<div className="absolute inset-0 bg-gradient-to-r from-green-200 via-white to-green-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg scale-150"></div>
				
				{/* Main icon container */}
				<div className="relative w-14 h-14 bg-gradient-to-br from-green-500 via-white to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
					{/* Money icons */}
					<div className="relative flex gap-1">
						<DollarSign size={24} className='text-white relative z-10' />
						<Euro size={24} className='text-white relative z-10' />
						<JapaneseYen size={24} className='text-white relative z-10' />
					</div>
				</div>
				
				{/* Floating dots animation */}
				<div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-80"></div>
				<div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
			</div>
			
			{/* Brand Text */}
			<div className="flex flex-col">
				{/* Main brand name */}
				<div className="flex items-center gap-1">
					<span
						className={cn(
							'text-3xl font-black leading-none tracking-tight transition-all duration-300',
							variant === 'dark' 
								? 'text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:via-white group-hover:to-green-600' 
								: 'text-white group-hover:text-green-100'
						)}
					>
						MsMoney
					</span>
				</div>
				
				{/* Subtitle with currency icons */}
				<div className="flex items-center gap-2 mt-1">
					<div className={cn(
						'h-px w-8 transition-all duration-300',
						variant === 'dark' 
							? 'bg-gradient-to-r from-gray-300 to-green-300 group-hover:from-green-400 group-hover:to-green-500' 
							: 'bg-gradient-to-r from-white/40 to-green-200/60'
					)}></div>
					<div className="flex gap-2">
						<DollarSign size={18} className='text-green-500' />
						<Euro size={18} className='text-green-500' />
						<JapaneseYen size={18} className='text-green-500' />
					</div>
					<div className={cn(
						'h-px w-8 transition-all duration-300',
						variant === 'dark' 
							? 'bg-gradient-to-r from-green-300 to-gray-300 group-hover:from-green-500 group-hover:to-green-600' 
							: 'bg-gradient-to-r from-green-200/60 to-white/40'
					)}></div>
				</div>
			</div>
		</Link>
	);
}