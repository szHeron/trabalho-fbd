const express = require("express");
const handlebars = require("express-handlebars");

const hotelRoutes = require("./routes/hotel");

const app = express();
const hbs = handlebars.create({ extname: ".hbs" });

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.use("/", hotelRoutes);

app.listen(5000, () => console.log(`Server running on http://localhost:5000`));
