"use client";
import { useEffect, useState } from 'react';
import { obtenerProductosPorCategoria } from '../../../Services/api';
import Header from '../../../Components/Header/Header';
import AsideFiltro from '../../../Components/AsideBar/AsideFiltro';
import MainProducts from '../../../Components//Producto/MainProducts';
export default function CategoriaPage({params}){
    //Obtenemos el id de la categoria y lo pasamos como parametro a nuestro component mainProducts
    const { idCategoria } = params;
 
   
    return (
        <main>
            <header>
            <Header />
            </header>
      
      <section  className="grid grid-cols-[200px,1fr] h-full overflow-hidden ">
            <aside>
            <AsideFiltro/>
            </aside>

            <article>
            <MainProducts idCategoria={idCategoria}/>
            </article>
      </section>

       
    </main>
    );
};

