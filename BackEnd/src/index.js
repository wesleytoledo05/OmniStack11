const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//rotas /recursos
//metodos HTTP:
//GET:buscar/listar uma informação do back-end
//Post:criar uma informação no back-end
//PUT: alterar uma informação no back-end
//DELETE: deletar uma informação no back-end

//tipos de parametros:
//query params: parametros nomeados enviados na rota apos o simbolo de interrogaçã
//route params: parametros utilizados para identificar recursos
//request body: corpo da requisiçao utilizado para criar ou alterar recursos

//SQL: mySQL, SQlite, postgreSQL,oracle ...
//noSQL: mongoDB, couchDB, etc

//drive: SELECT * FROM users
//query builder:  table ('users').select('*').where()

app.listen(3333);
