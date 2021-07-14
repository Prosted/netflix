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

export const search = (req, res) => {
    res.render("search", {pageTitle:"search"});
}

//videoRouter
export const watch = async (req, res) => {
    const {id} = req.params;
    const video = await Video.findById(id);
    console.log(video);
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

export const edit = (req, res) => {
    const {id}=req.params;
    res.render("editVideo", {pageTitle:"editVideo"});
}
export const remove = async (req, res) => {
    const {id} = req.params;
    await Video.deleteOne({ _id : id });  
    res.redirect("/");
}