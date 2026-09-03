package estudo.caio.cadastrodeninjas.Ninjas.Controller.Service;


import estudo.caio.cadastrodeninjas.Missoes.MissoesModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Entity
@Table(name = "tb_cadastro")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "missoes")


public class NinjaModel {

    @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    @Column (unique = true) //coluna unica
    private String email;
    @Column (name = "img_url")
    private String imgUrl;
    private int idade;

    @Enumerated(EnumType.STRING)
    @Column(name = "`rank`")
    private RankEnum rank;


    // Um ninja tem uma unica missão
    @ManyToOne
    @JoinColumn(name = "missoes_id") // Chave Estrangeira
    private MissoesModel missoes;






}


