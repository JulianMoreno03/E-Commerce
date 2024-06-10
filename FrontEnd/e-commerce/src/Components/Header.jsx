'use client'
import HeaderOption from "./headerOption";

export default function Header() {
    return (
        <section className="flex justify-evenly items-center gap-2 w-full h-14 ">

            <div className="mr-20" >
                <a
                    href="#">
                    <h1 className="text-2xl font-bold">Logo </h1>
                </a>
            </div>

            <form action="#" className=" flex gap-4">

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="bg-zinc-400 rounded-xl w-[300px] p-2 text-white outline-none placeholder:text-slate-200 hover:bg-zinc-500 duration-300 pl-10"
                    />
                    <img src="/icons/search.svg" alt="Search Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white" />
                </div>

                <button
                    type="submit"
                    className="bg-indigo-600 flex items-center px-6 py-1 rounded-xl text-white cursor-pointer hover:bg-indigo-400 duration-300">
                    <img src="/icons/search.svg" alt="Search Icon" className="w-4 h-4 mr-2" />
                
                    Buscar
                </button>
                </form>

            <div className="flex">
                <ul className="flex gap-4 cursor-pointer">

                    <HeaderOption url='#' urlIcon="icons/cart.svg" />
                    <HeaderOption url='#' urlIcon="icons/user.svg" />
                    <HeaderOption url='#' urlIcon="icons/question.svg" />
                </ul>
            </div>


        </section>
    )
}