// src/App.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState, Suspense, lazy } from "react";
import TopNav from "./components/TopNav";
import { TfiAndroid } from "react-icons/tfi";
import { HiUserGroup } from "react-icons/hi2";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import profileImg from "./images/profile.png";
import Projects from "./components/Projects";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
const GTAGradingPage = lazy(() => import("./components/GTAGradingPage"));
const HyperlinkPage = lazy(() => import("./components/HyperlinkPage"));
const DataPullerPage = lazy(() => import("./components/DataPullerPage"));
const ResearchObsPage = lazy(() => import("./components/ResearchObsPage"));
const BentoSection = lazy(() => import("./components/BentoSection"));
const SEEHBpage = lazy(() => import("./components/SEEHBpage"));
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

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
  const page_location = `https://www.jhonatan-saldana.com${normalizedPath}`;
  window.gtag("event", "page_view", {
    page_title,
    page_location,
    page_path: normalizedPath,
  });
  window.gtag("config", "G-NV9B90EZT9", {
    page_path: normalizedPath,
    page_title,
  });
};

function PageTracker() {
  const location = useLocation();
  useEffect(() => {
    const rawPath = `${window.location.pathname}${window.location.search}${
      window.location.hash || ""
    }`;
    const normalized = normalizePath(rawPath);
    sendPageView(normalized);
  }, [location.pathname, location.search, location.hash]);
  return null;
}

