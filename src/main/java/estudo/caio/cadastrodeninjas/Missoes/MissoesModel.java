package estudo.caio.cadastrodeninjas.Missoes;

import com.fasterxml.jackson.annotation.JsonIgnore;
import estudo.caio.cadastrodeninjas.Ninjas.Controller.Service.NinjaModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Entity
@Table(name = "tb_missoes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "ninjas")


public class MissoesModel {

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;

     private String nome;

     @Column
     private String rank;

     // Uma missão pode ter vários ninjas vinculados a ela.
     // O "mappedBy" avisa ao JPA que a chave estrangeira já foi criada lá na classe NinjaModel, no atributo "missoes"
     @OneToMany(mappedBy = "missoes")
     @JsonIgnore
     private List<NinjaModel> ninjas;

}

