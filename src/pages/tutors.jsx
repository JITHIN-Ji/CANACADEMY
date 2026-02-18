import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { tutorsData } from "../data/tutorsData";

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

const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
);

const TwitterXIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

const GithubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
);

function TutorCard({ tutor, index }) {
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
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Category Badge */}
                {tutor.category && (
                    <div className="absolute top-4 right-4 bg-[#16a085] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        {tutor.category}
                    </div>
                )}
                {/* Experience Badge */}
                {tutor.experience && (
                    <div className="absolute top-4 left-4 bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        {tutor.experience}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-1 leading-tight group-hover:text-[#16a085] transition-colors duration-200">
                    {tutor.name}
                </h3>

                <p className="text-[#16a085] text-xs font-semibold tracking-widest uppercase mb-4">
                    {tutor.specialty}
                </p>

                {/* Social Icons + Course Count Row */}
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3 text-gray-400">
                        <a href={tutor.social?.instagram || "#"} className="hover:text-[#16a085] transition-colors duration-200" aria-label="Instagram">
                            <InstagramIcon />
                        </a>
                        <a href={tutor.social?.twitter || "#"} className="hover:text-[#16a085] transition-colors duration-200" aria-label="X / Twitter">
                            <TwitterXIcon />
                        </a>
                        <a href={tutor.social?.github || "#"} className="hover:text-[#16a085] transition-colors duration-200" aria-label="GitHub">
                            <GithubIcon />
                        </a>
                    </div>
                    {tutor.courses && (
                        <span className="text-[#16a085] text-xs font-bold tracking-widest uppercase">
                            {tutor.courses} Courses
                        </span>
                    )}
                </div>

                {/* Button */}
                <button className="w-full border-2 border-[#16a085] text-[#16a085] text-base font-bold px-6 py-2.5 rounded-full
                    hover:bg-[#16a085] hover:text-white transition-all duration-300 shadow-sm">
                    View Program
                </button>
            </div>
        </div>
    );
}

export default function TutorsPage() {
    const [heroVisible, setHeroVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
                <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

                .tutors-page * { font-family: 'DM Sans', sans-serif; }
                .tutors-page h1, .tutors-page h2, .tutors-page h3 { font-family: 'Playfair Display', serif; }

                .tutors-hero-bg {
                    background: #e8efec;
                }

                .tutors-hero-slide {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: opacity 0.7s ease, transform 0.7s ease;
                }
                .tutors-hero-slide.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .tutors-tag-label {
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

            <div className="tutors-page">
                {/* Hero Section */}
                <section className="tutors-hero-bg pt-16 pb-20 px-6">
                    <div className={`max-w-5xl mx-auto text-center tutors-hero-slide ${heroVisible ? "visible" : ""}`}>
                        <div className="tutors-tag-label">OUR FACULTY</div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Meet Our Expert Tutors
                        </h1>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Learn from the best faculty members with years of experience and proven track record in helping students succeed.
                        </p>
                    </div>
                </section>

                {/* Tutors Grid */}
                <section style={{ padding: '80px 24px' }}>
                    <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tutorsData.map((tutor, index) => (
                                <TutorCard key={tutor.id} tutor={tutor} index={index} />
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
                            Learn From the Best
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            marginBottom: '32px',
                            opacity: 0.95,
                            lineHeight: 1.6
                        }}>
                            Our experienced tutors are dedicated to your success. Enroll now and get personalized guidance.
                        </p>
                        <button onClick={() => navigate('/contact')} style={{
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
                            Enroll Now
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}