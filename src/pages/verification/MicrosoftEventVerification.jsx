import React, { useState } from 'react';
import { eventConfig } from '../../config/eventConfig';
import { Search } from 'lucide-react';

const MicrosoftEventVerification = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Attendee list data
  const attendees = [
    { firstName: "Aslan", lastName: "Ebisch" },
    { firstName: "Allen", lastName: "McClure" },
    { firstName: "Alexander", lastName: "Kashata" },
    { firstName: "Charles", lastName: "Wilson" },
    { firstName: "Charles", lastName: "Patterson" },
    { firstName: "Clayton", lastName: "Josef" },
    { firstName: "Clara", lastName: "Smith" },
    { firstName: "Dylan", lastName: "Clark" },
    { firstName: "Emily", lastName: "Dunham" },
    { firstName: "Ethan", lastName: "Ericson" },
    { firstName: "Jaxon", lastName: "Ham" },
    { firstName: "Jonathan", lastName: "Nelson" },
    { firstName: "Kurt", lastName: "Wattelet" },
    { firstName: "Kuria", lastName: "Oshiro" },
    { firstName: "Shietsu", lastName: "Mori" },
    { firstName: "Nicholas", lastName: "Hayob" },
    { firstName: "Norah", lastName: "Johnson" },
    { firstName: "Poornima", lastName: "Malviya" },
    { firstName: "Medhansh", lastName: "Sankaran" },
    { firstName: "Soumya", lastName: "Chauhan" },
    { firstName: "Sebastian", lastName: "Reyes" },
    { firstName: "Tiarra", lastName: "Baumann" },
    { firstName: "William", lastName: "Roberts" },
    { firstName: "William", lastName: "Macey" },
    { firstName: "Wyatt", lastName: "Toombs" },
    { firstName: "Andrew", lastName: "Mendez" },
    { firstName: "Austin", lastName: "Rogers" },
    { firstName: "Jacob", lastName: "Whitley" },
    { firstName: "Liam", lastName: "Jones" }
  ];

  // Filter attendees based on search term
  const filteredAttendees = attendees.filter(attendee => 
    attendee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    attendee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
            Microsoft Event Verification
          </h1>
          <p className="text-zinc-300 text-lg mb-8">
            Official attendee verification for the Microsoft AI event on March 5th, 2025
          </p>
        </div>

        {/* Event Details */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-6 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Event Info */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-red-500 mb-4">
                  {eventConfig.currentEvent.title}
                </h2>
                <div className="text-zinc-300 space-y-2 mb-6">
                  <p><strong>Date:</strong> {eventConfig.currentEvent.date}, {eventConfig.currentEvent.dayOfWeek}</p>
                  <p><strong>Time:</strong> {eventConfig.currentEvent.time}</p>
                  <p><strong>Location:</strong> {eventConfig.currentEvent.location}</p>
                </div>
                <p className="text-zinc-400">
                  {eventConfig.currentEvent.description}
                </p>
              </div>
              
              {/* Event Image */}
              <div className="flex-1 flex justify-center">
                <img 
                  src={eventConfig.currentEvent.flyerImage} 
                  alt="Microsoft Event" 
                  className="max-h-64 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Verification Instructions */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md p-6 rounded-lg">
            <h2 className="text-xl font-bold text-red-500 mb-4">Verification Instructions</h2>
            <p className="text-zinc-300 mb-4">
              This page contains the official list of verified attendees for the Microsoft AI event.
              To verify an attendee, locate their name in the list below.
            </p>
            <p className="text-zinc-300">
              <strong>Total Verified Attendees:</strong> {attendees.length}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-black/40 border border-red-900/50 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:border-red-500/50"
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
          </div>
        </div>

        {/* Attendee List */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-black/60 border-b border-red-900/50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider">
                      First Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider">
                      Last Name
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-900/20">
                  {filteredAttendees.length > 0 ? (
                    filteredAttendees.map((attendee, index) => (
                      <tr 
                        key={`${attendee.firstName}-${attendee.lastName}-${index}`}
                        className="hover:bg-red-900/10 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">
                          {attendee.firstName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">
                          {attendee.lastName}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="px-6 py-4 text-center text-zinc-400">
                        No matching attendees found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-zinc-400 text-sm">
            This is a private verification page for the Arkansas AI Foundry Microsoft event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftEventVerification;
