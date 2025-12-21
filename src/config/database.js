const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://dineshsrisai24_db_user:32gEhYBFx3W2Esf5@node.xerh16o.mongodb.net/devTinder"
    );
};

module.exports = connectDB;