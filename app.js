const { sequelize, User } = require('./models')

const express = require("express")
const logger = require("morgan")
 const app = express()
  app.use(express.json())
  app.use(logger("dev"))
  
  app.post("/users",async (req,res)=> {
      const {name,email,role} = req.body
      try {
        const user = await User.create({name,email,role})
        return res.json(user)
      }
      catch(err){
          console.log("Error: ",err)
          res.status(500).send(err)
      }

      
  })

  app.get("/users",async (req,res)=> {
    try {
      const user = await User.findAll()
      return res.json(user)
    }
    catch(err){
        console.log("Error: ",err)
        res.status(500).send(err)
    }

})

  app.get("/users/:id",async (req,res)=> {
      console
    const id = req.query.id
    
    console.log("id : ",id)
    try {
      const user = await User.findOne({
        where : {id}
      })
      return res.json(user)
    }
    catch(err){
        console.log("Error: ",err)
        res.status(500).send(err)
    }

})

  app.listen({port: 5000},async ()=> {
      console.log("server is up and running on http://localhost:5000")
      //await sequelize.sync()
      await sequelize.authenticate()
      console.log("Database Connected")

  })
