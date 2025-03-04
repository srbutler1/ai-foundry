import React from 'react';
import { eventConfig } from '../config/eventConfig';
import { Brain, Users, BookOpen, MessageCircle, ChevronRight, Trophy, Briefcase, Code } from 'lucide-react';
import { Button } from '../components/ui/button';
import Logo from '../components/ui/logo';
import EventPopup from '../components/ui/EventPopup';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <EventPopup />
      {/* Background */}
      <div className="star-background hero-content" />
      <div className="red-glow hero-content" />

      <div className="relative">
        {/* Hero Section */}
        <div className="relative overflow-hidden contain-paint">
          <div className="container mx-auto px-4 pt-32 pb-16">
            <div className="flex flex-col items-center text-center space-y-12">
              {/* Logo with hero animation */}
              <Logo />

              {/* Content that fades in after logo animation */}
              <div className="flex flex-col items-center mt-8">
                <div className="hero-content">
                  <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-red-900">
                    Arkansas AI Foundry
                  </h1>
                  <p className="text-2xl mb-8 text-zinc-300 max-w-2xl">
                    Bridging classroom learning with real-world AI innovation at the University of Arkansas
                  </p>
                </div>
                <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => window.open('https://groupme.com/join_group/105347053/9oA8jhjn', '_blank')}
                  className="w-72"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />  
                  Join Our Community
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => window.location.href = '/consulting'}
                  className="w-72"
                >
                  <Briefcase className="mr-2 h-5 w-5" />  
                  Community Consulting
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
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
          The Arkansas AI Foundry is a nonprofit organization, dedicated to bridging the technological divide by uniting forward-thinking students from diverse disciplines to push the boundaries of artificial intelligence. Through consulting services, strong industry partnerships, and a hands-on, collaborative learning environment, we empower individuals and organizations alike to harness AI for real-world impact. Join us in forging an inclusive and innovative future.
          </p>
        </div>
      </div>

      {/* Core Offerings Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
            <Users className="h-6 w-6 text-red-500 mb-2" />
            <h3 className="text-xl font-bold text-red-500 mb-2">Guest Speakers & Workshops</h3>
            <p className="text-zinc-400">
              Delve into real-world AI applications and cutting-edge research through regular talks, workshops, and panel discussions with industry thought leaders. Gain insights into the latest trends and network with experts shaping the field.
            </p>
          </div>

          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
            <Trophy className="h-6 w-6 text-red-500 mb-2" />
            <h3 className="text-xl font-bold text-red-500 mb-2">Competitions & Conferences</h3>
            <p className="text-zinc-400">
              Represent the University of Arkansas on a national stage. From hackathons to global AI challenges, we secure sponsorships and provide resources to help members showcase their skills—and bring home top honors.
            </p>
          </div>

          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
            <Briefcase className="h-6 w-6 text-red-500 mb-2" />
            <h3 className="text-xl font-bold text-red-500 mb-2">Community Consulting</h3>
            <p className="text-zinc-400">
              Partner with local nonprofits, startups, and small businesses to develop AI-driven solutions that elevate our community. Gain real-world experience, build your portfolio, and make a meaningful impact where it matters. 
            </p>
          </div>

          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
            <BookOpen className="h-6 w-6 text-red-500 mb-2" />
            <h3 className="text-xl font-bold text-red-500 mb-2">Mentorship & Career Development</h3>
            <p className="text-zinc-400">
              Provide guidance and support for every stage of your AI journey—from résumé reviews 
              and interview prep to pairing up with experienced peers and alumni. Develop a professional 
              network, explore internships or research opportunities, and take your first steps toward 
              becoming a leading voice in the AI community.
            </p>  
          </div>

          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
            <Brain className="h-6 w-6 text-red-500 mb-2" /> 
            <h3 className="text-xl font-bold text-red-500 mb-2">Ethical AI & Social Impact</h3>
            <p className="text-zinc-400">
              Engage in discussions and initiatives that focus on the responsible use of artificial intelligence. 
              Learn about bias mitigation, inclusive data practices, and sustainable development. By applying 
              your skills toward ethical AI solutions, you'll help shape technology that truly benefits society.
            </p>
          </div>

          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
            <Code className="h-6 w-6 text-red-500 mb-2" />
            <h3 className="text-xl font-bold text-red-500 mb-2">Hands-on Projects</h3>
            <p className="text-zinc-400">
              Work with cutting-edge tools, from advanced computing environments to the latest AI libraries and frameworks. Collaborate across different fields of study to brainstorm, prototype, and refine innovative solutions to real-world problems.
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div id="upcoming-events" className="container mx-auto px-4 py-16">
        <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 text-center">
            Upcoming Events
          </h2>
          <div className="space-y-6">
            {eventConfig.showEventAdvertising ? (
              <div className="flex flex-col md:flex-row md:items-center gap-6 p-4 bg-black/30 rounded-lg border border-red-900/30">
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="text-red-500 font-bold text-xl mb-1">{eventConfig.currentEvent.date}</div>
                  <div className="text-zinc-300">{eventConfig.currentEvent.dayOfWeek}</div>
                  <div className="text-zinc-300 font-semibold mt-2">{eventConfig.currentEvent.time}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl text-zinc-300 font-bold mb-2">{eventConfig.currentEvent.title}</h3>
                  <div className="flex items-center text-zinc-400 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {eventConfig.currentEvent.location}
                  </div>
                  <p className="text-zinc-400">{eventConfig.currentEvent.description}</p>
                </div>
              </div>
            ) : (
              <p className="text-zinc-400 text-center py-4">Stay tuned for upcoming events!</p>
            )}
          </div>
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
                  <p className="text-zinc-300 mb-4">Financial Analytics and Economics | Senior</p>
                  <p className="text-zinc-300">
                  Sam has a strong interest in AI, its applications, and transformative potential. He has been involved in various groups on and off campus and is currently working on an honors thesis studying afffordability for first-time homebuyers. Outside of his academic and professional pursuits, Sam is an avid sports fan who enjoys staying active and connected to his community.
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <a href="https://www.linkedin.com/in/sam-butler1/" className="text-red-400 hover:text-red-300">LinkedIn</a>
                    <a href="mailto:sam@arkansasaifoundry.org" className="text-red-400 hover:text-red-300">Email</a>
                  </div>
                </div>
              </div>
               {/* Founding Member */}
               <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                <div className="relative">
                  <div className="absolute top-4 right-4 w-20 h-20">
                    <img
                      src="/images/noah-headshot-final.jpg"
                      alt="Noah Hertlein - VP of A.I. & Co-Founder"
                      width="80"
                      height="80"
                      className="absolute top-0 right-0 w-20 h-20 rounded-full object-cover border-2 border-red-500"
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
                    <a href="mailto:noah@arkansasaifoundry.org" className="text-red-400 hover:text-red-300">Email</a>
                  </div>
                </div>
              </div>

              {/* VP of Data Science */}
              <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                <div className="relative">
                  <div className="absolute top-4 right-4 w-20 h-20">
                    <img
                      src="/images/Hector_Headshot.jpeg"
                      alt="Hector Negron - VP of Data Science"
                      width="80"
                      height="80"
                      className="absolute top-0 right-0 w-20 h-20 rounded-full object-cover border-2 border-red-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-red-500">Hector Negron</h4>
                  <p className="text-zinc-400 mb-4">VP of Data Science</p>
                  <p className="text-zinc-300 mb-4">Data Science | Senior</p>
                  <p className="text-zinc-300">
                  Hector thrives on creating innovative and data-driven solutions to complex challenges. He's currently captain of the Arkansas Men's Lacrosse team and working on an honors thesis utilizing statistical models for retail space-allocation. Hector is passionate about forming meaningful relationships within his communities. Some of his interests are strength & conditioning, cars, and mma. 
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <a href="https://www.linkedin.com/in/hector-thomas-negron" className="text-red-400 hover:text-red-300">LinkedIn</a>
                    <a href="mailto:hector@arkansasaifoundry.org" className="text-red-400 hover:text-red-300">Email</a>
                  </div>
                </div>
              </div>

              {/* Treasurer */}
              <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                <div className="relative">
                  <div className="absolute top-4 right-4 w-20 h-20">
                    <img
                      src="/images/kaylieo@uark.edu-b3418a5d.jpg"
                      alt="Kaylie Oneal - Treasurer"
                      width="80"
                      height="80"
                      className="absolute top-0 right-0 w-20 h-20 rounded-full object-cover border-2 border-red-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-red-500">Kaylie Oneal</h4>
                  <p className="text-zinc-400 mb-4">Treasurer</p>
                  <p className="text-zinc-300 mb-4">Finance | Junior</p>
                  <p className="text-zinc-300">
                    Kaylie is passionate about FinTech and the incredible potential of artificial intelligence in our lives and careers. She currently serves as an Administrative Specialist in the Department of Economics and Management at the Walton College of Business and is actively involved in various campus clubs. Outside of academia, Kaylie enjoys creative projects and engaging with her local community.
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <a href="https://www.linkedin.com/in/kaylie-oneal-447715293/" className="text-red-400 hover:text-red-300">LinkedIn</a>
                    <a href="mailto:kaylie@arkansasaifoundry.org" className="text-red-400 hover:text-red-300">Email</a>
                  </div>
                </div>
              </div>

              {/* Secretary */}
              <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                <div className="relative">
                  <div className="absolute top-4 right-4 w-20 h-20">
                    <img
                      src="/images/ConnorDurbin-Headshot.jpeg"
                      alt="Connor Durbin - Secretary"
                      width="80"
                      height="80"
                      className="absolute top-0 right-0 w-20 h-20 rounded-full object-cover border-2 border-red-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-red-500">Connor Durbin</h4>
                  <p className="text-zinc-400 mb-4">Secretary</p>
                  <p className="text-zinc-300 mb-4">Data Science | Junior</p>
                  <p className="text-zinc-300">
                    Connor is inspired by the ability of AI to transform industries and how it is currently redefining the future. As a Data Science major specializing in business analytics, he loves tackling complex challenges and developing creative solutions. His experience includes developing an app for a nonprofit and working with leading retailers to optimize their sales strategies. Outside of his studies, Connor enjoys playing golf and cooking good food.
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <a href="https://www.linkedin.com/in/connor-durbin-52b975252/" className="text-red-400 hover:text-red-300">LinkedIn</a>
                    <a href="mailto:connor@arkansasaifoundry.org" className="text-red-400 hover:text-red-300">Email</a>
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
                <div className="relative">
                  <div className="absolute top-4 right-4 w-20 h-20">
                    <img
                      src="/images/cinder-headshot-final.jpg"
                      alt="Dr. Xinde Zhang"
                      width="80"
                      height="80"
                      className="absolute top-0 right-0 w-20 h-20 rounded-full object-cover border-2 border-red-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-red-500">Dr. Xinde Zhang</h4>
                  <p className="text-zinc-400 mb-2">Walton College</p>
                  <p className="text-zinc-400 mb-4">Associate Professor</p>
                  <p className="text-zinc-300">
                  Dr. Xinde (Cinder) Zhang is an Associate Teaching Professor and the founding faculty of the Financial Analytics program at the University of Arkansas. He specializes in generative AI and financial education, developing innovative courses and research at the intersection of AI and finance. Dr. Zhang has received recognition for his contributions to teaching and research, with work published in top journals like the Journal of Financial and Quantitative Analysis. A global educator and thought leader, he integrates advanced tools and AI methodologies to revolutionize financial education and analytics.
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
                      href="mailto:cinder@arkansasaifoundry.org" 
                      className="text-red-400 hover:text-red-300"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>

              {/* Advisor 2 */}
              <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                <div className="relative">
                  <div className="absolute top-4 right-4 w-20 h-20">   
                    <img
                      src="/images/bill-headshot.jpg"
                      alt="Mr. Bill Akins"
                      width="80"
                      height="80"
                      className="absolute top-0 right-0 w-20 h-20 rounded-full object-cover border-2 border-red-500"
                      />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-red-500">Mr. Bill Akins</h4>
                  <p className="text-zinc-400 mb-2">Walton College of Business</p>
                  <p className="text-zinc-400 mb-4">Applicable AI and Digital Marketing Lecturer</p>
                  <p className="text-zinc-300">
                    With over 25 years of experience in digital and physical retail technology, Bill Akins is a seasoned industry leader contributing his expertise to the Walton College. His career began as an intern at Apple, leading to leadership roles at Walmart and VMLY&R/Rockfish. He holds an MBA from the Sam M. Walton College of Business and has pursued post-graduate studies at Stanford, MIT, Emory University, Georgia Tech, and Cornell University. A dedicated mentor to AI and ML startups, Bill is also the bestselling author of Innovative Leadership (2024). A recognized pioneer in digital innovation, he founded the NWA Tech Summit and has been honored with accolades such as NWA Business Journal's 40 Under 40 and induction into the Arkansas 200 Executives Hall of Fame. At Walton College, he teaches AI applications at the MBA level and digital marketing in the Honors College, equipping students with practical, forward-thinking insights into emerging technologies.
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <a 
                      href="https://walton.uark.edu/departments/marketing/directory/uid/wakins/name/Bill+Akins/" 
                      className="text-red-400 hover:text-red-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Faculty Page
                    </a>
                    <a 
                      href="mailto:wakins@uark.edu" 
                      className="text-red-400 hover:text-red-300"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>

              {/* Advisor 3 */}
              <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
                <div className="relative">
                  <div className="absolute top-4 right-4">
                    <img
                      src="#"
                      alt="Mr. Michael Cawthon"
                      width="80"
                      height="80"
                      className="absolute top-0 right-0 w-20 h-20 rounded-full object-cover border-2 border-red-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-red-500">Mr. Michael Cawthon</h4>
                  <p className="text-zinc-400 mb-2">Walton College</p>
                  <p className="text-zinc-400 mb-4">Economics Lecturer</p>
                  <p className="text-zinc-300">
                  Michael serves as Founder and Portfolio Manager of Indra Capital Partners, a quantitatively driven asset manager.  Previously, he was co-founder and Chief Investment Officer for Green Street Energy, an owner operator of commercial-scale solar energy assets.  Before that, he was with Goldman Sachs in New York in the Structured Products division, with oversight for various mortgage trading businesses.  He began with GS in 2000 after graduate school at the University of Chicago, from which he received a Master’s Degree in Financial Mathematics.  He holds an undergraduate degree in Economics from the University of Arkansas.
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
              <Briefcase className="h-6 w-6 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-red-500 mb-3">Industry Connections</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>
                  <strong>•Direct Networking with AI Companies:</strong> Participate in exclusive meetups and info sessions featuring top AI firms. Build meaningful professional relationships through personalized networking events and campus visits.
                </li>
                <li>
                  <strong>•Internship Opportunities:</strong> Learn how to identify and apply for AI-related internships, from finding the best postings online to crafting standout applications. Gain the support and resources needed to secure real-world industry experience.
                </li>
                <li>
                  <strong>•Resume Workshops & Interview Prep:</strong> Hone your interviewing skills and perfect your resume with help from professionals and alumni in the field. We'll guide you through the do's and don'ts of a standout application.
                </li>
                <li>
                  <strong>•Industry Mentorship Programs:</strong> Get paired with seasoned AI experts who can offer personalized feedback, career advice, and insight into breaking into competitive roles at top companies.
                </li>
              </ul>
            </div>
            <div>
              <Brain className="h-6 w-6 text-red-500 mb-4" />
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

      {/* Our Experience Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-b from-black/60 to-black/40 border border-red-900/50 backdrop-blur-md p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 text-center">
            Our Experience
          </h2>
          <div className="flex justify-center gap-10 flex-wrap">
            {/* Mastercard Logo */}
            <a 
              href="https://www.mastercard.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/50 border border-red-900/50 backdrop-blur-md hover:border-red-500/70 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 p-4 rounded-lg flex items-center justify-center w-56 h-28 transform hover:scale-105"
            >
              <img 
                src="/images/logos/mastercardlogo.png" 
                alt="Mastercard" 
                className="max-h-16 max-w-full object-contain"
              />
            </a>
            
            {/* EY Logo */}
            <a 
              href="https://www.ey.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/50 border border-red-900/50 backdrop-blur-md hover:border-red-500/70 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 p-4 rounded-lg flex items-center justify-center w-56 h-28 transform hover:scale-105"
            >
              <img 
                src="/images/logos/eylogo.png" 
                alt="EY" 
                className="max-h-16 max-w-full object-contain"
              />
            </a>
            
            {/* Coming Soon Placeholder */}
            <div className="bg-black/50 border border-red-900/30 backdrop-blur-md p-4 rounded-lg flex flex-col items-center justify-center w-56 h-28">
              <div className="text-red-500 font-semibold mb-1">More Partners</div>
              <div className="text-zinc-400 text-sm">Coming Soon</div>
            </div>
            
            {/* Walton Logo */}
            <a 
              href="https://walton.uark.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/50 border border-red-900/50 backdrop-blur-md hover:border-red-500/70 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 p-4 rounded-lg flex items-center justify-center w-56 h-28 transform hover:scale-105"
            >
              <div className="bg-white rounded-lg p-2 flex items-center justify-center w-36 h-20">
                <img 
                  src="/images/logos/UA_Logo.png" 
                  alt="University of Arkansas Walton College" 
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </a>
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
            No matter your background—Walton College, Engineering, Data Science, or beyond—there's a place for you at the Arkansas AI Foundry. Join us in shaping the future of AI while propelling your career forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
            <Button 
              onClick={() => window.open('https://groupme.com/join_group/105347053/9oA8jhjn', '_blank')}
              className="w-72"
            > 
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Our Groupme! 
            </Button>
            <Button 
              variant="outline"
              className="w-72"
              onClick={() => document.getElementById('upcoming-events').scrollIntoView({ behavior: 'smooth' })}
            >
              Upcoming Events
            </Button>
            <Button 
              onClick={() => window.open('mailto:sam@arkansasaifoundry.org', '_blank')}
              className="w-72"
            > 
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us 
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
                href="mailto:sam@arkansasaifoundry.org" 
                className="text-red-400 hover:text-red-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
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
  );
};

export default HomePage;
