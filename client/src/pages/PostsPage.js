import React from "react";
import Header from "../components/Header/Header";
import Post from "../components/Post/Post";

import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";

function PostsPage() {
  const posts = [
    {src: blog1, title: "Title 1", body: "Hello from the First Post"},
    {src: blog2, title: "Title 2", body: "Hello from the Second Post"},
  ];

  return (
    <div>
      <Header />

      <section className="posts-container">
        <article>
          <div>
            <h6 style={{fontWeight: "bold", textAlign: "center"}}>My Blogs</h6>
            <hr />
          </div>
          <div className="d-flex flex-column align-items-center">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </article>
        <article>
          <div>
            <h6 style={{textAlign: "center"}}>Popular Writers / Blogs</h6>
            <hr />
          </div>
          <div></div>
        </article>
      </section>
    </div>
  );
}

export default PostsPage;
