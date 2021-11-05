// build your `/api/tasks` router here
const router = require('express').Router()
const Task =require('./model')





router.use((err,req,res,next)=>{
    res.status(500).json({
        customMessage: 'something went wrong inside the task router',
        message: err.message,
        stack: err.stack,
    })
})
module.exports=router