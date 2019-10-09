const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    connect:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        dafault: Date.now
    }
})

module.exports = mongoose.model('Posts' , PostSchema)