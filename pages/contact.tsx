import Head from "next/head";
import Projects from "../components/projects.component";
import Footer from "../components/footer.component";
import Header from "../components/header.component";

import Link from "next/link";
import { _Header } from "../_includes/header";
import Nav from "../components/nav.component";

export default function Contact() {
  return (
     <>
      <Nav />
      <Header />
      <Projects />
      <Footer />
    </>
  );
}
