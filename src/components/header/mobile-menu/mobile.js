"use client";
import { useState } from "react";
import styles from "./mobile.module.css";
import Image from "next/image";
export default function MobileMenu() {
  const [menuList, setMenuList] = useState(false);

  const handleClick = () => {
    setMenuList(!menuList);
  };

  return (
    <div>
      {menuList ? (
        <div className={styles.menuList}>
          <div className={styles.menuList_links}>
          <ul>
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Contacts</li>
            <li>
              <button className={styles.registerButton}>Register</button>
            </li>
          </ul>
          </div>
          <div onClick={handleClick}>
            <Image
              src="/closebtn.svg"
              alt="Close Logo"
              width={23}
              height={23}
              priority
            />
          </div>
        </div>
      ) : (
        <div onClick={handleClick}>
          <Image
            src="/openbtn.svg"
            alt="Open Logo"
            width={19}
            height={14}
            priority
          />
        </div>
      )}
    </div>
  );
}
