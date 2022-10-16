import axios from "axios";
import React, {useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header/Header";

function EditSinglePost() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [singlePost, setSinglePost] = useState();

  const titleRef = useRef();
  const bodyRef = useRef();

  async function getSinglePost() {
    const post = await axios.get(`/api/blogs/${id}`).catch((err) => console.log(err));

    setSinglePost(post.data);
  }

  async function handleEdit(e) {
    e.preventDefault();
    const result = await axios
      .put(`/api/users/blogs/${id}`, {
        title: titleRef.current.value,
        blogBody: bodyRef.current.value,
      })
      .catch((err) => console.log(err));

    navigate("/dashboard");
  }

  useEffect(() => {
    getSinglePost();
  }, []);

  return (
    <div>
      <Header />

      <section className="form">
        <h3>Edit Post</h3>
        <hr />
        <form onSubmit={handleEdit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control mb-4"
              id="title"
              placeholder="Title"
              defaultValue={singlePost?.title}
              ref={titleRef}
            />
          </div>
          {/* <div>
            <label htmlFor="blog-images" className="d-block">
              Select image for Post
            </label>
            <input
              type="file"
              id="blog-images"
              className="mb-4"
              name="blogImage"
             
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="blogBody">Post Body</label>
            <textarea
              className="form-control"
              id="blogBody"
              name="blogBody"
              rows="15"
              defaultValue={singlePost?.blogBody}
              ref={bodyRef}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Edit Post
          </button>
        </form>
      </section>
    </div>
  );
}

export default EditSinglePost;
