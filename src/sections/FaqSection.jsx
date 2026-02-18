import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { faqsData } from "../data/faqsData";

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    
    const displayedFaqs = showAll ? faqsData : faqsData.slice(0, 5);
    
    return (
        <div className="relative py-12 px-6 md:px-10 bg-white overflow-hidden">
            {/* Centered background image with overlay */}
            

            {/* Content above image */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
                <SectionTitle
                    text1="FAQ's"
                    text2="Frequently Asked Questions"
                    text3="Got questions? We've got answers! Find everything you need to know about CAN Academy's courses and enrollment."
                />
                <div className="mt-12 w-full space-y-6">
                    {displayedFaqs.map((faq, index) => (
                        <div
                            className={`rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md bg-white/30 ${
                                openIndex === index
                                    ? "border-blue-400 shadow-xl shadow-blue-400/30"
                                    : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
                            }`}
                            key={index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="p-8">
                                <div className="flex items-center justify-between gap-6">
                                    <h3 className={`text-xl font-bold transition-colors ${
                                        openIndex === index ? "text-blue-600" : "text-gray-900 drop-shadow-sm"
                                    }`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                                        openIndex === index
                                            ? "bg-gradient-to-r from-blue-600 to-green-500 rotate-180"
                                            : "bg-gray-100"
                                    }`}>
                                        <ChevronDown
                                            size={24}
                                            className={`transition-all duration-300 ${
                                                openIndex === index ? "text-white" : "text-gray-600"
                                            }`}
                                        />
                                    </div>
                                </div>
                                <div className={`transition-all duration-500 ease-in-out ${
                                    openIndex === index
                                        ? "opacity-100 max-h-[500px] mt-4"
                                        : "opacity-0 max-h-0 overflow-hidden"
                                }`}>
                                    <div className="pt-5 border-t border-white/40">
                                        <p className="text-gray-600 leading-relaxed text-base">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {!showAll && faqsData.length > 5 && (
                    <button
                        onClick={() => setShowAll(true)}
                        className="mt-10 bg-gradient-to-r from-blue-600 to-green-500 text-white hover:from-blue-700 hover:to-green-600 transition px-12 py-5 rounded-xl font-bold shadow-lg text-lg"
                    >
                        Load More Questions
                    </button>
                )}
            </div>
        </div>
    );
};