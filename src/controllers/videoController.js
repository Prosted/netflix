const videos = [1,2,3,4,5,6,7];


//globalRouter
export const home = (req, res) => {
    res.render("home", {pageTitle : "home", videos});
} 

export const upload = (req, res) =>{
    res.send("Upload Video");
}

//videoRouter
export const watch = (req, res) => {
    res.render("watch", {pageTitle:"watch"});
}