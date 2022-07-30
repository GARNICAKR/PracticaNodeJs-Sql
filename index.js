const express =require("express");
const sqlite3=require("sqlite3");
const bodyParser=require("body-parser");
const Sequelize=require('sequelize');
const methodOverride=require('method-override');
//const tasks = require("./controllers/tasks");
//const users = require("./controllers/users");
const tasksRoutes=require('./routes/tasks_routes');
const usersRoutes=require('./routes/users_routes');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

//motores de vista
app.set('view engine','pug');
/*
const sequelize=new Sequelize('practica-backend',null,null,{
    dialect:'sqlite',
    storage:'./practica-backend'
});*/
//let db=new sqlite3.Database('practica-backend');
//Creacion de base de datos pero si la DB esta creada marcara error-
//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT,descripcion varchar(100))');
app.use(methodOverride('_method'));
app.use(tasksRoutes);
app.use(usersRoutes);

app.listen(3000);
/*
process.on('SIGINT',function(){
    console.log("Adios - Atte. El servidor");
    db.close();
    process.exit();
})*/