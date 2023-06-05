import WebDev from "../../Assets/WebDev.png"

export const Card = (props) => {
    return(
        <>
        <div className="bg-zinc-300/40 h-96 w-64 rounded-3xl text-white">
            <div className="flex">
                <img className="cardImg" src={props.image}></img>
            </div>
            <div className="items-center text-center">
                <h3 className="font-bold my-4 text-2xl">
                    {props.head}
                </h3>
                <p className="my-4">
                    {props.body}
                </p>
            </div>
            
        </div>

        </>
    )
}

// import WebDev from "../../Assets/WebDev.png";

// export const Card = (props) => {
//   return (
//     <>
//       <div className="bg-zinc-300/40 h-96 md:w-64 rounded-3xl text-white flex flex-col justify-between">
//         <div>
//           <img className="cardImg h-1/2" src={props.image} alt="Card Image" />
//         </div>
//         <div className="flex flex-col justify-center items-center p-4">
//           <h3 className="font-bold my-4 text-2xl text-center">{props.head}</h3>
//           <p className="my-4 text-center">{props.body}</p>
//         </div>
//       </div>
//     </>
//   );
// };
