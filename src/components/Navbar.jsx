import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../data/navLinks";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    useEffect(() => {
        if (openMobileMenu) {
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [openMobileMenu]);

    return (
        <>
            {/* Announcement Banner */}
            <div className="fixed top-0 left-0 right-0 z-[100] bg-teal-700 text-white text-center py-2 px-4 leading-tight">
                <a href="#" className="underline hover:text-gray-200 transition text-xs sm:text-sm md:text-base">Learn the Right Way – Join Us Today!</a>
            </div>
            
            {/* Navbar */}
            <nav className="flex items-center justify-between fixed z-[99] w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 min-h-[56px]" style={{ backgroundColor: "#e8efec", top: "32px" }}>
                <Link to="/">
                    <img className="h-14 md:h-16 w-auto shrink-0" src="/assets/logo.png" alt="CAN Academy Logo" width={140} height={50} fetchPriority="high" />
                </Link>
                <div className="hidden items-center md:gap-8 lg:gap-9 font-medium md:flex lg:pl-20">
                    {navLinks.map((link) => (
                        <NavLink key={link.name} to={link.href} className="hover:text-blue-600">
                            {link.name}
                        </NavLink>
                    ))}
                </div>
                {/* Mobile menu - z-[101] to appear above navbar when open */}
                <div className={`fixed inset-0 z-[101] flex flex-col items-center justify-center gap-6 text-lg font-medium md:hidden transition duration-300 ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`} style={{ backgroundColor: "#e8efec" }}>
                    {navLinks.map((link) => (
                        <NavLink key={link.name} to={link.href} onClick={() => setOpenMobileMenu(false)}>
                            {link.name}
                        </NavLink>
                    ))}
                    <button className="aspect-square size-10 p-1 items-center justify-center bg-blue-600 hover:bg-blue-700 transition text-white rounded-md flex" onClick={() => setOpenMobileMenu(false)}>
                        <XIcon />
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/contact')} className="hidden md:block px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 transition text-white rounded-md font-semibold">
                        Enroll Now
                    </button>
                    <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden flex items-center justify-center min-h-[44px] min-w-[44px]">
                        <MenuIcon size={26} className="active:scale-90 transition" />
                    </button>
                </div>
            </nav>
        </>
    );
}