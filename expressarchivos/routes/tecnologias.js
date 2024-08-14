const express = require('express')
const router = express.Router()
const tecnologias = require('../controllers/tecnologiasCtrl') 

const multer = require('multer')
const { Console } = require('console')

router.get("/", (req,res)=>{  res.send("base")  }
    //tecnologias.tecnologiasListar
    // res.send(tecnologias.tecnologiasListar())
//}
)

router.get("/:id/:nombre", (req,res)=>{  res.send("base")  }
    //tecnologias.tecnologiasObtener
)

const upload = multer({ dest: 'public/images/' })
router.put("/imagen/:id", 
                upload.single('imagen'), 
                tecnologias.tecnologiaImagen
 )

const uploadVideo = multer({ dest: 'public/videos/' })
router.put("/video/:id",
    uploadVideo.single('video'),
    tecnologias.tecnologiaVideo
)


module.exports = router 