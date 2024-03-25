const fakeUser = {
  username: "Dahyun",
  loggedIn: true,
};

export const trending = (req, res) => {
  const videos = [
    {
      title: "first video",
      rating: 3,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "second video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "third video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];
  res.render("home", { pageTitle: "Home", fakeUser, videos });
};
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit");
export const remove = (req, res) => res.send("Remove video");
export const upload = (req, res) => res.send("Upload Video");
export const search = (req, res) => res.send("Search");
