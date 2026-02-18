import { Link } from "react-router-dom";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white px-6 md:px-16 lg:px-24 xl:px-32 py-16 w-full text-gray-600">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 border-b border-gray-300 pb-12">
                    {/* Logo and Description */}
                    <div className="md:col-span-1">
                        <img 
                            className="h-16 w-auto mb-6" 
                            src="/assets/logo.png" 
                            alt="CAN Academy Logo" 
                        />
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Kerala's premier PSC coaching institute with proven track record. Expert faculty, comprehensive study materials, and personalized guidance to help you crack your dream government job.
                        </p>
                        {/* Social Media Links */}
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition">
                                <FacebookIcon className="text-white" size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition">
                                <InstagramIcon className="text-white" size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition">
                                <YoutubeIcon className="text-white" size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="font-bold text-lg mb-5 text-gray-900">Quick Links</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                            </li>
                            <li>
                                <Link to="/courses" className="hover:text-blue-600 transition">Courses</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-blue-600 transition">About Us</Link>
                            </li>
                            <li>
                                <Link to="/testimonials" className="hover:text-blue-600 transition">Success Stories</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="font-bold text-lg mb-5 text-gray-900">Contact Us</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPinIcon className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">Address</p>
                                    <p className="text-sm">Pallasseri Commercial Complex<br />Near KSEB, VENGARA<br />Malappuram Dt, Kerala<br />Pin: 676304</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <PhoneIcon className="text-green-600 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">Phone</p>
                                    <p className="text-sm">8113 805 043</p>
                                    <p className="text-sm">8113 805 042</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MailIcon className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">Email</p>
                                    <p className="text-sm">canacademyinfo@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ClockIcon className="text-green-600 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">Working Hours</p>
                                    <p className="text-sm">10:00 AM - 4:30 PM</p>
                                    <p className="text-sm">Open on Sundays</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 text-center">
                    <p className="text-gray-600">
                        Copyright © 2024 <span className="font-semibold text-gray-900">CAN Academy</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}