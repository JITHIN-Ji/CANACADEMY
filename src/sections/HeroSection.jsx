import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slideshowImages = [
    { src: "/assets/3.jpeg", alt: "Student achieving" },
    { src: "/assets/4.jpeg", alt: "Student preparing" },
];

function SlideshowImage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setCurrentIndex((prev) => {
                    const next = (prev + 1) % slideshowImages.length;
                    setNextIndex((next + 1) % slideshowImages.length);
                    return next;
                });
                setFading(false);
            }, 800);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "hidden" }}>
            <img
                src={slideshowImages[nextIndex].src}
                alt={slideshowImages[nextIndex].alt}
                style={{
                    position: "absolute", inset: 0, width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "center center",
                    minWidth: "100%", minHeight: "100%",
                    display: "block", zIndex: 1
                }}
            />
            <img
                src={slideshowImages[currentIndex].src}
                alt={slideshowImages[currentIndex].alt}
                style={{
                    position: "absolute", inset: 0, width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "center center",
                    minWidth: "100%", minHeight: "100%",
                    display: "block", zIndex: 2,
                    opacity: fading ? 0 : 1,
                    transition: fading ? "opacity 0.8s ease" : "none",
                }}
            />
        </div>
    );
}

const examLabels = ["PSC", "KTET", "SSC"];

function CyclingExam() {
    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimating(true);
            setTimeout(() => {
                setIndex(prev => (prev + 1) % examLabels.length);
                setAnimating(false);
            }, 600);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="cycling-exam-wrap" style={{
            display: "inline-block",
            width: "auto",
            textAlign: "left",
            verticalAlign: "bottom",
            overflow: "visible",
        }}>
            <span
                className="cycling-exam-inner"
                style={{
                    display: "inline-block",
                    background: "linear-gradient(90deg, #1d4ed8, #13b456)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 800,
                    fontSize: "clamp(42px, 5vw, 68px)",
                    opacity: animating ? 0 : 1,
                    transform: animating ? "translateY(-14px)" : "translateY(0)",
                    transition: "opacity 0.35s ease, transform 0.35s ease",
                    whiteSpace: "nowrap",
                }}
            >
                {examLabels[index]}
            </span>
        </span>
    );
}

