package estudo.caio.cadastrodeninjas.Ninjas.Controller.Service;

public class NinjaMapper {

    public  NinjaModel mapNinjaDTOtoModel(NinjaModel ninjaDTO) {
        NinjaModel ninjaModel = new NinjaModel();
        ninjaModel.setId(ninjaDTO.getId());
        ninjaModel.setNome(ninjaDTO.getNome());
        ninjaModel.setIdade(ninjaDTO.getIdade());
        ninjaModel.setRank(ninjaDTO.getRank());
        ninjaModel.setImgUrl(ninjaDTO.getImgUrl());
        ninjaModel.setMissoes(ninjaDTO.getMissoes());

        return ninjaModel;
    }

    public NinjaDTO mapNinjaModeltoDTO(NinjaModel ninjaModel) {
        NinjaDTO ninjaDTO = new NinjaDTO();
        ninjaDTO.setId(ninjaModel.getId());
        ninjaDTO.setNome(ninjaModel.getNome());
        ninjaDTO.setIdade(ninjaModel.getIdade());
        ninjaDTO.setRank(ninjaModel.getRank());
        ninjaDTO.setImgUrl(ninjaModel.getImgUrl());
        ninjaDTO.setMissoes(ninjaModel.getMissoes());

        return ninjaDTO;
        }

}
