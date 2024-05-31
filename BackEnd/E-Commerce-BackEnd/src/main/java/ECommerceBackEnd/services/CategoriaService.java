package ECommerceBackEnd.services;

import ECommerceBackEnd.entities.CategoriaEntity;
import ECommerceBackEnd.respositories.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CategoriaService {

    @Autowired
    CategoriaRepository categoriaRepository;

    //Metodo para obtener todas las categorias
    public ArrayList<CategoriaEntity> ListarCategorias(){
       return (ArrayList<CategoriaEntity>) categoriaRepository.findAll();
    }

    public CategoriaEntity GuardarCategoria(CategoriaEntity categoria){
        return  categoriaRepository.save(categoria);
    }

    public CategoriaEntity BuscarCategoriaPorId(int id){
        return categoriaRepository.findById(id);
    }

}
