import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const topResults = [
    { id: 1,  photo: "/assets/results/result1.jpg"  },
    { id: 2,  photo: "/assets/results/result2.jpg"  },
    { id: 3,  photo: "/assets/results/result3.jpg"  },
    { id: 4,  photo: "/assets/results/result4.jpg"  },
    { id: 5,  photo: "/assets/results/result5.jpg"  },
    { id: 6,  photo: "/assets/results/result6.jpg"  },
    { id: 7,  photo: "/assets/results/result7.jpg"  },
    { id: 8,  photo: "/assets/results/result8.jpg"  },
    { id: 9,  photo: "/assets/results/result9.jpg"  },
    { id: 10, photo: "/assets/results/result10.jpg" },
    { id: 11, photo: "/assets/results/result11.jpg" },
    { id: 12, photo: "/assets/results/result12.jpg" },
];

function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(e.target); } },
            { threshold: 0.08 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, visible];
}

function PhotoTile({ photo, index, height }) {
    const [ref, visible] = useReveal();
    return (
        <div
            ref={ref}
            className="photo-tile"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1) translateY(0)" : "scale(0.96) translateY(24px)",
                transition: `opacity 0.65s ease ${index * 0.07}s, transform 0.65s ease ${index * 0.07}s`,
                borderRadius: "18px",
                overflow: "hidden",
                height,
                background: "#c8e6d8",
            }}
        >
            <img
                src={photo}
                alt=""
                style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "top center",
                    display: "block",
                    transition: "transform 0.6s cubic-bezier(.22,.68,0,1.15)",
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

    // Split into 3 columns for desktop masonry
    const col1 = topResults.filter((_, i) => i % 3 === 0);
    const col2 = topResults.filter((_, i) => i % 3 === 1);
    const col3 = topResults.filter((_, i) => i % 3 === 2);

    const h1 = ["380px", "280px", "340px", "300px"];
    const h2 = ["300px", "360px", "260px", "340px"];
    const h3 = ["320px", "300px", "380px", "260px"];

    // Mobile heights (shorter for 2-col)
    const hm = ["240px", "200px", "220px", "200px", "240px", "210px",
                 "220px", "240px", "200px", "220px", "240px", "200px"];

    return (
        <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700;800&display=swap');

                .photo-tile { cursor: default; }
                .photo-tile:hover img { transform: scale(1.05); }

                .tr-hero-slide {
                    opacity: 0; transform: translateY(32px);
                    transition: opacity 0.75s ease, transform 0.75s ease;
                }
                .tr-hero-slide.vis { opacity: 1; transform: translateY(0); }

                /* Desktop masonry — visible by default */
                .masonry-desktop { display: grid; }
                /* Mobile single-col — hidden by default */
                .mobile-grid { display: none; }

                @media (max-width: 768px) {
                    .masonry-desktop { display: none !important; }
                    .mobile-grid     { display: flex !important; }
                }
            `}</style>

            {/* Hero */}
            <section style={{
                background: "#e8efec",
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

            {/* ── DESKTOP: 3-col masonry ── */}
            <section style={{ padding: "64px 32px 80px", background: "#fff" }}>
                <div style={{ maxWidth: "1240px", margin: "0 auto" }}>

                    {/* Desktop masonry */}
                    <div
                        className="masonry-desktop"
                        style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: "18px", alignItems: "start" }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                            {col1.map((item, i) => (
                                <PhotoTile key={item.id} photo={item.photo} index={i * 3} height={h1[i % h1.length]} />
                            ))}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "52px" }}>
                            {col2.map((item, i) => (
                                <PhotoTile key={item.id} photo={item.photo} index={i * 3 + 1} height={h2[i % h2.length]} />
                            ))}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "26px" }}>
                            {col3.map((item, i) => (
                                <PhotoTile key={item.id} photo={item.photo} index={i * 3 + 2} height={h3[i % h3.length]} />
                            ))}
                        </div>
                    </div>

                    {/* Mobile single column — all 12 images one by one */}
                    <div
                        className="mobile-grid"
                        style={{ flexDirection: "column", gap: "14px" }}
                    >
                        {topResults.map((item, i) => (
                            <PhotoTile key={item.id} photo={item.photo} index={i} height="280px" />
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