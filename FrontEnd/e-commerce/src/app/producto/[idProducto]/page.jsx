"use client";

import Header from '../../../Components/Header/Header';
import Producto from '../../../Components/Producto/Producto';
import FooterProducto from '../../../Components/Footer/FooterProducto';
export default function Page({params}){
    const { idProducto } = params;


    return(
      <main>
        <header>
          <Header></Header>
        </header>
    
        <section className='flex justify-center items-center w-full h-full mt-10'>
          <Producto idProducto={idProducto}/>

        </section>
        
        <footer className='flex justify-center items-center w-full h-full mt-10'>
          <FooterProducto idProducto={idProducto}/>
        </footer>
        </main>
    )
}