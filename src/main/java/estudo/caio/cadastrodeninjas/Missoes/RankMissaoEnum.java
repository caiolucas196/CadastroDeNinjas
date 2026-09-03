package estudo.caio.cadastrodeninjas.Missoes; // Ajuste para o pacote das missões

public enum RankMissaoEnum {
    RANK_D("Rank D", "Missões de nível civil e tarefas domésticas sem risco de combate."),
    RANK_C("Rank C", "Missões com baixo risco de confronto com outros ninjas (escoltas simples ou caça a animais)."),
    RANK_B("Rank B", "Missões de média dificuldade voltadas para shinobi, com grande chance de combate contra outros mercenários."),
    RANK_A("Rank A", "Missões de alta periculosidade envolvendo escolta de pessoas importantes ou conflitos militares estatais."),
    RANK_S("Rank S", "Missões de nível ultra-secreto e perigo máximo, reservadas para ninjas de elite, envolvendo assassinatos de alto escalão ou salvamentos críticos."),
    Rank_SS("Rank SS","Missões de nível Kage, onde só eles poderiam resolver qualquer tipo de problema que for."),
    Rank_SSS("Rank SS+","Missões onde a probabilidade de morte de quem assumi-las, é quase certa, independente do nível");


    private final String nome;
    private final String descricao;

    RankMissaoEnum(String nome, String descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }
}