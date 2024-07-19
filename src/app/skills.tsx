"use client";

import { Typography } from "@material-tailwind/react";
import {
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
  CodeBracketSquareIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/common/components";
import AnimateHoverScale from "@/common/motions/AnimateHoverScale";

const SKILLS = [
  {
    icon: CodeBracketSquareIcon,
    title: "Full Stack Web Development",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build web app. that captivate and engage users.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile App Development",
    children:
      " I have a strong hand in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular full stack technologies, including HTML5, CSS3, JavaScript, C#, PHP and frameworks like React, Angular, Laravel, Flutter, React Native and .Net",
  },
  {
    icon: HashtagIcon,
    title: " App Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

export function Skills() {
  return (
    <section className="px-8 pt-20 dark:bg-primaryBlack-600">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase dark:text-gray-300"
        >
          my skills
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 dark:text-white"
        >
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a functional analyst. Crafting
          immersive online experiences is not just a job but my calling.
          Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <AnimateHoverScale key={idx} index={idx + 1 * 3} active={true}>
            <SkillCard {...props} />
          </AnimateHoverScale>
        ))}
      </div>
    </section>
  );
}

export default Skills;
