import Image from "next/image";
export default function AsideItem({url, categoria}){
    return(
        
        <li className="p-2 gap-3 bg-violet-400 w-[100px] text-white duration-300 transition-all rounded hover:w-full hover:bg-violet-600 cursor-pointer ">
          <a className="" href={url}>
            {categoria}</a>

            
        </li>
      
    )
}