import { Brain, Users, BookOpen, MessageCircle, ChevronRight, Trophy, Briefcase, Code } from 'lucide-react'
import { Button } from './components/ui/button'
import foundryLogo from './assets/foundry-logo.png'
import { Helmet } from 'react-helmet-async'



function App() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Helmet>
        <title>Arkansas AI Foundry - Student AI Innovation at University of Arkansas</title>
        <meta name="description" content="Arkansas AI Foundry bridges classroom learning with real-world AI innovation at the University of Arkansas. Join our community of students exploring artificial intelligence." />
        <meta name="keywords" content="AI, artificial intelligence, University of Arkansas, student organization, Walton College, innovation, technology" />
        <meta property="og:title" content="Arkansas AI Foundry - Student AI Innovation" />
        <meta property="og:description" content="Join the Arkansas AI Foundry community at University of Arkansas to explore AI innovation and advance your career in artificial intelligence." />
        <meta property="og:type" content="website" />
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta property="og:url" content="https://arkansasaifoundry.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://arkansasaifoundry.com" />
      </Helmet>
      {/* Space Background */}
      <div className="space-background">
        <div className="stars" />
        <div className="stars-2" />
        <div className="stars-3" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_-150px,rgba(227,24,55,0.7),transparent)]" />
        
        {/* Animated Borders */}
        <div className="absolute inset-x-0 top-0 h-[2px] animate-[glowPulse_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-red-500 to-transparent" 
          style={{
            backgroundSize: '200% 100%',
            animation: 'borderFlow 3s linear infinite, glowPulse 2s ease-in-out infinite'
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-[2px] animate-[glowPulse_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-red-500 to-transparent"
          style={{
            backgroundSize: '200% 100%',
            animation: 'borderFlow 3s linear infinite, glowPulse 2s ease-in-out infinite'
          }}
        />
        <div className="absolute inset-y-0 left-0 w-[2px] animate-[glowPulse_3s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-red-500 to-transparent"
          style={{
            backgroundSize: '100% 200%',
            animation: 'borderFlow 3s linear infinite, glowPulse 2s ease-in-out infinite'
          }}
        />
        <div className="absolute inset-y-0 right-0 w-[2px] animate-[glowPulse_3s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-red-500 to-transparent"
          style={{
            backgroundSize: '100% 200%',
            animation: 'borderFlow 3s linear infinite, glowPulse 2s ease-in-out infinite'
          }}
        />
      </div>
      <div className="relative">
          {/* Hero Section */}
          <div className="relative overflow-hidden">
            <div className="container mx-auto px-4 py-24">
              <div className="flex flex-col items-center text-center">
                {/* Logo with hero animation */}
                <div className="relative mb-8"
                  style={{
                    animation: 'heroFloat 4s ease-out forwards'
                  }}>
                  <div className="absolute inset-0 animate-pulse bg-red-500/20 blur-xl rounded-full" />
                  <img 
                    src={foundryLogo} 
                    alt="Arkansas AI Foundry Logo" 
                    className="relative z-10 w-48 h-48 object-contain"
                  />
                </div>

                {/* Content that fades in after logo animation */}
                <div style={{
                  animation: 'contentFadeIn 1s ease-out forwards',
                  animationDelay: '3s',
                  opacity: 0
                }}>
                  <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-red-900">
                    Arkansas AI Foundry
                  </h1>
                  <p className="text-2xl mb-8 text-zinc-300 max-w-2xl">
                    Bridging classroom learning with real-world AI innovation at the University of Arkansas
                  </p>
                  <Button
                    onClick={() => window.open('https://groupme.com/join_group/105347053/9oA8jhjn', '_blank')}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />  
                    Join Our Community
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              Where Business Meets AI Innovation
            </h2>
            <p className="text-zinc-300 text-lg backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-red-900/20">
              The Arkansas AI Foundry unites forward-thinking students from Walton College and across 
              diverse disciplines to push the boundaries of artificial intelligence. By combining 
              hands-on projects, strong industry partnerships, and a collaborative learning environment, 
              we’re shaping tomorrow’s leaders in AI. Whether you’re a seasoned coder or simply curious 
              about the possibilities of AI, the Foundry invites you to join us in forging the future of innovation.
            </p>
          </div>
        </div>

        {/* Core Offerings Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
              <Users className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="text-xl font-bold text-red-500 mb-2">Guest Speakers & Workshops</h3>
              <p className="text-zinc-400">
                Delve into real-world AI applications and cutting-edge research through regular talks, workshops, and panel discussions with industry thought leaders. Gain insights into the latest trends and network with experts shaping the field.
              </p>
            </div>

            <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
              <Trophy className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="text-xl font-bold text-red-500 mb-2">Competitions & Conferences</h3>
              <p className="text-zinc-400">
                Represent the University of Arkansas on a national stage. From hackathons to global AI challenges, we secure sponsorships and provide resources to help members showcase their skills—and bring home top honors.
              </p>
            </div>

            <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
              <Briefcase className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="text-xl font-bold text-red-500 mb-2">Community Consulting</h3>
              <p className="text-zinc-400">
                Partner with local nonprofits, startups, and small businesses to develop AI-driven solutions that elevate our community. Gain real-world experience, build your portfolio, and make a meaningful impact where it matters. 
              </p>
            </div>

            <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
              <BookOpen className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="text-xl font-bold text-red-500 mb-2">Mentorship & Career Development</h3>
              <p className="text-zinc-400">
                Provide guidance and support for every stage of your AI journey—from résumé reviews 
                and interview prep to pairing up with experienced peers and alumni. Develop a professional 
                network, explore internships or research opportunities, and take your first steps toward 
                becoming a leading voice in the AI community.
              </p>  
            </div>

            <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
              <Brain className="h-8 w-8 text-red-500 mb-2" /> 
              <h3 className="text-xl font-bold text-red-500 mb-2">Ethical AI & Social Impact</h3>
              <p className="text-zinc-400">
                Engage in discussions and initiatives that focus on the responsible use of artificial intelligence. 
                Learn about bias mitigation, inclusive data practices, and sustainable development. By applying 
                your skills toward ethical AI solutions, you’ll help shape technology that truly benefits society.
              </p>
            </div>

            <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
              <Code className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="text-xl font-bold text-red-500 mb-2">Hands-on Projects</h3>
              <p className="text-zinc-400">
                Work with cutting-edge tools, from advanced computing environments to the latest AI libraries and frameworks. Collaborate across different fields of study to brainstorm, prototype, and refine innovative solutions to real-world problems.
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              Upcoming Events
            </h2>
            <p className="text-2xl text-zinc-300 mb-4">Exciting things to come!</p>
            <p className="text-zinc-400">Check back soon for our upcoming events and workshops.</p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            Meet the Team
          </h2>
          <div className="space-y-12">
            {/* Executive Board */}
            <div>
              <h3 className="text-3xl font-bold text-red-500 mb-8 text-center">Executive Board</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* President */}
                <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute top-4 right-4 w-20 h-20">
                      <img
                        src="/images/sam-butler-profile.jpg"
                        alt="Sam Butler - President & Founder"
                        width="80"
                        height="80"
                        className="absolute top-0 right-0 w-20 h-20 rounded-full object-cover border-2 border-red-500"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-red-500">Sam Butler</h4>
                    <p className="text-zinc-400 mb-4">President & Founder</p>
                    <p className="text-zinc-300 mb-4">Financial Anlalytics and Economics | Senior</p>
                    <p className="text-zinc-300">
                    Sam has a strong interest in AI, its applications, and transformative potential. He has been involved in various groups on and off campus and is currently working on an honors thesis studying afffordability for first-time homebuyers. Outside of his academic and professional pursuits, Sam is an avid sports fan who enjoys staying active and connected to his community.
                    </p>
                    <div className="mt-4 flex space-x-4">
                      <a href="https://www.linkedin.com/in/sam-butler1/" className="text-red-400 hover:text-red-300">LinkedIn</a>
                      <a href="mailto:sbutler@walton.uark.edu" className="text-red-400 hover:text-red-300">Email</a>
                    </div>
                  </div>
                </div>
                 {/* Founding Member */}
                 <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute top-4 right-4">
                      <img
                        src="/api/placeholder/400/225"
                        alt="VP of A.I. & Co-Founder"
                        width="80"
                        height="80"
                        loading="lazy"
                        className="w-20 h-20 rounded-full object-cover border-2 border-red-500"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-red-500">Noah Hertlein</h4>
                    <p className="text-zinc-400 mb-4">VP of A.I. & Co-Founder</p>
                    <p className="text-zinc-300 mb-4">Financial Analytics with a Minor in Information Systems | Senior</p>
                    <p className="text-zinc-300">
                      Noah is passionate about the transformative potential of artificial intelligence and how it applies to real-world challenges. He currently serves as a research assistant at the Walton College of Business, focusing on the intersection of AI and finance. Outside of his educational pursuits, Noah enjoys watching the Razorbacks, playing video games, and staying involved in his local community.
                    </p>
                    <div className="mt-4 flex space-x-4">
                      <a href="https://www.linkedin.com/in/noahhertlein/" className="text-red-400 hover:text-red-300">LinkedIn</a>
                      <a href="mailto:nahertle@uark.edu" className="text-red-400 hover:text-red-300">Email</a>
                    </div>
                  </div>
                </div>

                {/* Treasurer */}
                <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute top-4 right-4">
                      <img
                        src="/api/placeholder/400/225"
                        alt="Treasurer"
                        width="80"
                        height="80"
                        loading="lazy"
                        className="w-20 h-20 rounded-full object-cover border-2 border-red-500"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-red-500">Looking for a treasurer!</h4>
                    <p className="text-zinc-400 mb-4">[Treasurer]</p>
                    <p className="text-zinc-300 mb-4">[Major/Year]</p>
                    <p className="text-zinc-300">
                      Reach out to Sam if you're interested in the treasurer position! Preferably a junior or below. 
                    </p>
                    <div className="mt-4 flex space-x-4">
                      <a href="#" className="text-red-400 hover:text-red-300">LinkedIn</a>
                      <a href="#" className="text-red-400 hover:text-red-300">Email</a>
                    </div>
                  </div>
                </div>

                {/* VP of Data Science */}
                <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute top-4 right-4">
                      <img
                        src="/api/placeholder/400/225"
                        alt="VP of Data Science"
                        width="80"
                        height="80"
                        loading="lazy"
                        className="w-20 h-20 rounded-full object-cover border-2 border-red-500"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-red-500">Hector Negron</h4>
                    <p className="text-zinc-400 mb-4">VP of Data Science</p>
                    <p className="text-zinc-300 mb-4">Data Science | Senior</p>
                    <p className="text-zinc-300">
                      [Bio: A brief description of their background, interests, and vision for the AI Foundry.
                      Include relevant experience and what drew them to AI.]
                    </p>
                    <div className="mt-4 flex space-x-4">
                      <a href="#" className="text-red-400 hover:text-red-300">LinkedIn</a>
                      <a href="#" className="text-red-400 hover:text-red-300">Email</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Faculty Advisors */}
            <div>
              <h3 className="text-3xl font-bold text-red-500 mb-8 text-center">Faculty Advisors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Advisor 1 */}
                <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-red-500">Dr. Xinde Zhang</h4>
                    <p className="text-zinc-400 mb-2">Walton College of Business</p>
                    <p className="text-zinc-400 mb-4">University Professor</p>
                    <p className="text-zinc-300">
                      Insert bio here.
                    </p>
                    <div className="mt-4 flex space-x-4">
                      <a 
                        href="https://walton.uark.edu/departments/finance/directory/uid/xz035/name/Xinde+Zhang/" 
                        className="text-red-400 hover:text-red-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Faculty Page
                      </a>
                      <a 
                        href="mailto:xzhang@walton.uark.edu" 
                        className="text-red-400 hover:text-red-300"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </div>

                {/* Advisor 2 */}
                <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-red-500">Mr. Michael Cawthon</h4>
                    <p className="text-zinc-400 mb-2">Walton College of Busines</p>
                    <p className="text-zinc-400 mb-4">Economics Lecturer</p>
                    <p className="text-zinc-300">
                      Insert bio here.
                    </p>
                    <div className="mt-4 flex space-x-4">
                      <a 
                        href="https://walton.uark.edu/departments/economics/directory/uid/wcawthon/name/William+Michael+Cawthon/" 
                        className="text-red-400 hover:text-red-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Faculty Page
                      </a>
                      <a 
                        href="mailto:wcawthon@uark.edu" 
                        className="text-red-400 hover:text-red-300"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Mentors Section - Commented out until mentors are confirmed
            <div>
              <h3 className="text-3xl font-bold text-red-500 mb-8 text-center">Industry Mentors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-9 bg-zinc-800">
                    <img
                      src="/api/placeholder/400/225"
                      alt="Industry Mentor"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-red-500">[Mentor Name]</h4>
                    <p className="text-zinc-400 mb-2">Company</p>
                    <p className="text-zinc-400 mb-4">Role</p>
                    <p className="text-zinc-300">
                      [Bio: Industry experience, expertise in AI/ML, and how they support student development.
                      Include career highlights and areas of specialization.]
                    </p>
                    <div className="mt-4 flex space-x-4">
                      <a href="#" className="text-red-400 hover:text-red-300">LinkedIn</a>
                      <a href="#" className="text-red-400 hover:text-red-300">Email</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>

        {/* Career Development */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              Launch Your AI Career
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Briefcase className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-red-500 mb-3">Industry Connections</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>
                    <strong>•Direct Networking with AI Companies:</strong> Participate in exclusive meetups and info sessions featuring top AI firms. Build meaningful professional relationships through personalized networking events and campus visits.
                  </li>
                  <li>
                    <strong>•Internship Opportunities:</strong> Learn how to identify and apply for AI-related internships, from finding the best postings online to crafting standout applications. Gain the support and resources needed to secure real-world industry experience.
                  </li>
                  <li>
                    <strong>•Resume Workshops & Interview Prep:</strong> Hone your interviewing skills and perfect your resume with help from professionals and alumni in the field. We’ll guide you through the do’s and don’ts of a standout application.
                  </li>
                  <li>
                    <strong>•Industry Mentorship Programs:</strong> Get paired with seasoned AI experts who can offer personalized feedback, career advice, and insight into breaking into competitive roles at top companies.
                  </li>
                </ul>
              </div>
              <div>
                <Brain className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-red-500 mb-3">Skill Development</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>
                    <strong>•Hands-On Technical Workshops:</strong> Deepen your AI knowledge through specialized sessions on Python, machine learning models, data visualization tools, and more—led by both industry experts and senior club members.
                  </li>
                  <li>
                    <strong>•Cross-Disciplinary Projects:</strong> Work on real-life projects that blend AI with fields like healthcare, finance, and education. Collaborate with peers from diverse backgrounds to build innovative solutions.
                  </li>
                  <li>
                    <strong>•Industry Certification Prep:</strong> Join study groups and coaching sessions to prepare for top AI and cloud computing certifications. Learn the practical skills and theoretical knowledge needed to excel in these exams.
                  </li>
                  <li>
                    <strong>•Leadership Opportunities:</strong> Take the lead on committee initiatives, run specialized workshops, or mentor younger members. Strengthen your organizational and leadership skills while making an impact in the club.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              Join the Community
            </h2>
            <p className="text-zinc-300 mb-8 backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-red-900/20">
              No matter your background—Walton College, Engineering, Data Science, or beyond—there’s a place for you at the Arkansas AI Foundry. Join us in shaping the future of AI while propelling your career forward.
            </p>
            <div className="flex justify-center space-x-4">
            <Button 
              onClick={() => window.open('https://groupme.com/join_group/105347053/9oA8jhjn', '_blank')}
               > 
                <MessageCircle className="mr-2 h-4 w-4" />
                Join Our Groupme! 
              </Button>
              <Button variant="outline">
                Upcoming Events
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto border-t border-red-900/20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <p className="text-zinc-400">© 2025 Arkansas AI Foundry</p>
              <div className="mt-4 space-x-4">
                <a 
                  href="https://groupme.com/join_group/105347053/9oA8jhjn" 
                  className="text-red-400 hover:text-red-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GroupMe
                </a>
                <a 
                  href="https://www.linkedin.com/company/arkansas-ai-foundry/" 
                  className="text-red-400 hover:text-red-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default App
