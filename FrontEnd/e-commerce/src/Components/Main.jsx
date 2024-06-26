import laptopImg from '../img/laptopDesc.png';
import Image from 'next/image';
export default function Main() {
    return (
        <section className=" p-1 lg:grid lg:grid-cols-[2fr,1fr] justify-center items-center gap-5
        flex flex-col">

            <div className="w-[500px] h-full shadow-lg shadow-indigo-500 rounded-xl grid grid-cols-2 bg-gradient-to-r from-indigo-500 to-indigo-800">
                <div className='flex flex-col gap-3 ml-5'>
                    <h2
                        className='text-3xl font-bold  text-white mt-2 w-1/2'>Gran oferta
                    </h2>
                    <p
                        className='w-[200px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, placeat?
                    </p>

                    <button type="submit"
                        className="bg-indigo-800 border border-indigo-700 font-bold px-4 py-1 m-2 rounded-xl w-1/2 text-white cursor-pointer hover:bg-indigo-400 duration-300">
                        Ver mas</button>
                </div>

                <figure className= "mt-5">
                <Image src= {laptopImg} alt="img de producto en descuento " className='  lg:w-full ' />
                </figure>
           
            </div>


            <div className=" flex flex-col gap-14 ">

                <a href="#"
                    className=" shadow-lg shadow-indigo-500 lg:flex lg:flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-indigo-800  rounded-xl h-[100px] w-">
                    <p className='text-lg text-white w-4/5 '>Obten un
                        <span className='p-1 text-2xl text-yellow-400 font-bold' > 20% </span>
                        en tecnologia
                    </p>
                </a>

                <div className=" shadow-lg shadow-cyan-500 h-[100px] grid grid-cols-2 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl">

                    <div className='flex flex-col justify-center items-center '>
                        <p className='text-2xl text-white font-bold'> Laptop HP</p>

                        <button type='submit' className=' font-bold bg-cyan-700 border border-cyan-600 px-5 py-1 rounded-xl mt-2 text-white
                        hover:bg-cyan-600 hover:border-cyan-500 duration-300'  >
                        Comprar 
                        </button>
                    </div>

                    <figure className= "w-full h-full">
                     <Image src= {laptopImg}  alt="img de producto en descuento " className=' p-3 w-full h-100px'/>
                     </figure>
           
                </div>

            </div>
        </section>
    )
}