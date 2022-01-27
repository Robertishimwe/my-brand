const Blog = require("../models/blog")

exports.allPost = async (req,res)=>{
    const blog = await Blog.find();
    res.send(blog);
};

exports.createPost = async (req,res)=>{
    const blog = new Blog({
        title: req.body.title,
        Body: req.body.body
    })
    await blog.save()
    res.status(200).send(blog)
}

exports.findOnePost = async (req,res)=>{

    try{
    const blog = await Blog.findById(req.params.id)
    res.status(200).send(blog)
    }catch{
        res.status(404).send("post not found")
    }
}

exports.deletePost = async (req,res)=>{
    try{
        const blog = await Blog.findById(req.params.id)
        blog.remove()
        res.send(true)
        }catch{
            res.status(404).send("post not found")
        }
}
exports.upDatePost = async (req,res)=>{
    try{
        const blog = await Blog.findById(req.params.id)
        Object.assign(blog, req.body)
        blog.save()
        res.send(true)
        }catch{
            res.status(404).send("post not found")
        }
}