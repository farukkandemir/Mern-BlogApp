import React from "react";
import "./PopularBlogs.css";

import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";
import blog4 from "../../assets/blog-4.jpg";
import blog5 from "../../assets/blog-5.jpg";
import blog6 from "../../assets/blog-6.jpg";
import blog7 from "../../assets/blog-7.jpg";
import blog8 from "../../assets/blog-8.jpg";

function PopularBlogs() {
  const popular = [
    {src: blog1, title: "Title 1"},
    {src: blog2, title: "Title 2"},
    {src: blog3, title: "Title 3"},
    {src: blog4, title: "Title 4"},
    {src: blog5, title: "Title 4"},
    {src: blog6, title: "Title 4"},
    {src: blog7, title: "Title 4"},
    {src: blog8, title: "Title 4"},
  ];

  return (
    <section className="popular-section">
      <p className="popular-header">Popular Blogs</p>
      <div className="popular-container">
        {popular.map((blog, index) => (
          <div key={index}>
            <img src={blog.src} alt="" className="popular-img" />
            <p className="text-center">{blog.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularBlogs;
