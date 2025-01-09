## API de Cadastro de Jogos

Esta é uma API simples construída com Node.js e Sequelize para cadastro de jogos. O objetivo é fornecer uma maneira de cadastrar, listar, atualizar e excluir jogos em um banco de dados.

## Tecnologias Utilizadas

    Node.js
    Express
    Sequelize (ORM para banco de dados)
    MySQL
    Body-parser (para parsing de requisições)

## Endpoints
1. Cadastrar um novo jogo

Método: POST

Rota: /game

Corpo da requisição:
````bash
{
    "title": "Cyberpunk 2077",
    "price": 29.99,
    "year": 2020
}
````

2. Listar todos os jogos

Método: GET

Rota: /games

Resposta:
````bash
[
  {
    "id": 12,
    "title": "The Legend of Zelda: Breath of the Wild - GOLD EDITION",
    "price": 60,
    "year": 2017,
    "createdAt": "2025-01-09T19:13:14.000Z",
    "updatedAt": "2025-01-09T21:06:06.000Z"
  },
  {
    "id": 13,
    "title": "Cyberpunk 2077 - ULTIMATE EDITION",
    "price": 299,
    "year": 2022,
    "createdAt": "2025-01-09T19:13:14.000Z",
    "updatedAt": "2025-01-09T21:48:37.000Z"
  },
]
````

3. Obter um jogo pelo ID

Método: GET

Rota: /game/:id

Resposta:

````bash
{
  "id": 13,
  "title": "Cyberpunk 2077",
  "price": 299,
  "year": 2022,
  "createdAt": "2025-01-09T19:13:14.000Z",
  "updatedAt": "2025-01-09T21:48:37.000Z"
}

````

4. Atualizar um jogo

Método: PUT

Rota: /game/:id

Corpo da requisição:

````bash
{
    "title": "Dragon Age: Inquisition - GOLD EDITION",
    "price": 30,
    "year": 2014
}
````

5. Excluir um jogo

Método: DELETE

Rota: /games/:id

Resposta:
````bash
{
  "message": "Jogo com ID 57 excluído com sucesso"
}
````

## Para rodar 

1. Instalar dependências 
````bash
    npm install
````

2.Rodar
````bash
    nodemon index.js
````


