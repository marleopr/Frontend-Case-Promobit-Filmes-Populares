import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator"
import * as s from "../header/styled"

export default function Header(){
    const navigate = useNavigate();

    <s.Header>
    <s.BotaoHome>Apenas ajudar nos espaços iguais</s.BotaoHome>
    {/* <s.ImagemTitulo src={img_titulo} alt={'Imagem de título'}></s.ImagemTitulo> */}
    <s.BotaoPokedex onClick={() => goToDetailsPage(navigate)}>Pokédex</s.BotaoPokedex>
  </s.Header>
}