import React, { useEffect } from "react";
import Nav from "../components/nav.component";
import Blog from "../components/blog.com";
import Footer from "../components/footer.component";

export default function Home(props) {
  return (
    <>
      <Nav />
      <Blog />
      <Footer />
    </>
  );
}