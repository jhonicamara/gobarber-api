<h1 align="center">
	<img alt="GoStack" src=".github/logo.svg" width="200px" />
</h1>

<h3 align="center">
  Backend GoBarber
</h3>


<p align="center">
  <a href="#-Sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Executando-o-projeto">Executando o projeto</a>
</p>


## 💇🏻‍♂️ Sobre o projeto

Esta api entrega tudo o que é necessário para organizar agendamentos entre barbeiros e clientes.

Os clientes podem escolher o melhor horário disponível para eles.

Os Barbeiros podem ver todas as atualizações dos agendamentos e também a edição do próprio perfil.

Esta api também realiza envio de emails!!! Notificando os clientes e barbeiros sobre as atualizações.

Veja também o **frontend**, clique aqui: [GoBarber Frontend](https://github.com/jhonicamara/gobarber-web)<br />
Veja também o **mobile**, clique aqui: [GoBarber Mobile](https://github.com/jhonicamara/gobarber-mobile)

## 🚀 Tecnologias

Tecnologias utilizadas neste projeto NodeJS

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [JWT-token](https://jwt.io/)
- [Sequelize](https://sequelize.org/master/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Bee Queue](https://github.com/bee-queue/bee-queue)
- [Nodemailer](https://nodemailer.com/about/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Executando o projeto

Adicione o arquivo `Insomnia.json` no aplicativo Insomnia, para testar as rotas

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

**Faça o clone do projeto e acesse a pasta**

```bash
$ git clone https://github.com/jhonicamara/gobarber-api.git gobarber-api && cd gobarber-api
```

**Siga os passos a seguir**

```bash
# Instale as dependências
$ yarn

# Crie uma instancia do postgreSQL usando docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Crie uma instancia do mongoDB usando docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Crie uma instancia do redis usando docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Agora devemos criar o nosso DATABASE no postgres.

# Primeiro devemos acessar a instância do postgres
$ docker exec -i -t gobarber-postgres /bin/sh

# Depois devemos nos logar utilizando o usuario criado na criação da instância do postgres
$ su gobarber

# Agora para acessar em definitivo o terminal, executamos:
$ psql

# Agora nós estamos dentro do terminal da instância do postgres, agora podemos criar o nosso database para a aplicação
$ CREATE DATABASE gobarber;

# Depois de criarmos, nos podemos sair executando os comandos:
$ \q
$ exit

# Copie o arquivo '.env.example' e o renomeie para '.env' depois adicione os valores das variaveis ambiente.
$ cp .env.example .env

# Quando todos serviçoes estiverem rodando, execute as migrations, na pasta do projeto.
$ yarn sequelize db:migrate

# Inicie a api, na pasta do projeto
$ yarn server

# Inicie a fila de envio de emails
$ yarn queue

# Pronto, projeto funcionando!
```
---

Feito por João Câmara 👋 [Veja meu Linkedin](https://www.linkedin.com/in/jo%C3%A3o-c%C3%A2mara-565b42184/)
