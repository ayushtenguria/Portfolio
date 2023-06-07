import { useForm } from "react-hook-form";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contact = () => {

    function Submit(e) {
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        e.preventDefault();
        console.log("Submitted");
        console.log(formDatab);

        fetch(
          "https://script.google.com/macros/s/AKfycbzFqVVNUvY0x9r25cH1p3gI1OSZ91tIjrDqApj2sqdM3WaBALJXCjHCoaERFRw-LHTi/exec",
          {
            method: "POST",
            body: formDatab
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }


    return(
        <section className="my-36">
            <div className="flex justify-center items-center">
            {/* <h1 className="text-rose-300 text-8xl">Contact Me</h1> */}
            </div>

            <div className="flex justify-center items-center"> 
 
            <div className= "bg-zinc-300/40 flex h-96 w-[45rem] my-11 rounded-3xl p-9 text-white">
                
                <div className="leading-10 my-12 h-60 w-[35rem]">
                    <p className="font-bold text-2xl drop-shadow-xl">Mail me at</p>
                    <p>hacktiger.as@gmail.com</p>
                    <p className="font-bold text-2xl drop-shadow-xl mt-12">Connect with me </p>
                    <ul className="flex flex-row space-x-6 drop-shadow-xl">
                      <li><a href="https://www.instagram.com/ayushtenguria" target="_blank"><InstagramIcon/></a></li>
                      <li><a href="https://www.linkedin.com/in/ayush-sharma-800853120/" target="_blank"><LinkedInIcon/></a></li>
                      <li><a href="https://www.github.com/ayushtenguria" target="_blank"><GitHubIcon/></a></li>
                      <li><a href="mailto:hacktiger.as@gmail.com" target="_blank"><MailIcon/></a></li>
                    </ul>
                    </div>


                <div className="justify-center ">
                    <h2 className="text-white text-3xl">Contact Me</h2>
                    <div className="flex flex-col my-4">
                      <form className="flex flex-col space-y-3 text-black" onSubmit={(e) => Submit(e)}>
                         <input className="h-10 rounded-3xl p-4" placeholder="Your Name" name="Name" type="text" />
                          <input className="h-10 rounded-3xl p-4" placeholder="Your Email" name="Email" type="text" />
                             <input className="h-32 rounded-3xl p-4" placeholder="Your Message" name="Message" type="text" />
                          <input className="bg-blue-400 cursor-pointer drop-shadow-2xl active:border-b-0 active:border-r-0  rounded-2xl h-10 border-b-4 border-r-4 border-slate-800" name="Name" type="submit" />
                     </form>
                     </div>
                 </div>

                    </div>             
                
                
            </div>

        </section>
    )
}
