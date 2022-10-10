import React from "react";
import "./Main.css";
import img from "../../assets/image.jpg";

function Main() {
  return (
    <section className="main-section">
      <article>
        <h6 className="main-header">Tell Your Story to the World</h6>
        <p className="main-p">
          Join with us! Login or Register. Write your story and share !!
        </p>
      </article>
      <article>
        <img src={img} alt="logo" className="main-img" />
      </article>
    </section>
  );
}

export default Main;
