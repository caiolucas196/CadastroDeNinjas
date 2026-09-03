package estudo.caio.cadastrodeninjas.Ninjas.Controller.Service;

import jakarta.persistence.Id;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ninjas")


public class NinjaController {

    private final NinjaService ninjaService;

    public NinjaController(NinjaService ninjaService) {
        this.ninjaService = ninjaService;
    }

    @GetMapping("/boasvindas")

    public String boasVindas() {
        return "Essa é minha primeira mensagem";

    }

    // Criando o CRUD

    // Add ninja (CREATE)
    @PostMapping("/criar")
    public ResponseEntity<String> criarNinja(@RequestBody NinjaModel ninjaModel) {
        // Criando uma nova variável com nome diferente:
        NinjaDTO ninjaCriado = ninjaService.criarNinja(ninjaModel);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body("Novo ninja cadastrado com sucesso -> "
                        + ninjaCriado.getNome() + " (Id): " + ninjaCriado.getId());
    }

    // Mostrar todos os Ninjas (READ)
    @GetMapping("/listar")
    public ResponseEntity<List<NinjaDTO>> listarNinjas() {
        List<NinjaDTO> ninjas = ninjaService.findAll();
        // Retorna Status 200 OK e a lista de ninjas no corpo
        return ResponseEntity.ok(ninjas);
    }

    // Procurar Ninjas Por ID (READ)
    @GetMapping("/listar/{id}")
    public ResponseEntity<?> listarNinjas(@PathVariable Long id) {
        NinjaDTO ninja = ninjaService.findById(id);
        if (ninja != null) {
            return ResponseEntity.ok(ninja);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Ninja/Id não encontrado");

        }
    }

    // Alterar dados dos Ninjas (UPDATE)
    @PutMapping ("/alterar/{id}")
    public ResponseEntity<?> alterarNinjaPorID(@PathVariable Long id, @RequestBody NinjaModel ninjaAtualizado) {
        NinjaDTO ninja = ninjaService.atualizarNinja(id, ninjaAtualizado);
        if (ninja != null) {
            return ResponseEntity.ok(ninja);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).
                    body("Ninja/Id não encontrado");
        }
    }

    //Deletar o ninja
    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<String> deletarNinjaPorId(@PathVariable Long id) {
        if (ninjaService.findById(id) != null) {
            ninjaService.deletarNinjaPorId(id);
            return ResponseEntity.ok("Ninja com o ID: " + id + " deletado com sucesso");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("O ninja com id " + id + " não encontrado");
        }
    }



}
