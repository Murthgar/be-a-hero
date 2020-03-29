const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros enviados para rota após "?" (Filtro, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: 
  */

  /**
   * SQL: MySQL, SQLite, PostgrSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver SELECT * FROM users
    * Query Builder
    * 
    */



app.listen(3333);
