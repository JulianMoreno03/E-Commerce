package ECommerceBackEnd.services;

import ECommerceBackEnd.entities.CategoriaEntity;
import ECommerceBackEnd.entities.ProductosEntity;
import ECommerceBackEnd.respositories.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ProductosService {
    @Autowired
    ProductoRepository productoRepository;


    //Obtener todos los productos
    public ArrayList<ProductosEntity>ListarProductos(){
        return (ArrayList<ProductosEntity>) productoRepository.findAll();
    }


    //Para guardar un producto
    public ProductosEntity GuardarProducto(ProductosEntity producto){
        return  productoRepository.save(producto);
    }

}
