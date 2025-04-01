const db = require("./dbconnector");
const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    let query = "SHOW tables;";

    try {
      let databaseResponse = await db.query(query);
  
      res.send(databaseResponse);
    } catch (error) {
      res.send(error);
    }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})