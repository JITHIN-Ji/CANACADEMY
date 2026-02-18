import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function useScrollReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const elements = ref.current?.querySelectorAll(
            ".slide-from-bottom, .slide-from-left, .slide-from-right"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return ref;
}

export default function About() {
    const ref = useScrollReveal();
    const navigate = useNavigate();

    return (
        <div ref={ref} className="bg-[#e8efec] pt-24 about-page overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

                .about-page * { font-family: 'DM Sans', sans-serif; }
                .about-page h1, .about-page h2, .about-page h3 { font-family: 'Playfair Display', serif; }

                .about-page .slide-from-bottom {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: opacity 0.7s ease, transform 0.7s ease;
                }
                .about-page .slide-from-left {
                    opacity: 0;
                    transform: translateX(-40px);
                    transition: opacity 0.7s ease, transform 0.7s ease;
                }
                .about-page .slide-from-right {
                    opacity: 0;
                    transform: translateX(40px);
                    transition: opacity 0.7s ease, transform 0.7s ease;
                }
                .about-page .revealed {
                    opacity: 1 !important;
                    transform: translate(0) !important;
                }

                /* Floating / Ken Burns image animations */
                @keyframes floatUp {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-14px); }
                }
                @keyframes floatDown {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(14px); }
                }
                @keyframes kenBurns {
                    0% { transform: scale(1) translate(0, 0); }
                    50% { transform: scale(1.08) translate(-2%, -1%); }
                    100% { transform: scale(1) translate(0, 0); }
                }
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }

                .about-page .img-float-up {
                    animation: floatUp 6s ease-in-out infinite;
                }
                .about-page .img-float-down {
                    animation: floatDown 7s ease-in-out infinite;
                }
                .about-page .img-ken-burns {
                    overflow: hidden;
                }
                .about-page .img-ken-burns img {
                    animation: kenBurns 12s ease-in-out infinite;
                }

                .about-page .hero-bg {
                    background: #e8efec;
                }
                .about-page .section-mint {
                    background: linear-gradient(160deg, #f0fdf7 0%, #e8f7ff 100%);
                }
                .about-page .section-peach {
                    background: #ffffff;
                }
                .about-page .section-sky {
                    background: linear-gradient(160deg, #f0f8ff 0%, #eef6ff 100%);
                }
                .about-page .section-lavender {
                    background: linear-gradient(160deg, #f5f3ff 0%, #ede9fe 100%);
                }

                .about-page .stat-card {
                    background: white;
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
                    border: 1.5px solid #e2e8f0;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .about-page .stat-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.10);
                }

                .about-page .offer-card {
                    background: white;
                    border-radius: 16px;
                    padding: 24px;
                    border: 1.5px solid #e2e8f0;
                    transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
                }
                .about-page .offer-card:hover {
                    border-color: #3b82f6;
                    transform: translateY(-3px);
                    box-shadow: 0 6px 24px rgba(59,130,246,0.10);
                }

                .about-page .why-card {
                    background: white;
                    border-radius: 20px;
                    padding: 36px 28px;
                    border: 1.5px solid #e2e8f0;
                    box-shadow: 0 2px 16px rgba(0,0,0,0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .about-page .why-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 40px rgba(0,0,0,0.10);
                }

                .about-page .accent-bar-blue { 
                    display: inline-block; 
                    width: 48px; 
                    height: 4px; 
                    background: #3b82f6; 
                    border-radius: 2px; 
                    margin-bottom: 16px; 
                }
                .about-page .accent-bar-green { 
                    display: inline-block; 
                    width: 48px; 
                    height: 4px; 
                    background: #16a085; 
                    border-radius: 2px; 
                    margin-bottom: 16px; 
                }
                .about-page .accent-bar-amber { 
                    display: inline-block; 
                    width: 48px; 
                    height: 4px; 
                    background: #f59e0b; 
                    border-radius: 2px; 
                    margin-bottom: 16px; 
                }

                .about-page .tag-label {
                    display: inline-block;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    padding: 5px 14px;
                    border-radius: 999px;
                    margin-bottom: 16px;
                }

                .about-page .badge-float {
                    animation: floatUp 5s ease-in-out infinite;
                }
            `}</style>

            {/* Hero Section */}
            {/* Hero Section */}
<section className="hero-bg pt-16 pb-20 px-6">
    <div className="max-w-5xl mx-auto text-center slide-from-bottom">
        <div className="tag-label" style={{ background: '#dbeafe', color: '#1d4ed8' }}>
            Kerala's Most Trusted PSC Institute
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
    About{" "}
    <span
  style={{
    background: "linear-gradient(90deg, #1d4ed8, #13b456)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontFamily: "Playfair Display, serif",
    fontWeight: 700,
  }}
>
  CAN ACADEMY
</span>

</h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Center for Competitive Examinations — Your trusted partner in achieving PSC, KTET, and SSC success
        </p>
    </div>
</section>

            {/* Our Story */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="slide-from-left">
                            <span className="accent-bar-blue"></span>
                            <div className="tag-label" style={{ background: '#dbeafe', color: '#1e40af' }}>Our Story</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Building Dreams,<br />Creating Success Stories
                            </h2>
                            <p className="text-gray-500 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
                                CAN Academy was established with a vision to provide quality coaching for government job aspirants in Kerala. Over the years, we have grown into one of the most trusted names in PSC coaching, helping thousands of students achieve their dreams.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-8" style={{ fontSize: '16px' }}>
                                Our commitment to excellence, experienced faculty, and student-centric approach have made us the preferred choice for serious aspirants. We don't just teach — we mentor, guide, and support our students throughout their journey.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="stat-card">
                                    <div className="text-4xl font-bold mb-1" style={{ color: '#2563eb', fontFamily: "'Playfair Display', serif" }}>15+</div>
                                    <p className="text-gray-600 font-semibold">Years of Excellence</p>
                                </div>
                                <div className="stat-card">
                                    <div className="text-4xl font-bold mb-1" style={{ color: '#10b981', fontFamily: "'Playfair Display', serif" }}>1000+</div>
                                    <p className="text-gray-600 font-semibold">Success Stories</p>
                                </div>
                            </div>
                        </div>
                        <div className="slide-from-right relative flex justify-center">
                            <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, #bfdbfe 0%, #bbf7d0 100%)', transform: 'rotate(3deg)', zIndex: 0 }}></div>
                            <div className="img-float-up relative z-10 w-full" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                                <div className="img-ken-burns">
                                    <img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                                        alt="CAN Academy students"
                                        style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 px-6 section-mint">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="slide-from-left relative order-2 md:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="img-float-up" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.10)' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=500&fit=crop"
                                        alt="Students studying"
                                        style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
                                    />
                                </div>
                                <div className="img-float-down" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.10)', marginTop: '48px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=500&fit=crop"
                                        alt="Classroom teaching"
                                        style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="slide-from-right order-1 md:order-2">
                            <div className="mb-10">
                                <span className="accent-bar-blue"></span>
                                <div style={{ borderLeft: '4px solid #2563eb', paddingLeft: '16px', marginBottom: '12px' }}>
                                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                                </div>
                                <p className="text-gray-500 leading-relaxed" style={{ fontSize: '16px' }}>
                                    To empower aspiring candidates with quality education, comprehensive training, and unwavering support to help them secure their dream government positions. We strive to make quality PSC coaching accessible and affordable for all.
                                </p>
                            </div>
                            <div>
                                <span className="accent-bar-green"></span>
                                <div style={{ borderLeft: '4px solid #10b981', paddingLeft: '16px', marginBottom: '12px' }}>
                                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                                </div>
                                <p className="text-gray-500 leading-relaxed" style={{ fontSize: '16px' }}>
                                    To be Kerala's most trusted and respected PSC coaching institute, recognized for our commitment to student success, teaching excellence, and contribution to building a competent workforce for the state's public service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-24 px-6 section-peach">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="slide-from-left">
                            <span className="accent-bar-amber"></span>
                            <div className="tag-label" style={{ background: '#fef3c7', color: '#92400e' }}>What We Offer</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Comprehensive<br />Coaching Programs
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    { title: "PSC Coaching", desc: "General PSC, LPSA, UPSA, Kerala Police, ICDS, and Sunday batches for working professionals", dot: '#2563eb' },
                                    { title: "KTET Coaching", desc: "Category 1 & 2 with 50+ classes, regular sessions from 10:30 AM to 4:00 PM until exam", dot: '#10b981' },
                                    { title: "SSC Coaching", desc: "Specialized coaching for Staff Selection Commission exams with expert guidance", dot: '#f59e0b' },
                                    { title: "Additional Support", desc: "Mock tests, video classes, updated materials, and doubt clearing sessions", dot: '#8b5cf6' },
                                ].map((item, i) => (
                                    <div key={i} className="offer-card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.dot, marginTop: '6px', flexShrink: 0 }}></div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                            <p className="text-gray-500" style={{ fontSize: '14px' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="slide-from-right" style={{ position: 'relative' }}>
                            <div className="img-float-up" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
                                <div className="img-ken-burns">
                                    <img
                                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                                        alt="Coaching programs"
                                        style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
                                    />
                                </div>
                            </div>
                            <div className="badge-float" style={{
                                position: 'absolute', bottom: '-24px', left: '-24px',
                                background: 'white', padding: '20px 24px', borderRadius: '16px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1.5px solid #e2e8f0'
                            }}>
                                <p style={{ fontSize: '28px', fontWeight: 700, color: '#2563eb', fontFamily: "'Playfair Display', serif", margin: 0 }}>100%</p>
                                <p style={{ color: '#374151', fontWeight: 600, margin: 0, fontSize: '14px' }}>Updated Syllabus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6 section-sky">
                <div className="max-w-7xl mx-auto text-center mb-14 slide-from-bottom">
                    <span className="accent-bar-blue"></span>
                    <div className="tag-label" style={{ background: '#dbeafe', color: '#1d4ed8' }}>Why Choose Us</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
                </div>
                <div className="max-w-7xl mx-auto" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                    {[
                        { title: "Expert Faculty", desc: "Learn from experienced educators with years of PSC coaching expertise and IAS/IPS officers as guest faculty.", accent: '#2563eb', bg: '#eff6ff' },
                        { title: "Updated Materials", desc: "Get access to the latest study materials, previous year papers, and regularly updated content aligned with PSC syllabus.", accent: '#10b981', bg: '#f0fdf4' },
                        { title: "Proven Results", desc: "Join 1000+ successful candidates who achieved their government job dreams through our coaching programs.", accent: '#8b5cf6', bg: '#faf5ff' },
                    ].map((item, i) => (
                        <div key={i} className="why-card slide-from-bottom" style={{ borderTop: `4px solid ${item.accent}` }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: item.bg, marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '20px', fontWeight: 800, color: item.accent, fontFamily: "'Playfair Display', serif" }}>{i + 1}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed" style={{ fontSize: '15px' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 50%, #10b981 100%)' }}>
                <div className="max-w-4xl mx-auto text-center slide-from-bottom">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-xl mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        Join CAN Academy today and take the first step towards your dream government job
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button onClick={() => navigate('/contact')} style={{
                            background: 'white', color: '#1d4ed8', padding: '16px 40px',
                            borderRadius: '12px', fontWeight: 700, fontSize: '16px',
                            border: 'none', cursor: 'pointer', boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                            transition: 'transform 0.2s, box-shadow 0.2s'
                        }}
                        onMouseOver={e => { e.target.style.transform='translateY(-2px)'; e.target.style.boxShadow='0 12px 40px rgba(0,0,0,0.20)'; }}
                        onMouseOut={e => { e.target.style.transform='translateY(0)'; e.target.style.boxShadow='0 8px 32px rgba(0,0,0,0.15)'; }}>
                            Enroll Now
                        </button>
                        <button onClick={() => navigate('/contact')} style={{
                            background: 'transparent', color: 'white', padding: '16px 40px',
                            borderRadius: '12px', fontWeight: 700, fontSize: '16px',
                            border: '2px solid rgba(255,255,255,0.7)', cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                        onMouseOver={e => e.target.style.background='rgba(255,255,255,0.12)'}
                        onMouseOut={e => e.target.style.background='transparent'}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
            {/* Newsletter Section */}
<section className="py-24 px-6" style={{ background: '#e8efec' }}>
    <div className="max-w-3xl mx-auto text-center slide-from-bottom" style={{ position: 'relative' }}>

        {/* Floating Avatar - Top Left - hidden on mobile to prevent text overlap */}
        <div className="hidden md:block" style={{
            position: 'absolute', top: '-10px', left: '0px',
            width: '72px', height: '72px', borderRadius: '50%',
            overflow: 'hidden', border: '3px solid white',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
        }}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Floating Avatar - Top Right - hidden on mobile to prevent text overlap */}
        <div className="hidden md:block" style={{
            position: 'absolute', top: '-10px', right: '0px',
            width: '72px', height: '72px', borderRadius: '50%',
            overflow: 'hidden', border: '3px solid white',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
        }}>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Floating Avatar - Bottom Left - hidden on mobile to prevent overlap */}
        <div className="hidden md:block" style={{
            position: 'absolute', bottom: '-10px', left: '0px',
            width: '72px', height: '72px', borderRadius: '50%',
            overflow: 'hidden', border: '3px solid white',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
        }}>
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Floating Avatar - Bottom Right - hidden on mobile to prevent overlap */}
        <div className="hidden md:block" style={{
            position: 'absolute', bottom: '-10px', right: '0px',
            width: '72px', height: '72px', borderRadius: '50%',
            overflow: 'hidden', border: '3px solid white',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
        }}>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Tag */}
        <div className="tag-label" style={{ background: 'white', color: '#374151', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            NEWSLETTER
        </div>

        {/* Heading - centered, with padding on mobile for clean alignment */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight text-center px-2 md:px-0">
            Learn and Grow with<br />CAN Academy!
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 leading-relaxed" style={{ fontSize: '16px', maxWidth: '520px', margin: '0 auto 36px' }}>
            Get the latest updates, expert advice, and special offers by joining our CAN Academy Newsletter today!
        </p>

        {/* Input + Button */}
        <div style={{ display: 'flex', gap: '12px', maxWidth: '520px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
                type="email"
                placeholder="e.g. hello@example.com"
                style={{
                    flex: 1,
                    minWidth: '260px',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '1.5px solid #e2e8f0',
                    fontSize: '15px',
                    outline: 'none',
                    background: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#374151'
                }}
                onFocus={e => e.target.style.borderColor = '#16a085'}
                onBlur={e => e.target.style.borderColor = '#e2e8f0'}
            />
            <button
                style={{
                    background: '#16a085',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '15px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(22,160,133,0.35)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    fontFamily: "'DM Sans', sans-serif"
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(22,160,133,0.40)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(22,160,133,0.35)'; }}
            >
                Subscribe
            </button>
        </div>

    </div>
</section>
        </div>
    );
}