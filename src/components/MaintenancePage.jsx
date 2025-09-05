import { Helmet } from 'react-helmet-async';

function MaintenancePage() {
  return (
    <>
      <Helmet>
        <title>Under Maintenance - Arkansas AI Foundry</title>
        <meta name="description" content="Arkansas AI Foundry is currently under maintenance. We'll be back soon!" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4">
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Under Maintenance</h1>
            <p className="text-gray-300 text-lg mb-8">
              We're currently performing some updates to improve your experience.
            </p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-3">Arkansas AI Foundry</h2>
            <p className="text-gray-400 mb-4">
              We'll be back online shortly. Thank you for your patience!
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>Working on improvements...</span>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Questions? Contact us at info@arkansasaifoundry.org</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaintenancePage;
