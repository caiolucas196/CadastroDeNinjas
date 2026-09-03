package estudo.caio.cadastrodeninjas.Ninjas.Controller.Service; // Ajuste para o seu pacote

public enum RankNinjaEnum {
    ESTUDANTE("Estudante", "Crianças que aprendem o básico de combate, manuseio de armas e teoria ninja antes de se formarem."),
    GENIN("Genin", "Ninjas recém-formados que realizam missões de nível mais baixo (Rank D e C), formando equipes de três lideradas por um Jounin."),
    CHUUNIN("Chuunin", "O nível intermediário; shinobi aptos a liderar equipes e tomar decisões táticas, formados após passarem pelo Exame Chuunin."),
    JOUNIN("Jounin", "A elite regular da vila; ninjas altamente qualificados que executam missões perigosas (Rank A e B) e treinam os novos Genin."),
    JOUNIN_ESPECIAL("Jounin Especial", "Shinobi com especialização extrema em uma única área, como interrogatório ou rastreio, mas com nível de combate variável."),
    ANBU("ANBU", "Força de elite secreta subordinada diretamente ao Kage, focada em assassinatos, infiltração e resgates de alto risco."),
    KAGE("Kage", "O posto máximo de liderança militar e política de uma vila oculta, reservado para o ninja mais poderoso do local."),
    LENDARIO("Lendário", "Título honorífico dado por Hanzou da Salamandra a três lendários ninjas de Konoha devido à enorme força em combate."),
    NUKENIN("Nukenin (Renegado)", "Ninjas que abandonaram ou traíram suas vilas natais, frequentemente caçados por unidades especiais."),
    CIVIL("Civil", "Pessoa comum da vila sem atribuições militares.");

    private final String nome;
    private final String descricao;

    RankNinjaEnum(String nome, String descricao) {
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