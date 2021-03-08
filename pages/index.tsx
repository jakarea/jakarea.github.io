import React, { useEffect } from "react";
import Header from "../components/header.component";
import Nav from "../components/nav.component";
import Projects from "../components/projects.component";
import Footer from "../components/footer.component";

export default function Home(props) {
  return (
    <>
      <Nav />
      <Header />
      <Projects />
      <Footer />
    </>
  );
}
