const videos = [
{
    title : "First",
    createdAt : "3 minutes ago",
    views : 50,
    rating : 4.1,
    hashtags : ["#fisrt", "#firstVideo"],
    id:123,
},
{
    title : "Second",
    createdAt : "3 minutes ago",
    views : 50,
    rating : 4.1,
    hashtags : ["#second", "#secondVideo"],
    id:456,
},
{
    title : "Third",
    createdAt : "3 minutes ago",
    views : 50,
    rating : 4.1,
    hashtags : ["#third", "#ThirdVideo"],
    id:789,
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
    console.log(req.params);
    res.render("watch", {pageTitle:"watch"});
}

export const upload = (req, res) =>{
    res.render("upload", {pageTitle:"upload"});
}

export const edit = (req, res) => {
    res.render("editVideo", {pageTitle:"editVideo"});
}

export const remove = (req, res) => {
    res.render("deleteVideo", {pageTitle:"deleteVideo"});
}