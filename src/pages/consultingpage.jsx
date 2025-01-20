import React from 'react';
import { Button } from '../components/ui/button';

const ConsultingPage = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Our Consulting Services</h1>
            <p className="mb-4">
                Looking to explore AI solutions for your business but worried about costs? Here's our pitch: It's completely FREE. You get access to bright, motivated University of Arkansas students who are learning to implement everything from AI agents and chatbots to voice recognition and text analysis. All we need is a bit of your time for guidance. There's zero downside - at worst, you'll connect with talented future industry leaders. At best? You'll get cutting-edge AI solutions that could transform your business, implemented at no cost. The only question is: Ready to start?
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRExKLYpEsKF4eey0BLrzymOddfGcD8m2FqxA50NgfTjd7_A/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                <Button>Fill Out Consulting Partnership Form</Button>
            </a>
            <div className="mt-4">
                <p>
                    For any questions, feel free to email us at <a href="mailto:arkansas.aifoundry@gmail.com" className="text-blue-500">arkansas.aifoundry@gmail.com</a> or call us at <a href="tel:+19137478659" className="text-blue-500">913-747-8659</a>.
                </p>
            </div>
        </div>
    );
}

export default ConsultingPage;
