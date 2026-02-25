import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/about";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Courses from "./pages/courses";
import Contact from "./pages/contact";
import CourseDetailPage from "./pages/Coursedetailpage";
// import TutorsPage from "./pages/tutors";
import TopResultsPage from "./pages/topresult.JSX";

export default function App() {
    const location = useLocation();

    useLayoutEffect(() => {
        if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                {/* <Route path="/tutors" element={<TutorsPage />} /> */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/courses/:slug" element={<CourseDetailPage />} />
                <Route path="/top-results" element={<TopResultsPage />} />
            </Routes>
            <Footer />
        </>
    );
}