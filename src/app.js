const express = require('express')
const postRouter=require('./posts/posts.router')
const db=require('./utils/database.js')

const app = express()
app.use(express.json())

db.authenticate()
  .then(()=>{
    console.log('Correct database credentials')
  })
  .catch(err=>{
    console.log(err)
  })

  db.sync()
  .then(()=>{
    console.log('The database was successfully synchronized')})
  .catch((err)=>{
    console.log(err)
  })

  app.get('/',(req,res)=>{
    res.json({
        message:"My aplication is working"
    })
})

app.use('/api/v1',postRouter)


app.listen(9000, ()=>{
    console.log('initialized server')
})

module.exports = app
