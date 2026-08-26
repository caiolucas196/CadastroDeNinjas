package estudo.caio.cadastrodeninjas.Missoes;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public class ControllerMissoes {
    @RestController
    @RequestMapping


    public class controllerMissoes {


        @GetMapping("/missoes")

        public String boasVindas() {
            return "Essa é pagina de missoes!";

        }


    }






}
