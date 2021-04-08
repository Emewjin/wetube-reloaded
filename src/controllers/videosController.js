export const trending = (req, res) => res.render("home", {pageTitle:"HOME"});
export const watch = (req, res) => res.render("watch", {pageTitle:"VIDEO"});
export const editVideos = (req, res) => res.render("edit", {pageTitle:"VIDEO"});
export const search = (req, res) => res.send("search videos");
export const deleteVideos = (req, res) => res.send("delete videos");
export const upload = (req, res) => res.send("upload videos");