import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import SectionTitle from "../components/SectionTitle";

const cards = [
    {
        title: "PSC Coaching",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
        accent: "#3b82f6",
        items: [
            "General PSC (10th, +2, Degree Level)",
            "LPSA & UPSA",
            "Kerala Police",
            "ICDS",
            "PSC Sunday Batch",
        ],
        extra: null,
    },
    {
        title: "KTET Coaching",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
        accent: "#10b981",
        items: [
            "Category 1 & 2",
            "Duration: Until Exam (50+ classes)",
            "Regular Classes: 10:30 AM – 4:00 PM",
        ],
        extra: "Comprehensive study materials included",
    },
    {
        title: "SSC Coaching",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        accent: "#8b5cf6",
        items: [
            "Expert faculty",
            "Mock tests & practice",
            "Updated syllabus",
        ],
        extra: null,
        desc: "Specialized coaching for Staff Selection Commission exams with expert guidance and comprehensive study materials.",
    },
];

export default function FeaturesSection() {
    const navigate = useNavigate();
    const cardRefs = useRef([]);

    useEffect(() => {
        const observers = [];
        const triggered = new Set();
        const isMobile = window.innerWidth < 768;

        cardRefs.current.forEach((el, index) => {
            if (!el) return;

            const isMainCard = index < cards.length;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting || triggered.has(index)) return;
                        triggered.add(index);
                        observer.unobserve(entry.target);

                        if (isMainCard) {
                            if (isMobile) {
                                // On mobile cards are stacked — each scrolls in alone, no delay needed
                                entry.target.classList.add("card-visible");
                            } else {
                                // On desktop all 3 are visible at once — stagger with setTimeout
                                const delay = index * 500;
                                setTimeout(() => {
                                    entry.target.classList.add("card-visible");
                                }, delay);
                            }
                        } else {
                            entry.target.classList.add("card-visible");
                        }
                    });
                },
                {
                    threshold: isMobile ? 0.08 : 0.12,
                    rootMargin: isMobile ? "0px 0px -40px 0px" : "0px 0px -60px 0px",
                }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    return (
        <div className="bg-white py-16 px-6">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

                .section-wrap {
                    font-family: 'DM Sans', sans-serif;
                }

                /* ─── Scroll pop-in animation ─── */
                .card-animate {
                    opacity: 0;
                    transform: translateY(60px) scale(0.95);
                    /* transition-delay comes from inline style per card */
                    transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                                transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .card-animate.card-visible {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                /* ─── Cover card ─── */
                .cover-card {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    min-height: 460px;
                    cursor: pointer;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.10);
                    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                                box-shadow 0.35s ease;
                }
                .cover-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 24px 60px rgba(0,0,0,0.22);
                }
                .cover-card img.bg-img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }
                .cover-card:hover img.bg-img {
                    transform: scale(1.07);
                }

                /* ─── Overlay ─── */
                .card-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0,0,0,0.88) 0%,
                        rgba(0,0,0,0.55) 50%,
                        rgba(0,0,0,0.25) 100%
                    );
                    transition: background 0.35s ease;
                }
                .cover-card:hover .card-overlay {
                    background: linear-gradient(
                        to top,
                        rgba(0,0,0,0.92) 0%,
                        rgba(0,0,0,0.65) 55%,
                        rgba(0,0,0,0.30) 100%
                    );
                }

                /* ─── Content ─── */
                .card-content {
                    position: relative;
                    z-index: 2;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 2rem;
                }
                .card-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.85rem;
                    font-weight: 900;
                    color: #fff;
                    margin-bottom: 1rem;
                    text-shadow: 0 2px 12px rgba(0,0,0,0.4);
                }
                .accent-bar {
                    width: 40px;
                    height: 3px;
                    border-radius: 2px;
                    margin-bottom: 1rem;
                }
                .card-desc {
                    color: rgba(255,255,255,0.80);
                    font-size: 0.92rem;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                }
                .card-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.55rem;
                }
                .card-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                    color: rgba(255,255,255,0.88);
                    font-size: 0.90rem;
                }
                .check-icon {
                    flex-shrink: 0;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 1px;
                    font-size: 10px;
                    font-weight: bold;
                    color: #fff;
                }
                .card-badge {
                    display: inline-block;
                    padding: 0.35rem 0.85rem;
                    border-radius: 20px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    color: #fff;
                    margin-top: 0.5rem;
                }

                /* ─── CTA ─── */
                .cta-animate {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.7s ease, transform 0.7s ease;
                }
                .cta-animate.card-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>

            <div className="max-w-7xl mx-auto section-wrap">
                <SectionTitle
                    text1="Our Services"
                    text2="What We Offer"
                    text3="Comprehensive PSC, KTET & SSC coaching programs designed to help you achieve your dream government job"
                />

                {/* ── Main 3-card Grid ── */}
                <div className="grid md:grid-cols-3 gap-7 mt-12">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardRefs.current[i] = el)}
                            className="cover-card card-animate"
                        >
                            {/* Background Image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="bg-img"
                            />

                            {/* Dark Overlay */}
                            <div className="card-overlay" />

                            {/* Content */}
                            <div className="card-content">
                                <div
                                    className="accent-bar"
                                    style={{ background: card.accent }}
                                />
                                <h3 className="card-title">{card.title}</h3>

                                {card.desc && (
                                    <p className="card-desc">{card.desc}</p>
                                )}

                                <ul className="card-list">
                                    {card.items.map((item, j) => (
                                        <li key={j}>
                                            <span
                                                className="check-icon"
                                                style={{ background: card.accent }}
                                            >
                                                ✓
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {card.extra && (
                                    <span
                                        className="card-badge"
                                        style={{ background: card.accent + "cc" }}
                                    >
                                        {card.extra}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Additional Mini Cards ── */}
                <div className="grid md:grid-cols-4 gap-5 mt-8">
                    {[
                        { title: "Expert Faculty", desc: "Experienced trainers with proven track record" },
                        { title: "Flexible Timings", desc: "Regular & Sunday batches available" },
                        { title: "Video Resources", desc: "Access to recorded classes & materials" },
                        { title: "PSC Notifications", desc: "Regular updates on latest exams" },
                    ].map((item, i) => {
                        const idx = cards.length + i;
                        return (
                            <div
                                key={i}
                                ref={(el) => (cardRefs.current[idx] = el)}
                                className="card-animate text-center p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-slate-50 to-blue-50"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* ── CTA ── */}
                <div
                    ref={(el) => (cardRefs.current[cards.length + 4] = el)}
                    className="cta-animate mt-10 text-center bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-10 text-white"
                >
                    <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Ready to Start Your Journey?
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                        Join CAN Academy and take the first step towards your dream government job
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate("/contact")}
                            className="bg-white text-blue-600 hover:bg-gray-100 transition px-8 py-3 rounded-lg font-bold"
                        >
                            Enroll Now
                        </button>
                        <button
                            onClick={() => navigate("/contact")}
                            className="border-2 border-white text-white hover:bg-white/10 transition px-8 py-3 rounded-lg font-bold"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}