import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

export default function FeaturesSection() {
    const navigate = useNavigate();
    return (
       <div className="bg-white py-12 px-6">

            <style>{`
                @keyframes floatCard {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes floatCard2 {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes floatCard3 {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                .float-card-1 {
                    animation: floatCard 4s ease-in-out infinite;
                }
                .float-card-2 {
                    animation: floatCard2 4s ease-in-out infinite 1.3s;
                }
                .float-card-3 {
                    animation: floatCard3 4s ease-in-out infinite 2.6s;
                }
                .float-card-1:hover,
                .float-card-2:hover,
                .float-card-3:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    text1="Our Services"
                    text2="What We Offer"
                    text3="Comprehensive PSC, KTET & SSC coaching programs designed to help you achieve your dream government job"
                />

                {/* Main Services Grid */}
                <div className="grid md:grid-cols-3 gap-8 mt-10">

                    {/* PSC Coaching */}
                    <div
                        className="float-card-1 group p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
                        style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)" }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">PSC Coaching</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>General PSC (10th, +2, Degree Level)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>LPSA & UPSA</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>Kerala Police</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>ICDS</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>PSC Sunday Batch</span>
                            </li>
                        </ul>
                    </div>

                    {/* KTET Coaching */}
                    <div
                        className="float-card-2 group p-8 rounded-2xl border-2 border-blue-100 hover:border-green-400 hover:shadow-2xl transition-all duration-300"
                        style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)" }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">KTET Coaching</h3>
                        <ul className="space-y-3 text-gray-600 mb-6">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>Category 1 & 2</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>Duration: Until Exam (50+ classes)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>Regular Classes: 10:30 AM - 4:00 PM</span>
                            </li>
                        </ul>
                        <div className="pt-4 border-t border-blue-100">
                            <p className="text-sm font-semibold text-blue-600">Comprehensive study materials included</p>
                        </div>
                    </div>

                    {/* SSC Coaching */}
                    <div
                        className="float-card-3 group p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
                        style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)" }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">SSC Coaching</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Specialized coaching for Staff Selection Commission exams with expert guidance and comprehensive study materials.
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>Expert faculty</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>Mock tests & practice</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>Updated syllabus</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Additional Services */}
                <div className="grid md:grid-cols-4 gap-6 mt-10">
                    {[
                        { title: "Expert Faculty", desc: "Experienced trainers with proven track record" },
                        { title: "Flexible Timings", desc: "Regular & Sunday batches available" },
                        { title: "Video Resources", desc: "Access to recorded classes & materials" },
                        { title: "PSC Notifications", desc: "Regular updates on latest exams" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="text-center p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                            style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)" }}
                        >
                            <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-10 text-center bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-10 text-white">
                    <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
                    <p className="text-lg mb-6 opacity-90">Join CAN Academy and take the first step towards your dream government job</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => navigate('/contact')} className="bg-white text-blue-600 hover:bg-gray-100 transition px-8 py-3 rounded-lg font-bold">
                            Enroll Now
                        </button>
                        <button onClick={() => navigate('/contact')} className="border-2 border-white text-white hover:bg-white/10 transition px-8 py-3 rounded-lg font-bold">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}