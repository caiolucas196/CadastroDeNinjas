🥷 Cadastro de Ninjas & Missões (Fullstack)
Aplicação web fullstack desenvolvida para gerenciamento de ninjas e missões, construída com foco em boas práticas de arquitetura, integração de APIs e containerização.

🚀 Tecnologias Utilizadas
Back-end: Java 21, Spring Boot, Spring Data JPA, H2 Database (File-based), Maven.

Front-end: React, Vite, JavaScript, CSS.

DevOps / Infraestrutura: Docker, Docker Compose, Nginx, Eclipse Temurin.

🐳 Como Executar a Aplicação via Docker (Recomendado)
Se você deseja testar a aplicação rapidamente sem precisar configurar o ambiente de desenvolvimento local, você pode subir todo o ecossistema (Front-end e Back-end integrados) utilizando o Docker.

Pré-requisitos
Docker e Docker Compose instalados na sua máquina.

Passo a Passo
Crie um arquivo chamado docker-compose.yml em uma pasta vazia no seu computador.

Cole o seguinte conteúdo dentro do arquivo:

version: '3.8'

services:
backend:
image: caiolucas196/cadastrodeninjas-backend:latest
container_name: ninja-backend
ports:
- "8080:8080"
  restart: always

frontend:
image: caiolucas196/cadastrodeninjas-frontend:latest
container_name: ninja-frontend
ports:
- "80:80"
  depends_on:
- backend
  restart: always

Abra o terminal na mesma pasta onde salvou o arquivo e execute o comando:

docker compose up -d

Pronto! O Docker irá baixar as imagens diretamente do Docker Hub e subir a aplicação:

Acesse o Front-end: Abra o navegador e vá para http://localhost

Acesse a API (Back-end): Disponível em http://localhost:8080

Para derrubar os containers após o uso, basta executar:

docker compose down