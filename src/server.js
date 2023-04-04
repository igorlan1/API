const express = require("express");

const routes  = require("./routes") 
/*ja esta indo no routes/index por padrao */

const app = express();
app.use(express.json())

app.use(routes)


const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
