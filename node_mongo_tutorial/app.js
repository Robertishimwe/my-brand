const express = require("express")
const mongoose = require("mongoose")
const Blog = require("./models/blog")
const blogController = require("./controllers/blog")
mongoose.connect('mongodb://127.0.0.1:27017/my-blog', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }).then(()=>{

    const app = express()
    app.use(express.json())



app.get("/api/blog", blogController.allPost)
app.post("/api/blog", blogController.createPost)
app.get('/api/blog/:id', blogController.findOnePost)
app.delete('/api/blog/:id', blogController.deletePost)
app.patch('/api/blog/:id', )




app.listen((3000),()=>{
    console.log("server running..........")
})
  
  })