export default function HeroSection() {
    const navigate = useNavigate();
    return (
        <div
            className="hero-section-outer"
            style={{
                background: "#e8efec",
                minHeight: "92vh",
                paddingTop: "150px",
                fontFamily: "'DM Sans', sans-serif",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700;800&display=swap');

                .hero-section * { font-family: 'DM Sans', sans-serif; }
                .hero-section h1 { font-family: 'Playfair Display', serif; }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes wave {
                    0%,100% { transform: translateY(0px); }
                    50%     { transform: translateY(-8px); }
                }
                .h-title  { animation: fadeUp 0.65s 0.05s both; }
                .h-desc   { animation: fadeUp 0.65s 0.2s both; }
                .h-btns   { animation: fadeUp 0.65s 0.35s both; }
                .h-stats  { animation: fadeUp 0.65s 0.5s both; }
                .h-imgs   { animation: fadeInRight 0.85s 0.25s both; }
                .wave1    { animation: wave 3.5s ease-in-out infinite; }
                .wave2    { animation: wave 3.5s 1.2s ease-in-out infinite; }
                .img-card {
                    transition: transform 0.4s cubic-bezier(.22,.68,0,1.2), box-shadow 0.4s ease;
                    cursor: default;
                }
                .img-card:hover {
                    transform: translateY(-8px) !important;
                    box-shadow: 0 28px 64px rgba(0,0,0,0.16) !important;
                }
                .btn-primary {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 14px 36px rgba(22,140,96,0.45) !important;
                }
                .btn-results {
                    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
                }
                .btn-results:hover {
                    background: rgba(255,255,255,1) !important;
                    border-color: #1a9c6e !important;
                    transform: translateY(-2px);
                }
                .hero-stat-num {
                    font-family: 'Playfair Display', serif;
                    font-size: 30px;
                    font-weight: 700;
                    color: #0c1c17;
                    line-height: 1;
                }
                .hero-stat-label {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 13px;
                    color: #5e8c7e;
                    margin-top: 6px;
                    font-weight: 500;
                }
                .hero-tag {
                    display: inline-block;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    padding: 5px 14px;
                    border-radius: 999px;
                    margin-bottom: 20px;
                    margin-top: 32px;
                    background: rgba(26, 156, 110, 0.12);
                    color: #1a9c6e;
                    font-family: 'DM Sans', sans-serif;
                }

                @media (max-width: 768px) {
                    .hero-section-outer { padding-top: 140px !important; }
                    .hero-section-mobile { padding: 0 20px 48px !important; max-width: 100% !important; }
                    .hero-section-grid { grid-template-columns: 1fr !important; gap: 32px !important; text-align: center; }
                    .hero-section-left { text-align: center; }
                    .hero-section-left .hero-tag { margin-left: auto; margin-right: auto; }
                    .hero-section-left h1 { text-align: center; }
                    .hero-section-left h1 span { display: block; }
                    .hero-section-left p { margin-left: auto; margin-right: auto; max-width: 100% !important; }
                    .hero-section-btns { justify-content: center; }
                    .hero-section-stats { justify-content: center; gap: 32px !important; flex-wrap: wrap; }
                    .hero-section-imgs { order: -1; margin-top: 0; }
                    .hero-section-imgs-grid {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 12px !important;
                        max-width: 100%;
                        margin: 0 auto;
                    }
                    .hero-section-imgs .img-card {
                        margin-top: 0 !important;
                        height: 250px !important;
                    }
                    .hero-section-imgs .img-card:last-child {
                        margin-top: 24px !important;
                    }
                    .hero-section-imgs .wave1, .hero-section-imgs .wave2 { display: none; }
                    .cycling-exam-inner { font-size: 38px !important; }
                    .cycling-exam-wrap  { width: auto !important; }
                    .exam-line { justify-content: center !important; }
                }
            `}</style>

            <div
                className="hero-section hero-section-mobile"
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "0 60px 48px",
                    boxSizing: "border-box",
                }}
            >
                <div className="hero-section-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "40px",
                    alignItems: "center",
                }}>

                    {/* LEFT */}
                    <div className="hero-section-left" style={{ order: 1 }}>
                        <div className="hero-tag">Kerala's Most Trusted PSC Institute</div>

                        <h1
                            className="h-title"
                            style={{
                                fontSize: "clamp(36px, 3.8vw, 58px)",
                                fontWeight: 700,
                                lineHeight: 1.15,
                                color: "#0c1c17",
                                margin: "0 0 22px",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Achieve Excellence
                            <span className="exam-line" style={{
                                display: "flex",
                                alignItems: "baseline",
                                marginTop: "4px",
                                gap: "0px",
                            }}>
                                <span style={{ color: "#0c1c17", fontWeight: 700, marginRight: "10px" }}>in</span>
                                <CyclingExam />
                                <span style={{ color: "#0c1c17", fontWeight: 700, marginLeft: "10px" }}>Exams.</span>
                            </span>
                        </h1>

                        <p className="h-desc" style={{
                            fontSize: "17px", lineHeight: 1.8,
                            color: "#3d5a52", maxWidth: "480px",
                            margin: "0 0 36px", fontWeight: 400,
                            fontFamily: "'DM Sans', sans-serif",
                        }}>
                            CAN Academy offers expert-led classes, structured study plans,
                            and a proven track record of results that speak for themselves.
                        </p>

                        <div className="h-btns hero-section-btns" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                            <button onClick={() => navigate('/contact')} className="btn-primary" style={{
                                background: "linear-gradient(135deg, #1a9c6e 0%, #0f7a55 100%)",
                                color: "#fff", border: "none",
                                padding: "15px 36px", borderRadius: "50px",
                                fontWeight: 700, fontSize: "16px",
                                cursor: "pointer",
                                fontFamily: "'DM Sans', sans-serif",
                                boxShadow: "0 8px 24px rgba(22,140,96,0.35)",
                                letterSpacing: "0.02em",
                            }}>
                                Enroll Now
                            </button>

                            <button onClick={() => navigate('/top-results')} className="btn-results" style={{
                                display: "flex", alignItems: "center", gap: "9px",
                                background: "rgba(255,255,255,0.75)", backdropFilter: "blur(10px)",
                                border: "1.5px solid #b8d4cc",
                                padding: "15px 28px", borderRadius: "50px",
                                fontWeight: 600, fontSize: "16px", color: "#0c1c17",
                                cursor: "pointer",
                                fontFamily: "'DM Sans', sans-serif",
                            }}>
                                <span style={{
                                    width: '20px', height: '20px', display: 'inline-flex',
                                    alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a9c6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 9H4a2 2 0 0 1-2-2V5h4"/>
                                        <path d="M18 9h2a2 2 0 0 0 2-2V5h-4"/>
                                        <path d="M12 17v4"/>
                                        <path d="M8 21h8"/>
                                        <path d="M6 5h12v6a6 6 0 0 1-12 0V5z"/>
                                    </svg>
                                </span>
                                Top Results
                            </button>
                        </div>

                        <div className="h-stats hero-section-stats" style={{
                            display: "flex", gap: "48px", marginTop: "52px",
                            paddingTop: "32px",
                            borderTop: "1px solid rgba(26,156,110,0.18)",
                        }}>
                            {[
                                { num: "5000+", label: "Students Enrolled" },
                                { num: "95%",   label: "Pass Rate" },
                                { num: "50+",   label: "Expert Tutors" },
                            ].map(({ num, label }) => (
                                <div key={label}>
                                    <div className="hero-stat-num">{num}</div>
                                    <div className="hero-stat-label">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT (Images) */}
                    <div className="h-imgs hero-section-imgs" style={{ position: "relative", order: 2 }}>
                        <div className="wave1" style={{
                            position: "absolute", top: "-40px", right: "0px",
                            opacity: 0.75, pointerEvents: "none",
                        }}>
                            <svg width="130" height="58" viewBox="0 0 130 58">
                                <path d="M6,29 Q32,6 65,29 T124,29"  stroke="#2db882" fill="none" strokeWidth="3.2" strokeLinecap="round"/>
                                <path d="M6,44 Q32,21 65,44 T124,44" stroke="#2db882" fill="none" strokeWidth="3.2" strokeLinecap="round"/>
                            </svg>
                        </div>

                        <div className="hero-section-imgs-grid" style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px",
                            alignItems: "start",
                        }}>
                            <div className="img-card" style={{
                                borderRadius: "22px", overflow: "hidden",
                                height: "360px",
                                boxShadow: "0 20px 56px rgba(0,0,0,0.13)",
                                background: "#c8e6d8",
                            }}>
                                <img
                                    src="/assets/hero1.png"
                                    alt="CAN Academy hero"
                                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                />
                            </div>

                            <div className="img-card" style={{
                                borderRadius: "22px", overflow: "hidden",
                                height: "360px",
                                marginTop: "40px",
                                boxShadow: "0 20px 56px rgba(0,0,0,0.13)",
                                background: "#c8e6d8",
                                position: "relative",
                            }}>
                                <SlideshowImage />
                            </div>
                        </div>

                        <div className="wave2" style={{
                            position: "absolute", bottom: "-32px", left: "0px",
                            opacity: 0.75, pointerEvents: "none",
                        }}>
                            <svg width="130" height="58" viewBox="0 0 130 58">
                                <path d="M6,20 Q32,44 65,20 T124,20" stroke="#4caf50" fill="none" strokeWidth="3.2" strokeLinecap="round"/>
                                <path d="M6,35 Q32,58 65,35 T124,35" stroke="#4caf50" fill="none" strokeWidth="3.2" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}