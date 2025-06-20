import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import RouteScrollToTop from './pages/about-us/ScrollToTop';
import ErrorBoundary from './utils/ErrorBoundary';
import Preloader from './components/shared/Preloader';
import CookieConsent from './components/shared/CookieConsent';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const OurJourney = lazy(() => import('./pages/about-us/OurJourney'));
const Whatsetusapart = lazy(() => import('./pages/about-us/Whatsetusapart'));
const VisionMission = lazy(() => import('./pages/about-us/VisionMission'));
const BoardOfGovernors = lazy(() => import('./pages/about-us/BoardOfGovernors'));
const LeadershipFaculty = lazy(() => import('./pages/about-us/LeadershipFaculty'));
const NaturesOwnSchool = lazy(() => import('./pages/about-us/NaturesOwnSchool'));
const SchoolDirector = lazy(() => import('./pages/about-us/SchoolDirector'));
const OurCampus = lazy(() => import('./pages/about-us/OurCampus'));
const GreenPhilosophy = lazy(() => import('./pages/about-us/GreenPhilosophy'));
const AwardsAndHonours = lazy(() => import('./pages/about-us/AwardsAndHonours'));
const Accreditations = lazy(() => import('./pages/about-us/Accreditations'));
const PedagogyPage = lazy(() => import('./pages/academics/PedagogyPage'));
const IBCurriculumPage = lazy(() => import('./pages/academics/IBCurriculumPage'));
const Library = lazy(() => import('./pages/academics/Library'));
const LearningSupport = lazy(() => import('./pages/academics/LearningSupport'));
const IBResults = lazy(() => import('./pages/academics/IBResults'));
const Overview = lazy(() => import('./pages/beyond-academics/Overview'));
const Arts = lazy(() => import('./pages/beyond-academics/Arts'));
const Sports = lazy(() => import('./pages/beyond-academics/Sports'));
const Technology = lazy(() => import('./pages/beyond-academics/Technology'));
const StudentLeadership = lazy(() => import('./pages/beyond-academics/StudentLeadership'));
const Exchanges = lazy(() => import('./pages/beyond-academics/Exchanges'));
const CommunityService = lazy(() => import('./pages/beyond-academics/CommunityService'));
const StudentWellbeing = lazy(() => import('./pages/beyond-academics/StudentWellbeing'));
const CareerCollege = lazy(() => import('./pages/beyond-academics/CareerCollege'));
const BoardingExperience = lazy(() => import('./pages/boarding/BoardingExperience'));
const Deanofresidences = lazy(() => import('./pages/boarding/Deanofresidences'));
const Cuisine = lazy(() => import('./pages/boarding/Cuisine'));
const BoardingFAQ = lazy(() => import('./pages/boarding/BoardingFAQ'));
const ScheduleaTour = lazy(() => import('./pages/admissions/ScheduleaTour'));
const AdmissionProcess = lazy(() => import('./pages/admissions/AdmissionProcess'));
const FeeStructure = lazy(() => import('./pages/admissions/FeeStructure'));
const Scholarship = lazy(() => import('./pages/admissions/Scholarship'));
const TransportFacility = lazy(() => import('./pages/admissions/TransportFacility'));
const AdmissionFAQ = lazy(() => import('./pages/admissions/AdmissionFAQ'));
const Trending = lazy(() => import('./pages/news-events/Trending'));
const Parenttestimonials = lazy(() => import('./pages/news-events/Parenttestimonials'));
const SunriseLearningFest = lazy(() => import('./pages/news-events/SunriseLearningFest'));
const Contactuspage = lazy(() => import('./pages/contact-us/ContactUsPage1'));
const CAREERSATSUNRISE = lazy(() => import('./pages/contact-us/CAREERSATSUNRISE')); 
const Parents = lazy(() => import('./pages/MY Sunrise/Parents'));
const Students = lazy(() => import('./pages/MY Sunrise/Students'));
const Faculty = lazy(() => import('./pages/MY Sunrise/Faculty'));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        {loading ? (
          <Preloader />
        ) : (
          <Router>
            <RouteScrollToTop />
            <Layout>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/about/our-journey" element={<OurJourney />} />
                  <Route path="/about/what-sets-us-apart" element={<Whatsetusapart/>} />
                  <Route path="/about/vision-and-mission" element={<VisionMission/>} />
                  <Route path="/about/board-of-governors" element={<BoardOfGovernors />} />
                  <Route path="/about/leadership-&-faculty" element={<LeadershipFaculty />} />
                  <Route path="/about/nature's-own-school" element={<NaturesOwnSchool />} />
                  <Route path="/about/school-director" element={<SchoolDirector />} />
                  <Route path="/about/our-campus" element={<OurCampus />} />
                  <Route path="/about/green-philosophy" element={<GreenPhilosophy />} />
                  <Route path="/about/academic-achievements" element={<AwardsAndHonours />} />
                  <Route path="/about/accreditations" element={<Accreditations />} />
                  <Route path="/academics/our-pedagogy" element={<PedagogyPage />} />
                  <Route path="/academics/the-ib-curriculum" element={<IBCurriculumPage />} />
                  <Route path="/academics/library" element={<Library/>} />
                  <Route path="/academics/learning-support" element={<LearningSupport/>} />
                  <Route path="/academics/ib-results" element={<IBResults/>} />
                  <Route path="/beyond-academics/overview" element={<Overview/>} />
                  <Route path="/beyond-academics/the-arts" element={<Arts/>} />
                  <Route path="/beyond-academics/sports" element={<Sports/>} />
                  <Route path="/beyond-academics/technology" element={<Technology/>} />
                  <Route path="/beyond-academics/student-leadership" element={<StudentLeadership/>} />
                  <Route path="/beyond-academics/exchanges-&-expeditions" element={<Exchanges/>} />
                  <Route path="/beyond-academics/student-wellbeing" element={<StudentWellbeing/>} />
                  <Route path="/beyond-academics/community-service" element={<CommunityService/>} />
                  <Route path="/beyond-academics/career-&-college-advisory" element={<CareerCollege/>} />
                  <Route path="/boarding/the-boarding-experience" element={<BoardingExperience/>} />
                  <Route path="/boarding/dean-of-residences" element={<Deanofresidences/>} />
                  <Route path="/boarding/cuisine" element={<Cuisine/>} />
                  <Route path="/boarding/boarding-faq" element={<BoardingFAQ/>} />
                  <Route path="/admission/scedule-a-tour" element={<ScheduleaTour/>} />
                  <Route path="/admission/admission-process" element={<AdmissionProcess/>} />
                  <Route path="/admission/fee-structure" element={<FeeStructure/>} />
                  <Route path="/admission/scholorship" element={<Scholarship/>} />
                  <Route path="/admission/transport-facility" element={<TransportFacility/>} />
                  <Route path="/admission/admission-faq" element={<AdmissionFAQ/>} />
                  <Route path="/news-&-events/trending-news-" element={<Trending/>} />
                  <Route path="/news-&-events/parent-testimonials" element={<Parenttestimonials/>} />
                  <Route path="/news-&-events/sunrise-learning-fest" element={<SunriseLearningFest/>} />
                  <Route path="/contact-us/contact-us" element={<Contactuspage/>} />
                  <Route path="/contact-us/careers-at-sunrise" element={<CAREERSATSUNRISE/>} />
                   <Route path="/my-sunrise/parents" element={<Parents/>} />
                  <Route path="/my-sunrise/students" element={<Students/>} />
                  <Route path="/my-sunrise/faculty" element={<Faculty/>} />
                </Routes>
              </Suspense>
            </Layout>
            <CookieConsent />
          </Router>
        )}
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
