const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const blogSchema = new Schema( {

title: String,
Body: String

})

const Blog =  mongoose.model('Blog' , blogSchema)

module.exports = Blog;
