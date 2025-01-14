import { Brain, Users, BookOpen, MessageCircle, ChevronRight, Trophy, Briefcase, Code } from 'lucide-react'
import { Button } from './components/ui/button'

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#E31837,transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-24">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-8">
                <div className="absolute inset-0 animate-pulse bg-red-500/20 blur-xl rounded-full" />
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-red-900">
                Arkansas AI Foundry
              </h1>
              <p className="text-2xl mb-8 text-zinc-300 max-w-2xl">
                Bridging classroom learning with real-world AI innovation at the University of Arkansas
              </p>
              <Button>
                Join Our Community
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
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
              The Arkansas AI Foundry brings together students from Walton College, Engineering, and Data Science 
              to explore the frontiers of artificial intelligence. Through hands-on projects, industry connections, 
              and collaborative learning, we're preparing the next generation of AI leaders.
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
                Learn from industry leaders and experts through regular workshops and speaker series on emerging AI trends.
              </p>
            </div>

            <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
              <Trophy className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="text-xl font-bold text-red-500 mb-2">Competitions & Conferences</h3>
              <p className="text-zinc-400">
                Represent UARK at prestigious AI competitions and conferences with sponsored participation.
              </p>
            </div>

            <div className="bg-black/40 border border-red-900/50 backdrop-blur-md hover:border-red-500/50 transition-all duration-300 p-6 rounded-lg">
              <Code className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="text-xl font-bold text-red-500 mb-2">Hands-on Projects</h3>
              <p className="text-zinc-400">
                Access cutting-edge hardware and software resources for practical AI project development.
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
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Executive Board */}
            <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-500 mb-4">Executive Board</h3>
              <div className="space-y-4">
                <div className="text-zinc-300">
                  <p className="font-semibold">[President Name]</p>
                  <p className="text-sm text-zinc-400">President</p>
                </div>
                <div className="text-zinc-300">
                  <p className="font-semibold">[Vice President Name]</p>
                  <p className="text-sm text-zinc-400">Vice President</p>
                </div>
                <div className="text-zinc-300">
                  <p className="font-semibold">[Secretary Name]</p>
                  <p className="text-sm text-zinc-400">Secretary</p>
                </div>
                <div className="text-zinc-300">
                  <p className="font-semibold">[Treasurer Name]</p>
                  <p className="text-sm text-zinc-400">Treasurer</p>
                </div>
              </div>
            </div>

            {/* Faculty Advisors */}
            <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-500 mb-4">Faculty Advisors</h3>
              <div className="space-y-4">
                <div className="text-zinc-300">
                  <p className="font-semibold">[Advisor Name]</p>
                  <p className="text-sm text-zinc-400">Department</p>
                  <p className="text-sm text-zinc-400">Title</p>
                </div>
                <div className="text-zinc-300">
                  <p className="font-semibold">[Advisor Name]</p>
                  <p className="text-sm text-zinc-400">Department</p>
                  <p className="text-sm text-zinc-400">Title</p>
                </div>
              </div>
            </div>

            {/* Industry Mentors */}
            <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-500 mb-4">Industry Mentors</h3>
              <div className="space-y-4">
                <div className="text-zinc-300">
                  <p className="font-semibold">[Mentor Name]</p>
                  <p className="text-sm text-zinc-400">Company</p>
                  <p className="text-sm text-zinc-400">Role</p>
                </div>
                <div className="text-zinc-300">
                  <p className="font-semibold">[Mentor Name]</p>
                  <p className="text-sm text-zinc-400">Company</p>
                  <p className="text-sm text-zinc-400">Role</p>
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
                <Briefcase className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-red-500 mb-3">Industry Connections</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Direct networking with AI companies</li>
                  <li>• Internship opportunities</li>
                  <li>• Resume workshops and interview prep</li>
                  <li>• Industry mentorship programs</li>
                </ul>
              </div>
              <div>
                <Brain className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-red-500 mb-3">Skill Development</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Hands-on technical workshops</li>
                  <li>• Cross-disciplinary projects</li>
                  <li>• Industry certification prep</li>
                  <li>• Leadership opportunities</li>
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
              Whether you're from Walton College, Engineering, or Data Science, there's a place for you at the 
              Arkansas AI Foundry. Join us in building the future of AI while advancing your career.
            </p>
            <div className="flex justify-center space-x-4">
              <Button>
                <MessageCircle className="mr-2 h-4 w-4" />
                Join Discord
              </Button>
              <Button variant="outline">
                Upcoming Events
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-red-900/20 mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <p className="text-zinc-400">© 2025 Arkansas AI Foundry</p>
              <div className="mt-4 space-x-4">
                <a href="#" className="text-red-400 hover:text-red-300">Discord</a>
                <a href="#" className="text-red-400 hover:text-red-300">LinkedIn</a>
                <a href="#" className="text-red-400 hover:text-red-300">Instagram</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App