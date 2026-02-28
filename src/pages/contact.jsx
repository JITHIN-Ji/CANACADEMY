import { useState, useEffect, useRef } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', course: '', message: ''
    });
    const [heroVisible, setHeroVisible] = useState(false);
    const [cardsVisible, setCardsVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const cardsRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === cardsRef.current) setCardsVisible(true);
                    if (entry.target === formRef.current) setFormVisible(true);
                }
            });
        }, { threshold: 0.12 });
        if (cardsRef.current) observer.observe(cardsRef.current);
        if (formRef.current) observer.observe(formRef.current);
        return () => { clearTimeout(t); observer.disconnect(); };
    }, []);

    const handleSubmit = (e) => { e.preventDefault(); console.log(formData); };
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const infoItems = [
        {
            label: 'Visit Us',
            value: 'Pallasseri Commercial Complex\nNear KSEB, Vengara\nMalappuram, Kerala — 676304',
            accent: '#059669',
            accentBg: 'rgba(5,150,105,0.09)',
            img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format&fit=crop&q=80',
            svg: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>)
        },
        {
            label: 'Call Us',
            value: '8113 805 043\n8113 805 042',
            sub: 'Available during working hours',
            accent: '#059669',
            accentBg: 'rgba(5,150,105,0.09)',
            img: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=600&auto=format&fit=crop&q=80',
            svg: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>)
        },
        {
            label: 'Email',
            value: 'canacademyinfo@gmail.com',
            sub: 'Response within 24 hours',
            accent: '#059669',
            accentBg: 'rgba(5,150,105,0.09)',
            img: 'https://images.unsplash.com/photo-1526554850534-7c78330d5f90?w=600&auto=format&fit=crop&q=80',
            svg: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>)
        },
        {
            label: 'Hours',
            value: 'Mon – Sat  ·  10 AM – 3:30 PM',
            sub: 'Sunday open for classes',
            accent: '#059669',
            accentBg: 'rgba(5,150,105,0.09)',
            img: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&auto=format&fit=crop',
            svg: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>)
        }
    ];

    return (
        <div style={{ minHeight: '100vh', paddingTop: '96px' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

                .cp * { font-family: 'Outfit', sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
                .cp h1, .cp h2, .cp h3 { font-family: 'Cormorant Garamond', serif; }

                /* HERO */
                .hero-el {
                    opacity: 0;
                    transform: translateY(28px);
                    transition: opacity 0.85s cubic-bezier(.22,1,.36,1), transform 0.85s cubic-bezier(.22,1,.36,1);
                }
                .hero-el.on { opacity: 1; transform: none; }
                .hero-el:nth-child(1) { transition-delay: 0s; }
                .hero-el:nth-child(2) { transition-delay: 0.1s; }
                .hero-el:nth-child(3) { transition-delay: 0.2s; }

                .italic-accent {
                    font-style: italic;
                    color: #1d4ed8;
                    position: relative;
                    display: inline-block;
                }
                .italic-accent::after {
                    content: '';
                    position: absolute;
                    bottom: 2px; left: 0;
                    height: 3px; width: 0;
                    background: linear-gradient(90deg, #1d4ed8, #10b981);
                    border-radius: 2px;
                    transition: width 1.2s cubic-bezier(.22,1,.36,1) 0.7s;
                }
                .hero-el.on .italic-accent::after { width: 100%; }

                /* INFO CARDS */
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 18px;
                }
                @media(max-width:900px){ .info-grid { grid-template-columns: repeat(2,1fr); } }
                @media(max-width:520px){ .info-grid { grid-template-columns: 1fr; } }

                /* SLIDE LEFT TO RIGHT */
                .slide-ltr {
                    opacity: 0;
                    transform: translateX(-60px);
                    transition: opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1);
                }
                .slide-ltr.on { opacity: 1; transform: none; }

                /* cards slide ltr with stagger */
                .icard {
                    background: #fff;
                    border: 1.5px solid #e4e7ef;
                    border-radius: 22px;
                    padding: 34px 28px;
                    position: relative;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateX(-60px);
                    transition:
                        opacity 0.7s cubic-bezier(.22,1,.36,1),
                        transform 0.7s cubic-bezier(.22,1,.36,1),
                        border-color 0.3s,
                        box-shadow 0.3s;
                }
                .icard.on { opacity: 1; transform: none; }
                .icard:nth-child(1){ transition-delay: 0s; }
                .icard:nth-child(2){ transition-delay: 0.12s; }
                .icard:nth-child(3){ transition-delay: 0.24s; }
                .icard:nth-child(4){ transition-delay: 0.36s; }

                /* shimmer sweep */
                .icard::before {
                    content:'';
                    position:absolute; inset:0;
                    background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.7) 50%, transparent 75%);
                    transform: translateX(-120%);
                    transition: transform 0.65s ease;
                    pointer-events: none; z-index:1;
                }
                .icard:hover::before { transform: translateX(120%); }

                /* bottom accent bar */
                .icard-bar {
                    position: absolute;
                    bottom: 0; left: 0;
                    height: 3px; width: 0;
                    border-radius: 0 3px 0 0;
                    transition: width 0.45s cubic-bezier(.22,1,.36,1);
                }
                .icard:hover .icard-bar { width: 100%; }

                .icard-icon {
                    width: 50px; height: 50px;
                    border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 22px;
                    transition: transform 0.35s cubic-bezier(.22,1,.36,1);
                }
                .icard:hover .icard-icon { transform: scale(1.12) rotate(-5deg); }

                .icard-eyebrow {
                    font-size: 10px; font-weight: 700;
                    letter-spacing: 0.15em; text-transform: uppercase;
                    color: #9299a8; margin-bottom: 10px;
                }
                .icard-val {
                    font-size: 15px; font-weight: 500;
                    color: #0f1117; line-height: 1.7;
                    white-space: pre-line;
                }
                .icard-sub { font-size: 13px; color: #b0b8c8; margin-top: 8px; }

                /* MAP */
                .map-shell {
                    border-radius: 24px; overflow: hidden;
                    box-shadow: 0 20px 70px rgba(0,0,0,0.10);
                    height: 430px; position: relative;
                }
                .map-shell::after {
                    content:''; position:absolute; inset:0;
                    border-radius: 24px;
                    box-shadow: inset 0 0 0 1.5px rgba(0,0,0,0.06);
                    pointer-events: none;
                }

                /* FORM SPLIT */
                .form-card {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 24px 80px rgba(0,0,0,0.10);
                    border: 1px solid #e4e7ef;
                    opacity: 0;
                    transform: translateX(-70px);
                    transition: opacity 0.85s cubic-bezier(.22,1,.36,1), transform 0.85s cubic-bezier(.22,1,.36,1);
                }
                .form-card.on { opacity: 1; transform: none; }
                @media(max-width:840px){ .form-card { grid-template-columns: 1fr; } }

                /* dark left panel */
                .fl {
                    background: linear-gradient(155deg, #0c1a40 0%, #0f2455 45%, #0a3528 100%);
                    padding: 60px 48px;
                    position: relative; overflow: hidden;
                    display: flex; flex-direction: column; justify-content: space-between;
                }
                .fl::before {
                    content:''; position:absolute; inset:0;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
                    background-size: 36px 36px;
                    pointer-events: none;
                }

                /* animated orbs */
                .orb {
                    position:absolute; border-radius:50%;
                    filter: blur(70px); opacity: 0.22;
                    animation: orbDrift 9s ease-in-out infinite;
                }
                .orb1 { width:280px; height:280px; background:#2563eb; top:-90px; right:-70px; animation-delay:0s; }
                .orb2 { width:220px; height:220px; background:#10b981; bottom:-70px; left:-50px; animation-delay:3.5s; }
                .orb3 { width:160px; height:160px; background:#7c3aed; top:45%; left:40%; animation-delay:6s; }

                @keyframes orbDrift {
                    0%,100%{ transform: translate(0,0) scale(1); }
                    33%{ transform: translate(22px,-18px) scale(1.09); }
                    66%{ transform: translate(-14px,16px) scale(0.94); }
                }

                .fl-tag {
                    display:inline-block; font-size:10px; font-weight:700;
                    letter-spacing:0.16em; text-transform:uppercase;
                    padding: 5px 15px; border-radius:999px;
                    border: 1px solid rgba(255,255,255,0.16);
                    color: rgba(255,255,255,0.6);
                    margin-bottom: 22px;
                    position:relative; z-index:2; width:fit-content;
                }
                .fl-h {
                    font-family:'Cormorant Garamond', serif;
                    font-size: clamp(30px, 3.2vw, 46px);
                    font-weight: 600; color: white; line-height: 1.18;
                    margin-bottom: 18px;
                    position:relative; z-index:2;
                }
                .fl-p {
                    font-size:15px; color:rgba(255,255,255,0.5);
                    line-height:1.72; position:relative; z-index:2;
                }
                .fl-stats {
                    display:flex; gap:28px; align-items:center;
                    position:relative; z-index:2; margin-top:48px;
                }
                .stat-num {
                    font-family:'Cormorant Garamond', serif;
                    font-size:38px; font-weight:700; color:white; line-height:1;
                }
                .stat-lbl { font-size:12px; color:rgba(255,255,255,0.45); margin-top:5px; font-weight:500; }
                .stat-div { width:1px; align-self:stretch; background:rgba(255,255,255,0.12); }

                /* right form panel */
                .fr { background:#fff; padding: 60px 48px; }
                .fr-h { font-size:30px; font-weight:700; color:#0f1117; margin-bottom:6px; }
                .fr-sub { font-size:14px; color:#9299a8; margin-bottom:34px; }

                .fi { display:flex; flex-direction:column; }
                .fi label {
                    font-size:11px; font-weight:700;
                    letter-spacing:0.1em; text-transform:uppercase;
                    color:#7a8296; margin-bottom:8px;
                }
                .fi input, .fi select, .fi textarea {
                    padding:13px 16px;
                    border: 1.5px solid #e4e7ef;
                    border-radius:12px;
                    font-size:15px; font-family:'Outfit', sans-serif;
                    color:#0f1117; background:#fafbfc;
                    outline:none;
                    transition: border-color 0.22s, background 0.22s, box-shadow 0.22s;
                }
                .fi input:focus, .fi select:focus, .fi textarea:focus {
                    border-color:#2563eb; background:#fff;
                    box-shadow: 0 0 0 4px rgba(37,99,235,0.09);
                }
                .fi input::placeholder, .fi textarea::placeholder { color:#c4cad8; }

                .two-col { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
                @media(max-width:520px){ .two-col { grid-template-columns:1fr; } }

                .sbtn {
                    width:100%; padding:16px;
                    border:none; border-radius:13px;
                    font-size:15px; font-weight:700;
                    font-family:'Outfit', sans-serif;
                    letter-spacing:0.05em;
                    cursor:pointer; color:white;
                    background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #0ea5e9 100%);
                    box-shadow: 0 6px 26px rgba(37,99,235,0.30);
                    position:relative; overflow:hidden;
                    transition: transform 0.22s, box-shadow 0.22s;
                }
                .sbtn::after {
                    content:'';
                    position:absolute; top:0; left:-100%;
                    width:100%; height:100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
                    transition: left 0.55s ease;
                }
                .sbtn:hover { transform:translateY(-2px); box-shadow: 0 14px 38px rgba(37,99,235,0.36); }
                .sbtn:hover::after { left:100%; }
                .sbtn:active { transform:translateY(0); }

                /* SOCIAL */
                .sc-btn {
                    display:inline-flex; align-items:center; gap:14px;
                    padding: 18px 32px;
                    background:#fff;
                    border: 1.5px solid #e4e7ef;
                    border-radius:16px;
                    text-decoration:none; color:#0f1117;
                    font-weight:600; font-size:15px;
                    transition: transform 0.28s cubic-bezier(.22,1,.36,1), box-shadow 0.28s, border-color 0.28s;
                }
                .sc-btn:hover { transform:translateY(-5px); box-shadow: 0 18px 50px rgba(0,0,0,0.10); }
                .sc-btn.ig:hover { border-color:#ec4899; }
                .sc-btn.fb:hover { border-color:#2563eb; }

                .sc-icon {
                    width:42px; height:42px; border-radius:12px;
                    display:flex; align-items:center; justify-content:center;
                    transition: transform 0.3s ease;
                    flex-shrink:0;
                }
                .sc-btn:hover .sc-icon { transform: rotate(-8deg) scale(1.12); }

                /* section layout helpers */
                .sec { padding: 72px 24px; }
                .inner { max-width: 1200px; margin: 0 auto; }

                .eyebrow {
                    display:inline-block; font-size:10px; font-weight:700;
                    letter-spacing:0.16em; text-transform:uppercase;
                    padding: 5px 14px; border-radius:999px; margin-bottom:14px;
                }
                .stitle {
                    font-family:'Cormorant Garamond', serif;
                    font-size: clamp(28px, 3.5vw, 44px); font-weight:700;
                    color:#0f1117; line-height:1.15; margin-bottom:12px;
                }
                .ssub { font-size:16px; color:#5a6172; line-height:1.65; }
            `}</style>

            <div className="cp">

                {/* ── HERO ── */}
                <section style={{ background: '#e8efec', paddingTop: '64px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
                    <div className={`hero-el ${heroVisible ? 'on' : ''}`} style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{
                            display: 'inline-block', fontSize: '11px', fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase',
                            padding: '5px 14px', borderRadius: '999px', marginBottom: '16px',
                            background: '#dbeafe', color: '#1d4ed8', fontFamily: "'Outfit', sans-serif"
                        }}>We're Here to Help</div>
                        <h1 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 700,
                            color: '#111827', lineHeight: 1.15, marginBottom: '20px'
                        }}>
                            Contact{' '}
                            <span style={{ color: '#0c1c17', fontFamily: "'Playfair Display', serif" }}>Us</span>
                        </h1>
                        <p style={{
                            fontSize: '20px', color: '#6b7280', lineHeight: 1.65,
                            maxWidth: '600px', margin: '0 auto', fontFamily: "'Outfit', sans-serif"
                        }}>
                            Have questions? We're here to help you start your journey to PSC success
                        </p>
                    </div>
                </section>

                {/* ── FORM (now right after hero) ── */}
                <section className="sec" style={{ paddingTop: '60px', paddingBottom: '72px' }}>
                    <div className="inner">
                        <div className={`form-card ${formVisible ? 'on' : ''}`} ref={formRef}>

                            {/* Dark left panel */}
                            <div className="fl">
                                <div className="orb orb1" />
                                <div className="orb orb2" />
                                <div className="orb orb3" />
                                <div>
                                    <div className="fl-tag">CAN Academy</div>
                                    <h2 className="fl-h">
                                        Start Your PSC<br />
                                        <span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.65)' }}>Journey Today</span>
                                    </h2>
                                    <p className="fl-p">
                                        Reach out for admissions, course details, or a free demo class. Our dedicated team is happy to guide you.
                                    </p>
                                </div>
                                <div className="fl-stats">
                                    <div>
                                        <div className="stat-num">95%</div>
                                        <div className="stat-lbl">Success Rate</div>
                                    </div>
                                    <div className="stat-div" />
                                    <div>
                                        <div className="stat-num">2K+</div>
                                        <div className="stat-lbl">Students Placed</div>
                                    </div>
                                    <div className="stat-div" />
                                    <div>
                                        <div className="stat-num">7</div>
                                        <div className="stat-lbl">Courses</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right form panel */}
                            <div className="fr">
                                <h3 className="fr-h">Send a Message</h3>
                                <p className="fr-sub">We'll respond within 24 hours</p>
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                    <div className="two-col">
                                        <div className="fi">
                                            <label>Full Name</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                                        </div>
                                        <div className="fi">
                                            <label>Phone</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" />
                                        </div>
                                    </div>
                                    <div className="fi">
                                        <label>Email Address</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" />
                                    </div>
                                    <div className="fi">
                                        <label>Course Interested In</label>
                                        <select name="course" value={formData.course} onChange={handleChange}>
                                            <option value="">Select a course</option>
                                            <option>General PSC</option>
                                            <option>LPSA & UPSA</option>
                                            <option>Kerala Police</option>
                                            <option>ICDS</option>
                                            <option>KTET</option>
                                            <option>SSC</option>
                                            <option>PSC Sunday Batch</option>
                                        </select>
                                    </div>
                                    <div className="fi">
                                        <label>Message</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us what you're looking for..." style={{ resize: 'none' }} />
                                    </div>
                                    <button type="submit" className="sbtn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MAP ── */}
                <section className="sec" style={{ paddingTop: '72px' }}>
                    <div className="inner">
                        <div style={{ marginBottom: '32px' }}>
                            <span className="eyebrow" style={{ background: '#e8f0fe', color: '#1d4ed8' }}>Location</span>
                            <h2 className="stitle">Find Our Center</h2>
                            <p className="ssub">Vengara, Malappuram District, Kerala</p>
                        </div>
                        <div className="map-shell">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0!2d76.0!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3NsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%" height="100%"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </section>

                {/* ── INFO CARDS ROW (now below map) ── */}
                <section className="sec" style={{ paddingTop: '72px' }}>
                    <div className="inner">
                        <div className="info-grid" ref={cardsRef}>
                            {infoItems.map((item, i) => (
                                <div
                                    key={i}
                                    className={`icard ${cardsVisible ? 'on' : ''}`}
                                    onMouseEnter={() => setHoveredCard(i)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    style={{
                                        border: 'none',
                                        background: 'none',
                                        padding: 0,
                                        height: '280px',
                                        boxShadow: hoveredCard === i
                                            ? '0 24px 64px rgba(0,0,0,0.30)'
                                            : '0 6px 24px rgba(0,0,0,0.15)'
                                    }}
                                >
                                    {/* Background image */}
                                    <img
                                        src={item.img}
                                        alt={item.label}
                                        style={{
                                            position: 'absolute', inset: 0,
                                            width: '100%', height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '22px',
                                            transition: 'transform 0.5s ease',
                                            transform: hoveredCard === i ? 'scale(1.06)' : 'scale(1)'
                                        }}
                                    />

                                    {/* Dark overlay */}
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        borderRadius: '22px',
                                        background: hoveredCard === i
                                            ? 'linear-gradient(180deg, rgba(0,60,50,0.72) 0%, rgba(0,30,25,0.88) 100%)'
                                            : 'linear-gradient(180deg, rgba(0,40,35,0.60) 0%, rgba(0,20,15,0.80) 100%)',
                                        transition: 'background 0.35s ease'
                                    }} />

                                    {/* Content on top */}
                                    <div style={{
                                        position: 'relative', zIndex: 2,
                                        padding: '32px 28px',
                                        height: '100%',
                                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                                    }}>
                                        {/* Top: label + value */}
                                        <div>
                                            <div style={{
                                                fontSize: '10px', fontWeight: 700,
                                                letterSpacing: '0.16em', textTransform: 'uppercase',
                                                color: '#80cbc4', marginBottom: '12px'
                                            }}>{item.label}</div>
                                            <div style={{
                                                fontSize: '15px', fontWeight: 600,
                                                color: '#ffffff', lineHeight: 1.7,
                                                whiteSpace: 'pre-line'
                                            }}>{item.value}</div>
                                            {item.sub && (
                                                <div style={{
                                                    fontSize: '13px', color: 'rgba(255,255,255,0.55)',
                                                    marginTop: '8px'
                                                }}>{item.sub}</div>
                                            )}
                                        </div>

                                        {/* Bottom: icon */}
                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <div style={{
                                                width: '44px', height: '44px',
                                                borderRadius: '12px',
                                                background: 'rgba(255,255,255,0.12)',
                                                backdropFilter: 'blur(8px)',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: '#80cbc4',
                                                transition: 'transform 0.3s ease, background 0.3s ease',
                                                transform: hoveredCard === i ? 'rotate(-8deg) scale(1.1)' : 'none'
                                            }}>
                                                {item.svg}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icard-bar" style={{ background: 'linear-gradient(90deg, #26a69a, #80cbc4)', zIndex: 3 }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SOCIAL ── */}
                <section className="sec" style={{ paddingTop: '72px', paddingBottom: '96px', background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f5f0ff 100%)' }}>
                    <div className="inner" style={{ textAlign: 'center' }}>
                        <span className="eyebrow" style={{ background: '#d1fae5', color: '#065f46' }}>Stay Connected</span>
                        <h2 className="stitle">Follow Us</h2>
                        <p className="ssub" style={{ marginBottom: '40px' }}>
                            Latest updates, exam notifications &amp; student success stories
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                            <a href="https://www.instagram.com/canacademy_/" target="_blank" rel="noopener noreferrer" className="sc-btn ig">
                                <div className="sc-icon" style={{ background: 'linear-gradient(135deg, #fce7f3, #fdf4ff)' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                    </svg>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <div style={{ fontSize: '12px', color: '#9299a8', fontWeight: 500, marginBottom: '2px' }}>Follow on</div>
                                    <div style={{ fontWeight: 700 }}>Instagram</div>
                                </div>
                            </a>
                            <a href="https://www.facebook.com/share/1BXfAhQr4v/" target="_blank" rel="noopener noreferrer" className="sc-btn fb">
                                <div className="sc-icon" style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                                    </svg>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <div style={{ fontSize: '12px', color: '#9299a8', fontWeight: 500, marginBottom: '2px' }}>Follow on</div>
                                    <div style={{ fontWeight: 700 }}>Facebook</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}