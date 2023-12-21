import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Image from 'next/image';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Import a bunch of images here... */
import bash from "../../public/img/lang/bash.png";
import bootstrap from "../../public/img/lang/bootstrap.webp";
import c from "../../public/img/lang/c.png";
import cpp from "../../public/img/lang/c++.png";
import css from "../../public/img/lang/css.png";
import flask from "../../public/img/lang/flask.png";
import figma from "../../public/img/lang/figma.png";
import git from "../../public/img/lang/git.png";
import github from "../../public/img/lang/github.png";
import html from "../../public/img/lang/html.png";
import js from "../../public/img/lang/js.png";
import mongo from "../../public/img/lang/mongo.png";
import next from "../../public/img/lang/next.webp";
import node from "../../public/img/lang/node.png";
import notion from "../../public/img/lang/notion.png";
import python from "../../public/img/lang/python.png";
import react from "../../public/img/lang/react.png";
import redis from "../../public/img/lang/redis.png";
import redux from "../../public/img/lang/redux.png";
import slack from "../../public/img/lang/slack.png";
import sql from "../../public/img/lang/sql.png";
import tailwind from "../../public/img/lang/tailwind.png";
import ts from "../../public/img/lang/ts.png";
import ubuntu from "../../public/img/lang/ubuntu.png";
import vscode from "../../public/img/lang/vscode.png";
import webpack from "../../public/img/lang/webpack.png";
import windows from "../../public/img/lang/windows.png";

// const images = [ bash, bootstrap, c, cpp, css, flask, figma, git, github, html, js, mongo, next, node, notion, python, react, redis, redux, slack, sql, tailwind, ts, ubuntu, vscode, webpack, windows ];
const images = [ html, css, js, react, redux, ts, node, mongo, tailwind, next, python, flask, redis, sql, webpack, bootstrap, c, cpp, bash, figma, git, github, notion, slack, vscode, ubuntu, windows ];

import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import About from "../components/about";
import Footer from "../components/footer";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Education from "../components/education";
import Awards from "../components/awards";
import PopupWidget from "../components/popupWidget";
import Contact from "../components/contact";

const Home = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 8, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 1, // Increase this value to pause longer between scrolls
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // This is the breakpoint for tablet devices
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Brayden Vernon's Website</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <div id="about" />
      <SectionTitle
        pretitle="Who am I?"
        title=" About Me">
        A Full-Stack Web Developer graduating from Holberton School - Tulsa in 12/2023 with a diploma in Computer Science & Full-Stack Web Development. I have a passion for creating tools to help people and businesses succeed. When I am not coding, I enjoy spending time with my family, playing video games, and playing disc golf.
      </SectionTitle>
      <About data={benefitOne} />
      <About imgPos="right" data={benefitTwo} />
      <About data={benefitThree} />
      <SectionTitle
        pretitle="Fully-Stacked"
        title="Languages & Softwares">
        I have experience in a wide range of languages and technologies. I have experience in low level, front, and back-end development. I am always learning new languages and technologies to stay up to date with the latest trends in the industry.
      </SectionTitle>
      <div className="mt-10 mb-20 pt-1 mx-auto max-w-7xl h-24 bg-gray-800" style={{ boxShadow: '0 0 50px 2px rgba(255, 255, 255, 0.5)' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center h-full p-2">
            <Image src={image} alt={`Image ${index + 1}`} width={70} height={75} />
          </div>
        ))}
      </Slider>
    </div>

      <div id="experience" />
      <SectionTitle
        pretitle="Experience"
        title="Professional Experience">
        Who I have worked for and what I have done for them.
      </SectionTitle>
      <Experience />

      {/* Education Section */}
      <div id="education" />
      <SectionTitle pretitle="Learning Enviornments" title="Education"/>
      <Education />

      { /* Projects Section */ }
      <div id="projects" />
      <SectionTitle pretitle="What I've Done" title="Projects"/>
      <Projects />

      { /* Awards Section */}
      <SectionTitle pretitle="medals and stuff" title="Awards" />
      <Awards />


      {/* Contact Section */}
      <div id="contact" />
      <SectionTitle pretitle="Let's Talk" title="Contact" />
      <Contact />


      {/* Footer */}
      <Footer />

      {/* Popup Widget / Contact */}
      <PopupWidget />
    </>
  );
}

export default Home;
