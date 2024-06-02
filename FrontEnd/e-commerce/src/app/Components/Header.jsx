export default function Header(){
    return(
       <section className="flex justify-evenly items-center gap-2 w-full h-14">
    
        <div className="mr-20" >
            <a 
            href="#">
            <h1 className="text-2xl font-bold">Logo </h1>
            </a>
        </div>

        <form action="#" className=" flex gap-4">

            <input type="text"placeholder="Buscar" 
            className="bg-zinc-400 rounded-xl w-[300px] p-1 text-white outline-none placeholder:text-slate-100"/>

            <input type="submit" value="buscar" 
            className="bg-indigo-600 px-6 py-1 rounded-xl text-white cursor-pointer hover:bg-indigo-400 duration-300" />
        </form>

        <div className="flex">
            <ul className="flex gap-2">
                <li><a href="#"></a>ICONO</li>
                <li><a href="#"></a>ICONO</li>
                <li><a href="#"></a>ICONO</li>

            </ul>
        </div>
            
    
       </section>
    )
}