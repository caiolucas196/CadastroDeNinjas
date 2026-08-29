package estudo.caio.cadastrodeninjas.Ninjas.Controller.Service;

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
    public NinjaModel criarNinja(@RequestBody NinjaModel ninjaModel) {
        return ninjaService.criarNinja(ninjaModel);
    }

    // Mostrar todos os Ninjas  (READ)
    @GetMapping("/listar")
    public List<NinjaModel> listarNinjas() {
        return ninjaService.findAll();
    }

    // Procurar Ninjas Por ID (READ)
    @GetMapping("/listar/{id}")
    public NinjaModel listarNinjas(@PathVariable Long id) {
        return  ninjaService.findById(id);
    }

    // ALterar dados dos Ninjas (UPDATE)
    @PutMapping ("/alterarID")
    public String alterarNinjaPorID() {
        return "Alterar Ninja por ID";
    }

    // Deletar Ninja (DELETE)
    @DeleteMapping("/deletarID")
    public String deletarNinjaPorID() {
        return "Ninja deletado por ID";
    }

}
