import { useParams, useNavigate } from "react-router-dom";
import { coursesData } from "../data/Coursesdata";

export default function CourseDetailPage() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const course = coursesData.find(c => c.slug === slug);

    if (!course) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-50">
                <div className="text-center">
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>
                        Course Not Found
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen overflow-x-hidden pt-24 md:pt-0">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');

                .course-detail-page * { font-family: 'DM Sans', sans-serif; }
                .course-detail-page h1,
                .course-detail-page h2,
                .course-detail-page h3,
                .course-detail-page h4 { font-family: 'Playfair Display', serif; }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                }

                .detail-card {
                    background: white;
                    border-radius: 16px;
                    border: 1.5px solid #e2e8f0;
                    padding: 20px;
                    transition: box-shadow 0.3s ease;
                }
                .detail-card:hover {
                    box-shadow: 0 6px 24px rgba(0,0,0,0.08);
                }

                .enroll-btn {
                    width: 100%;
                    background: linear-gradient(135deg, #1a9c6e 0%, #0f7a55 100%);
                    color: white;
                    font-weight: 700;
                    font-size: 16px;
                    padding: 14px;
                    border-radius: 12px;
                    border: none;
                    cursor: pointer;
                    font-family: 'DM Sans', sans-serif;
                    box-shadow: 0 6px 20px rgba(22,160,133,0.30);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    margin-bottom: 12px;
                }
                .enroll-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 28px rgba(22,160,133,0.38);
                }

                .contact-btn {
                    width: 100%;
                    background: transparent;
                    color: #374151;
                    font-weight: 600;
                    font-size: 15px;
                    padding: 13px;
                    border-radius: 12px;
                    border: 1.5px solid #e2e8f0;
                    cursor: pointer;
                    font-family: 'DM Sans', sans-serif;
                    transition: border-color 0.2s ease, background 0.2s ease;
                }
                .contact-btn:hover {
                    border-color: #16a085;
                    background: #f0fdf9;
                }

                .feature-item {
                    border-left: 3px solid #16a085;
                    padding: 10px 16px;
                    background: #f8fffe;
                    border-radius: 0 10px 10px 0;
                    transition: background 0.2s ease;
                }
                .feature-item:hover {
                    background: #e8fff8;
                }

                .level-tag {
                    display: inline-block;
                    padding: 8px 20px;
                    border-radius: 999px;
                    border: 1.5px solid #d1fae5;
                    background: #f0fdf9;
                    color: #065f46;
                    font-weight: 600;
                    font-size: 14px;
                    font-family: 'DM Sans', sans-serif;
                    transition: background 0.2s ease, border-color 0.2s ease;
                }
                .level-tag:hover {
                    background: #d1fae5;
                    border-color: #6ee7b7;
                }

                .why-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-size: 14px;
                    color: #4b5563;
                    font-family: 'DM Sans', sans-serif;
                    padding: 4px 0;
                }
                .why-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #16a085;
                    margin-top: 5px;
                    flex-shrink: 0;
                }
                @media (max-width: 768px) {
                    .course-detail-main { grid-template-columns: 1fr !important; gap: 32px !important; }
                    .course-detail-sticky { position: static !important; top: auto !important; }
                    .course-detail-header { padding-top: 24px !important; padding-bottom: 40px !important; padding-left: 16px !important; padding-right: 16px !important; }
                    .course-detail-content { padding: 24px 16px 48px !important; }
                    .course-detail-cards { grid-template-columns: 1fr !important; }
                }
            `}</style>

            <div className="course-detail-page">
                {/* Header Section */}
                <section className="course-detail-header" style={{ background: '#e8efec', paddingTop: '160px', paddingBottom: '64px', paddingLeft: '24px', paddingRight: '24px' }}>
                    <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-block',
                            fontSize: '11px', fontWeight: 700,
                            letterSpacing: '0.12em', textTransform: 'uppercase',
                            padding: '5px 14px', borderRadius: '999px',
                            marginBottom: '20px',
                            background: '#d1fae5', color: '#065f46',
                            fontFamily: "'DM Sans', sans-serif"
                        }}>
                            {course.category}
                        </div>

                        <h1 className="animate-fadeInUp" style={{
                            fontSize: 'clamp(32px, 4vw, 56px)',
                            fontWeight: 700,
                            color: '#0c1c17',
                            marginBottom: '16px',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                        }}>
                            {course.name}
                        </h1>

                        <p className="animate-fadeInUp" style={{
                            fontSize: '18px', color: '#4b5563',
                            maxWidth: '680px', lineHeight: 1.75,
                            animationDelay: '0.2s',
                            fontFamily: "'DM Sans', sans-serif"
                        }}>
                            {course.description}
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="course-detail-content" style={{ padding: '48px 24px 80px' }}>
                    <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
                        <div className="course-detail-main" style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '48px', alignItems: 'start' }}>

                            {/* Left Side */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                                {/* Course Overview */}
                                <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                                    <div style={{ borderLeft: '4px solid #2563eb', paddingLeft: '16px', marginBottom: '16px' }}>
                                        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111827' }}>Course Overview</h2>
                                    </div>
                                    <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '16px' }}>
                                        {course.description}
                                    </p>
                                </div>

                                {/* Course Info Cards */}
                                <div className="animate-fadeInUp course-detail-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', animationDelay: '0.4s' }}>
                                    <div className="detail-card">
                                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '8px' }}>Duration</p>
                                        <p style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>{course.duration}</p>
                                    </div>
                                    <div className="detail-card">
                                        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '8px' }}>Schedule</p>
                                        <p style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>{course.schedule}</p>
                                    </div>
                                </div>

                                {/* Levels Covered */}
                                <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                                    <div style={{ borderLeft: '4px solid #10b981', paddingLeft: '16px', marginBottom: '16px' }}>
                                        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111827' }}>Levels Covered</h2>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                        {course.levels.map((level, index) => (
                                            <span key={index} className="level-tag">{level}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* What You'll Get */}
                                <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                                    <div style={{ borderLeft: '4px solid #f59e0b', paddingLeft: '16px', marginBottom: '16px' }}>
                                        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111827' }}>What You'll Get</h2>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {course.features.map((feature, index) => (
                                            <div key={index} className="feature-item">
                                                <p style={{ color: '#374151', fontSize: '15px', margin: 0 }}>{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side — Sticky Card */}
                            <div className="animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                                <div className="course-detail-sticky" style={{ position: 'sticky', top: '96px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

                                    {/* Enrollment Card */}
                                    <div style={{
                                        background: 'white', borderRadius: '20px',
                                        border: '1.5px solid #e2e8f0',
                                        padding: '28px',
                                        boxShadow: '0 8px 40px rgba(0,0,0,0.07)'
                                    }}>
                                        <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#111827', marginBottom: '20px' }}>Course Details</h3>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                            {[
                                                { label: 'Category', value: course.category },
                                                { label: 'Duration', value: course.duration },
                                                { label: 'Schedule', value: course.schedule },
                                            ].map((item, i) => (
                                                <div key={i} style={{
                                                    padding: '12px 0',
                                                    borderBottom: '1px solid #f3f4f6',
                                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                                                }}>
                                                    <span style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 500 }}>{item.label}</span>
                                                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>{item.value}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ marginTop: '24px' }}>
                                            <button className="enroll-btn" onClick={() => navigate('/contact')}>Enroll Now</button>
                                            <button className="contact-btn" onClick={() => navigate('/contact')}>Contact Us</button>
                                        </div>

                                        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #f3f4f6' }}>
                                            <p style={{ fontSize: '13px', fontWeight: 700, color: '#374151', marginBottom: '10px' }}>Need Help?</p>
                                            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>
                                                <span style={{ fontWeight: 600, color: '#374151' }}>Phone:</span> 8113 805 043
                                            </p>
                                            <p style={{ fontSize: '13px', color: '#6b7280' }}>
                                                <span style={{ fontWeight: 600, color: '#374151' }}>Email:</span> canacademyinfo@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    {/* Why Choose Card */}
                                    <div style={{
                                        background: 'linear-gradient(160deg, #f0fdf7 0%, #e8f7ff 100%)',
                                        borderRadius: '20px',
                                        border: '1.5px solid #d1fae5',
                                        padding: '24px',
                                    }}>
                                        <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>
                                            Why Choose This Course?
                                        </h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {[
                                                "Expert faculty with years of experience",
                                                "Comprehensive study materials",
                                                "Regular performance tracking",
                                                "High success rate",
                                            ].map((item, i) => (
                                                <div key={i} className="why-item">
                                                    <span className="why-dot"></span>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 50%, #10b981 100%)' }}>
                    <div style={{ maxWidth: '896px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
                            Ready to Start Your Journey?
                        </h2>
                        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '40px', fontFamily: "'DM Sans', sans-serif" }}>
                            Join hundreds of successful students and achieve your exam goals with expert guidance
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => navigate('/contact')}
                                style={{
                                    background: 'white', color: '#1d4ed8', padding: '16px 40px',
                                    borderRadius: '12px', fontWeight: 700, fontSize: '16px',
                                    border: 'none', cursor: 'pointer',
                                    fontFamily: "'DM Sans', sans-serif",
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                                    transition: 'transform 0.2s, box-shadow 0.2s'
                                }}
                                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.20)'; }}
                                onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)'; }}
                            >
                                Contact Us
                            </button>
                            <button
                                onClick={() => navigate('/contact')}
                                style={{
                                    background: 'transparent', color: 'white', padding: '16px 40px',
                                    borderRadius: '12px', fontWeight: 700, fontSize: '16px',
                                    border: '2px solid rgba(255,255,255,0.7)', cursor: 'pointer',
                                    fontFamily: "'DM Sans', sans-serif",
                                    transition: 'background 0.2s'
                                }}
                                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                                onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                            >
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}