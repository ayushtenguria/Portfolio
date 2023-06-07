
export const Header = () => {
    return(
        <header className="">
           <div className="flex-row-reverse md:flex justify-center items-center m-6 p-6">
            <div className="w-[40rem] h-auto mx-7">
                <h1 className="drop-shadow-2xl text-rose-300 lg:text-8xl md:text-4xl sm:text-2xl text-2xl">
                Transforming ideas into digital reality.
                </h1>
                <button className="drop-shadow-2xl rounded-full text-white p-3 bg-violet-400 hover:bg-violet-300 active:bg-violet-300 my-8">
                    Click to Connect
                </button>
            </div>
            <div className="lg:mx-8 ">
                <img className="drop-shadow-2xl" src="https://i.ibb.co/NSd2cr2/27470334-7309681-removebg-preview.png"></img>
            </div>
            </div>
        </header>
    )
}

// export const Header = () => {
//     return (
//       <header className="">
//         <div className="container mx-auto px-8 py-8 md:flex md:justify-between md:items-center">
//           <div className="md:w-1/2">
//             <h1 className="text-4xl md:text-6xl text-rose-300">
//               Transforming ideas into digital reality.
//             </h1>
//             <button className="rounded-full text-white py-3 px-6 bg-violet-400 hover:bg-violet-300 active:bg-violet-300 mt-8">
//               Click to Connect
//             </button>
//           </div>
//           <div className="md:w-1/2 md:mx-8 mt-8 md:mt-0">
//             <img src="https://i.ibb.co/NSd2cr2/27470334-7309681-removebg-preview.png" alt="Illustration" />
//           </div>
//         </div>
//       </header>
//     );
//   };
  