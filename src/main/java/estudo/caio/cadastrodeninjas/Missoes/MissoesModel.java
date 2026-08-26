package estudo.caio.cadastrodeninjas.Missoes;

import estudo.caio.cadastrodeninjas.Ninjas.Controller.Service.NinjaModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

public class MissoesModel {

    @Entity
    @Table(name = "tb_missoes")
    @NoArgsConstructor
    @AllArgsConstructor
    @Data
    public class missoesModel {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)

        private Long id;
        private String nome;
        private String dificuldade;

        @OneToMany (mappedBy = "missoes")
        private List<NinjaModel> ninjas;


}


}
