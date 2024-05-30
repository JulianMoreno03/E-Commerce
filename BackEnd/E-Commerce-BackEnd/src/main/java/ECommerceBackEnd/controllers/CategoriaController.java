package ECommerceBackEnd.controllers;
import ECommerceBackEnd.entities.CategoriaEntity;
import ECommerceBackEnd.services.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    CategoriaService categoriaService;

    //LLamando a llamar las funciones desde mi services
    //Funcion para obtener todas las categorias
    @GetMapping()
    public ArrayList<CategoriaEntity> ListarCategorias(){
        return categoriaService.ListarCategorias();
    }

    //Para poder ingresar las categorias
    @PostMapping()
    public CategoriaEntity IngresarCategoria(@RequestBody CategoriaEntity categoria){
        return categoriaService.GuardarCategoria(categoria);
    }

}
