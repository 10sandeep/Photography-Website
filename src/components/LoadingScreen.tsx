import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-2 border-gold rounded-full"></div>
          <div className="absolute inset-0 border-t-2 border-white rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Camera Shutter Animation */}
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-black border-2 border-gold rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-black animate-pulse-scale rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-white text-2xl font-serif tracking-widest animate-pulse-fade">
          DEVANSH SHANKAR FILMS
        </h2>
      </div>
    </div>
  );
};

export default LoadingScreen;