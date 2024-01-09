import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const typeJsTextRef = useRef(null);

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

  return (
    <>
      <Head>
        <title>Mohammad Amaan | Full Stack Developer</title>
        <meta
          name="description"
          content="Explore the portfolio of Mohammad Amaan, a skilled Full Stack Developer passionate about creating innovative web solutions."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Web Development, React, Node.js, Portfolio"
        />
        <meta name="author" content="Mohammad Amaan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-color.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.subMain}>
          <section className={styles.section1}>
            <div className={styles.section1Container1}>
              <p className={styles.name}>Hi, I'm Mohammad Amaan</p>
              <p className={styles.animatedText} ref={typeJsTextRef}></p>
            </div>
            <div className={styles.section1Container2}>
              <Image src="/front.svg" width={250} height={250} />
            </div>
          </section>
          <section className={styles.section2} id="experience">
            <p className={styles.section2Heading}>Experience</p>
            <div className={styles.section2Container}>
              <p className={styles.section1Container2CompanyHeading}>
                Software Developer Engineer Intern
              </p>
              <p className={styles.section1Container2CompanyDate}>
                1/oct/2023 - 30/nov/2023
              </p>
            </div>
            <div className={styles.section2Container}>
              <p className={styles.section1Container2CompanyHeading}>
                React Developer Intern
              </p>
              <p className={styles.section1Container2CompanyDate}>
                1/may/2023 - 1/june/2023
              </p>
            </div>
            <div className={styles.section2Container}>
              <p className={styles.section1Container2CompanyHeading}>
                Frontend Designer Intern
              </p>
              <p className={styles.section1Container2CompanyDate}>
                18/Aug/2022 - 18/oct/2022
              </p>
            </div>
          </section>
          <section className={styles.section3} id="technology">
            <p className={styles.section3Heading}>Technology and Tool</p>
            <div className={styles.section3Container}>
              <img src="/iconpack/c.svg" alt="c logo" />
              <img src="/iconpack/css3-plain.svg" alt="css logo" />
              <img src="/iconpack/express.svg" alt="expressjs logo" />
              <img src="/iconpack/git-plain.svg" alt="git logo" />
              <img src="/iconpack/html5-original.svg" alt="html logo" />
              <img
                src="/iconpack/javascript-original.svg"
                alt="javascript logo"
              />
              <img src="/iconpack/mongodb-plain.svg" alt="mongodb logo" />
              <img
                src="/iconpack/nextjs-icon-svgrepo-com.svg"
                alt="nextjs logo"
              />
              <img src="/iconpack/nodejs.svg" alt="nodejs logo" />
              <img src="/iconpack/postman.svg" alt="postman logo" />
              <img
                src="/iconpack/react-original-wordmark.svg"
                alt="reactjs logo"
              />
            </div>
          </section>
          <section className={styles.section4} id="projects">
            <p className={styles.section4Heading}>Projects</p>
            <div className={styles.section4Container}>
              <div className={styles.section4ProjectContainer}>
                <p className={styles.projectName}>Sarte Living</p>
                <p className={styles.projectDescription}>
                  Exporter of handmade metal furniture: coffee, console, side
                  tables, and lifestyle accessories. Blend international
                  aesthetics with Indian craftsmanship at Sarte Living.
                </p>
                <Link href="" className={styles.projectLink}>
                  Explore
                </Link>
              </div>
              <div className={styles.section4ProjectContainer}>
                <p className={styles.projectName}>New Stash</p>
                <p className={styles.projectDescription}>
                  Explore insightful articles on tech, lifestyle, and more. Stay
                  informed, share thoughts, and enrich your knowledge. Join our
                  community now for engaging content!
                </p>
                <Link href="" className={styles.projectLink}>
                  Explore
                </Link>
              </div>
              <div className={styles.section4ProjectContainer}>
                <p className={styles.projectName}>Stashify</p>
                <p className={styles.projectDescription}>
                  Discover diverse, concise blog articles. Stay informed on
                  trends, opinions, lifestyle, and tech. Join our community,
                  read, and share your thoughts.
                </p>
                <Link href="" className={styles.projectLink}>
                  Explore
                </Link>
              </div>
              <div className={styles.section4ProjectContainer}>
                <p className={styles.projectName}>Compressify</p>
                <p className={styles.projectDescription}>
                  Optimize your images effortlessly with ImageCompressify. A
                  seamless web app for efficient image compression and fast
                  loading.
                </p>
                <Link href="" className={styles.projectLink}>
                  Explore
                </Link>
              </div>
              <div className={styles.section4ProjectContainer}>
                <p className={styles.projectName}>Code Classico</p>
                <p className={styles.projectDescription}>
                  Elevate your coding with our React-based online editor.
                  Seamless, collaborative, and feature-rich for efficient
                  development. Join us now!
                </p>
                <Link href="" className={styles.projectLink}>
                  Explore
                </Link>
              </div>
              <div className={styles.section4ProjectContainer}>
                <p className={styles.projectName}>Self Care</p>
                <p className={styles.projectDescription}>
                  A platform where one can search for mental health-related
                  conditions and access corresponding remedies. Your well-being,
                  our priority!
                </p>
                <Link href="" className={styles.projectLink}>
                  Explore
                </Link>
              </div>
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
