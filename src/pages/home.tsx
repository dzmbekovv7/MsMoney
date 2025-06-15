import {
	Hero,
	AboutSection,
	CategoriesSection,
	TestimonialsSection,
	FeaturedArticlesSection,
} from '@/components/home'

export function HomePage() {
	return (
		<>
			<Hero />
			<AboutSection />
			<FeaturedArticlesSection />
			<CategoriesSection />
			<TestimonialsSection />
		</>
	)
}
