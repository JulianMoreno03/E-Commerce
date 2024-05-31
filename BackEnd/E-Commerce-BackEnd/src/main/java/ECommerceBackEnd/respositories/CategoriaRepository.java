package ECommerceBackEnd.respositories;

import ECommerceBackEnd.entities.CategoriaEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends CrudRepository<CategoriaEntity, Integer> {

    CategoriaEntity findById(int id);
}
