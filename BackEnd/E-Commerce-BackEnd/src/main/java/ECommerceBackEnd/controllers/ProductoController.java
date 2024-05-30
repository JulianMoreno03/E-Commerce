package ECommerceBackEnd.controllers;

import ECommerceBackEnd.entities.ProductosEntity;
import ECommerceBackEnd.respositories.ProductoRepository;
import ECommerceBackEnd.services.ProductosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    ProductosService productosService;

    @GetMapping
    public ArrayList<ProductosEntity> ListarProductos(){
        return productosService.ListarProductos();
    }

    @PostMapping
    public ProductosEntity GuardarProducto(@RequestBody ProductosEntity producto){
    return productosService.GuardarProducto(producto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductosEntity> ObtenerProductoPorId(@PathVariable int id) {
        ProductosEntity producto = productosService.BuscarProductoPorId(id);
        if (producto != null) {
            return ResponseEntity.ok(producto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
