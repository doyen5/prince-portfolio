import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import FeaturedProjectsSection from '../sections/FeaturedProjectsSection'
import JourneySection from '../sections/JourneySection'
import SkillsSection from '../sections/SkillsSection'
import ServicesSection from '../sections/ServicesSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import SocialContactSection from '../sections/SocialContactSection'

export default function HomePage({ language }) {
  return <>
    <HeroSection language={language} />
    <AboutSection language={language} />
    <FeaturedProjectsSection language={language} />
    <JourneySection language={language} />
    <SkillsSection language={language} />
    <ServicesSection language={language} />
    <TestimonialsSection language={language} />
    <SocialContactSection language={language} />
  </>
}
