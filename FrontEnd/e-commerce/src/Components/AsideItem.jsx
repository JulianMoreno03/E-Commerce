import Image from "next/image";
import Link from "next/link";
export default function AsideItem({categoria}){
    return(
        
        <li className="p-2 gap-3 bg-violet-400 w-[100px] text-white duration-300 transition-all rounded hover:w-full hover:bg-violet-600 cursor-pointer ">
          <Link 
          href={`categoria/${categoria}`}>  
          {categoria}
          </Link>
  
        </li>
      
    )
}