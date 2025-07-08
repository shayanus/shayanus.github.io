'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import SkillsSection from './components/SkillsSection';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray text-white">
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
		</main>
	);
}
