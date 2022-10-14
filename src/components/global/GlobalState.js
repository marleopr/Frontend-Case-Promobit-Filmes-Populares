import React, { useState } from "react"; 
import { GlobalContext } from "../global/GlobalContext";

export default function GlobalState(props) {
    const [listaCapturados, setListaCapturados] = useState([])
    const [listaDetalhes, setListaDetalhes] = useState([]);

    const values = {
        listaCapturados,
        listaDetalhes,
        setListaCapturados,
        setListaDetalhes
    }

    const Provider = GlobalContext.Provider;

    return <Provider value={values}>{props.children}</Provider>;
}
