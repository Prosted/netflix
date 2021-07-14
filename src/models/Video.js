import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type:String, required:true, trim : true, minLength:1, maxLength:20},
    description: { type:String, required:true, trim : true, minLength:1, maxLength:20},
    hashtags : [{type : String, required:true, trim : true }],
    createdAt : {type:Date, default : Date.now},
    meta : {
        views : {type:Number, default : 0},
        rating : {type:Number, default : 0},
    },
});

const Video = mongoose.model('Video', videoSchema);

export default Video;