package estudo.caio.cadastrodeninjas.Ninjas.Controller.Service;


import org.springframework.stereotype.Service;

import java.util.List;

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
}
