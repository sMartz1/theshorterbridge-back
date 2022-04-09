const app = require("express")();
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT_SERVER;
app.use("/api", require("./routes"));
app.listen(PORT,()=>{
    let randomNumber = Math.random() * (10000 - 0) + 0;
    let stringGenerated = randomNumber.toString(5);
    console.log("Server running...",stringGenerated);
})