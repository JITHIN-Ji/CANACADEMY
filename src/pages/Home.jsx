import BottomBanner from "../sections/BottomBanner";
import { FaqSection } from "../sections/FaqSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import Achievementssection  from "../sections/Achievementssection ";
import Testimonials from "../sections/Testimonials";

export default function Home() {
    return (
        <>
            <HeroSection />
           
            <FeaturesSection />
            <section id="testimonials"><Testimonials /></section>
            <Achievementssection  />
            <FaqSection />
            <BottomBanner />
        </>
    );
}