const router = require("express").Router();
const {
  createBlog,
  getAllBlogs,
  deleteBlog,
  updateBlog,
  getSingleBlog,
} = require("../controllers/blogController");

const multer = require("multer");
// const verifyJwt = require("../middlewares/verifyJwt");

////-----Multer---------/////////

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    console.log(file);
    callback(null, file.originalname);
  },
});

const upload = multer({storage: storage});

router.route("/").post(upload.single("blogImage"), createBlog).get(getAllBlogs);

router.route("/:blogId").delete(deleteBlog).put(updateBlog).get(getSingleBlog);

module.exports = router;
