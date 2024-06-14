import { useEffect, useState } from 'react';
import { obtenerProductoPorId } from '../../Services/api';
import Image from 'next/image';
export default function Producto({ idProducto }) {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        async function fecthProducto() {
            try {
                const producto = await obtenerProductoPorId({ idProducto });
                setProducto(producto);
            } catch (error) {
                console.error("Error al obtener producto:", error);
            }
        }
        fecthProducto();
    }, []);
    return (
        <section className='grid grid-cols-2 justify-evenly items-center h-1/2  w-[800px] gap-10'>
            <div className='w-[400px] bg-indigo-700  flex justify-center items-center rounded-lg'>
                <Image
                    src={producto.imgUrl}
                    width={250}
                    height={100}
                    className='rounded-lg  m-4 h-[250px]'>
                </Image>
            </div>
            <div className='gap-3  flex flex-col justify-evenly h-full border-l-4'>
                <div className='flex flex-col justify-evenly h-full text-xl' >
                    <p className='font-bold '>{producto.producto}</p>
                    <p className=' w-3/4'>{producto.descripcion}</p>
                    <p className='font-bold p-1 border border-zinc-800 w-[70px] rounded-lg'>${producto.precio}</p>

                </div>
                <div className=' flex justify-evenly cursor-pointer'>
                    <a className="flex items-center px-6 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-400 duration-300">
                        <img src="/icons/cartWhite.svg  " alt="comprar" className="mr-2" />
                        Comprar
                    </a>  
                    <a className="flex items-center px-6 py-2 border-zinc-800 border  rounded-lg hover:bg-red-500 hover:border-zinc-100 duration-300">
                        <img src="/icons/heart.svg  " alt="comprar" className="mr-2" />
                        Favorito
                    </a>    
                </div>
            </div>
        </section>
    )
}