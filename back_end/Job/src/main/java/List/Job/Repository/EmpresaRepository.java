package List.Job.Repository;

import List.Job.Entities.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface EmpresaRepository extends JpaRepository<Empresa,Integer> {

    @Query("SELECT e FROM Empresa e WHERE e.id = :id")
    Optional<Empresa> findByIdNoVagas(Long id);
}
