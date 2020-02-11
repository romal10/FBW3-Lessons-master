// in this code we will check if the user has already an email , and then we will compare the emails token inside the data base to let the user to change his password.

// we will export the auth.js from the middleware to the auth in the routes and call it inside the router.get

const jwt=require("jsonwebtoken");

module.exports=(req,res,next)=>{

    // get Token from header
    const token=req.header('postman-auth-token');


    // check if not token
    if(!token){
        return res.status(400).json({msg:'No token, authorization denied..!'});
    }
    try {
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        console.log(decode)
        req.user=decode.user;
        next();
    } catch (error) {

        return res.status(400).json({msg:'Token isnt Valid..!'});
    }
}