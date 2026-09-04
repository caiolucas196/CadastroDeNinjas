-- Inserindo missões iniciais de exemplo
INSERT INTO tb_missoes (nome, rank) VALUES ('Salvar o gatinho da vovó', 'RANK_D');
INSERT INTO tb_missoes (nome, rank) VALUES ('Proteger o construtor Tazuna', 'RANK_C');
INSERT INTO tb_missoes (nome, rank) VALUES ('Eliminar mercenários na ponte', 'RANK_B');

-- Inserindo ninjas de exemplo
INSERT INTO tb_ninjas (nome, email, idade, rank, img_url, missoes_id)
VALUES ('Naruto Uzumaki', 'naruto@konoha.com', 17, 'GENIN', 'https://images.unsplash.com/photo-1578632767115-351597cf2477', 1);