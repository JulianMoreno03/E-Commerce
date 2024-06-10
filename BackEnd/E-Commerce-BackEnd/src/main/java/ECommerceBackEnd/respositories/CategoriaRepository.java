package ECommerceBackEnd.respositories;

import ECommerceBackEnd.entities.CategoriaEntity;
import ECommerceBackEnd.entities.ProductosEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface CategoriaRepository extends CrudRepository<CategoriaEntity, Integer> {
    CategoriaEntity findById(int id);

}
