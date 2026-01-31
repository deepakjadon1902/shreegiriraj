import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import EnjoyYourStay from '@/components/home/EnjoyYourStay';
import Testimonials from '@/components/home/Testimonials';
import NearbyPlaces from '@/components/home/NearbyPlaces';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <EnjoyYourStay />
      <Testimonials />
      <NearbyPlaces />
    </Layout>
  );
};

export default Index;
