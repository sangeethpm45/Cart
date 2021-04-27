const db=require('./db')

const register=(email,password) => {
 return db.User.findOne({email}).then(result=>{
     if(result){
         return{
             status:false,
             statusCode:422,
             message:"user already exists"
         }
     }
     else{
         const newUser=new db.User({
             email,
             password,
             datas:[]
         })
         newUser.save()
         return{
            status:true,
            statusCode:200,
            message:"sucess"
         }
     }
 })
}

const login=(email,password) => {
    return db.User.findOne({email,password}).then(result=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                message:"login sucess"
            }
        }
        else{
            return{
               status:false,
               statusCode:422,
               message:"invalid"
            }
        }
    })
   }



module.exports={
    register,
    login
}