CREATE TABLE tb_missoes (
                            id BIGINT AUTO_INCREMENT PRIMARY KEY,
                            nome VARCHAR(255) NOT NULL,
                            rank VARCHAR(50) NOT NULL
);

CREATE TABLE tb_cadastro (
                             id BIGINT AUTO_INCREMENT PRIMARY KEY,
                             nome VARCHAR(255) NOT NULL,
                             email VARCHAR(255) NOT NULL UNIQUE,
                             idade INT NOT NULL,
                             rank VARCHAR(50) NOT NULL,
                             img_url VARCHAR(500),
                             missoes_id BIGINT,
                             CONSTRAINT fk_ninja_missao FOREIGN KEY (missoes_id) REFERENCES tb_missoes(id)
);