function App() {
  const dynamicWords = [
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-[#158fcc] w-8 h-8 mr-0">
        <TfiAndroid className="text-green-500 text-2xl" />
      </span>
      <span className="ml-1 custom-shadow-grey">apps</span>
    </>,
    <>
      <span className="inline-flex items-center justify-center rounded-full bg-[#158fcc] w-8 h-8 mr-0">
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
      <span className="ml-1 custom-shadow-grey">user engagement</span>
    </>,
  ];

  function DynamicText() {
    const [index, setIndex] = useState(0);
    const wordRef = useRef();

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % dynamicWords.length);
      }, 2500);
      return () => clearInterval(interval);
    }, []);

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
    // Key fixes:
    // - min-h-dvh + flex + flex-1 ensures the bg spans to the bottom
    // - overflow-x-clip prevents w-screen sections from creating a sideways scroll
    // - bg on this wrapper gives you an app-wide background regardless of page height
    <div className="min-h-dvh bg-backgroundwhite text-gray-800 flex flex-col overflow-x-clip">
      <TopNav />
      <ScrollToTop />

      {/* Make main consume all available height */}
      <main className="flex-1">
        <PageTracker />
        <Routes>
          <Route
            path="/"
            element={
              <section>
                {/* Centered Intro Block */}
                <div className="text-center py-6">
                  <h1 className="text-5xl text-textblack custom-shadow-white font-bold">
                    Jhonatan M. Saldaña Santisteban
                  </h1>
                  <p className="text-[#f27209] italic text-xl font-semibold">
                    UX Researcher and Cognitive Psychologist, PhD Candidate
                  </p>
                </div>

                {/* Hero / Summary rows */}
                <section className="relative w-full overflow-hidden py-16 px-6 text-white">
                  <div className="relative z-10 max-w-5xl mx-auto space-y-12">
                    {/* Top Row */}
                    {/* Top Row */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                      {/* PHOTO + RESUME/GITHUB — appears FIRST on mobile, SECOND on desktop */}
                      <div className="order-1 md:order-2 w-full md:w-1/4 flex flex-col items-center">
                        <img
                          src={profileImg}
                          alt="Jhonatan"
                          className="w-64 md:w-80 rounded-2xl shadow-xl shadow-black/30"
                        />
                        <div className="mt-4 flex items-center gap-3">
                          <a
                            href="https://drive.google.com/file/d/1Ag33D8-jdyysqxay4hyyyHSyxF3oSW7R/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-white bg-black/40 hover:bg-black/60 px-4 py-3 rounded-xl font-medium transition"
                            aria-label="Open Resume"
                          >
                            <FiFileText className="text-3xl" />
                            <span className="hidden sm:inline">Resume</span>
                          </a>
                          <a
                            href="https://github.com/jsaldana92"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-white bg-black/40 hover:bg-black/60 px-4 py-3 rounded-xl font-medium transition"
                            aria-label="Open GitHub"
                          >
                            <FaGithub className="text-3xl" />
                            <span className="hidden sm:inline">GitHub</span>
                          </a>
                        </div>
                      </div>

                      {/* SUMMARY BOX — appears SECOND on mobile, FIRST on desktop */}
                      <div className="order-2 md:order-1 relative w-full md:w-2/3 flex justify-start">
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-red-600 to-red-300 rounded-full -z-10" />
                        <div className="bg-gradient-to-r from-[#1b2683] to-[#0987c6] p-8 rounded-2xl shadow-lg max-w-xl w-full">
                          <p className="text-lg md:text-xl font-semibold text-white">
                            As a UX researcher, I leverage my expertise in{" "}
                            <span className="text-[#f27209]">quantitative</span>{" "}
                            and{" "}
                            <span className="text-[#f27209]">
                              qualitative methodologies
                            </span>{" "}
                            grounded in my background as a{" "}
                            <span className="text-[#f27209]">
                              cognitive psychologist
                            </span>{" "}
                            to drive{" "}
                            <span className="text-[#f27209]">
                              product development
                            </span>{" "}
                            and inform{" "}
                            <span className="text-[#f27209]">
                              strategic design decisions
                            </span>
                            .
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Middle Row */}
                    <div className="relative flex justify-end">
                      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-red-600 to-red-300 rounded-full -z-10" />
                      <div className="bg-gradient-to-r from-[#0987c6] to-[#1b2683] p-8 rounded-2xl shadow-lg max-w-3xl w-full text-right">
                        <p className="text-lg md:text-xl font-semibold custom-shadow text-white">
                          In a university setting, I led research across{" "}
                          <span className="text-[#f27209]">
                            three academic departments
                          </span>{" "}
                          to evaluate and improve their{" "}
                          <span className="text-[#f27209]">
                            graduate teaching assistant training programs
                          </span>
                          , uncovering the most common pain points in grading
                          and identifying{" "}
                          <span className="text-[#f27209]">
                            standardized support methods
                          </span>{" "}
                          that improved GTA confidence and teaching quality. My
                          related work on online learning engagement revealed{" "}
                          <span className="text-[#f27209]">
                            actionable strategies that identified methods to
                            student interaction by 1.4x
                          </span>{" "}
                          with digital course materials, helping instructors
                          create more effective and engaging online learning
                          experiences.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="relative flex justify-start">
                      <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-red-600 to-red-300 rounded-full -z-10" />
                      <div className="bg-gradient-to-r from-[#1b2683] to-[#0987c6] p-8 rounded-2xl shadow-lg max-w-3xl w-full">
                        <p className="text-lg md:text-xl font-semibold custom-shadow text-white">
                          In app development, my research improved{" "}
                          <span className="text-[#f27209]">
                            user trust, engagement, and usability
                          </span>
                          , leading to a{" "}
                          <span className="text-[#f27209]">
                            90% faster launch time
                          </span>{" "}
                          and{" "}
                          <span className="text-[#f27209]">
                            higher satisfaction ratings from 3.2 to 4.7
                          </span>
                          . In web development,{" "}
                          <span className="text-[#f27209]">
                            usability testing and iterative design
                          </span>{" "}
                          increased enjoyment, accessibility, and{" "}
                          <span className="text-[#f27209]">
                            cut sign-up times by over 70%
                          </span>
                          , resulting in users being twice as likely to revisit
                          and share the site.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Dynamic line */}
                <section className="w-full px-6 text-left">
                  <div className="max-w-7xl mx-auto">
                    <DynamicText />
                  </div>
                </section>

                {/* Projects carousel */}
                <section className="w-full px-6">
                  <div className="max-w-7xl mx-auto relative overflow-hidden">
                    <Projects />
                    <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-backgroundwhite to-transparent pointer-events-none z-10" />
                    <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-backgroundwhite to-transparent pointer-events-none z-10" />
                  </div>
                </section>

                {/* Bento Section */}
                <section className="w-full px-6 pb-12">
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

          {/* SEEHB page */}
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

          {/* GTA Grading */}
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

          {/* Hyperlink */}
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

          {/* DataPuller */}
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

          {/* ResearchObs */}
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

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
