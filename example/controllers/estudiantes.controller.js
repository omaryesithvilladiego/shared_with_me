const Estudiante = require('../models/estudiantes.model');

let response = {
    msg: "",
    exito:false

}

exports.create = function(req,res)
{
    let estudiante = new Estudiante({
        nombre: req.body.nombre,
      
    })
    estudiante.save(function(err)
    {
        if(err)
        {
            console.error(err),
            response.exito = false,
            response.msg = "Error al intentar Guardar el estudiante"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Guardado con Exito"
        res.json(response)
    })              
}

exports.find = async function(req,res, next)
{
    Estudiante.find(await function(err,estudiante){
        response = res.json(estudiante)  
        
    })
}
