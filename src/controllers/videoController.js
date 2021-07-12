//globalRouter
export const home = (req, res) => {
    res.render("home", {pageTitle : "home"});
} 

export const upload = (req, res) =>{
    res.send("Upload Video");
}

//videoRouter
export const watch = (req, res) => {
    res.render("watch", {pageTitle:"watch"});
}