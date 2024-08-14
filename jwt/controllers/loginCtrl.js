const jwt = require('jsonwebtoken')


const login = (req,res) =>{
    console.log(req.body)
    const { user,password } = req.body

    try{
        if(user == '')
            res.status(400).json( { message:"Nombre de Usuario Incorrecto"})

        if(password == '')
            res.status(400).json( { message:"Contraseña Incorrecta"})
        
        payload = {
            user_id : 1,
            user_name : "Campista",
            expiration : '2024-08-13 20:05:00',
        }

        secretWord  = "palabrasecreta"
        
        sign = {
            expiresIn : 3600
        } 

        jwt.sign( 
            payload,
            secretWord, 
            sign,
            (err, token) =>{
                if(err)
                    res.status(401).json({message: "No Autorizado"})

                //token -> almacenarlo en una tabla o documento
                 res.status(200).json({ token: token, message: "Acceso concedido" })
            }
         )


        
        // res.status(200).json({message: "usuario de acceso correcto" })

    }
    catch(err){ res.status(400).json({ message : err})  }

}


module.exports = {
    login
}