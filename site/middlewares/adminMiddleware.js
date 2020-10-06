module.exports = (req, res, next)=>{
    if(req.session.user.admin == true){
        next()
    } else {
        res.render(`admin.ejs`)
    }
}