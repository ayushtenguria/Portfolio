// export const AboutMe = () => {
//     return(
//         <section className="justify-center items-center my-10">
//             <div className="flex justify-center">
//             <h1 className="text-rose-300 text-8xl">About Me</h1>
//             </div>
            
//         <div className="flex justify-center items-center m-16 p-8 space-x-44">
//             <div className="w-96 mx-10">
//                 <img src="https://i.ibb.co/7G3s6VS/26314281-cwok-casual-21-removebg-preview.png"></img>
//             </div>
//             <div>
//                 <p className="text-white w-96 ">
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
//                     Ullam perspiciatis fugit earum officiis culpa accusantium eum 
//                     magnam voluptas fuga! Quo dolorum veritatis culpa eius, qui 
//                     saepe non deleniti ab ipsam!Lorem ipsum dolor, sit amet consectetur 
//                     adipisicing elit. Ullam perspiciatis fugit earum officiis 
//                     culpa accusantium eum magnam voluptas fuga! Quo dolorum 
//                     veritatis culpa eius, qui saepe non deleniti ab ipsam!
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
//                     Ullam perspiciatis fugit earum officiis culpa accusantium 
//                     eum magnam voluptas fuga! Quo dolorum veritatis culpa eius, 
//                     qui saepe non deleniti ab ipsam!
//                 </p>
//             </div>

//         </div>
//         </section>
//     )
// }

export const AboutMe = () => {
    return (
      <section className="justify-center items-center my-10">
        <div className="flex justify-center">
          <h1 className="text-rose-300 text-8xl">About Me</h1>
        </div>
  
        <div className="flex flex-col md:flex-row justify-center items-center m-6 md:m-16 p-4 md:p-8 space-x-0 md:space-x-44">
          <div className="w-72 md:w-96 mx-4 md:mx-10">
            <img src="https://i.ibb.co/7G3s6VS/26314281-cwok-casual-21-removebg-preview.png" alt="Profile" />
          </div>
          <div>
            <p className="text-white w-72 md:w-96">
            Hello, my name is Ayush, and I am an experienced web developer specializing in 
            the MERN stack. With my expertise, I have the skills to create fully functional 
            and responsive websites that meet your unique requirements. Whether you need a sleek 
            and modern design, seamless user experience, or robust backend functionality, I have 
            the knowledge and experience to bring your ideas to life. I am passionate about delivering 
            high-quality web solutions that not only look great but also perform flawlessly. 
            Let's collaborate to turn your vision into a reality and create an impactful online 
            presence for your business.
            </p>
          </div>
        </div>
      </section>
    );
  };
  