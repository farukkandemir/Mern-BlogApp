import React, {useState} from "react";
import Header from "../components/Header/Header";
import {useContextAPI} from "../context/Context";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function NewPost() {
  const {user} = useContextAPI();

  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    blogImage: "",
    blogBody: "",
    authorId: user.id,
  });

  async function handleCreatePost(e) {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("title", data.title);
    formdata.append("blogImage", data.blogImage);
    formdata.append("blogBody", data.blogBody);
    formdata.append("authorId", data.authorId);

    const result = await axios
      .post("/api/blogs", formdata, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .catch((err) => console.log(err));

    navigate("/dashboard");
  }

  return (
    <div>
      <Header />

      <section className="form">
        <h3>New Post</h3>
        <hr />
        <form encType="multipart/form-data" onSubmit={handleCreatePost}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control mb-4"
              id="title"
              placeholder="Title"
              value={data.title}
              onChange={(e) => setData({...data, [e.target.id]: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="blog-images" className="d-block">
              Select image for Post
            </label>
            <input
              type="file"
              id="blog-images"
              className="mb-4"
              name="blogImage"
              onChange={(e) => setData({...data, [e.target.name]: e.target.files[0]})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="blogBody">Post Body</label>
            <textarea
              className="form-control"
              id="blogBody"
              name="blogBody"
              rows="15"
              value={data.blogBody}
              onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Save Post
          </button>
        </form>
      </section>
    </div>
  );
}

export default NewPost;
