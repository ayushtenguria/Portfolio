import { Card } from "./Card"
import WebDev from "../../Assets/WebDev.png"
import WebDeg from "../../Assets/WebDesign.png"
import AppDev from "../../Assets/AppDev.png"

export const CardSection = () => {
    return (
        <section className="my-40 p-8">
            <div className="flex justify-center items-center space-x-24">
            <Card 
                image={WebDev} 
                head="Web Development" 
                body="  
                Transform your online presence with our expert web development service. 
                We offer customized and responsive solutions to enhance user experience 
                and drive your business growth. Let's build something amazing together. " />

             <Card 
                image={AppDev} 
                head="App Development" 
                body="  Revolutionize your business with our cutting-edge app development service. We create intuitive and feature-rich mobile applications tailored to your specific needs, ensuring a seamless user experience.c" />

             <Card 
                image={WebDeg} 
                head="Web Design" 
                body="  Elevate your brand with our captivating web design service. Our team of experts will create visually stunning and user-friendly websites that leave a lasting impression and drive conversions." />
            </div>
        </section>
    )
}

// import { Card } from "./Card";
// import WebDev from "../../Assets/WebDev.png";
// import WebDeg from "../../Assets/WebDesign.png";
// import AppDev from "../../Assets/AppDev.png";

// export const CardSection = () => {
//   return (
//     <section className="my-10 px-4 md:my-40 md:px-8">
//       <div className="flex flex-col md:flex-row justify-center items-center md:space-x-24">
//         <Card
//           image={WebDev}
//           head="Web Development"
//           body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam perspiciatis fugit earum officiis culpa accusantium eum magnam voluptas fuga! Quo dolorum veritatis culpa eius, qui saepe non deleniti ab ipsam!Lorem ipsum dolor, sit amet consectetur"
//         />

//         <Card
//           image={AppDev}
//           head="App Development"
//           body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam perspiciatis fugit earum officiis culpa accusantium eum magnam voluptas fuga! Quo dolorum veritatis culpa eius, qui saepe non deleniti ab ipsam!Lorem ipsum dolor, sit amet consectetur"
//         />

//         <Card
//           image={WebDeg}
//           head="Web Design"
//           body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam perspiciatis fugit earum officiis culpa accusantium eum magnam voluptas fuga! Quo dolorum veritatis culpa eius, qui saepe non deleniti ab ipsam!Lorem ipsum dolor, sit amet consectetur"
//         />
//       </div>
//     </section>
//   );
// };
