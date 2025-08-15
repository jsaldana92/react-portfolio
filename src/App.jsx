// src/App.jsx

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import TopNav from "./components/TopNav";
import { TfiAndroid } from "react-icons/tfi";
import { HiUserGroup } from "react-icons/hi2";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import profileImg from "./images/profile.png";
import ProjectCards from "./components/ProjectCard";
//import BentoSection from './components/BentoSection';
import "./index.css";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/ScrollToTop";
const GTAGradingPage = lazy(() => import("./components/GTAGradingPage"));
const HyperlinkPage = lazy(() => import("./components/HyperlinkPage"));
const DataPullerPage = lazy(() => import("./components/DataPullerPage"));
const ResearchObsPage = lazy(() => import("./components/ResearchObsPage"));
const BentoSection = lazy(() => import("./components/BentoSection"));
const SEEHBpage = lazy(() => import("./components/SEEHBpage"));
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Normalize paths so '/' and '/#' are the same, and '/#/SEEHB' → '/SEEHB'
const normalizePath = (rawPath) => {
  if (rawPath === "/#" || rawPath === "/#/") return "/";
  if (rawPath.startsWith("/#/")) return rawPath.replace("/#", "");
  return rawPath;
};

// Optional: map page titles for cleaner GA reports
const titleFor = (path) => {
  const map = {
    "/": "Jhonatan Saldana | Home",
    "/SEEHB": "SEEHB Case Study",
    "/GTAGradingExperience": "GTA Grading Experience",
    "/HyperlinkEngagement": "Hyperlink Engagement",
    "/DataPuller": "DataPuller",
    "/ResearchObs": "ResearchObs",
  };
  return map[path] || `Portfolio | ${path}`;
};

const sendPageView = (normalizedPath) => {
  if (!window.gtag) return;

  const page_title = titleFor(normalizedPath);
  // Canonical (no hash) for GA consistency
  const page_location = `https://www.jhonatan-saldana.com${normalizedPath}`;

  // GA4 page_view
  window.gtag("event", "page_view", {
    page_title,
    page_location,
    page_path: normalizedPath,
  });

  // Keep GA internal state aligned
  window.gtag("config", "G-NV9B90EZT9", {
    page_path: normalizedPath,
    page_title,
  });
};

// Small component that fires a page_view on initial mount + every route change
function PageTracker() {
  const location = useLocation();
  useEffect(() => {
    // Build from the real URL so it works with HashRouter or BrowserRouter
    const rawPath = `${window.location.pathname}${window.location.search}${
      window.location.hash || ""
    }`;
    const normalized = normalizePath(rawPath);
    sendPageView(normalized);
  }, [location.pathname, location.search, location.hash]);
  return null;
}

