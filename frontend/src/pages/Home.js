import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
    </div>
  );
}
