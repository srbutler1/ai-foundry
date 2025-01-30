import React from 'react';
import { Button } from '../components/ui/button';

const ConsultingPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* Background */}
      <div className="star-background" />
      <div className="red-glow" />

      {/* Animated Borders */}
      <div 
        className="absolute inset-x-0 top-0 h-[2px] animate-[glowPulse_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-red-500 to-transparent" 
      />
      <div 
        className="absolute inset-x-0 bottom-0 h-[2px] animate-[glowPulse_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-red-500 to-transparent"
      />
      <div 
        className="absolute inset-y-0 left-0 w-[2px] animate-[glowPulse_3s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-red-500 to-transparent"
      />
      <div 
        className="absolute inset-y-0 right-0 w-[2px] animate-[glowPulse_3s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-red-500 to-transparent"
      />
      
      <div className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8 text-white relative">
          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
            Community Consulting: AI Solutions at Zero Cost
          </h1>

          {/* Introduction */}
          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-6 rounded-lg mb-8">
            <p className="text-zinc-300 mb-4">
              Are you a business seeking to harness the power of AI for a competitive edge—without breaking the bank? The Arkansas AI Foundry is your gateway to innovation, offering cutting-edge solutions at <strong>no cost</strong> to you.
            </p>
          </div>

          {/* What We Offer */}
          <h2 className="text-2xl font-semibold mt-8 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">What We Offer</h2>
          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-6 rounded-lg mb-8">
            <ul className="list-disc ml-6 mb-6 space-y-2 text-zinc-300">
              <li>
                <strong>Real-World AI Applications:</strong> Our motivated students
                specialize in everything from AI agents and chatbots to voice
                recognition and text analysis. They're eager to tackle your challenges
                with fresh ideas and cutting-edge tools.
              </li>
              <li>
                <strong>Expert Guidance &amp; Collaboration:</strong> All we need from
                you is a bit of your time. By sharing insights into your unique
                business needs, you'll help us tailor an AI-driven solution that truly
                delivers results.
              </li>
              <li>
                <strong>Win-Win Value Proposition:</strong> At worst, you'll connect
                with tomorrow's industry leaders—bright students who are as passionate
                about personal growth as they are about improving your bottom line. At
                best, you'll receive a transformative, AI-powered solution that
                accelerates your business goals.
              </li>
            </ul>
          </div>

          {/* Why Partner */}
          <h2 className="text-2xl font-semibold mt-8 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
            Why Partner with the Arkansas AI Foundry?
          </h2>
          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-6 rounded-lg mb-8">
            <ol className="list-decimal ml-6 mb-6 space-y-2 text-zinc-300">
              <li>
                <strong>Hands-On Experience:</strong> Our members hail from Walton
                College and diverse academic backgrounds—Finance, Data Science,
                Engineering, and more. You get innovative solutions; they gain
                real-world experience.
              </li>
              <li>
                <strong>Cutting-Edge Knowledge:</strong> Whether it's Python and
                machine learning, or the latest AI frameworks, our students stay on
                top of industry trends via guest speakers, workshops, and competitions.
              </li>
              <li>
                <strong>Ethical &amp; Responsible AI:</strong> We prioritize fairness,
                transparency, and social impact. Our Ethical AI initiatives ensure
                that the solutions we build are both effective and responsible.
              </li>
              <li>
                <strong>Team of Rising Leaders:</strong> By partnering with us, you
                gain direct access to a broad network of future AI specialists,
                analysts, and entrepreneurs—each guided by experienced faculty from
                the University of Arkansas.
              </li>
            </ol>
          </div>

          {/* How It Works */}
          <h2 className="text-2xl font-semibold mt-8 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">How Our Consulting Works</h2>
          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-6 rounded-lg mb-8">
            <ol className="list-decimal ml-6 mb-6 space-y-2 text-zinc-300">
              <li>
                <strong>Initial Discussion:</strong> We'll meet (in person or online)
                to talk about your business, the challenges you face, and the
                opportunities where AI can help.
              </li>
              <li>
                <strong>Customized Roadmap:</strong> Together, we'll design an
                approach that aligns with your goals—whether it's a chatbot prototype,
                data analytics pipeline, or advanced text analysis.
              </li>
              <li>
                <strong>Implementation &amp; Feedback:</strong> Our students will
                build, test, and refine your AI solution, keeping you informed every
                step of the way.
              </li>
              <li>
                <strong>Delivery &amp; Ongoing Support:</strong> You'll walk away with
                a game-changing, AI-powered solution—plus valuable insights and
                connections in the AI field.
              </li>
            </ol>
          </div>

          {/* Ready to Get Started */}
          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-6 rounded-lg mb-8">
            <p className="text-zinc-300 mb-4">
              <strong>At worst,</strong> you'll connect with talented future industry
              leaders who can bring fresh perspectives to your organization.{' '}
              <strong>At best,</strong> you'll get cutting-edge AI solutions that
              could transform your business, implemented at no cost.
            </p>
          </div>

          {/* Consulting Form CTA */}
          <div className="flex justify-center mb-8">
            <a
              href="https://forms.gle/p8Wov61ahwprS2i87"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Fill Out Consulting Partnership Form</Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-6 rounded-lg mt-8">
            <p className="text-zinc-300">
              Have questions? Email us at{' '}
              <a
                href="mailto:sam@arkansasaifoundry.org"
                className="text-red-400 hover:text-red-300"
              >
                sam@arkansasaifoundry.org
              </a>{' '}
              or call us at{' '}
              <a href="tel:+19137478659" className="text-red-400 hover:text-red-300">
                913-747-8659
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;
