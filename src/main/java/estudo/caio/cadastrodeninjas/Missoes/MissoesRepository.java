package estudo.caio.cadastrodeninjas.Missoes;

import estudo.caio.cadastrodeninjas.Missoes.MissoesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MissoesRepository extends JpaRepository<MissoesModel, Long> {

}