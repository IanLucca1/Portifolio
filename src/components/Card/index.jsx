import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiCplusplus, SiRuby, SiGo, SiPhp } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// ícones por linguagem
const languageIcons = {
  JavaScript: <FaJs />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  React: <FaReact />,
  "C++": <SiCplusplus />,
  Ruby: <SiRuby />,
  Go: <SiGo />,
  PHP: <SiPhp />,
};

function Card({ name, description, html_url, repoName }) {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/IanLucca1/${repoName}/languages`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setLanguages(Object.keys(data));
      } catch (err) {
        console.error("Erro ao carregar linguagens:", err);
      }
    };
    fetchLanguages();
  }, [repoName]);

  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
          {languages.map((language) => (
            <span key={language} title={language}>
              {languageIcons[language] || language}
            </span>
          ))}
        </div>
        <Link to={html_url} className={styles.botao} target="_blank">
          <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default Card;
