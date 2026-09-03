package estudo.caio.cadastrodeninjas.Missoes;

import estudo.caio.cadastrodeninjas.Missoes.MissoesModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MissoesService {

    private final MissoesRepository missoesRepository;
    private final MissoesMapper missoesMapper;

    // Construtor: Aqui injetamos o Repository e instanciamos o Mapper
    public MissoesService(MissoesRepository missoesRepository) {
        this.missoesRepository = missoesRepository;
        this.missoesMapper = new MissoesMapper(); // Instanciando o mapper de missões
    }

    // LISTAR TODAS AS MISSÕES
    public List<MissoesDTO> findAll() {
        List<MissoesModel> missoes = missoesRepository.findAll();
        return missoes.stream()
                .map(missoesMapper::mapMissoesModeltoDTO) // Converte a lista de Model para DTO
                .collect(Collectors.toList());
    }

    // LISTAR MISSÃO POR ID
    public MissoesDTO findById(Long id) {
        Optional<MissoesModel> missaoPorID = missoesRepository.findById(id);
        return missaoPorID.map(missoesMapper::mapMissoesModeltoDTO).orElse(null);
    }

    // CRIAR MISSÃO
    public MissoesDTO criarMissao(MissoesModel missoesModel) {
        // 1. O Controller já enviou um Model, então salvamos direto no banco
        MissoesModel missaoSalva = missoesRepository.save(missoesModel);

        // 2. Transforma o Model salvo em DTO para retornar na resposta (escondendo dados sensíveis, se houvesse)
        return missoesMapper.mapMissoesModeltoDTO(missaoSalva);
    }

    // ATUALIZAR MISSÃO
    public MissoesDTO atualizarMissao(Long id, MissoesModel missoesAtualizada) {
        Optional<MissoesModel> missaoPorID = missoesRepository.findById(id);

        if (missaoPorID.isPresent()) {
            // Garante que o ID será o mesmo que o usuário passou na URL
            missoesAtualizada.setId(id);

            // Salva as alterações
            MissoesModel missaoSalva = missoesRepository.save(missoesAtualizada);

            // Retorna como DTO
            return missoesMapper.mapMissoesModeltoDTO(missaoSalva);
        }
        return null; // Retorna null se não encontrar a missão com esse ID
    }

    // DELETAR MISSÃO
    public void deletarMissaoPorId(Long id) {
        missoesRepository.deleteById(id);
    }
}