package List.Job.Repository;

import List.Job.Entities.Emprego;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmpregoRepository extends JpaRepository<Emprego, Integer> {
}
