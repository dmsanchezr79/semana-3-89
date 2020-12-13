const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../models');

exports.signin = async(req, res, next) => {
    try{
        const user = await models.user.findOne({where:{email: req.body.email}});
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if(passwordIsValid){
                    const token = jwt.sign({
                        id: user.id,
                        name: user.name,
                        email: user.email

                    }, 'hola soy una cadena secreta',{
                        expiresIn: 86400
                });
                res.status(200).send({
                    auth: true, accessToken: token, user: user 
                });
            }else{
                res.status(401).json({error: "error en validacion"});
            }
        }else{
            res.status(404).send({message: "error!!!"});
        }
    }catch (error){
        res.status(500).json({error: "error en validacion"});
        next(error);

    }
}
exports.listar = async(req, res, next) => {
    try{
        const user = await User.finaAll();
    }catch (error){
        next(error);

    }
}
exports.sregister = async(req, res, next) => {
    try{

    }catch (error){
        next(error);

    }
}











