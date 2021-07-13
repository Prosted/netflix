//userRouter
export const profile = (req, res) => {
    res.render("profile", {pageTitle:"profile"});
}

export const edit = (req, res) => {
    res.render("editUser", {pageTitle:"editUser"});
} 

export const remove = (req, res) => {
    res.render("deleteUser", {pageTitle:"deleteUser"});
} 