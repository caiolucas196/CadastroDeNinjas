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
    public String criar() {
        return "Ninja Criado";
    }

    // Mostrar todos os Ninjas  (READ)
    @GetMapping("/listar")
    public List<NinjaModel> listarNinjas() {
        return ninjaService.findAll();
    }

    // Procurar Ninjas Por ID (READ)
    @PostMapping("/listarID")
    public String todosID() {
        return "Mostrar Ninja por ID";
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
