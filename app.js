const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

//static files
app.use(express.static(`public`));
app.use(`/css`, express.static(__dirname + `public/css`));
app.use(`/js`, express.static(__dirname + `public/js`));

//template engine
app.set(`views`, `./source/views`);
app.set(`view engine`, `ejs`);

app.use(bodyParser.urlencoded({ extended: true }));
//routes
const newsRouter = require(`./source/routes/news`);
app.use(`/`, newsRouter);

//Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`));
