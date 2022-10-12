import React from "react";
import Header from "../components/Header/Header";

function NewPost() {
  return (
    <div>
      <Header />

      <section className="form">
        <h3>New Post</h3>
        <hr />
        <form action="">
          <div class="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control mb-4"
              id="title"
              placeholder="Title"
            />
          </div>
          <div>
            <label htmlFor="blog-images" className="d-block">
              Select image for Post
            </label>
            <input type="file" id="blog-images" className="mb-4" />
          </div>
          <div className="form-group">
            <label htmlFor="Textarea">Post Body</label>
            <textarea className="form-control" id="Textarea" rows="5"></textarea>
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
