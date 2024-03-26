const fakeUser = {
  username: "Dahyun",
  loggedIn: true,
};

let videos = [
  {
    title: "first video",
    rating: 3,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "second video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "third video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 67,
    id: 3,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", fakeUser, videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watching:  ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const remove = (req, res) => res.send("Remove video");
export const upload = (req, res) => res.send("Upload Video");
export const search = (req, res) => res.send("Search");
