import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import Post from "../components/Post/Post";
import {useContextAPI} from "../context/Context";

import axios from "axios";

function PostsPage() {
  const {user} = useContextAPI();
  const [blogs, setBlogs] = useState([]);

  async function getBlogs() {
    const blogs = await axios
      .get(`/api/users/blogs?authorId=${user.id}`)
      .catch((error) => console.log(error));

    setBlogs(blogs.data);
  }

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <Header />

      <section className="posts-container">
        <article>
          <div>
            <h6 style={{fontWeight: "bold", textAlign: "center"}}>My Blogs</h6>
            <hr />
          </div>
          {blogs?.message ? (
            <h4 className="text-center">{blogs.message}</h4>
          ) : (
            <div className="d-flex flex-column align-items-center">
              {blogs?.map((post, index) => (
                <Post key={index} id={post._id} post={post} />
              ))}
            </div>
          )}
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
