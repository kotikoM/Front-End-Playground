import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react";

function App() {
  const HomePage = lazy(() => import("./components/Home.jsx"));
  const CoursesPage = lazy(() => import("./components/Courses.jsx"));
  const LiveCoursesPage = lazy(() => import("./components/LiveCourses.jsx"));
  const ContactPage = lazy(() => import("./components/Contact.jsx"));

  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/live-courses">Live Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/live-courses" element={<LiveCoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
