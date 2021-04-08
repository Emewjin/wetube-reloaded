const fakeUser = {
    username: "emewjin",
    loggedIn: true,
};

export const trending = (req, res) => {
    const videos = [
        {
            title: 1,
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id:1,
        },
        {
            title: 2,
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id:2,
        },
        {
            title: 3,
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id:3,
        },
    ];
    res.render("home", {pageTitle:"HOME", videos});
}
export const watch = (req, res) => res.render("watch", {pageTitle:"VIDEO"});
export const editVideos = (req, res) => res.render("edit", {pageTitle:"VIDEO"});
export const search = (req, res) => res.send("search videos");
export const deleteVideos = (req, res) => res.send("delete videos");
export const upload = (req, res) => res.send("upload videos");