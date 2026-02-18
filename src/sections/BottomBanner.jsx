import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

export default function BottomBanner() {
    const navigate = useNavigate();
    return (
        <div className="bg-[#eef4f0]">
            <style>{`
                @keyframes floatUp {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                .float-1 { animation: floatUp 4s ease-in-out infinite 0s; }
                .float-2 { animation: floatUp 4s ease-in-out infinite 1s; }
                .float-3 { animation: floatUp 4s ease-in-out infinite 2s; }
                .float-4 { animation: floatUp 4s ease-in-out infinite 3s; }
                .float-1:hover, .float-2:hover, .float-3:hover, .float-4:hover {
                    animation-play-state: paused;
                }
                @keyframes slideInLeft {
                    0% { opacity: 0; transform: translateX(-80px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRight {
                    0% { opacity: 0; transform: translateX(80px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .img-slide-left { animation: slideInLeft 0.9s ease forwards; }
                .img-slide-right { animation: slideInRight 0.9s ease 0.4s forwards; opacity: 0; }
            `}</style>

            {/* Why Choose Us — left text, right 2x2 cards */}
            <div className="w-full px-6 md:px-10 py-12">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-16 items-center">

                    {/* Left: text */}
                    <div className="lg:w-2/5 flex-shrink-0 text-center lg:text-left">
                        <span className="inline-block border border-gray-800 text-gray-800 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4 md:mb-6">
                            Why Choose Us
                        </span>
                        <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-6">
                            Our Excellence in PSC Coaching
                        </h2>
                        <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                            Experience world-class coaching with expert faculty, proven methodologies, and personalized attention to help you succeed.
                        </p>
                        <button onClick={() => navigate('/about')} className="bg-[#16a085] hover:bg-[#138a72] text-white font-bold px-8 py-3 rounded-full transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Right: 2x2 cards */}
                    <div className="lg:w-3/5 grid grid-cols-2 gap-3 md:gap-6">

                        <div className="float-1 bg-white rounded-2xl p-4 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Expert Faculty Team</h3>
                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Learn from experienced educators with years of PSC coaching expertise and proven success records.</p>
                        </div>

                        <div className="float-2 bg-white rounded-2xl p-4 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Hands-On Learning</h3>
                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Cutting-edge teaching with interactive smart classes, recorded sessions, and digital study materials.</p>
                        </div>

                        <div className="float-3 bg-white rounded-2xl p-4 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Comprehensive Support</h3>
                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Regular mock tests, performance analysis, and doubt clearing sessions from enrollment to exam day.</p>
                        </div>

                        <div className="float-4 bg-white rounded-2xl p-4 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Flexible Timings</h3>
                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Regular weekday batches, Sunday batch available, and recorded class access to suit your schedule.</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Two Images Section — stacked on mobile, side-by-side on desktop; reduced height on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-6 md:px-10 pb-12 max-w-7xl mx-auto">
                <div className="img-slide-left rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="/assets/1.jpeg"
                        alt="Gallery 1"
                        className="w-full h-[280px] md:h-[650px] object-cover object-top transition-transform duration-700"
                    />
                </div>
                <div className="img-slide-right rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="/assets/2.jpeg"
                        alt="Gallery 2"
                        className="w-full h-[280px] md:h-[650px] object-cover object-top transition-transform duration-700"
                    />
                </div>
            </div>

            {/* CTA Banner — full bleed blue-to-green gradient */}
            <div style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 50%, #10b981 100%)' }}
                className="w-full py-12 px-6 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Excited to Get Started?</h2>
                <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
                    Join CAN Academy today and take the first step towards your dream government job
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => navigate('/contact')} className="bg-white text-blue-700 font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg">
                        Enroll Now
                    </button>
                    <button onClick={() => navigate('/contact')} className="bg-white/10 border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                        Contact Us
                    </button>
                </div>
            </div>

        </div>
    );
}