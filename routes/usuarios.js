const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut } = require('../controllers/usuarios')


const router = Router();

router.get("/", usuariosGet );

  router.post("/", usuariosPost);
  router.put("/:id", usuariosPut);



    router.delete("/", (req, res) => {
      res.status(201).json({
          ok: true,
          msg: 'delete API'
      });
    });





module.exports = router