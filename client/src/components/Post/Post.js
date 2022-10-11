import React from "react";
import "./Post.css";

function Post({post}) {
  return (
    // <div className="card mb-3 p-2">
    //   <div className="row no-gutters">
    //     <div className="col-md-4" style={{maxHeight: "200px"}}>
    //       <img
    //         src={post.src}
    //         className="card-img"
    //         alt="post-img"
    //         style={{height: "100%", maxWidth: "275px"}}
    //       />
    //     </div>
    //     <div className="col-md-8">
    //       <div className="card-body">
    //         <h5 className="card-title">Card title</h5>
    //         <p className="card-text">
    //           // This is a wider card with supporting text below as a natural lead-in to
    //           // additional content. This content is a little bit longer. This is a wider
    //           // card with supporting text below as a natural lead-in to additional
    //           content. // This content is a little bit longer.
    //         </p>
    //         <p className="card-text">
    //           <small className="text-muted">Last updated 3 mins ago</small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="single-post">
      <img src={post.src} alt="post-img" className="post-img" />
      <div className="post-info">
        <h6>{post.title}</h6>
        <p>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer
        </p>
        <p style={{position: "absolute", bottom: "0"}}>
          <small>Last Updated 3 days ago</small>
        </p>
      </div>
    </div>
  );
}

export default Post;

// This is a wider card with supporting text below as a natural lead-in to
// additional content. This content is a little bit longer. This is a wider
// card with supporting text below as a natural lead-in to additional content.
// This content is a little bit longer.
