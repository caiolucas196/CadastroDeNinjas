package estudo.caio.cadastrodeninjas.Ninjas.Controller.Service;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ninja")


public class NinjaController {


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

    // Mostrar todos os Ninjas  (CREATE)
    @PostMapping("/listar")
    public String todos() {
        return "Mostrar Ninja";
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
