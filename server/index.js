const express = require('express');
const app= express();
var cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 const routes = require("./routes/index");
 app.use('/',routes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));

 