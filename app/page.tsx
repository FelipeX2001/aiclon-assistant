"use client";

import React from "react";
import styles from "./page.module.css";
import logo from './favicon.png'; // Assuming favicon.png is in the same directory

const Home = () => {
  const categories = {
    "AI Assistant": "basic-chat",
    "Docs Assistant": "file-search",
  };

  return (
    <main className={styles.main}>
      <div className={styles.logoContainer}>
        <img src={logo.src} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.title}>
        Selecciona una opción y comienza a entrenar tu AICLON
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/examples/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
