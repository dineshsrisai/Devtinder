const mongoose = require("mongoose");
const connectionRequestSchema = new mongoose.Schema({
    fromUserId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
    },
    toUserId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,


    },
    status : {
        type : String,
        required : true,
        enum : {
            values: ["ignored", "interested", "rejected", "accepted"],
            message : `{VALUE} is incorrect status type`,
        }
    }
},{
    timeStamps : true
    }
);

connectionRequestSchema.pre("save",function(next){
    const connectionRequest = this;
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
        throw new Error("Cannot send request to yourself!!!");
    }
    next();
});

connectionRequestSchema.index({fromUserId : 1,toUserId :1});

const ConnectionRequest = mongoose.model("ConnectionRequest",connectionRequestSchema);

module.exports = ConnectionRequest;
