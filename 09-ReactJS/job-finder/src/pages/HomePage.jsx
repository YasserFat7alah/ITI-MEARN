import HeroSection from '../components/HeroSection'
import SponserSection from '../components/SponserSection'
import FaqsSection from '../components/FaqsSection'
import ProcessSection from '../components/ProcessSection'
import JobsSection from '../components/JobsSection'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SponserSection />
      <FaqsSection />
      <ProcessSection />
      <JobsSection />
      <StatsSection />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default HomePage