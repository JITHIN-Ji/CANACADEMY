import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const topResults = [
    { id: 1,  photo: "/assets/results/result1.jpeg"  },
    { id: 2,  photo: "/assets/results/result2.jpeg"  },
    { id: 3,  photo: "/assets/results/result3.jpeg"  },
    { id: 4,  photo: "/assets/results/result4.jpeg"  },
    { id: 5,  photo: "/assets/results/result5.jpeg"  },
    { id: 6,  photo: "/assets/results/result6.jpeg"  },
    { id: 7,  photo: "/assets/results/result7.jpeg"  },
    { id: 8,  photo: "/assets/results/result8.jpeg"  },
    { id: 9,  photo: "/assets/results/result9.jpeg"  },
    { id: 10, photo: "/assets/results/result10.jpeg" },
    { id: 11, photo: "/assets/results/result11.jpeg" },
    { id: 12, photo: "/assets/results/result12.jpeg" },
    { id: 13, photo: "/assets/results/result13.jpeg" },
    { id: 14, photo: "/assets/results/result14.jpeg" },
    { id: 15, photo: "/assets/results/result15.jpeg" },
    { id: 16, photo: "/assets/results/result16.jpeg" },
    { id: 17, photo: "/assets/results/result17.jpeg" },
    { id: 18, photo: "/assets/results/result18.jpeg" },
    { id: 19, photo: "/assets/results/result19.jpeg" },
    { id: 20, photo: "/assets/results/result20.jpeg" },
    { id: 21, photo: "/assets/results/result21.jpeg" },
    { id: 22, photo: "/assets/results/result22.jpeg" },
    { id: 23, photo: "/assets/results/result23.jpeg" },
    { id: 24, photo: "/assets/results/result24.jpeg" },
    { id: 25, photo: "/assets/results/result25.jpeg" },
    { id: 26, photo: "/assets/results/result26.jpeg" },
];

// Deterministic tilt angles per card (no randomness on re-render)
const tilts = [-3.2, 2.1, -1.5, 3.8, -2.7, 1.3, -3.5, 2.6, -1.2, 3.1, -2.4, 1.8];

function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(e.target); } },
            { threshold: 0.06 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, visible];
}

function PolaroidTile({ photo, index }) {
    const [ref, visible] = useReveal();
    const [hovered, setHovered] = useState(false);
    const tilt = tilts[index % tilts.length];
    const hoverTilt = tilt * 0.3;

    return (
        <div
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible
                    ? `rotate(${hovered ? hoverTilt : tilt}deg) translateY(${hovered ? "-10px" : "0"})`
                    : `rotate(${tilt}deg) translateY(40px) scale(0.94)`,
                transition: `opacity 0.7s ease ${index * 0.06}s, transform ${hovered ? "0.25s" : "0.7s"} cubic-bezier(.22,.68,0,1.15) ${hovered ? "0s" : `${index * 0.06}s`}`,
                // Polaroid frame
                background: "#fff",
                padding: "10px 10px 36px 10px",
                boxShadow: hovered
                    ? "0 24px 48px rgba(0,0,0,0.22), 0 6px 16px rgba(0,0,0,0.12)"
                    : "0 8px 24px rgba(0,0,0,0.13), 0 2px 6px rgba(0,0,0,0.07)",
                borderRadius: "3px",
                cursor: "default",
                willChange: "transform",
                // subtle tape look on top
                position: "relative",
            }}
        >
            {/* Tape strip decoration */}
            <div style={{
                position: "absolute",
                top: "-12px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "48px",
                height: "22px",
                background: "rgba(255,230,100,0.55)",
                borderRadius: "2px",
                zIndex: 2,
                backdropFilter: "blur(1px)",
            }} />

            <img
                src={photo}
                alt=""
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: "1px",
                    // Slight warm/vintage filter
                    filter: hovered ? "sepia(0.05) brightness(1.03)" : "sepia(0.12) brightness(0.97)",
                    transition: "filter 0.3s ease",
                }}
            />
        </div>
    );
}

