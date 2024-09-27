import React from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import errorPageImg from "../../assets/img/pexels-anete-lusina-5721879.jpg";
import pageNotFound from "../../assets/img/tmdb-logo.png";
import { goToHomePage } from "../../routes/coordinator";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <h1 style={{ color: "white", textShadow: "black" }}>
        Página não encontrada
      </h1>
      <img
        src={pageNotFound}
        alt="Page Not Found"
        style={{ width: "100px", marginBottom: "20px" }}
      />
      <button onClick={() => goToHomePage(navigate)}>Voltar</button>
    </Main>
  );
};
export default ErrorPage;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  background-image: url(${errorPageImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: radial-gradient(
    circle,
    rgba(33, 33, 33, 1) 0%,
    rgba(1, 21, 34, 1) 100%
  );
`;
