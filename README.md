# ⚔️ Cadastro de Ninjas - Sistema de Gestão de Shinobis

Um sistema full-stack desenvolvido para gerenciamento de ninjas e missões, inspirado no universo de Konoha. Projeto criado com foco em arquitetura limpa, validação rigorosa de dados, experiência de usuário imersiva e facilidade de execução para avaliação técnica.

### Tecnologias Utilizadas

#### Backend
* Java 21
* Spring Boot (Spring Data JPA, Web)
* MySQL (Banco de dados relacional)
* Flyway (Gerenciamento e migração de banco de dados)
* Docker & Docker Compose (Containerização do ambiente)

#### Frontend
* React + Vite
* CSS Modules / Estilização Modular (Cards temáticos e modais imersivos)

### Regras de Domínio e Arquitetura

* **Ranks de Ninjas (Enum):** Validação rígida no cadastro (Estudante, Genin, Chuunin, Jounin, Jounin Especial, ANBU, Kage, Lendário, Nukenin, Civil).
* **Hierarquia de Missões (Enum):** Escala extrema de periculosidade indo desde tarefas domésticas (Rank D) até missões de mortalidade quase certa (Rank SS+).
* **Relação Ninja-Missão:** Cada shinobi pode ser atribuído a uma missão específica do catálogo de acordo com sua patente.

### Como Executar o Projeto (Recrutador / Plug & Play)

Para rodar a aplicação completa na sua máquina, você só precisa ter o Docker e o Node.js instalados.

#### 1. Clonar o Repositório
git clone https://github.com/caiolucas196/CadastroDeNinjas.git
cd CadastroDeNinjas

#### 2. Subir o Banco de Dados (Docker)
Na pasta do backend (onde está o arquivo docker-compose.yml), execute:
docker compose up -d

> *Isso iniciará o container MySQL na porta 3306 com os dados e migrações configurados automaticamente pelo Flyway.*

#### 3. Iniciar o Backend (Spring Boot)
Abra o projeto na sua IDE de preferência (IntelliJ IDEA, Eclipse) e execute a classe principal CadastroDeNinjasApplication, ou rode via terminal:
./mvnw spring-boot:run

#### 4. Iniciar o Frontend (React)
Abra um novo terminal, navegue até a pasta do frontend (frontend-ninjas), instale as dependências e inicie o servidor:
cd frontend-ninjas
npm install
npm run dev

Acesse no navegador: http://localhost:5173

### Demonstração do Sistema

* **Listagem em Cards Temáticos:** Visual dinâmico com bordas e selos baseados no rank do shinobi.
* **Modal de Detalhes:** Exibição completa das informações do ninja e status de missões ativas ao clicar em cima do card.
* **Formulários Protegidos:** Menus suspensos (`<select>`) customizados que impedem o envio de dados corrompidos ou fora do padrão do ecossistema.

### 📫 Contato

* **LinkedIn:** [Caio Lucas](https://www.linkedin.com/in/caio-lfe/)
* **GitHub:** [@caiolucas196](https://github.com/caiolucas196)
