const express=require('express')
const dataservice=require('./services/dataservice')
var accountdetails = {
    1000: {
        id: 1000,
        name: "smartphone",
        price: 6000,
        
    }, 
    1001: {
        id: 1001,
        name: "tv",
        price: 6000,
    },
    1002: {
        accno: 1002,
        name: "laptop",
        balence: 6000,
        password: "user3",
    },
    1003: {
        id: 1003,
        name: "desktop",
        price: 6000,
    },
    1004: {
        id: 1004,
        name: "cube",
        price: 6000,
    },
    1004: {
        id: 1005,
        name: "mouse",
        price: 6000,
    }
};
const app=express()
app.use(express.json())

app.post('/register',(req,res)=>{
    dataservice.register(req.body.email,req.body.password).
    then((result) => { res.status(result.statusCode).json(result)
    })
})

app.post('/login',(req,res)=>{
    dataservice.login(req.body.email,req.body.password).
    then((result) => { res.status(result.statusCode).json(result)
    })
})





app.listen(3000,()=>{
    console.log('connected');
})