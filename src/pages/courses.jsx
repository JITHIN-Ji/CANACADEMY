import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { coursesData } from "../data/Coursesdata";

// Hook to detect when element enters viewport
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

// Featured Course Card (Vertical)
function FeaturedCourseCard({ course, onCourseClick, index }) {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div
            ref={ref}
            onClick={() => onCourseClick(course.slug)}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(60px)",
                transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
            }}
            className="group flex flex-col rounded-3xl overflow-hidden cursor-pointer border-2 border-gray-200
                hover:border-blue-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full"
        >
            {/* Image */}
            <div className="p-4 pt-4">
                <div className="relative w-full h-[280px] overflow-hidden rounded-3xl">
                    <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Price badge */}
                    {course.price && (
                        <div className="absolute bottom-4 right-4 bg-[#16a085] text-white font-bold text-xl px-5 py-2 rounded-xl shadow-xl">
                            {course.price}
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                {/* Category */}
                {course.category && (
                    <span className="text-xs font-bold tracking-[0.15em] text-[#16a085] uppercase mb-3 block">
                        {course.category}
                    </span>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#16a085] transition-colors duration-200">
                    {course.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {course.description}
                </p>

                {/* Bottom: button */}
                <div className="flex items-center justify-end mt-auto pt-4">
                    <button
                        onClick={(e) => { e.stopPropagation(); onCourseClick(course.slug); }}
                        className="border-2 border-[#16a085] text-[#16a085] text-base font-bold px-8 py-2 rounded-full
                            hover:bg-[#16a085] hover:text-white transition-all duration-300 shadow-sm"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}

// Horizontal Course Card
function HorizontalCourseCard({ course, onCourseClick, index }) {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div
            ref={ref}
            onClick={() => onCourseClick(course.slug)}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(80px)",
                transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
            }}
            className="group flex flex-col md:flex-row rounded-3xl overflow-hidden cursor-pointer border-2 border-gray-200
                hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            {/* Left: Image - full width on mobile, fixed width on desktop */}
            <div className="p-4 pt-4 md:pt-4 md:pl-4 md:pb-4">
                <div className="relative w-full md:w-[250px] md:min-w-[250px] h-[200px] md:h-[220px] overflow-hidden flex-shrink-0 rounded-2xl">
                    <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Price badge */}
                    {course.price && (
                        <div className="absolute bottom-3 right-3 bg-[#16a085] text-white font-bold text-lg px-4 py-1.5 rounded-xl shadow-lg">
                            {course.price}
                        </div>
                    )}
                </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between p-4 md:p-5 flex-1 min-w-0">
                <div>
                    {/* Category tag */}
                    <span className="text-xs font-bold tracking-[0.15em] text-[#16a085] uppercase mb-2 block">
                        {course.category || "ON-DEMAND"}
                    </span>

                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#16a085] transition-colors duration-200">
                        {course.name}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 md:line-clamp-2">
                        {course.description}
                    </p>
                </div>

                {/* Bottom: button */}
                <div className="flex items-center justify-end pt-3">
                    <button
                        onClick={(e) => { e.stopPropagation(); onCourseClick(course.slug); }}
                        className="border-2 border-[#16a085] text-[#16a085] text-sm font-bold px-7 py-1.5 rounded-full
                            hover:bg-[#16a085] hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function CoursesPage() {
    const navigate = useNavigate();
    const [heroVisible, setHeroVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    const handleCourseClick = (courseSlug) => {
        navigate(`/courses/${courseSlug}`);
    };

    // Group courses into sets of 3 (1 featured + 2 horizontal)
    const courseGroups = [];
    for (let i = 0; i < coursesData.length; i += 3) {
        courseGroups.push({
            featured: coursesData[i],
            horizontal: [coursesData[i + 1], coursesData[i + 2]].filter(Boolean)
        });
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-16 overflow-x-hidden">

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

                .courses-hero * { font-family: 'DM Sans', sans-serif; }
                .courses-hero h1 { font-family: 'Playfair Display', serif; }

                .courses-hero-bg {
                    background: #e8efec;
                }

                .courses-tag-label {
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
                }

                .courses-hero-slide {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: opacity 0.7s ease, transform 0.7s ease;
                }
                .courses-hero-slide.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>

            {/* Hero Section — styled to match About page */}
            <section className="courses-hero courses-hero-bg pt-16 pb-20 px-4 md:px-6">
                <div
                    className={`max-w-5xl mx-auto text-center courses-hero-slide ${heroVisible ? "visible" : ""}`}
                >
                    <div className="courses-tag-label">
                        Comprehensive Coaching Programs
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Our{" "}
                       
                        <span style={{ color: '#0c1c17', fontFamily: 'Playfair Display, serif' }}>COURSES</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Comprehensive coaching programs designed to help you achieve success in PSC, KTET, and SSC exams
                    </p>
                </div>
            </section>

            {/* Courses Layout - Repeating Pattern */}
            <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 space-y-12">
                {courseGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="grid lg:grid-cols-[450px_1fr] gap-6 items-start">
                        {/* Featured Course (Left - Vertical Card) */}
                        {group.featured && (
                            <FeaturedCourseCard
                                course={group.featured}
                                onCourseClick={handleCourseClick}
                                index={groupIndex * 3}
                            />
                        )}

                        {/* Horizontal Courses (Right - Stacked) */}
                        <div className="flex flex-col gap-6">
                            {group.horizontal.map((course, index) => (
                                <HorizontalCourseCard
                                    key={course.id}
                                    course={course}
                                    onCourseClick={handleCourseClick}
                                    index={groupIndex * 3 + index + 1}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
            {/* Learning Formats Section */}
<section style={{ background: '#e8efec' }} className="py-20 px-6">
    <div className="max-w-[1400px] mx-auto">

        {/* Top: Two Columns */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">

            {/* Left: Text */}
            <div>
                <div
                    style={{
                        display: 'inline-block',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '5px 14px',
                        borderRadius: '999px',
                        marginBottom: '16px',
                        background: '#c6e6de',
                        color: '#0e6655',
                        fontFamily: "'DM Sans', sans-serif"
                    }}
                >
                    LEARNING FORMATS
                </div>
                <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(32px, 4vw, 52px)',
                    fontWeight: 700,
                    color: '#0c1c17',
                    lineHeight: 1.15,
                    marginBottom: '20px'
                }}>
                    Flexible learning options to fit your schedule & goals.
                </h2>
                <p style={{
                    color: '#6b7280',
                    fontSize: '16px',
                    lineHeight: 1.8,
                    maxWidth: '480px',
                    marginBottom: '32px',
                    fontFamily: "'DM Sans', sans-serif"
                }}>
                    At CAN Academy, we understand that every learner has different needs. That's why we offer multiple learning formats — whether you prefer self-paced study, live expert-led sessions, or hands-on projects, we have the perfect option for you.
                </p>
                <button
                    style={{
                        background: '#16a085',
                        color: 'white',
                        padding: '14px 32px',
                        borderRadius: '999px',
                        fontWeight: 700,
                        fontSize: '15px',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 16px rgba(22,160,133,0.35)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        fontFamily: "'DM Sans', sans-serif"
                    }}
                    onMouseOver={e => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(22,160,133,0.45)';
                    }}
                    onMouseOut={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(22,160,133,0.35)';
                    }}
                >
                    Learn More
                </button>
            </div>

            {/* Right: Numbered List */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                    { label: "Self-Paced Learning",        desc: "Study at your own speed with recorded sessions and materials." },
                    { label: "Instructor-Led Training",    desc: "Live classes with experienced faculty for real-time interaction." },
                    { label: "Project-Based Learning",     desc: "Hands-on practice through mock tests and real exam scenarios." },
                    { label: "Certification Programmes",   desc: "Earn recognized certificates upon completing our courses." },
                ].map((item, i) => (
                    <div key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '20px',
                        padding: '22px 0',
                        borderBottom: i < 3 ? '1px solid #c8dcd6' : 'none',
                    }}>
                        <span style={{
                            fontSize: '13px',
                            fontWeight: 700,
                            color: '#16a085',
                            minWidth: '32px',
                            paddingTop: '4px',
                            fontFamily: "'DM Sans', sans-serif"
                        }}>
                            {String(i + 1).padStart(2, '0')}.
                        </span>
                        <div>
                            <p style={{
                                fontSize: 'clamp(18px, 2vw, 26px)',
                                fontWeight: 700,
                                color: '#0c1c17',
                                fontFamily: 'Playfair Display, serif',
                                marginBottom: '4px'
                            }}>
                                {item.label}
                            </p>
                            <p style={{
                                fontSize: '14px',
                                color: '#6b7280',
                                fontFamily: "'DM Sans', sans-serif",
                                lineHeight: 1.6
                            }}>
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Bottom: Full Width Image */}
        <div style={{
            width: '100%',
            height: '560px',
            borderRadius: '28px',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.14)',
            border: '3px solid #c6e6de'
        }}>
            <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=85"
                alt="Learning at CAN Academy"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                }}
            />
        </div>

    </div>
</section>
        </div>
    );
}