//Codigo implementado por: Ericka Nayelhi Zavala Romero

//********************BASE DE DATOS************************

//Definimos los módulos de mongoose y creamos la base de datos
const mongoose=require("mongoose");
const Schema= mongoose.Schema;

//Creamos la tabla de la base de datos
const ContactosDB=new Schema({
    nombre: String,
    apellido: String,
    telefono: Number,
    email:  String
});

//Exportamos el módulo
module.exports= mongoose.model("contactos", ContactosDB);