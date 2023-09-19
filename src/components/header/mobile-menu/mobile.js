"use client";
import { useState } from "react";
import styles from "./mobile.module.css";
import Image from "next/image";
import RegisterButton from "@/components/register-button/button";
export default function MobileMenu() {
  const [menuList, setMenuList] = useState(false);

  const handleClick = () => {
    setMenuList(!menuList);
  };

  return (
    <div className={styles.MobileMenu}>
      {menuList ? (
        <div className={styles.menuList}>
          <div className={styles.menuList_links}>
          <ul>
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Contacts</li>
            <li>
             <RegisterButton />
            </li>
          </ul>
          </div>
          <div onClick={handleClick}>
            <Image
              src="/closebtn.svg"
              alt="Close vector"
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
            alt="Open vector"
            width={19}
            height={14}
            priority
          />
        </div>
      )}
    </div>
  );
}
