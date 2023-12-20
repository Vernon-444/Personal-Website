import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
  } from "@heroicons/react/24/solid";

  /* Image imports */
  import logo from "../../public/img/logos/BV_Logo_2.png";
  import logo2 from "../../public/img/logos/mountain_patch.jpg";
  import horseberton from "../../public/img/logos/horseberton.webp";
  import vscode from "../../public/img/logos/vscode.png";

  const benefitOne = {
    title: "Big Picture",
    desc: "Learning at Holberton taught me not only how to code, but how to be a professional software engineer. I learned how to learn, how to work with others, and how to be a leader. I learned how to be a better team player. I am excited to take these skills and apply them to my career.",
    image: logo,
    bullets: [
      {
        title: "Software Best Practices",
        desc: "Learning how to code, and how to code well using industry best practices.",
        icon: <CursorArrowRaysIcon />,
      },
      {
        title: "Attention to Detail",
        desc: "Testing and debugging code to ensure it is working as intended.",
        icon: <ChartBarSquareIcon />,
      },
      {
        title: "Communication",
        desc: "Working with others to solve problems and complete the impossible.",
        icon: <FaceSmileIcon />,
      },
    ],
  };

  const benefitTwo = {
    title: "Student Tutoring",
    desc: "During my time at Holberton, I was a student tutor. I helped my peers learn the material and learn complex technical concepts. I learned how to communicate technical concepts to others. I learned about effective communication, presentation skills, and how to be a leader.",
    image: horseberton,
    bullets: [
      {
        title: "Communicating Technical Concepts",
        desc: "Challenging my understanding of technical concepts by teaching them to others.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Presentation Skills",
        desc: "Desiging and presenting technical concepts to others in an engaging, easy to understand way.",
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: "Learning to Be a Leader",
        desc: "Learning how to be a leader and how to work with others to accomplish a common goal.",
        icon: <SunIcon />,
      },
    ],
  };

  const benefitThree = {
    title: "Results",
    desc: "What I can do for you.",
    image: vscode,
    bullets: [
      {
        title: "Responsive Design",
        desc: "Designing and developing responsive websites that look great on all devices.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Effective Code",
        desc: "Writing clean, easy to read code that is well documented and easy to maintain.",
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: "Versatility",
        desc: "Experience in low level, front, and back-end development: I can help with all development needs.",
        icon: <SunIcon />,
      },
    ],
  };

  export {benefitOne, benefitTwo, benefitThree};
