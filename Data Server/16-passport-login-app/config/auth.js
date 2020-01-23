module.exports = function ensureAuthenticated (req,res,next){

    if(req.isAuthenticated()){
        return next();

    }
    req.flash('error_msg','Please login to view the pages')
    res.redirect('/users/login');
}

module.exports = function forwardAuthenticated(req, res, next){
    if(!req.isAuthenticated()){
        return next ();
    }
    res.redirect('/dashboard');
}

