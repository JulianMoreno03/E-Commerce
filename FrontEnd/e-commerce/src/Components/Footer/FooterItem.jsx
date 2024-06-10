"use client";
import Image from "next/image"
import Link from "next/link";

export default function FooterItem({ img, categoria, idCategoria }) {


    return (
        <Link href={`/categoria/${idCategoria}`} className="m-5 duration-300 hover:scale-105 cursor-pointer   ">
            <div className="overflow-x-hidden w-[200px] h-[180px] flex flex-col justify-center items-center rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-800 ">

                <Image src={img} className="flex flex-1 items-center justify-center rounded-t-lg overflow-auto "
                    width={300}
                    height={250} />

                <p className="text-white font-bold text-center p-3">
                    {categoria}
                </p>
            </div>
        </Link>
    )
}