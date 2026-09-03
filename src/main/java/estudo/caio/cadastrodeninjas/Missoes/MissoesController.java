package estudo.caio.cadastrodeninjas.Missoes;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/missoes")
@CrossOrigin(origins = "*")

public class MissoesController {

    private final MissoesService missoesService;

    public MissoesController(MissoesService missoesService) {
        this.missoesService = missoesService;
    }

    @GetMapping("/boasvindas")
    public String boasVindas() {
        return "Essa é minha primeira mensagem da rota de missões";
    }

    @PostMapping("/criar")
    public ResponseEntity<String> criarMissao(@RequestBody MissoesModel missoesModel) {
        MissoesDTO missaoCriada = missoesService.criarMissao(missoesModel);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body("Nova missão cadastrada com sucesso -> "
                        + missaoCriada.getNome() + " (Id): " + missaoCriada.getId());
    }

    @GetMapping("/listar")
    public ResponseEntity<List<MissoesDTO>> listarMissoes() {
        List<MissoesDTO> missoes = missoesService.findAll();
        return ResponseEntity.ok(missoes);
    }

    @GetMapping("/listar/{id}")
    public ResponseEntity<?> listarMissoes(@PathVariable Long id) {
        MissoesDTO missoes = missoesService.findById(id);
        if (missoes != null) {
            return ResponseEntity.ok(missoes);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Missão/Id não encontrada");
        }
    }

    @PutMapping("/alterar/{id}")
    public ResponseEntity<?> alterarMissaoPorID(@PathVariable Long id, @RequestBody MissoesModel missaoAtualizada) {
        MissoesDTO missoes = missoesService.atualizarMissao(id, missaoAtualizada);
        if (missoes != null) {
            return ResponseEntity.ok(missoes);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).
                    body("Missão/Id não encontrada");
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletarMissaoPorId(@PathVariable Long id) {
        if (missoesService.findById(id) != null) {
            missoesService.deletarMissaoPorId(id);
            return ResponseEntity.ok("Missão com o ID: " + id + " deletada com sucesso");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("A missão com id " + id + " não encontrada");
        }
    }
}