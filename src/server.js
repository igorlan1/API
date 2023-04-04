const express = require("express");

const app = express();

app.get("/message/:id/:user", (request, response) => {

    const {id, user} = request.params
response.send(`
id da mensagem: ${id}.
nome do  usuario: ${user}.
`)
})

app.get("/users", (request, response) => {
    const {page, limit} = request.query
    response.send(`
    pagina: ${page}
    mostrar: ${limit}
    `)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
