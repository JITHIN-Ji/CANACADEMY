import { useState, useEffect } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });
    const [heroVisible, setHeroVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-[#e8efec] min-h-screen pt-24">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

                .contact-page * { font-family: 'DM Sans', sans-serif; }
                .contact-page h1, .contact-page h2, .contact-page h3 { font-family: 'Playfair Display', serif; }

                .contact-hero-bg {
                    background: #e8efec;
                }

                .contact-tag-label {
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

                .contact-hero-slide {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: opacity 0.7s ease, transform 0.7s ease;
                }
                .contact-hero-slide.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .contact-card {
                    background: white;
                    border-radius: 20px;
                    padding: 28px;
                    border: 1.5px solid #e2e8f0;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .contact-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 36px rgba(0,0,0,0.10);
                }

                .contact-dot {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 800;
                    font-size: 18px;
                    flex-shrink: 0;
                    font-family: 'Playfair Display', serif;
                }

                .form-input {
                    width: 100%;
                    padding: 12px 16px;
                    border: 1.5px solid #e2e8f0;
                    border-radius: 12px;
                    font-size: 15px;
                    font-family: 'DM Sans', sans-serif;
                    transition: border-color 0.2s ease;
                    outline: none;
                    background: #fafafa;
                }
                .form-input:focus {
                    border-color: #2563eb;
                    background: white;
                }

                .form-label {
                    display: block;
                    font-weight: 600;
                    color: #374151;
                    margin-bottom: 8px;
                    font-size: 14px;
                    font-family: 'DM Sans', sans-serif;
                }

                .social-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: white;
                    padding: 14px 32px;
                    border-radius: 14px;
                    font-weight: 700;
                    font-size: 15px;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
                    border: 1.5px solid #e2e8f0;
                    cursor: pointer;
                    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
                    text-decoration: none;
                    color: #111827;
                    font-family: 'DM Sans', sans-serif;
                }
                .social-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 28px rgba(0,0,0,0.13);
                }
                .social-btn-instagram:hover { background: linear-gradient(135deg, #f472b6, #ec4899); color: white; border-color: transparent; }
                .social-btn-facebook:hover { background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; border-color: transparent; }
                .social-btn-youtube:hover { background: linear-gradient(135deg, #ef4444, #dc2626); color: white; border-color: transparent; }

                .social-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    flex-shrink: 0;
                }

                .section-sky { background: linear-gradient(160deg, #f0f8ff 0%, #eef6ff 100%); }
                .section-mint { background: linear-gradient(160deg, #f0fdf7 0%, #e8f7ff 100%); }
            `}</style>

            <div className="contact-page">
                {/* Hero Section */}
                <section className="contact-hero-bg pt-16 pb-20 px-6">
                    <div className={`max-w-5xl mx-auto text-center contact-hero-slide ${heroVisible ? "visible" : ""}`}>
                        <div className="contact-tag-label">We're Here to Help</div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Contact{" "}
                           <span style={{ color: '#0c1c17', fontFamily: 'Playfair Display, serif' }}>US</span>
                        
                        </h1>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Have questions? We're here to help you start your journey to PSC success
                        </p>
                    </div>
                </section>

                {/* Main Contact Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">

                            {/* Left — Contact Form */}
                            <div style={{
                                background: 'white',
                                borderRadius: '24px',
                                padding: '40px',
                                border: '1.5px solid #e2e8f0',
                                boxShadow: '0 8px 40px rgba(0,0,0,0.07)'
                            }}>
                                <div style={{ borderLeft: '4px solid #2563eb', paddingLeft: '16px', marginBottom: '8px' }}>
                                    <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
                                </div>
                                <p className="text-gray-500 mb-8 mt-2" style={{ fontSize: '15px' }}>
                                    Fill out the form below and we'll get back to you as soon as possible
                                </p>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div>
                                        <label className="form-label">Your Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="form-label">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="form-label">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label className="form-label">Course Interested In</label>
                                        <select
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            className="form-input"
                                        >
                                            <option value="">Select a course</option>
                                            <option value="general-psc">General PSC</option>
                                            <option value="lpsa-upsa">LPSA & UPSA</option>
                                            <option value="kerala-police">Kerala Police</option>
                                            <option value="icds">ICDS</option>
                                            <option value="ktet">KTET</option>
                                            <option value="ssc">SSC</option>
                                            <option value="sunday-batch">PSC Sunday Batch</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="form-label">Your Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="form-input"
                                            placeholder="Tell us about your queries..."
                                            style={{ resize: 'none' }}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        style={{
                                            background: 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 50%, #10b981 100%)',
                                            color: 'white',
                                            fontWeight: 700,
                                            fontSize: '16px',
                                            padding: '16px',
                                            borderRadius: '14px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontFamily: "'DM Sans', sans-serif",
                                            boxShadow: '0 6px 24px rgba(37,99,235,0.25)',
                                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                            letterSpacing: '0.03em'
                                        }}
                                        onMouseOver={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 10px 32px rgba(37,99,235,0.30)'; }}
                                        onMouseOut={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 6px 24px rgba(37,99,235,0.25)'; }}
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Right — Contact Info Cards */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    {
                                        num: '1',
                                        title: 'Visit Our Center',
                                        content: <>
                                            <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
                                                Pallasseri Commercial Complex<br />
                                                Near KSEB, VENGARA<br />
                                                Malappuram District, Kerala<br />
                                                Pin: 676304
                                            </p>
                                        </>,
                                        dotBg: '#dbeafe', dotColor: '#2563eb'
                                    },
                                    {
                                        num: '2',
                                        title: 'Call Us',
                                        content: <>
                                            <p style={{ color: '#111827', fontSize: '17px', fontWeight: 700 }}>8113 805 043</p>
                                            <p style={{ color: '#111827', fontSize: '17px', fontWeight: 700 }}>8113 805 042</p>
                                            <p style={{ color: '#9ca3af', fontSize: '13px', marginTop: '6px' }}>Available during working hours</p>
                                        </>,
                                        dotBg: '#d1fae5', dotColor: '#059669'
                                    },
                                    {
                                        num: '3',
                                        title: 'Email Us',
                                        content: <>
                                            <p style={{ color: '#111827', fontSize: '16px', fontWeight: 700 }}>canacademyinfo@gmail.com</p>
                                            <p style={{ color: '#9ca3af', fontSize: '13px', marginTop: '6px' }}>We'll respond within 24 hours</p>
                                        </>,
                                        dotBg: '#dbeafe', dotColor: '#2563eb'
                                    },
                                    {
                                        num: '4',
                                        title: 'Working Hours',
                                        content: <>
                                            <p style={{ fontWeight: 600, color: '#374151' }}>Monday – Saturday</p>
                                            <p style={{ color: '#2563eb', fontWeight: 700, fontSize: '17px' }}>10:00 AM – 4:30 PM</p>
                                            <p style={{ fontWeight: 600, color: '#374151', marginTop: '8px' }}>Sunday</p>
                                            <p style={{ color: '#10b981', fontWeight: 700 }}>Open for Classes</p>
                                        </>,
                                        dotBg: '#d1fae5', dotColor: '#059669'
                                    },
                                ].map((card, i) => (
                                    <div key={i} className="contact-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                        <div className="contact-dot" style={{ background: card.dotBg, color: card.dotColor }}>
                                            {card.num}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>{card.title}</h3>
                                            {card.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Media Section */}
                <section className="py-16 px-6 section-mint">
                    <div className="max-w-4xl mx-auto text-center">
                        <span style={{
                            display: 'inline-block', fontSize: '11px', fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px',
                            borderRadius: '999px', marginBottom: '16px', background: '#d1fae5', color: '#065f46',
                            fontFamily: "'DM Sans', sans-serif"
                        }}>Stay Connected</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Follow Us on Social Media
                        </h2>
                        <p className="text-gray-500 mb-10" style={{ fontSize: '16px' }}>
                            Latest updates, exam notifications, and success stories
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                            <a href="#" className="social-btn social-btn-instagram">
                                <span className="social-dot" style={{ background: '#ec4899' }}></span>
                                Instagram
                            </a>
                            <a href="#" className="social-btn social-btn-facebook">
                                <span className="social-dot" style={{ background: '#2563eb' }}></span>
                                Facebook
                            </a>
                            <a href="#" className="social-btn social-btn-youtube">
                                <span className="social-dot" style={{ background: '#ef4444' }}></span>
                                YouTube
                            </a>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="py-16 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10">
                            <span style={{
                                display: 'inline-block', fontSize: '11px', fontWeight: 700,
                                letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px',
                                borderRadius: '999px', marginBottom: '16px', background: '#dbeafe', color: '#1d4ed8',
                                fontFamily: "'DM Sans', sans-serif"
                            }}>Location</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Find Us on Map</h2>
                            <p className="text-gray-500" style={{ fontSize: '16px' }}>
                                Located in Vengara, Malappuram District, Kerala
                            </p>
                        </div>

                        <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 48px rgba(0,0,0,0.10)', height: '384px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0!2d76.0!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3NsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(20%)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 50%, #10b981 100%)' }}>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
                        <p className="text-xl mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
                            Visit our center for a free consultation and campus tour
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button style={{
                                background: 'white', color: '#1d4ed8', padding: '16px 40px',
                                borderRadius: '12px', fontWeight: 700, fontSize: '16px',
                                border: 'none', cursor: 'pointer', boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                                fontFamily: "'DM Sans', sans-serif",
                                transition: 'transform 0.2s, box-shadow 0.2s'
                            }}
                            onMouseOver={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.20)'; }}
                            onMouseOut={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)'; }}>
                                Book Free Demo
                            </button>
                            <button style={{
                                background: 'transparent', color: 'white', padding: '16px 40px',
                                borderRadius: '12px', fontWeight: 700, fontSize: '16px',
                                border: '2px solid rgba(255,255,255,0.7)', cursor: 'pointer',
                                fontFamily: "'DM Sans', sans-serif",
                                transition: 'background 0.2s'
                            }}
                            onMouseOver={e => e.target.style.background = 'rgba(255,255,255,0.12)'}
                            onMouseOut={e => e.target.style.background = 'transparent'}>
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}