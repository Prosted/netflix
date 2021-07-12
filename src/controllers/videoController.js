//globalRouter
export const home = (req, res) => {
    res.send("This is Home Baby");
} 

export const upload = (req, res) =>{
    console.log("hey");
    res.send("Upload Video");
}

//videoRouter
export const see = (req, res) => {
    res.send("watch video");
}