import React, { useEffect } from "react";
import Nav from "../components/nav.component";
import Projects from "../components/projects.com";
import Footer from "../components/footer.component";

export default function Home(props) {
  return (
    <>
      <Nav />
      <Projects />
      <Footer />
    </>
  );
}