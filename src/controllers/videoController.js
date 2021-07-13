const videos = [
{
    title : "First",
    description : "first",
    createdAt : "3 minutes ago",
    views : 50,
    rating : 4.1,
    hashtags : ["#fisrt", "#firstVideo"],
    id:1,
},
{
    title : "Second",
    description : "second",
    createdAt : "3 minutes ago",
    views : 50,
    rating : 4.1,
    hashtags : ["#second", "#secondVideo"],
    id:2,
},
{
    title : "Third",
    description : "third",
    createdAt : "3 minutes ago",
    views : 50,
    rating : 4.1,
    hashtags : ["#third", "#ThirdVideo"],
    id:3,
},
];


//globalRouter
export const home = (req, res) => {
    res.render("home", {pageTitle : "home", videos});
} 

export const search = (req, res) => {
    res.render("search", {pageTitle:"search"});
}


//videoRouter
export const watch = (req, res) => {
    const {id} = req.params;
    res.render("watch", {pageTitle:"watch", video : videos[id-1]});
}

export const getUpload = (req, res) =>{
    res.render("upload", {pageTitle:"upload"});
}

export const postUpload = (req, res) =>{
    const {title, description, hashtags} = req.body;
    const newVideo = {
        title,
        description,
        hashtags,
        views : 0,
        rating : 0,
        id : videos.length+1,
        createdAt : "1 minutes ago",
    }
    videos.push(newVideo);
    res.redirect(`/videos/${newVideo.id}`);   
}

export const edit = (req, res) => {
    const {id}=req.params;
    res.render("editVideo", {pageTitle:"editVideo", video: videos[id-1]});
}

export const remove = (req, res) => {
    res.redirect("/");
}