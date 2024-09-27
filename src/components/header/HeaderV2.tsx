import React from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import trackingLogo from "../../assets/img/tmdb.svg";
import { goToHomePage } from "../../routes/coordinator";

const HeaderV2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Main style={{ cursor: "pointer" }} onClick={() => goToHomePage(navigate)}>
        <ImgLogo src={trackingLogo} alt="Tracking Logo" />
      </Main>
    </div>
  );
};

export default HeaderV2;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;
const ImgLogo = styled.img`
  width: 250px;
  margin: 10px;
`;
