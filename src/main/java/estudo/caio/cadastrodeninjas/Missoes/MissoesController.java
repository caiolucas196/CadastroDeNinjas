package estudo.caio.cadastrodeninjas.Missoes;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("missoes")

public class MissoesController {

    //CRIAR
    @PostMapping("/criar")
    public String CriarMissao() {
        return "Missão criada com sucesso";
    }
    //ALTERAR
    @PutMapping("/alterar")
    public String AlterarMissao() {
        return "Missão alterada com sucesso";
    }
    //LISTAR
    @GetMapping ("/listar")
    public String ListarMissao() {
        return "Missões listada com sucesso";
    }
    //DELETAR
    @DeleteMapping ("/deletar")
    public String DeletarMissao() {
        return "Missão deletada com sucesso";
    }
}