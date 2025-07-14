const app = require("./index.js");
const Connect = require("./db/Connect.js");
const config = require("dotenv").config;

config({ path: "./.env.local" });

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Server is running!");
  });

app.listen(PORT,async () => {
    await Connect();
    console.log(`Port running on ${PORT}`);
});
