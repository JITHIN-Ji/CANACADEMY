import { SparklesIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { achievementsData } from "../data/Achievementsdata";

export default function AchievementsSection() {
    const navigate = useNavigate();
    return (
        <div className="py-12 px-6">
            <SectionTitle 
                text1="Our Achievements" 
                text2="Excellence & Recognition" 
                text3="Milestones that showcase our commitment to delivering quality PSC coaching and creating success stories" 
            />

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                {achievementsData.map((achievement, index) => (
                    <div key={index} className={`group p-6 rounded-2xl max-w-sm w-full shadow-[0px_4px_26px] shadow-black/6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${achievement.featured ? "relative pt-12 bg-gradient-to-b from-blue-600 to-green-600" : "bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-green-50 hover:border-2 hover:border-blue-400"}`}>
                        {achievement.featured && (
                            <div className="flex items-center text-xs gap-1 py-1.5 px-2 text-blue-600 absolute top-4 right-4 rounded bg-white font-medium">
                                <SparklesIcon size={14} />
                                <p>Top Achievement</p>
                            </div>
                        )}
                        <p className={achievement.featured && "text-white"}>{achievement.title}</p>
                        <h4 className={`text-3xl font-semibold mt-1 ${achievement.featured && "text-white"}`}>
                            {achievement.stat}
                            <span className={`font-normal text-sm ${achievement.featured ? "text-white" : "text-slate-500"}`}> {achievement.subtitle}</span>
                        </h4>
                        <hr className="border-slate-200 my-8" />
                        <div className={`space-y-2 ${achievement.featured ? "text-white" : "text-slate-500 group-hover:text-gray-700"}`}>
                            {achievement.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-center gap-1.5 transition-colors">
                                    <highlight.icon size={18} className={`${achievement.featured ? "text-white" : "text-blue-600 group-hover:text-green-500"} transition-colors`} />
                                    <span>{highlight.name}</span>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => {
                            if (achievement.buttonText === "View Success Stories") {
                                document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
                            } else if (achievement.buttonText === "Join Our Batches") {
                                navigate("/courses");
                            } else if (achievement.buttonText === "Learn More") {
                                navigate("/about");
                            } else {
                                navigate("/contact");
                            }
                        }} className={`transition w-full py-3 rounded-lg font-medium mt-8 ${achievement.featured ? "bg-white hover:bg-slate-100 text-slate-800" : "bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white"}`}>
                            <span>{achievement.buttonText}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}