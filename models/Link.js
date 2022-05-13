const mongoose = require('mongoose'); 
const { nanoid } = require('nanoid');

var linkSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    shortUrl:{
        type:String,
        required:true,
        default:nanoid(5)
    },
    screenshot:{
        type:String,
        default:"",
        required:true
    },
    views: {
        type: Number,
        required: true,
        default: 0
      },
    user: {
        type:String,
        required:true,
        default:"none"
    }
});

//Export the model
module.exports = mongoose.model('Link', linkSchema);