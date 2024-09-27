import React from "react";
import { FaGithub, FaLinkedin, FaGlobe, FaWhatsapp } from "react-icons/fa";
import tmdbFooter from "../assets/img/tmdb-logo-footer.png";
import "../styles/styled.css";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        marginBottom: "20px",
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <div style={{ margin: "20px" }} className="social-buttons">
        <a
          href="https://github.com/marleopr"
          className="social-button github"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/marleopiber/"
          className="social-button linkedin"
          title="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://marleo-portfolio.vercel.app/"
          className="social-button portfolio"
          title="Portfólio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe />
        </a>
        <a
          href="https://wa.me/55999823566"
          className="social-button whatsapp"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, color: 'white' }}>
          Márleo Piber • Full Stack Developer © 2024 • Desenvolvido com a API
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{ width: "80px", marginLeft: "5px" }}
              src={tmdbFooter}
              alt="TMDB"
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
