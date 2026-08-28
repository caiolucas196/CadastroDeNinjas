package estudo.caio.cadastrodeninjas.Ninjas.Controller.Service;


import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NinjaService {

    public List<NinjaModel> listarNinjas;
    private NinjaRepository ninjaRepository;

    public NinjaService(NinjaRepository ninjaRepository) {
        this.ninjaRepository = ninjaRepository;
            }

    //LISTAR TODOS OS NINJAS
    public List<NinjaModel> findAll() {
        return ninjaRepository.findAll();
    }

    //LISTAR TODOS OS NINJAS POR ID
    public NinjaModel findById(Long id) {
        Optional<NinjaModel> ninjaPorID = ninjaRepository.findById(id);
        return ninjaPorID.orElse(null);

    }

    //CRIAR NINJAS
    public NinjaModel criarNinja(NinjaModel ninjaModel) {
        return ninjaRepository.save(ninjaModel);
    }

}
