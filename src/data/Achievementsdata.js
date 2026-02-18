import { CheckIcon, TrophyIcon, StarIcon, AwardIcon, UsersIcon, TargetIcon } from "lucide-react";

export const achievementsData = [
    {
        title: "Student Success",
        stat: "1000+",
        subtitle: "Selections",
        highlights: [
            {
                name: "PSC Degree Level Selections",
                icon: CheckIcon,
            },
            {
                name: "KTET Qualifications",
                icon: CheckIcon,
            },
            {
                name: "Kerala Police Selections",
                icon: CheckIcon,
            },
            {
                name: "LPSA & UPSA Success",
                icon: CheckIcon,
            },
            {
                name: "SSC Exam Clearances",
                icon: CheckIcon,
            },
        ],
        buttonText: "View Success Stories",
    },
    {
        title: "Teaching Excellence",
        stat: "15+",
        subtitle: "Years Experience",
        featured: true,
        highlights: [
            {
                name: "Expert Faculty Team",
                icon: TrophyIcon,
            },
            {
                name: "Updated Study Materials",
                icon: CheckIcon,
            },
            {
                name: "Regular Mock Tests",
                icon: CheckIcon,
            },
            {
                name: "Personal Mentoring",
                icon: CheckIcon,
            },
            {
                name: "Doubt Clearing Sessions",
                icon: CheckIcon,
            },
            {
                name: "Video Class Library",
                icon: CheckIcon,
            }
        ],
        buttonText: "Join Our Batches",
    },
    {
        title: "Recognition",
        stat: "Top Rated",
        subtitle: "Institute",
        highlights: [
            {
                name: "Best PSC Coaching in Malappuram",
                icon: AwardIcon,
            },
            {
                name: "Highest Success Rate",
                icon: StarIcon,
            },
            {
                name: "Student Recommended",
                icon: UsersIcon,
            },
            {
                name: "Quality Education Award",
                icon: TrophyIcon,
            },
            {
                name: "Excellence in Training",
                icon: TargetIcon,
            }
        ],
        buttonText: "Learn More",
    }
];