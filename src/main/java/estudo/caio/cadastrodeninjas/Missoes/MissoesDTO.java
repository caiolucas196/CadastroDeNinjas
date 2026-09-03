package estudo.caio.cadastrodeninjas.Missoes;

import com.fasterxml.jackson.annotation.JsonIgnore;
import estudo.caio.cadastrodeninjas.Ninjas.Controller.Service.NinjaModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MissoesDTO {

    private Long id;
    private String nome;
    private String rank;
    @JsonIgnore
    private List<NinjaModel> ninjas;

}