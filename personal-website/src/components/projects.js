import React from 'react';
import Slider from 'react-slick';
import Container from './container';
import Image from 'next/image';

import tmd1 from "../../public/img/projects/tmd/tmd1.png";
import tmd2 from "../../public/img/projects/tmd/tmd2.png";
import tmd3 from "../../public/img/projects/tmd/tmd3.png";

import dgcc1 from "../../public/img/projects/dgcc/dgcc1.png";
import dgcc2 from "../../public/img/projects/dgcc/dgcc2.png";

const projects = [
    {
        title: "Music In Tulsa",
        date: "12/2023",
        description: "A website to help people find live music in Tulsa, OK. This app is a directory of local musicians and also has a music recommendation tool that functions from either manually filtering by genre, or by a recommendation tool that makes recommendations based on your listening history on spotify. The user can sign in with spotify and select a playlist to generate recommendations from. The user can also filter by genre and location to find local musicians.",
        demo: "httsp://musicintulsa.com",
        github: "https://github.com/nathanhall762/TulsaMusicianDirectory",
        images: [tmd1, tmd2, tmd3],
    },
    {
        title: "DG Course Caddy",
        date: "12/2023",
        description: "A web app aimed to help people in the disc golf community by providing them with a tool to help them generate PDGA Rating esimations for their local courses. This helps users know what to expect when they play a course for the first time, or when they are signing up for a tournament. The user can save their scores to their profile and track their progress over time. More features are planned for the future.",
        demo: "https://discgolfscore.com",
        github: "https://github.com/CalebHouse99/discgolfscore-app",
        images: [dgcc1, dgcc2],
    }
]

const Projects  = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>
        <Container className="w-full mx-auto my-auto grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col justify-between w-full bg-gray-100 lg:px-14 lg:py-14 rounded-2xl dark:bg-trueGray-800 px-5 py-5">
                <Slider {...settings}>
                    {project.images.map((image, idx) => (
                      <div key={idx} className="h-[200px] md:h-[600px] overflow-hidden">
                        <Image src={image} alt={`Project ${index + 1} Image ${idx + 1}`} layout="responsive" width={800} height={600} objectFit="contain" />
                        </div>
                    ))}
                </Slider>
                <h1 className="text-4xl font-bold leading-normal">{project.title}</h1>
                <p>{project.date}</p>
                <p>{project.description}</p>
                <br />
                <div className="flex space-x-4">
                <a href={project.demo} className="text-red-500 underline">Demo</a>
                <a href={project.github} className="text-red-500 underline">GitHub</a>
                </div>
            </div>
            ))}
        </Container>
      </>
    );
  };

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Projects;
