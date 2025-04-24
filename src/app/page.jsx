import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div style={{ padding: "40px 0" }}>
        <Carousel />
      </div>
      <InfoSection />
      <Footer />
    </>
  );
}
