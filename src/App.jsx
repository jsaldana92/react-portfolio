// src/App.jsx

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

import TopNav from "./components/TopNav";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/homePage";

import "./index.css";

const GTAGradingPage = lazy(() => import("./pages/gradingStudyPage"));
const HyperlinkPage = lazy(() => import("./pages/hyperlinkPage"));
const DataPullerPage = lazy(() => import("./pages/datapullerPage"));
const ResearchObsLabDeploymentPage = lazy(
  () => import("./components/ResearchObsLabDeploymentPage"),
);
const ResearchObsPublicReleasePage = lazy(
  () => import("./components/ResearchObsPublicReleasePage"),
);
const SeehbPage = lazy(() => import("./pages/seehbPage"));

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
    "/ResearchObs": "ResearchObs | Lab Deployment",
    "/ResearchObs/PublicRelease": "ResearchObs | Public Release",
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
  return (
    <div className="min-h-dvh bg-[#F6F1EA] text-gray-800 flex flex-col overflow-x-clip">
      <TopNav />
      <ScrollToTop />

      <main className="flex-1 pt-20 md:pt-24">
        <PageTracker />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/SEEHB"
            element={
              <Suspense
                fallback={<div className="text-center py-20">Loading…</div>}
              >
                <SeehbPage />
              </Suspense>
            }
          />

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

          <Route
            path="/ResearchObs"
            element={
              <Suspense
                fallback={<div className="text-center py-20">Loading…</div>}
              >
                <ResearchObsLabDeploymentPage />
              </Suspense>
            }
          />

          <Route
            path="/ResearchObs/PublicRelease"
            element={
              <Suspense
                fallback={<div className="text-center py-20">Loading…</div>}
              >
                <ResearchObsPublicReleasePage />
              </Suspense>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
