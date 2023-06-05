import { BigCard } from "./BigCard"
import { SmallCard } from "./SmallCard"

export const WorkExperience = () => {
    return(
        <section className="">
            <div className="flex justify-center">
                <img className="" src=""></img>
             <h1 className="text-rose-300 text-8xl">Portfolio</h1>
            </div>

            <div className="flex justify-center items-center">
            <div className="flex-row justify-center items-center">
            <BigCard/>
            <div className="flex space-x-10">
            <SmallCard/>  
            <SmallCard/>           
            </div>
            </div>
</div>

        </section>
    )
}