//Codigo implementado por: Ericka Nayelhi Zavala Romero

//********************CONTROLADORES************************

//Definimos los módulos de express y creamos el objeto del controlador
const express= require("express");
const router= express.Router();

//Importamos el modelo de la base de datos
const Contacto=require("../models/contactos");

//Controlador con get que sirve para extraer los datos de la tabla
router.get("/", async (req, res)=>{
    const contactos= await Contacto.find();
    res.render("index", {
        contactos
    });
});

//Controlador con post que sirve para guardar los datos de la tabla
router.post("/registrar", async (req, res)=>{
    const contacto=new Contacto(req.body);
    await contacto.save();
    res.redirect("/");
});

//Controlador con get que sirve para borrar los datos de la tabla
router.get("/borrar/:id", async (req,res)=>{
    const { id }= req.params;
    await Contacto.remove({_id: id});
     res.redirect("/");
});

//Controlador con get que sirve para extraer los datos de la tabla segun el identificador y colocarlos en un nuevo formulario de edición
router.get("/editar/:id", async (req,res)=>{
    const { id }= req.params;
    const contacto= await Contacto.findById(id);
     res.render("editar",{
         contacto
     });
});

//Controlador con post que sirve para editar los datos del formulario
router.post("/editar/:id", async (req, res)=>{
    const { id }= req.params;
    await Contacto.updateOne({_id: id}, req.body);
    res.redirect("/");
});

//Exportamos el módulo
module.exports=router;

