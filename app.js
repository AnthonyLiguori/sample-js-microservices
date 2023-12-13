import mongoose from "mongoose";
const { Schema } = mongoose;

// mongoose.connect('mongodb://<user>:<pwd>@localhost:28117/video?authDatasource=admin');
mongoose.connect("mongodb://127.0.0.1:27017/Test");

const videoSchema = new Schema(
  {
    title: String,
    cat: String,
  },
  {
    query: {
      byCat(cat) {
        return this.where({ cat: new RegExp(cat, "i") });
      },
    },
  }
);

const Video = mongoose.model("Video", videoSchema, "video");

const m = new Video({ title: "My movie from app", cat: "tv" });
// validation?
m.save()
  .then((res) => {
    //if succeded do this block of code
    console.log("inserted movie", res);
  })
  .catch((err) => {
    //catch error
    console.log("error", err);
  });

Video.find()
  .byCat("tv")
  .then((res) => {
    //if succeded do this block of code
    console.log("movies", res);
  })
  .catch((err) => {
    //catch error
    console.log("error", err);
  });
