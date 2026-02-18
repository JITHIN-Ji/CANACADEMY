import Marquee from "react-fast-marquee";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonialsData";
import SectionTitle from "../components/SectionTitle";

export default function Testimonials() {
    return (
        <>
            <div style={{ background: "#f9f9f7" }} className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle 
                        text1="Success Stories" 
                        text2="What Our Students Say" 
                        text3="Hear from our successful candidates who achieved their dream government jobs with CAN Academy" 
                    />

                    <Marquee className="max-w-6xl mx-auto mt-8" gradient={true} gradientColor="#f9f9f7" speed={25}>
                        <div className="flex items-center justify-center py-5">
                            {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial} />
                            ))}
                        </div>
                    </Marquee>
                    <Marquee className="max-w-6xl mx-auto" gradient={true} gradientColor="#f9f9f7" speed={25} direction="right">
                        <div className="flex items-center justify-center py-5">
                            {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial} />
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>

            {/* Full-width image banner — 300px tall, edge to edge */}
            <div style={{ width: "100%", height: "820px", overflow: "hidden" }}>
                <img
                    src="/assets/hero2.png"
                    alt="CAN Academy Banner"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                    }}
                />
            </div>
        </>
    );
}