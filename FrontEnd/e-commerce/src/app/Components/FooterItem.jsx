import Image from "next/image"
export default function FooterItem({img, categoria}){
    return(
        <a href="" className="m-5 duration-300 hover:scale-105   ">
        <div className="overflow-x-hidden w-[200px] h-[180px] flex flex-col justify-center items-center rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-800 ">

        <Image src= {img} className = "flex flex-1 items-center justify-center rounded-t-lg overflow-auto "
        width={300}
        height={250}/>

        <p className="text-white font-bold text-center p-3">
            {categoria}
        </p>
        </div>
        </a>
    )
}