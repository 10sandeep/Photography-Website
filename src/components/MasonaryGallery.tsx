// import React, { useState, useEffect } from 'react';
// import { X } from 'lucide-react';
// import { PortfolioItem } from '../types';

// // Extended type to include category for filtering
// interface FilterablePortfolioItem extends PortfolioItem {
//   categories: string[];
// }

// interface MasonryGalleryProps {
//   images: FilterablePortfolioItem[];
//   categories: string[];
// }

// const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images, categories }) => {
//   const [selectedImage, setSelectedImage] = useState<FilterablePortfolioItem | null>(null);
//   const [activeFilter, setActiveFilter] = useState<string>('all');
//   const [filteredImages, setFilteredImages] = useState<FilterablePortfolioItem[]>(images);
//   const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(images.length).fill(false));

//   // Apply filters when active filter changes
//   useEffect(() => {
//     if (activeFilter === 'all') {
//       setFilteredImages(images);
//     } else {
//       const filtered = images.filter(image => 
//         image.categories.includes(activeFilter)
//       );
//       setFilteredImages(filtered);
//     }
//   }, [activeFilter, images]);

//   const handleImageLoad = (index: number) => {
//     const newLoadedState = [...isLoaded];
//     newLoadedState[index] = true;
//     setIsLoaded(newLoadedState);
//   };

//   return (
//     <div className="container mx-auto px-4">
//       {/* Filter Navigation */}
//       <div className="flex flex-wrap items-center justify-center mb-10 gap-2">
//         <button
//           className={`px-5 py-2 text-sm transition-all duration-300 rounded-full ${
//             activeFilter === 'all'
//               ? 'bg-black text-white'
//               : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//           }`}
//           onClick={() => setActiveFilter('all')}
//         >
//           All
//         </button>
//         {categories.map(category => (
//           <button
//             key={category}
//             className={`px-5 py-2 text-sm transition-all duration-300 rounded-full ${
//               activeFilter === category
//                 ? 'bg-black text-white'
//                 : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//             }`}
//             onClick={() => setActiveFilter(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Masonry Gallery */}
//       <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//         {filteredImages.map((image, index) => (
//           <div
//             key={image.id}
//             className="break-inside-avoid relative overflow-hidden group cursor-pointer mb-6 opacity-0 animate-fadeIn"
//             style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
//             onClick={() => setSelectedImage(image)}
//           >
//             {/* Loading placeholder */}
//             {!isLoaded[index] && (
//               <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
//                 <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//               </div>
//             )}
            
//             <img
//               src={image.url}
//               alt={image.title}
//               className={`w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
//                 isLoaded[index] ? 'opacity-100' : 'opacity-0'
//               }`}
//               onLoad={() => handleImageLoad(index)}
//             />
            
//             {/* Image overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                 <h3 className="text-xl font-light text-white mb-2">{image.title}</h3>
//                 <div className="flex flex-wrap gap-2 mt-3">
//                   {image.categories.map(cat => (
//                     <span 
//                       key={`${image.id}-${cat}`} 
//                       className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
//                     >
//                       {cat}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* "No results" message when no images match the filter */}
//       {filteredImages.length === 0 && (
//         <div className="text-center py-20">
//           <h3 className="text-2xl font-light text-gray-600">No images found for this category</h3>
//           <button 
//             className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
//             onClick={() => setActiveFilter('all')}
//           >
//             View all images
//           </button>
//         </div>
//       )}

//       {/* Modal for displaying full-size images */}
//       {selectedImage && (
//         <div 
//           className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-0"
//           onClick={() => setSelectedImage(null)}
//         >
//           <button
//             onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
//             className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors duration-300 z-10"
//             aria-label="Close"
//           >
//             <X size={32} />
//           </button>

//           <div className="relative max-w-6xl max-h-[90vh] w-full">
//             <img
//               src={selectedImage.url}
//               alt={selectedImage.title}
//               className="w-full h-auto max-h-[90vh] object-contain"
//             />
            
//             {/* Image info overlay */}
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-8 py-6 text-white">
//               <h3 className="text-2xl font-light mb-2">{selectedImage.title}</h3>
//               <p className="text-white/80 max-w-2xl mb-3">{selectedImage.description}</p>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {selectedImage.categories.map(cat => (
//                   <span 
//                     key={`modal-${selectedImage.id}-${cat}`} 
//                     className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
//                   >
//                     {cat}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MasonryGallery;

// // Example usage:
// /*
// import MasonryGallery from './components/MasonryGallery';

// // In your page component
// const portfolioImages = [
//   {
//     id: '1',
//     url: '/images/portfolio/landscape1.jpg',
//     title: 'Mountain Vista',
//     description: 'Sunrise over mountain ranges in the Pacific Northwest',
//     categories: ['landscape', 'nature']
//   },
//   {
//     id: '2',
//     url: '/images/portfolio/portrait1.jpg',
//     title: 'Urban Portrait',
//     description: 'Street photography in downtown Seattle',
//     categories: ['portrait', 'urban']
//   },
//   // more images...
// ];

// const categories = ['landscape', 'portrait', 'urban', 'nature', 'architecture'];

// // In your render method
// <MasonryGallery images={portfolioImages} categories={categories} />
// */