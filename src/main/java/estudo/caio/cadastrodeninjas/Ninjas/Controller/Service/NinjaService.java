package estudo.caio.cadastrodeninjas.Ninjas.Controller.Service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class NinjaService {

    private final NinjaRepository ninjaRepository;
    private final NinjaMapper ninjaMapper;

    // Construtor: Aqui injetamos o Repository e instanciamos o Mapper
    public NinjaService(NinjaRepository ninjaRepository) {
        this.ninjaRepository = ninjaRepository;
        this.ninjaMapper = new NinjaMapper(); // Instanciando o mapper que você criou
    }

    // LISTAR TODOS OS NINJAS
    public List<NinjaDTO> findAll() {
        List<NinjaModel> ninjas = ninjaRepository.findAll();
        return ninjas.stream()
                .map(ninjaMapper::mapNinjaModeltoDTO) // Usando o método correto do seu Mapper
                .collect(Collectors.toList());
    }

    // LISTAR TODOS OS NINJAS POR ID
    public NinjaDTO findById(Long id) {
        Optional<NinjaModel> ninjaPorID = ninjaRepository.findById(id);
        return ninjaPorID.map(ninjaMapper::mapNinjaModeltoDTO).orElse(null);
    }

    // CRIAR NINJAS
    public NinjaDTO criarNinja(NinjaModel ninjaDTO) {
        // 1. Transforma o DTO que chegou em Model para o banco de dados salvar
        NinjaModel ninja = ninjaMapper.mapNinjaDTOtoModel(ninjaDTO);

        // 2. Salva no banco de dados
        ninja = ninjaRepository.save(ninja);

        // 3. Transforma o Model de volta em DTO para retornar na resposta
        return ninjaMapper.mapNinjaModeltoDTO(ninja);
    }

    // ATUALIZAR NINJA
    public NinjaDTO atualizarNinja(Long id, NinjaModel ninjaDTO) {
        Optional<NinjaModel> ninjaPorID = ninjaRepository.findById(id);

        if (ninjaPorID.isPresent()) {
            // Converte o DTO recebido para Model
            NinjaModel ninjaAtualizado = ninjaMapper.mapNinjaDTOtoModel(ninjaDTO);
            // Garante que o ID será o mesmo que o usuário passou na URL
            ninjaAtualizado.setId(id);

            // Salva as alterações
            NinjaModel ninjaSalvo = ninjaRepository.save(ninjaAtualizado);

            // Retorna como DTO
            return ninjaMapper.mapNinjaModeltoDTO(ninjaSalvo);
        }
        return null; // Retorna null se não encontrar o ninja com esse ID
    }
}