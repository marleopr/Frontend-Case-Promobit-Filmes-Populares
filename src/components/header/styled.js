import styled from "styled-components"

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  @media screen and (max-device-width : 480px){
    width: 100vw;
    flex-direction: column;
  }
`
export const BotaoHome = styled.div`
  width: 287px;
  height: 74px;
  margin: 0 0 0 30px;
  color: #FFFFFF;
  @media screen and (max-device-width : 480px){
    width: 80vw;
    display: none;
  }
`
export const ImagemTitulo = styled.img`
  width: 307px;
  height: 113px;
  @media screen and (max-device-width : 480px){
    margin-top: 5px;
  }
`

export const BotaoPokedex = styled.div`
  display:flex;  
  justify-content: center;
  align-items: center;
  margin: 0 30px 0 0;
  width: 287px;
  height: 74px;
  color:#fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size:1.4em;
  text-align: center;
  text-decoration:none;
  border-radius:6px;
  background-color:#33A4F5;
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    background-position: -60px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  :active {
    transform: scale(1);
    background-position: 500px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  @media screen and (max-device-width : 480px){
    width: 150px;
    height: 30px;
    margin: 10px 0 10px 0;
  } 
`