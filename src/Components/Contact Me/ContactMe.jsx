import { useForm } from "react-hook-form";


const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <section className="">
            <div className="flex justify-center items-center">
            {/* <h1 className="text-rose-300 text-8xl">Contact Me</h1> */}
            </div>

            <div className="flex justify-center items-center"> 
 
            <div className= "bg-zinc-300/40 flex h-96 w-[45rem] my-11 rounded-3xl p-9 text-white">
                
                <div className="leading-10 h-60 w-[35rem]">
                    <p>Connect with me </p>
                    <p>Mail me at</p>
                    </div>


                <div className="justify-center items-center">
                    <h2 className="text-white text-3xl">Contact Me</h2>

                <form className="text-black my-10" onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="my-5" defaultValue="Name" {...register("example")} />
                    
                    {/* include validation with required or other standard HTML validation rules */}
                    <input className="my-5" {...register("exampleRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <input type="submit" />
                    </form>
                    </div>             
                
                
            </div>
            </div>
        </section>
    )
}

export default Contact;