import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import PopularBlogs from "../components/PopularBlogs/PopularBlogs";

function Home() {
  return (
    <main>
      <Header />
      <Main />
      <PopularBlogs />
      <Footer />
    </main>
  );
}

export default Home;
