const mysql = require("mysql2");
const express = require("express");

const app = express();

const connection = mysql.createConnection({
    host : 'localhost',
    user: "tester",
    password : "tester",
    port : "30000",
    database : "testConnect"
});

connection.connect(error =>{
    if(error){
        console.log(error)
        console.log(`While connect database, occurred error.`);
        process.exit(0);
    }
    console.log("Succeed to connect database.")
})


app.get('/',(request,response)=>{
    connection.query(
        'select * from test',
        (error, result)=>{
            console.log(result);
            response.render('hello.ejs');
        }
    );
});

app.listen(3001);