// import React, { useState, useRef } from 'react';
// import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

// const MusicPlayer: React.FC = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [volume, setVolume] = useState(0.3);
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const togglePlay = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const toggleMute = () => {
//     if (audioRef.current) {
//       audioRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newVolume = parseFloat(e.target.value);
//     setVolume(newVolume);
//     if (audioRef.current) {
//       audioRef.current.volume = newVolume;
//     }
//   };

//   return (
//     <div className="fixed bottom-6 right-6 bg-black/30 backdrop-blur-sm border border-white/10 p-4 rounded-full z-40 transition-all duration-300 hover:bg-black/50">
//       <audio
//         ref={audioRef}
//         src="https://cdn.pixabay.com/download/audio/2022/01/20/audio_b0b0f3c5ce.mp3?filename=relaxed-vlog-131746.mp3"
//         loop
//       />
      
//       <div className="flex items-center space-x-3">
//         <button
//           onClick={togglePlay}
//           className="w-8 h-8 flex items-center justify-center text-white hover:text-gold transition-colors duration-300"
//           aria-label={isPlaying ? 'Pause' : 'Play'}
//         >
//           {isPlaying ? <Pause size={18} /> : <Play size={18} />}
//         </button>
        
//         <div className="hidden md:flex items-center space-x-2">
//           <button
//             onClick={toggleMute}
//             className="w-8 h-8 flex items-center justify-center text-white hover:text-gold transition-colors duration-300"
//             aria-label={isMuted ? 'Unmute' : 'Mute'}
//           >
//             {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
//           </button>
          
//           <input
//             type="range"
//             min="0"
//             max="1"
//             step="0.01"
//             value={volume}
//             onChange={handleVolumeChange}
//             className="w-24 accent-gold"
//             aria-label="Volume"
//           />
//         </div>
        
//         <div className="md:hidden">
//           <button
//             onClick={toggleMute}
//             className="w-8 h-8 flex items-center justify-center text-white hover:text-gold transition-colors duration-300"
//             aria-label={isMuted ? 'Unmute' : 'Mute'}
//           >
//             {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;