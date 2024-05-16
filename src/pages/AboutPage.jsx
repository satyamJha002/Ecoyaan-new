import React from "react";
import Header from "../component/Header/Header.jsx";
import Feature from "../component/Feature/Feature.jsx";
import Story from "../component/StoryAbout/Story.jsx";
import Team from "../component/Team Section/Team.jsx";
import Footer from "../component/Footer/Footer.jsx";

const AboutPage = () => {
  return (
    <>
      <div>
        <Header />
        <Feature />
        <Story />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
