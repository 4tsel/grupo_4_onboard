module.exports = (req, res, next)=>{
    if(req.session.usuarioLogueado != undefined){
        next()
    } else {
        res.send(`esta página es solo para usuarios`)
    }
}