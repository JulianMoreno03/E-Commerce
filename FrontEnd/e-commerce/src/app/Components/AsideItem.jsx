export default function AsideItem({url, nombre}){
    return(
        
        <li className="p-2 gap-3 bg-zinc-400 w-[100px] text-white duration-300 transition-all rounded hover:w-full hover:bg-zinc-600 cursor-pointer ">
          <a className="" href={url}>
            {nombre}</a>
          </li>
      
    )
}