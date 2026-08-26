package estudo.caio.cadastrodeninjas.Missoes;

import estudo.caio.cadastrodeninjas.Ninjas.Controller.Service.NinjaModel;
import jakarta.persistence.*;

import java.util.List;

public class MissoesModel {

    @Entity
    @Table(name = "tb_missoes")
    public class missoesModel {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)

        private Long id;
        private String nome;
        private String dificuldade;

        @OneToMany (mappedBy = "missoes")
        private List<NinjaModel> ninjas;
        public Long getId() {
            return id;
        }
        public void setId(Long id) {
            this.id = id;
        }
        public String getNome() {
            return nome;
        }
        public void setNome(String nome) {
            this.nome = nome;
        }
        public String getDificuldade() {
            return dificuldade;
        }
        public void setDificuldade(String dificuldade) {
            this.dificuldade = dificuldade;
        }
        public List<NinjaModel> getNinjas() {
            return ninjas;
        }
        public void setNinjas(List<NinjaModel> ninjas) {
            this.ninjas = ninjas;
        }

}


}
