"use client";
import Image from "next/image";
import Link from "next/link";
export default function Producto({producto,marca,precio,imgUrl}){
    return(
        <div className="grid grid-cols-[200px,1fr] mt-5 mr-3 justify-center items-center w-[450px] h-[200px]  bg-indigo-600 rounded-lg ">
           <figure className="p-2 w-full h-full  overflow-auto duration-300 hover:scale-105">
           <Image 
                src={imgUrl} 
                className="w-full h-full rounded-lg overflow-auto hover:rounded-md "
                width={150}
                height={100}
            />
           </figure>
            
            <div className="p-3 gap-2 flex flex-col justify-evenly items-center text-zinc-200 ">
                <p className="w-3/4">Producto: <span className="font-bold text-white">{producto}</span></p>
                <p className="w-3/4">Precio: $<span className="font-bold text-white">{precio}</span></p>
                <p className="w-3/4">Marca: <span className="font-bold text-white">{marca}</span></p>

                <Link href={'#'} className="px-6 py-2 mt-2 bg-indigo-900 rounded-lg font-bold hover:bg-indigo-800 hover:border-indigo-700 duration-300">
                Ver más detalles
                </Link>
            </div>
        </div>
    )
}