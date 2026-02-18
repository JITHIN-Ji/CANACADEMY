export default function TestimonialCard({ testimonial }) {
    return (
        <div className="p-6 rounded-2xl mx-4 bg-white border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 w-80 shrink-0 group relative">
            {/* Header with Name and Verification */}
            <div className="flex items-center gap-2 mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                        <svg className="mt-0.5" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#10B981" />
                        </svg>
                    </div>
                    <span className="text-sm font-semibold text-blue-600 mt-1 block">{testimonial.position}</span>
                </div>
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, index) => (
                    <svg key={index} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-sm text-gray-700 leading-relaxed">
                "{testimonial.testimonial}"
            </p>

            {/* Bottom Accent Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
        </div>
    );
}