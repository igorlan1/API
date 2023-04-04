const express = require("express");

const app = express();
app.use(express.json())

app.post("/users", (request, response) => {
const {name, email, password} = request.body


    response.send(`
  usuario: ${name}. - email: ${email}. - senha:${password}.
    `)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
