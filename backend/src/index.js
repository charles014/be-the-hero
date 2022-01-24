const express = require('express');
const cors = require("cors");
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3333);


/**
 * Rota / Recurso
 */


/**
*   Métodos HTTP
*   GET: Buscar uma informação do back-end
*   POST: Criar uma informação do back-end  
*   PUT: Alterar uma informação no back-end
*   DELETE: Deletar uma informação no back-end
*/

/**
 *  Tipos de parametros
 * 
 *  Query Params: Parâmetros nomeados enviados na rota após "?"; 
 *  Route Params: Parâmetros utilizados para identificar recursos;
 *  Requesty Body: Corpo da requisição utilizado para criar ou alterar um recurso;
 *  
 */

/**
 *  SQL: MySQL, SQLite, PostgreSQL, Oracle, MSQL
 *  NoSQL: MongoBD, CouchBD, etc
 */

/**
 *  Driver: SELECT * FROM curso
 *  Query Builder: table('curso')
 * */    



