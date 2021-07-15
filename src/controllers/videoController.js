import Video from "../models/Video";

//globalRouter
export const home = async (req, res) => {
    try{
        const videos = await Video.find({}).sort({"createdAt":-1});
        return res.render("home", {pageTitle : "home", videos});
    }catch(error){
        res.render("server-error", {pageTitle:"404 Error"});
    }
} 

export const search = async (req, res) => {
    const {title} = req.query;
    let videos = [];
    if(title){
        videos = await Video.find({title : {$regex:new RegExp(`^${title}`,"i")}});
    }
    return res.render("search", {pageTitle:"search", videos});
}

//videoRouter
export const watch = async (req, res) => {
    const {id} = req.params;
    const videoCheck = await Video.exists({_id:id});
    if(!videoCheck){
        return res.render("server-error", {pageTitle:"server-error"});
    }
    const video = await Video.findById(id);
    res.render("watch", {pageTitle:"watch", video});
}

export const getUpload = (req, res) =>{
    res.render("upload", {pageTitle:"upload"});
}

export const postUpload = async (req, res) =>{
    const {title, description, hashtags} = req.body;
    await Video.create({
        title,
        description,
        hashtags : hashtags.split(",").map(word => word.charAt(0) == "#" ? word : `#${word}`),
    });
    res.redirect('/');   
}

export const getEdit = async (req, res) => {
    const {id} = req.params;
    const videoCheck = await Video.exists({_id:id});
    if(!videoCheck){
        return res.render("server-error", {pageTitle:"server-error"});
    }
    const video = await Video.findById(id);
    res.render("editVideo", {pageTitle:"editVideo", video});
}

export const postEdit = async (req, res) => {
    const {id}=req.params;
    const {title, description, hashtags} = req.body;
    await Video.findByIdAndUpdate(id, {
        title, description, hashtags : hashtags.split(",").map(word => word.charAt(0) =="#" ? word : `#${word}`),
    });
    res.redirect(`/videos/${id}`);
}


export const remove = async (req, res) => {
    const {id} = req.params;
    const videoCheck = await Video.exists({_id:id});
    if(!videoCheck){
        return res.render("server-error", {pageTitle:"server-error"});
    }
    await Video.deleteOne({ _id : id });  
    res.redirect("/");
}