// build your `/api/tasks` router here
const router = require('express').Router()
const Task =require('./model')


router.get('/', (req,res,next)=>{
    console.log('task router reached')
  })


router.use((err,req,res,next)=>{
    res.status(500).json({
        customMessage: 'something went wrong inside the task router',
        message: err.message,
        stack: err.stack,
    })
})
module.exports=router