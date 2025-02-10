const express = require('express')
const port = 4444
const app = express()
const cors = require('cors')


 
app.use(cors())
app.use(express.json())

app.get('/info/abc',(req,res)=>{
    res.send('hello world')
})

app.post('/info',(req,res)=>{
    try{
        const {name,phoneNumber} = req.body
        if(!name || !phoneNumber){
           return res.status(400).json({message:"require more data"})
        }
        const len=phoneNumber.length
        if(len>10 || len<10)
            return res.status(400).json({message:"require correct phoneNumber"})
        
    return res.status(200).json({message:"success"})

    }
    catch(e){
        console.log(e)
    }
})




app.listen(port,(req,res)=>{
    console.log(`server is connected to ${port}`)
})