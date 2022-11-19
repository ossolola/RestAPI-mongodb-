const express = require("express");

const {json} = require("express");

const connect = require("./config/database");

connect();

const userRoute = require("./router/userRoute");

const app = express();
app.use(json());
app.use('/user', userRoute);


const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Learning Express with MongoDB")
})

app.listen(PORT, () => {
    console.log(`Serving at port ${PORT}`)
})