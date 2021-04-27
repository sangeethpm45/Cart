const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/cart",{useNewUrlParser:true,useUnifiedTopology:true})
const User=mongoose.model('User',{
    email:String,
    password:String,
    datas:Array
})
module.exports={
    User
}