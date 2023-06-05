// import React from "react";

// const GlassCard = () => {
//   return (
//     <div className="bg-opacity-20 bg-white bg-blur-sm bg-gray-200 rounded-lg p-8 max-w-md mx-auto">
//       <div className="relative overflow-hidden rounded-lg">
//         <img
//           className="w-full h-auto rounded-lg"
//           src="https://example.com/image.jpg"
//           alt="Card Image"
//         />
//         <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-white mb-4">Card Title</h3>
//             <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GlassCard;

import React, { useEffect, useState } from "react";

const Flashlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative bg-black w-64 h-64">
      <div
        className="absolute top-[50%] left-[50%] transform translate-[-50%] translate-y-[-50%] w-3/4 h-3/4 bg-transparent rounded-full shadow-flashlight"
        style={{ left: position.x, top: position.y }}
      ></div>
    </div>
  );
};

export default Flashlight;
