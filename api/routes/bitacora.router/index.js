var pool = require('../../mysql'); 
const register = (router) => {
    router.post('/post', (req, res) => { 
        console.log("/bitacora/post/" + JSON.stringify(req.body));
        // try{
        //     const id=req.body.id;
        //     const tipo=req.body.tipo;
        //     const value=req.body.value;
        //     const value2=req.body.value2;
        //     const value3=req.body.value3;
        //     const value4=req.body.value4;
        //     const value5=req.body.value5;
        //     const value6=req.body.value6;
        //     //res.send("El dispositivo id ="+id+" del tipo= "+tipo+" entregó el valor = "+valor);
        //     // console.log("El dispositivo id ="+id+" del tipo= "+tipo+" entregó el valor = "+value);
        //         pool.query('INSERT INTO TEST_INY (id_dis, tipo, value, value2, value3, value4, value5, value6) values (?,?,?,?,?,?,?,?)', [id, tipo, value,value2,value3,value4,value5,value6], function(err, result, fields) {
        //         if (err) {
        //             res.send(err).status(400);
        //             console.log(err);
        //             return;
        //         }
        //         res.send(result); //Envío solo el primer elemento que vuelve de la BD
                
        //     });
        // }
        // catch{
        //     console.log("Parece que hubo bardo")
        // }
    });
  
    return router;
  };
  
  module.exports = {
    register,
  };