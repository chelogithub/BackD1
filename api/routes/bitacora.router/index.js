var pool = require('../../mysql'); 
const register = (router) => {
    router.post('/post', (req, res) => { 
        console.log("/bitacora/post/" + JSON.stringify(req.body));
        try{
            const titulo=req.body.titulo;
            const contenido=req.body.contenido;
            const usuario=req.body.usuario;
            const idDis=req.body.idDis;
                pool.query('INSERT INTO bitacora(titulo, contenido, usuarioId, dispositivoId) values (?,?,?,?)', [titulo, contenido, usuario,idDis], function(err, result, fields) {
                if (err) {
                    res.send(err).status(400);
                    console.log(err);
                    return;
                }
                res.send(result); //Envío solo el primer elemento que vuelve de la BD
                
            });
        }
        catch{
            console.log("Parece que hubo bardo")
        }
    });
    router.get('/get/:id/', (req, res) => {
      pool.query('SELECT * FROM bitacora WHERE dispositivoId=? ORDER BY `fecha` DESC ', [req.params.id], function(err, result, fields) {
          if (err) {
              res.send(err).status(400);
              return;
          }
          console.log(result);
          res.send(result);
      });
  
    });
  
    return router;
  };

  
  
  module.exports = {
    register,
  };