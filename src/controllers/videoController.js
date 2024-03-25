export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit");
export const remove = (req, res) => res.send("Remove video");
export const upload = (req, res) => res.send("Upload Video");
export const search = (req, res) => res.send("Search");
