package estudo.caio.cadastrodeninjas.Ninjas.Controller.Service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ninjas")


public class NinjaController {

    private NinjaService ninjaService;

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

    // Mostrar todos os Ninjas  (READ)
    @GetMapping("/listar")
    public List<NinjaDTO> listarNinjas() {
        return ninjaService.findAll();
    }

    // Procurar Ninjas Por ID (READ)
    @GetMapping("/listar/{id}")
    public NinjaDTO listarNinjas(@PathVariable Long id) {
        return  ninjaService.findById(id);
    }

    // ALterar dados dos Ninjas (UPDATE)
    @PutMapping ("/alterar/{id}")
    public NinjaDTO alterarNinjaPorID(@PathVariable Long id, @RequestBody NinjaModel ninjaAtualizado) {
        return ninjaService.atualizarNinja(id, ninjaAtualizado);
    }

    //Deletar o ninja
    @DeleteMapping("/deletar/{id}")
    public String deletarNinjaPorId(@PathVariable Long id) {
        return "Ninja Deletado por id";
    }



}
