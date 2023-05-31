
export const Header = () => {
    return(
        <header className="">
            {/* <nav className="flex bg-white backdrop-blur-md ">
                <ul className="flex">
                    <li>home</li>
                    <li>Contact us</li>
                </ul>
            </nav> */}

            <div className="flex justify-center items-center m-6 p-6">
            <div className="w-[40rem] h-auto mx-7">
                <h1 className="text-rose-300 text-8xl">
                Transforming ideas into digital reality.
                </h1>
                <button className="rounded-full text-white p-3 bg-violet-400 hover:bg-violet-300 active:bg-violet-300 my-8">
                    Click to Connect
                </button>
            </div>
            <div className="mx-8 ">
                <img src="https://i.ibb.co/NSd2cr2/27470334-7309681-removebg-preview.png"></img>
            </div>
            </div>
        </header>
    )
}