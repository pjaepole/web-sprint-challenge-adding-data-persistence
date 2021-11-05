// build your `/api/resources` router here
const router = require('express').Router()
const Resource =require('./model')





router.use((err,req,res,next)=>{
    res.status(500).json({
        customMessage: 'something went wrong inside the resource router',
        message: err.message,
        stack: err.stack,
    })
})
module.exports=router