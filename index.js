const express = require("express");
const app = express()
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Games = require("./database/games");
require('dotenv').config


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

connection.authenticate().then(() => {
    console.log('Conexão feita com sucesso');  
}).catch((err) =>{
    console.log(err);
})

app.get("/games", (req, res) => {
    Games.findAll().then(users => {
        res.status(200).json(users)
    }).catch((err) =>{
        console.log(err); 
    })
})

app.get("/game/:id", (req, res) =>{
    var id = req.params.id;

    if(isNaN(id)){
        res.sendStatus(400)
    }else{
       Games.findByPk(id).then(game =>{
            res.status(200).json(game)
       })

    }
})

app.post("/game", (req, res) => {
    var {title, price, year} = req.body;

    Games.create({
        title,
        price,
        year
    }).then(game => {
        res.status(200).send(game)
    })


})


app.delete("/game/:id", (req,res) => {
    var id = req.params.id;

    if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }

    var numericId = parseInt(id)

    if(isNaN(numericId)){
        res.status(400).json({error: "Id deve ser um número"})
    }else{
        Games.destroy({where:{id: numericId}}).then((game) => {
            if(game === 0){
                res.status(404).json({error: "Jogo não encontrado"})
            }else{
                res.status(200).json({ message: `Jogo com ID ${id} excluído com sucesso` })
            }
        }).catch((err) =>{
            console.log(err);
            res.sendStatus(400)
        })
    }
})

app.put("/game/:id", (req, res) => {
    var id = req.params.id;
    var {title, price, year} = req.body

    if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }

    var numericId = parseInt(id)

    if(isNaN(numericId)){
        res.sendStatus(400).json({error: "Id deve ser um numero"})
    }else{
        Games.update({title, price, year},{where:{id: numericId}}).then(game =>{
            res.status(200).json({message: "Jogo atualizado com sucesso!"})
        }).catch((err) =>{
            res.status(400).json({error: "Erro ao atualizar o jogo"})
        })
    }
})

app.listen(process.env.PORT, () =>{
    console.log(`Rodando na porta ${process.env.PORT}`);
})