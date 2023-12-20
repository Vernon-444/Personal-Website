import React from "react";
import Container from "./container";

const Experience = () => {
  return (
    <Container className="w-full md:w-1/2 mx-auto">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h1 className="text-4xl font-bold leading-normal">Student Tutor</h1>
          <div className="flex justify-between">
            <p>Holberton School - Tulsa</p>
            <p>09/2023 - 02/2023</p>
          </div>
          <br />
          <p className="">
            Applied different teaching techniques to improve student grades, build test skills and foster confidence by conducting mock interviews, conducting code reviews, and demonstrating practical problem solving techniques at the whiteboard and terminal alike.
            Tutoring a body of <Mark>over 100 students</Mark> on the principles of Computer Science, Full Stack Software Engineering and lower level applications.
            Reviewed submitted work, conducted mock interviews, and provided assistance for <Mark>120+ different projects.</Mark>
            <br/>
            Languages covered: Unix, C, Python, MySQL, HTML/CSS, and JavaScript
          </p>
        </div>
      </div>
    </Container>
  );
}

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

export default Experience;
