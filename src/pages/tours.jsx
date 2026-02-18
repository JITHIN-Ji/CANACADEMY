import { useState, useEffect, useRef } from "react";
import { toursData } from "../data/toursData";

function useScrollReveal() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
}

function TourCard({ tour, index }) {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div
            ref={ref}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(60px)",
                transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
            }}
            className="group bg-[#e8efec] rounded-3xl overflow-hidden cursor-pointer
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
            {/* Image */}
            <div className="relative w-full h-[280px] overflow-hidden rounded-t-3xl">
                <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Category Badge */}
                {tour.category && (
                    <div className="absolute top-4 right-4 bg-[#16a085] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        {tour.category}
                    </div>
                )}
                {/* Duration Badge */}
                {tour.duration && (
                    <div className="absolute top-4 left-4 bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        {tour.duration}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#16a085] transition-colors duration-200">
                    {tour.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {tour.description}
                </p>

                {/* Button */}
                <button className="w-full border-2 border-[#16a085] text-[#16a085] text-base font-bold px-6 py-2.5 rounded-full
                    hover:bg-[#16a085] hover:text-white transition-all duration-300 shadow-sm">
                    Schedule Tour
                </button>
            </div>
        </div>
    );
}

export default function ToursPage() {
    const [heroVisible, setHeroVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

                .tours-page * { font-family: 'DM Sans', sans-serif; }
                .tours-page h1, .tours-page h2, .tours-page h3 { font-family: 'Playfair Display', serif; }

                .tours-hero-bg {
                    background: #e8efec;
                }

                .tours-tag-label {
                    display: inline-block;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    padding: 5px 14px;
                    border-radius: 999px;
                    margin-bottom: 16px;
                    background: #dbeafe;
                    color: #1d4ed8;
                    font-family: 'DM Sans', sans-serif;
                }
            `}</style>

            <div className="tours-page">
                {/* Hero Section */}
                <section className="tours-hero-bg pt-16 pb-20 px-6">
                    <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
                        <div className="tours-tag-label">GALLERY</div>

                        <h1 style={{
                            fontSize: 'clamp(36px, 5vw, 56px)',
                            fontWeight: 700,
                            color: '#0c1c17',
                            marginBottom: '16px',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em'
                        }}>
                            Campus Tours & Facility
                        </h1>

                        <p style={{
                            fontSize: 'clamp(16px, 2vw, 18px)',
                            color: '#4b5563',
                            lineHeight: 1.6,
                            maxWidth: '600px'
                        }}>
                            Explore our state-of-the-art facilities and world-class learning environment. Schedule your tour today!
                        </p>
                    </div>
                </section>

                {/* Tours Grid */}
                <section style={{ padding: '80px 24px' }}>
                    <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {toursData.map((tour, index) => (
                                <TourCard key={tour.id} tour={tour} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section style={{
                    padding: '80px 24px',
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 50%, #10b981 100%)'
                }}>
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        <h2 style={{
                            fontSize: 'clamp(32px, 4vw, 48px)',
                            fontWeight: 700,
                            marginBottom: '16px',
                            lineHeight: 1.2
                        }}>
                            Ready to Visit Us?
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            marginBottom: '32px',
                            opacity: 0.95,
                            lineHeight: 1.6
                        }}>
                            Join us for a guided campus tour and experience the quality of education we provide.
                        </p>
                        <button style={{
                            background: 'white',
                            color: '#1d4ed8',
                            padding: '16px 40px',
                            fontSize: '16px',
                            fontWeight: 700,
                            borderRadius: '12px',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                            Schedule a Tour Now
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
