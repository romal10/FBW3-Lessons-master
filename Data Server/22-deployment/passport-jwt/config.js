const config = {
    env: process.env.NODE_ENV || "developement"
};

const devConfg = {
    db: "mongodb://localhost27017/password-login",
    jwt_key: "developementpassword",
    port = 3000
};

const prodConfg = {
    db: process.env.MONGO_URI,
    jwt_key: process.env.JWT_SECRET,
    port = process.env.PORT
};

const currentConfig = config.env == "production"? prodConfig : devConfig;

module.exports = Object.assign({}, config, currentConfig);
