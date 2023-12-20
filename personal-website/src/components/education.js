import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full p-2 mx-auto rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {schoolData.map((item, index) => (
          <div key={item.school} className="mb-5 px-5">
          <Disclosure defaultOpen={item.school === 'Holberton School'}>
            {({ open }) => (
              <>
              <Disclosure.Button style={{ backgroundColor: item.school === 'Holberton School' ? 'rgb(232,28,60)' : (item.school === 'Tulsa Community College' ? 'rgba(38,84,180)' : 'inherit'), color: 'white' }} className={`flex items-center justify-between w-full px-4 py-4 text-lg text-left rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200`}>
                <span>{item.school}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                <h2 className="text-2xl font-semibold mb-2">{item.diploma}</h2>
                <p className="mb-2">{item.location} | {item.date}</p>
                {item.description}
              </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const schoolData = [
  {
    school: "Holberton School",
    location: "Tulsa, OK",
    date: "05/2022 - 12/2023",
    diploma: "Diploma in Computer Science & Full-Stack Web Development",
    description: "Full-time, 20-month, rigorous hands-on project-based curriculum covering a wide range of technical concepts, skills, and tools. Studied programming languages, algorithms, data structures, and modern web development technologies. Started in C and Bash, working up to real-world applications of Front-End, Back-End, and DevOps engineering."
  },
  {
    school: "Tulsa Community College",
    location: "Tulsa, OK",
    date: "08/2019 - 05/2022",
    diploma: "",
    description: "Completed courses include 30 credit-hours across in pre-engineering curriculum including: Calculus/Trig/Geometry, Engineering Physics, Engineering Design & Ethics, Engineering Chemistry, and Computer Hardware. ",
  },
];

export default Faq;
