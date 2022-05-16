const mongoose = require('mongoose'); 


var linkSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    shortUrl:{
        type:String,
        required:true
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