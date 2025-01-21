import React from 'react';
import { Button } from '../components/ui/button';

const ConsultingPage = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">
        Community Consulting: AI Solutions at Zero Cost
      </h1>

      {/* Introduction */}
      <p className="mb-4">
      Are you a business seeking to harness the power of AI for a competitive edge—without breaking the bank? The Arkansas AI Foundry is your gateway to innovation, offering cutting-edge solutions at <strong>no cost</strong> to you.
      </p>

      {/* What We Offer */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">What We Offer</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          <strong>Real-World AI Applications:</strong> Our motivated students
          specialize in everything from AI agents and chatbots to voice
          recognition and text analysis. They’re eager to tackle your challenges
          with fresh ideas and cutting-edge tools.
        </li>
        <li>
          <strong>Expert Guidance &amp; Collaboration:</strong> All we need from
          you is a bit of your time. By sharing insights into your unique
          business needs, you’ll help us tailor an AI-driven solution that truly
          delivers results.
        </li>
        <li>
          <strong>Win-Win Value Proposition:</strong> At worst, you’ll connect
          with tomorrow’s industry leaders—bright students who are as passionate
          about personal growth as they are about improving your bottom line. At
          best, you’ll receive a transformative, AI-powered solution that
          accelerates your business goals.
        </li>
      </ul>

      {/* Why Partner */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">
        Why Partner with the Arkansas AI Foundry?
      </h2>
      <ol className="list-decimal ml-6 mb-6 space-y-2">
        <li>
          <strong>Hands-On Experience:</strong> Our members hail from Walton
          College and diverse academic backgrounds—Finance, Data Science,
          Engineering, and more. You get innovative solutions; they gain
          real-world experience.
        </li>
        <li>
          <strong>Cutting-Edge Knowledge:</strong> Whether it’s Python and
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

      {/* How It Works */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">How Our Consulting Works</h2>
      <ol className="list-decimal ml-6 mb-6 space-y-2">
        <li>
          <strong>Initial Discussion:</strong> We’ll meet (in person or online)
          to talk about your business, the challenges you face, and the
          opportunities where AI can help.
        </li>
        <li>
          <strong>Customized Roadmap:</strong> Together, we’ll design an
          approach that aligns with your goals—whether it’s a chatbot prototype,
          data analytics pipeline, or advanced text analysis.
        </li>
        <li>
          <strong>Implementation &amp; Feedback:</strong> Our students will
          build, test, and refine your AI solution, keeping you informed every
          step of the way.
        </li>
        <li>
          <strong>Delivery &amp; Ongoing Support:</strong> You’ll walk away with
          a game-changing, AI-powered solution—plus valuable insights and
          connections in the AI field.
        </li>
      </ol>

      {/* Ready to Get Started */}
      <p className="mb-6">
        <strong>At worst,</strong> you’ll connect with talented future industry
        leaders who can bring fresh perspectives to your organization.{' '}
        <strong>At best,</strong> you’ll get cutting-edge AI solutions that
        could transform your business, implemented at no cost.
      </p>

      {/* Consulting Form CTA */}
      <a
        href="https://forms.gle/p8Wov61ahwprS2i87"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Fill Out Consulting Partnership Form</Button>
      </a>

      {/* Contact Info */}
      <div className="mt-6">
        <p>
          Have questions? Email us at{' '}
          <a
            href="mailto:arkansas.aifoundry@gmail.com"
            className="text-blue-500"
          >
            arkansas.aifoundry@gmail.com
          </a>{' '}
          or call us at{' '}
          <a href="tel:+19137478659" className="text-blue-500">
            913-747-8659
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ConsultingPage;
