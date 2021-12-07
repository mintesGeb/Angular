const mongoose=require("mongoose");
const Schema= mongoose.Schema

const UserSchema = new Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true },
    phone:{type:String, default:"2222222222"},
    createdAt:{
        required:true,
        type:Date,
        default:Date.now(),

    },
    location:{
        zipcode:String,
        city:String,
        state:String,
    },

    logs:[{timestamp:Number,city:String,state:String}]
})

module.exports = mongoose.model("User", UserSchema)