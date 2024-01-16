// pages/index.js

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import data from "../lib/data.json";

export default function Home({ data }) {
  const typeJsTextRef = useRef(null);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    // Define an array of strings to be displayed and erased
    const textArray = ["Full Stack Developer.", "Make work Easy!"];

    // Initialize variables
    let stringIndex = 0; // Index of the current string in the array
    let charIndex = 0; // Index of the current character in the current string
    let isTyping = true; // Whether we are currently typing or erasing

    function typeJs() {
      if (stringIndex < textArray.length) {
        // Check if there are more strings to display or erase
        const currentString = textArray[stringIndex];

        if (isTyping) {
          // Typing animation
          if (charIndex < currentString.length) {
            typeJsTextRef.current.innerHTML += currentString.charAt(charIndex);
            charIndex++;
          } else {
            isTyping = false; // Switch to erasing mode
          }
        } else {
          // Erasing animation
          if (charIndex > 0) {
            typeJsTextRef.current.innerHTML = currentString.substring(
              0,
              charIndex - 1
            );
            charIndex--;
          } else {
            isTyping = true; // Switch back to typing mode
            stringIndex++; // Move to the next string

            if (stringIndex >= textArray.length) {
              stringIndex = 0; // Reset to the beginning of the array
            }

            charIndex = 0; // Reset character index
            typeJsTextRef.current.innerHTML = ""; // Clear the content for the new string
          }
        }
      }
    }

    // Set an interval to call the typeJs function
    const intervalId = setInterval(typeJs, 100); // You can adjust the animation speed as needed

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);


  // (Start) State to track the expanded project
  
  const [expandedProject, setExpandedProject] = useState(0);

  const handleProjectClick = (index) => {
    setExpandedProject((prev) => (prev === index ? null : index));
  }

  // (End) State to track the expanded project

  return (
    <>
      <Head>
        <title>Mohammad Amaan | Full Stack Developer</title>
        {/* Meta tags remain the same */}
      </Head>

      <main className={styles.main}>
        <div className={styles.subMain}>
          <section className={styles.section1}>
            <div className={styles.section1Container1}>
              <p className={styles.name}>Hi, I'm Mohammad Amaan</p>
              <p className={styles.animatedText} ref={typeJsTextRef}></p>
            </div>
          </section>
          <section className={styles.section2} id="experience">
            <p className={styles.section2Heading}>
              <span>Experience</span>
            </p>
            <span className={styles.section2Container}>
              {data.experience.map((experience, index) => (
                <div key={index} className={styles.section2Item}>
                  <p className={styles.section1Container2Role}>
                    {experience.role}
                  </p>
                  <p className={styles.section1Container2CompanyName}>
                    {experience.companyName}
                  </p>
                  <p className={styles.section1Container2CompanyDate}>
                    {experience.period}
                  </p>
                </div>
              ))}
            </span>
          </section>
          <section className={styles.section3} id="technology">
            <p className={styles.section3Heading}>
              <span>Technology and Tool</span>
            </p>
            <div className={styles.section3Container}>
              {data.technology.map((tech, index) => (
                <img
                  key={index}
                  src={tech.imgSrc}
                  alt={tech.alt}
                  className={styles.techIcon}
                />
              ))}
            </div>
          </section>
          <section className={styles.section4} id="projects">
            <p className={styles.section4Heading}>
              <span>Projects</span>
            </p>
            <div className={styles.section4Container}>
              {data.projects.map((project, index) => (
                <div
                  key={index}
                  className={`${styles.section4ProjectContainer} ${
                    expandedProject === index ? styles.expanded : ""
                  }`}
                  onClick={() => handleProjectClick(index)}
                >
                  <p className={styles.projectName}>{project.name}</p>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <Link href={project.link} className={styles.projectLink}>
                    <img src="/right_arrow.svg" alt="right arrow icon" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.section5}>
            <p>Copyright © 2024 MOHAMMAD AMAAN. All Rights Reserved.</p>
          </section>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      data,
    },
  };
}
