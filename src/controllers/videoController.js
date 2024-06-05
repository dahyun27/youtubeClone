import Video from "../models/Video";

export const home = async (req, res) => {
  // Video.find({}, (error, videos) => {
  //   console.log("errors", error);
  //   console.log("videos", videos);
  // });
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }
};
export const watch = (req, res) => {
  return res.render("watch", { pageTitle: "Watching" });
};

// form을 화면에 표시
export const getEdit = (req, res) => {
  res.render("edit", { pageTitle: "Editing" });
};

// 변경사항 저장
export const postEdit = (req, res) => {
  const { id } = req.params;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
