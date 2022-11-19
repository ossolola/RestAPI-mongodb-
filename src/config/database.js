const { application } = require("express");
const mongoose = require("mongoose");



const connect = module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try {
        mongoose.connect(
            'mongodb+srv://ossolola:Sijibomi+2000@cluster0.nbjgxtm.mongodb.net/?retryWrites=true&w=majority', 
            connectionParams)
        console.log('Database Connected')
    } catch (error) {
        console.log(error.message);
        console.log("database Connection failed");
    }
}


// function connect () {
//     mongoose.connect('mongodb+srv://ossolola:Sijibomi+2000@cluster0.nbjgxtm.mongodb.net/?retryWrites=true&w=majority', {
//         useNewParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true
//     }).then(() => {
//         console.log('MongoDB Connected')
//     }).catch(error => {
//         console.log("Database Not Connected" + error)
//     })
// }



module.exports = connect;