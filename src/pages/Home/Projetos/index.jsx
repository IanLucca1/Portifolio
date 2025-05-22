import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import styles from "./Projetos.module.css";

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/IanLucca1/repos"
        );
        if (!response.ok) throw new Error(`GitHub API: ${response.status}`);
        const data = await response.json();
        setRepositories(data);
      } catch (err) {
        console.error("Erro ao buscar repositórios:", err);
      }
    };
    buscarRepositorios();
  }, []);

  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      {repositories.length > 0 ? (
        <section className={styles.lista}>
          {repositories.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
              repoName={repo.name}
            />
          ))}
        </section>
      ) : (
        <p>Carregando repositórios...</p>
      )}
    </section>
  );
}

export default Projetos;
