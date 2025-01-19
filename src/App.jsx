import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomePage from './pages/homepage';
import BlogPage from './pages/blogpage';
import RootLayout from './components/layout/RootLayout';
import SidebarLayout from './components/layout/sidebarlayout';

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
        <meta property="og:url" content="https://arkansasaifoundry.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://arkansasaifoundry.com" />
      </Helmet>
      <div className="min-h-screen text-white">
        <Routes>
          <Route element={<RootLayout />}>
            <Route element={<SidebarLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
