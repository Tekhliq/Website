import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import UploadSection from "@/app/components/LandingSection";
import FeaturedSection from "@/app/components/FeaturedSection";
import FaqSection from "@/app/components/FaqSection";
import ScrollToTop from "@/app/components/ScrollToTop";
import ContactForm from "@/app/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Header />
      <UploadSection />
      <FeaturedSection />
      <FaqSection />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
