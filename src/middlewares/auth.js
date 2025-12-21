const adminAuth = (req,res,next)=>{
    let token = "xyz";
    let isAdminAuthorization = token === "xyz";
    if(!isAdminAuthorization){
        res.status(401).send("unauthorized request");
    }else{
        next();
    }
};

const userAuth = (req,res,next)=>{
    let token = "xyz";
    let isUserAuthorization = token === "xyz";
    if(!isUserAuthorization){
        res.status(401).send("unauthorized request");
    }else{
        next();
    }
};

module.exports = {
    adminAuth,
    userAuth
};