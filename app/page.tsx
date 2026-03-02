import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenSection from '@/components/MenSection';
import MediaSection from '@/components/MediaSection';
import TeamSection from '@/components/TeamSection';
import TeamGrid from '@/components/TeamGrid';
import PremiumHaircutSection from '@/components/PremiumHaircutSection';
import TextSection from '@/components/TextSection';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <MenSection />
      <MediaSection />
      <TeamSection />
      <TeamGrid />
      <PremiumHaircutSection />
      <TextSection />
      <ContactUs />
      <Footer />
    </main>
  );
}