export default function TopResultsPage() {
    const navigate = useNavigate();
    const [heroVisible, setHeroVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 80);
        return () => clearTimeout(t);
    }, []);

    const col1 = topResults.filter((_, i) => i % 3 === 0);
    const col2 = topResults.filter((_, i) => i % 3 === 1);
    const col3 = topResults.filter((_, i) => i % 3 === 2);

    return (
        <div style={{ background: "#f5f0e8", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700;800&display=swap');

                .tr-hero-slide {
                    opacity: 0; transform: translateY(32px);
                    transition: opacity 0.75s ease, transform 0.75s ease;
                }
                .tr-hero-slide.vis { opacity: 1; transform: translateY(0); }

                .masonry-desktop { display: grid; }
                .mobile-grid { display: none; }

                @media (max-width: 768px) {
                    .masonry-desktop { display: none !important; }
                    .mobile-grid     { display: flex !important; }
                }
            `}</style>

            {/* Hero */}
            <section style={{
                background: "linear-gradient(160deg, #e8efec 0%, #f5f0e8 100%)",
                paddingTop: "140px", paddingBottom: "64px",
                paddingLeft: "24px", paddingRight: "24px",
                textAlign: "center",
            }}>
                <div className={`tr-hero-slide ${heroVisible ? "vis" : ""}`} style={{ maxWidth: "720px", margin: "0 auto" }}>
                    <div style={{
                        display: "inline-block",
                        fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
                        textTransform: "uppercase", padding: "5px 14px",
                        borderRadius: "999px", marginBottom: "20px",
                        background: "rgba(26,156,110,0.12)", color: "#1a9c6e",
                        fontFamily: "'DM Sans', sans-serif",
                    }}>
                        Our Proud Achievers
                    </div>

                    <h1 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(38px, 5vw, 64px)",
                        fontWeight: 900, lineHeight: 1.1,
                        color: "#0c1c17", margin: "0 0 18px",
                        letterSpacing: "-0.02em",
                    }}>
                        Top Results &{" "}
                        <span style={{
                            background: "linear-gradient(90deg, #1d4ed8, #13b456)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}>
                            Rank Holders
                        </span>
                    </h1>

                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "18px", lineHeight: 1.8, color: "#3d5a52",
                        maxWidth: "520px", margin: "0 auto",
                    }}>
                        Celebrating our students who secured top ranks in PSC, KTET, and SSC examinations.
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <section style={{ padding: "80px 40px 100px", background: "#f5f0e8" }}>
                <div style={{ maxWidth: "1240px", margin: "0 auto" }}>

                    {/* Desktop 3-col masonry */}
                    <div
                        className="masonry-desktop"
                        style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: "40px", alignItems: "start" }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                            {col1.map((item, i) => (
                                <PolaroidTile key={item.id} photo={item.photo} index={i * 3} />
                            ))}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "48px", marginTop: "64px" }}>
                            {col2.map((item, i) => (
                                <PolaroidTile key={item.id} photo={item.photo} index={i * 3 + 1} />
                            ))}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "48px", marginTop: "32px" }}>
                            {col3.map((item, i) => (
                                <PolaroidTile key={item.id} photo={item.photo} index={i * 3 + 2} />
                            ))}
                        </div>
                    </div>

                    {/* Mobile single column */}
                    <div
                        className="mobile-grid"
                        style={{ flexDirection: "column", gap: "40px", alignItems: "center" }}
                    >
                        {topResults.map((item, i) => (
                            <div key={item.id} style={{ width: "85%", maxWidth: "340px" }}>
                                <PolaroidTile photo={item.photo} index={i} />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section style={{
                padding: "80px 24px",
                background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 50%, #10b981 100%)",
                textAlign: "center",
            }}>
                <div style={{ maxWidth: "640px", margin: "0 auto" }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(28px, 4vw, 44px)",
                        fontWeight: 700, color: "#fff",
                        margin: "0 0 16px", lineHeight: 1.2,
                    }}>
                        Be the Next Success Story
                    </h2>
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "17px", color: "rgba(255,255,255,0.92)",
                        marginBottom: "32px", lineHeight: 1.7,
                    }}>
                        Join thousands of students who turned their dreams into reality with CAN Academy.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        style={{
                            background: "#fff", color: "#1d4ed8",
                            padding: "16px 40px", fontSize: "16px",
                            fontWeight: 700, borderRadius: "50px",
                            border: "none", cursor: "pointer",
                            fontFamily: "'DM Sans', sans-serif",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.15)";
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        Enroll Now
                    </button>
                </div>
            </section>
        </div>
    );
}