const app = require("express")();
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();

const PORT = process.env.PORT_SERVER;
const {connection} = require('./database/mongo');

app.get("/:short", require("./controllers/url/getUrl"));
app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log("Server running...");
  connection();
});
