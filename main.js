/* global process, global */

//Codigo implementado por: Ericka Nayelhi Zavala Romero

//********************SERVIDOR************************
const express= require("express");
const app= express();
const morgan=require("morgan");
const mongoose=require("mongoose");

//Conexión a la base de datos
mongoose.Promise=global.Promise;
const uri="mongodb+srv://ezavalar:YAlcrGzRahth9QZL@cluster0-87rca.mongodb.net/Agenda?retryWrites=true&w=majority";
const options= {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false};
mongoose.connect(uri, options).then(()=>{
    console.log("La conexión a la base de datos ha sido satisfactoria.");    
}).catch(err=>{
    console.log("Hubo un error al conectar con la base de datos: "+err);
    process.exit();
});

//Importando controladores
const indexController= require("./routes/index");

//Configuración de los puertos
app.set("port", process.env.PORT || 3000);

//Configuración de la vista
app.set("view engine","ejs" );

//Middelwares
app.use(morgan("dev")); //Morgan nos da más información acerca de las peticiones del servidor
app.use(express.urlencoded({extended: false})); //Este módulo de express sirve para que el servidor pueda interpretar peticiones enviadas por formularios

//Controlador de inicio
app.use("/", indexController);

//Iniciando el servidor
app.listen(app.get("port"), ()=>{
    console.log("Servidor listo en el puerto: "+app.get('port'));
});

