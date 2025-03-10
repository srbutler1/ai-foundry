import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomePage from './pages/homepage';
import BlogPage from './pages/blogpage';
import RootLayout from './components/layout/RootLayout';
import SidebarLayout from './components/layout/sidebarlayout';
import ConsultingPage from './pages/consultingpage';
import MicrosoftEventVerification from './pages/verification/MicrosoftEventVerification';

function App() {
  return (
    <>
      <Helmet>
        <title>Arkansas AI Foundry - Student AI Innovation at University of Arkansas</title>
        <meta name="description" content="Arkansas AI Foundry bridges classroom learning with real-world AI innovation at the University of Arkansas. Join our community of students exploring artificial intelligence." />
        <meta name="keywords" content="AI, artificial intelligence, University of Arkansas, student organization, Walton College, innovation, technology" />
        <meta property="og:title" content="Arkansas AI Foundry - Student AI Innovation" />
        <meta property="og:description" content="Join the Arkansas AI Foundry community at University of Arkansas to explore AI innovation and advance your career in artificial intelligence." />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta property="og:url" content="https://arkansasaifoundry.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://arkansasaifoundry.org" />
      </Helmet>
      <div className="min-h-screen text-white">
        <Routes>
          <Route element={<RootLayout />}>
            <Route element={<SidebarLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/consulting" element={<ConsultingPage />} />
            </Route>
            {/* Hidden verification page - not in sidebar layout */}
            <Route path="/verification/microsoft-event-mar5" element={<MicrosoftEventVerification />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
