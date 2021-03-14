import React, { useEffect } from "react";
import Nav from "../components/nav.component";
import About from "../components/about.com";
import Footer from "../components/footer.component";

export default function Home(props) {
  return (
    <>
      <Nav />
      <About />
      <Footer />
    </>
  );
}
