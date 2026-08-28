package estudo.caio.cadastrodeninjas.Missoes;

import com.fasterxml.jackson.annotation.JsonIgnore;
import estudo.caio.cadastrodeninjas.Ninjas.Controller.Service.NinjaModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;



@Entity
@Table(name = "tb_missoes")
@NoArgsConstructor
@AllArgsConstructor
@Data


public class MissoesModel {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)

     private Long id;
     private String nome;
     private String dificuldade;

     @OneToMany (mappedBy = "missoes")
     @JsonIgnore
     private List<NinjaModel> ninjas;


}