function App() {
  const location = useLocation();

  useEffect(() => {
    // Build the raw path using the actual URL (works for HashRouter and BrowserRouter)
    const { pathname, search, hash } = window.location;
    const rawPath = `${pathname}${search}${hash || ""}`;
    const normalized = normalizePath(rawPath);
    sendPageView(normalized);
  }, [location.pathname, location.search, location.hash]);

  const dynamicWords = [
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-[#158fcc]  w-8 h-8 mr-0">
        <TfiAndroid className="text-green-500 text-2xl" />
      </span>
      <span className="ml-1  custom-shadow-grey">apps</span>
    </>,
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-[#158fcc]  w-8 h-8 mr-0">
        <HiUserGroup className="text-yellow-300 text-2xl" />
      </span>
      <span className="ml-1 custom-shadow-grey">communities</span>
    </>,
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-[#158fcc] w-8 h-8 mr-0">
        <BsFillClipboard2DataFill className="text-white text-2xl" />
      </span>
      <span className="ml-1 custom-shadow-grey">data collection</span>
    </>,
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-[#158fcc] w-8 h-8 mr-0">
        <FiTrendingUp className="text-black text-2xl" />
      </span>
      <span className="ml-1  custom-shadow-grey">user engagement</span>
    </>,
  ];

  function DynamicText() {
    const [index, setIndex] = useState(0);
    const wordRef = useRef();

    // Rotate words
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % dynamicWords.length);
      }, 2500);
      return () => clearInterval(interval);
    }, []);

    // Animate transition on index change
    useGSAP(() => {
      if (wordRef.current) {
        gsap.fromTo(
          wordRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      }
    }, [index]);

    return (
      <div className="text-gray-900 text-2xl mt-8 font-semibold leading-snug">
        {/* On small screens: stack lines. On md+: inline */}
        <span className="block md:inline custom-shadow-white">
          Conducting research to improve
        </span>
        <span className="block md:inline md:ml-3 font-semibold italic text-[#158fcc]">
          <span ref={wordRef} className="inline-flex items-center gap-2">
            {dynamicWords[index]}
          </span>
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-backgroundwhite text-gray-800">
      <TopNav />
      <ScrollToTop />

      <main>
        <PageTracker />
        <Routes>
          {/* Home at #/ */}
          <Route
            path="/"
            element={
              <section>
                {/* Centered Intro Block */}
                <div className="text-center  py-6">
                  <h1 className="text-5xl text-textblack custom-shadow-white font-bold">
                    Jhonatan M. Saldaña Santisteban
                  </h1>
                  <p className="text-[#f27209] italic text-xl font-semibold">
                    UX Research Intern and Cognitive Psychologist, PhD Candidate
                  </p>
                </div>
                <section className="relative w-screen overflow-hidden py-16 px-6  text-white">
                  <div className="relative z-10 max-w-5xl mx-auto space-y-12">
                    {/* Top Row: stacked on small, side-by-side on md+ */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                      {/* Card 1 */}
                      <div className="relative w-full md:w-2/3 flex justify-start">
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-red-600 to-red-300 rounded-full -z-10" />
                        <div className="bg-gradient-to-r from-[#1b2683] to-[#0987c6] p-8 rounded-2xl shadow-lg max-w-xl w-full">
                          <p className="text-lg md:text-xl font-semibold text-backgroundwhite">
                            As a UX researcher, my goal is to leverage the{" "}
                            <span className="text-[#f27209]">quantitative</span>{" "}
                            and{" "}
                            <span className="text-[#f27209]">
                              qualitative methodologies{" "}
                            </span>
                            I’ve become familiar with over my academic career as
                            a{" "}
                            <span className="text-[#f27209]">
                              cognitive psychologist
                            </span>{" "}
                            to produce real-world impact.
                          </p>
                        </div>
                      </div>

                      {/* Photo + Resume */}
                      <div className="w-full md:w-1/4 flex flex-col items-center">
                        <img
                          src={profileImg}
                          alt="Jhonatan"
                          className="w-64 md:w-80 rounded-2xl shadow-xl shadow-black/30"
                        />
                        <a
                          href="https://drive.google.com/file/d/1Ag33D8-jdyysqxay4hyyyHSyxF3oSW7R/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block text-white bg-black/40 hover:bg-black/60 px-5 py-2 rounded-full font-medium transition"
                        >
                          Resume
                        </a>
                      </div>
                    </div>

                    {/* Middle Row */}
                    <div className="relative flex justify-end">
                      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-red-600 to-red-300 rounded-full -z-10" />
                      <div className="bg-gradient-to-r from-[#0987c6] to-[#1b2683] p-8 rounded-2xl shadow-lg max-w-3xl w-full text-right">
                        <p className="text-lg md:text-xl font-semibold custom-shadow text-backgroundwhite">
                          In university settings, my research has helped
                          departments{" "}
                          <span className="text-[#f27209]">
                            understand the effectiveness and enjoyment{" "}
                          </span>
                          of the training they provide to graduate teaching
                          assistants. My research has also helped highlight
                          effective methods that{" "}
                          <span className="text-[#f27209]">
                            increased student engagement
                          </span>{" "}
                          with online course materials.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="relative flex justify-start">
                      <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-red-600 to-red-300 rounded-full -z-10" />
                      <div className="bg-gradient-to-r from-[#1b2683] to-[#0987c6] p-8 rounded-2xl shadow-lg max-w-3xl w-full">
                        <p className="text-lg md:text-xl font-semibold custom-shadow text-backgroundwhite">
                          In app development, my research helped
                          <span className="text-[#f27209]">
                            {" "}
                            increase the positive perception
                          </span>{" "}
                          of data collection and likelihood of engagement from
                          end-users in mobile and desktop apps. In web
                          development, my research{" "}
                          <span className="text-[#f27209]">
                            increased enjoyment, usability, and sign-up speed
                          </span>{" "}
                          for attendees of a yearly regional conference.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="w-screen px-6 text-left">
                  <div className="max-w-7xl mx-auto">
                    <div>
                      <DynamicText />
                    </div>
                  </div>
                </section>

                {/*Carousel Section */}
                <section className="w-screen px-6">
                  <div className="max-w-7xl mx-auto relative overflow-hidden">
                    <ProjectCards />
                    {/* Fading overlays */}
                    <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-backgroundwhite to-transparent pointer-events-none z-10" />
                    <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-backgroundwhite to-transparent pointer-events-none z-10" />
                  </div>
                </section>

                {/* Bento Section */}
                <section className="w-screen px-6 mb-12">
                  <div className="max-w-7xl mx-auto">
                    <Suspense
                      fallback={
                        <div className="text-white text-center">
                          Loading projects...
                        </div>
                      }
                    >
                      <BentoSection />
                    </Suspense>
                  </div>
                </section>
              </section>
            }
          />

          {/* SEEHB page at #/SEEHB */}
          <Route
            path="/SEEHB"
            element={
              <Suspense
                fallback={<div className="text-center py-20">Loading…</div>}
              >
                <SEEHBpage />
              </Suspense>
            }
          />

          {/* GTAGradingExperience page at #/GTAGradingPage */}
          <Route
            path="/GTAGradingExperience"
            element={
              <Suspense
                fallback={<div className="text-center py-20">Loading…</div>}
              >
                <GTAGradingPage />
              </Suspense>
            }
          />

          {/* HyperlinkPage page at #/HyperlinkPage */}
          <Route
            path="/HyperlinkEngagement"
            element={
              <Suspense
                fallback={<div className="text-center py-20">Loading…</div>}
              >
                <HyperlinkPage />
              </Suspense>
            }
          />

          {/* DataPuller page at #/DataPuller */}
          <Route
            path="/DataPuller"
            element={
              <Suspense
                fallback={<div className="text-center py-20">Loading…</div>}
              >
                <DataPullerPage />
              </Suspense>
            }
          />

          {/* ResearchObs page at #/ResearchObs */}
          <Route
            path="/ResearchObs"
            element={
              <Suspense
                fallback={<div className="text-center py-20">Loading…</div>}
              >
                <ResearchObsPage />
              </Suspense>
            }
          />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
