'use client'
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
      <div className={`${styles.sidebarButton} fixed right-0`} onClick={toggleSidebar}>
        <Image width={50} height={50} src={isSidebarOpen ? "close.svg" : "menu.svg"} alt={"open-close-sidebar"} />
      </div>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.visible : styles.hidden}`}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
