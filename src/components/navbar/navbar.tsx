import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "About us",
    url: "/about",
  },
  {
    id: 2,
    title: "Services",
    url: "/services",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <span>IT PROFESSIONALS</span>
        <img alt="" src="/logo.png" className={styles.logoImage} />
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className={styles.rightBox}>
        <span className={styles.rightBoxText}>Let&apos;s Talk</span>
        <img alt="" src="/lets-talk.png" className={styles.rightBoxIcon} />
      </div>
    </div>
  );
};

export default Navbar;
