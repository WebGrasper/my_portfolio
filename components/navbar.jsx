import { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const [isSeachChechBoxChecked, setSeachChechBoxChecked] = useState(false);
  const handleSearchCheckBox = () => {
    setSeachChechBoxChecked(!isSeachChechBoxChecked);
  };
  
  const [isMenuOpen, setMenuOpen] = useState(false); // New state for menu visibility
  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  //styling navbar link animation(starting)
  const router = useRouter();

  const [isAtHome, setAtHome] = useState(false);
  const [isAtCoffeeTables, setAtCoffeeTables] = useState(false);
  const [isAtSideTables, setAtSideTables] = useState(false);
  const [isAtConsoleAndPillars, setAtConsoleAndPillars] = useState(false);

  useEffect(() => {
    console.log(router.asPath)
    if (router.asPath == '/') {
      setAtHome(true);
    } else {
      setAtHome(false);
    }

    if (router.asPath == '/#experience') {
      setAtCoffeeTables(true);
    } else {
      setAtCoffeeTables(false);
    }

    if (router.asPath == '/#technology') {
      setAtSideTables(true);
    } else {
      setAtSideTables(false);
    }

    if (router.asPath == '/#projects') {
      setAtConsoleAndPillars(true);
    } else {
      setAtConsoleAndPillars(false);
    }

  }, [router.asPath]);
  //styling navbar link animation(Ended)

  return (
    <div className={styles.navbarSupremeContainer}>
      <div>
        <nav className={`${styles.navbar}`}>
          <div className={`${styles.container1}`}>
            <Link href={"/"}>
              <div className={styles.container1H1}>
                <img src="/logo-white.png" alt="logo" />
              </div>
            </Link>
          </div>
          <div className={`${styles.containerButton}`}>
            <input type="checkbox" className={styles.checkBox} checked={isMenuOpen} onChange={() => setMenuOpen(!isMenuOpen)}/>
            <img
              className={styles.closeButton}
              src="/close.svg"
              alt="close button"
            />
            <img
              className={styles.menuButton}
              src="/menu.svg"
              alt="menu button"
            />
            <div className={styles.container3Navbar}>
              <Link
                className={`${styles.link} ${isAtHome ? styles.active : ""}`}
                href="/"
                passHref
                onClick={handleLinkClick}
              >
                <span>Home</span>
              </Link>
              <Link
                className={`${styles.link} ${isAtCoffeeTables ? styles.active : ""}`}
                href="/#experience"
                passHref
                onClick={handleLinkClick}
              >
                <span>Experience</span>
              </Link>
              <Link
                className={`${styles.link} ${isAtSideTables ? styles.active : ""}`}
                href="/#technology"
                passHref
                onClick={handleLinkClick}
              >
                <span>Technology</span>
              </Link>
              <Link
                className={`${styles.link} ${isAtConsoleAndPillars ? styles.active : ""}`}
                href="/#projects"
                passHref
                onClick={handleLinkClick}
              >
                <span>Projects</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
