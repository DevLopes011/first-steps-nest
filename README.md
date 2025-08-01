<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# 🐾 PetShop API

API RESTful construída com NestJS para gerenciar usuários e seus pets (gatos).  
Possui autenticação JWT, validação de dados e persistência com MySQL via TypeORM.

---

## ⚙️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework Node.js para construir APIs escaláveis  
- [TypeScript](https://www.typescriptlang.org/) - Linguagem base  
- [TypeORM](https://typeorm.io/) - ORM para integração com MySQL  
- [MySQL](https://www.mysql.com/) - Banco de dados relacional  
- [Passport](http://www.passportjs.org/) + [JWT](https://jwt.io/) - Autenticação  
- [class-validator](https://github.com/typestack/class-validator) - Validação de DTOs  

---

## 🚀 Funcionalidades

- Cadastro de usuários (donos de pets)  
- Login com geração de token JWT  
- Cadastro de gatos vinculados a usuários  
- Proteção de rotas via JWT (apenas usuários autenticados podem acessar)  
- Validação automática dos dados recebidos nas requisições  
- Controle de criação, leitura, atualização e exclusão (CRUD) para usuários e gatos  

---

## 📥 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/petshop-api.git
   cd petshop-api
Instale as dependências:

bash
Copiar
Editar
npm install
Configure as variáveis de ambiente (crie um arquivo .env):

env
Copiar
Editar
DB_HOST=localhost
DB_PORT=3306
DB_USER=lopes
DB_PASS=12345
DB_NAME=cats
JWT_SECRET=sua_chave_secreta
PORT=3000
Execute a aplicação:

bash
Copiar
Editar
npm run start:dev
🔧 Uso
Cadastro de usuário
POST /user
Exemplo de corpo JSON:

json
Copiar
Editar
{
  "name": "João Lopes",
  "cpf": "12345678900",
  "phoneNumber": "11999999999",
  "email": "joao@gmail.com",
  "dob": "1990-01-01",
  "password": "SenhaForte123!"
}
Login
POST /auth/login
Exemplo de corpo JSON:

json
Copiar
Editar
{
  "email": "joao@gmail.com",
  "password": "SenhaForte123!"
}
Resposta:

json
Copiar
Editar
{
  "access_token": "token.jwt.aqui"
}
Usando o token
Para acessar rotas protegidas, envie o header:

makefile
Copiar
Editar
Authorization: Bearer token.jwt.aqui
Cadastro de gato
POST /cats (rota protegida - precisa do token)
Exemplo de corpo JSON:

json
Copiar
Editar
{
  "name": "Mingau",
  "age": 3,
  "breed": "Siamês"
}
Listar gatos
GET /cats (rota protegida)

🛠 Estrutura do Projeto
ruby
Copiar
Editar
src/
├── auth/                 # Módulo de autenticação (JWT, login)
├── cats/                 # Módulo de gatos (controller, service, dto)
├── user/                 # Módulo de usuários (controller, service, dto)
├── app.module.ts         # Módulo raiz
├── main.ts               # Arquivo principal (bootstrap)
📜 Licença
MIT © João Lopes
