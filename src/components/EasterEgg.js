const EasterEgg = () => {
    try {
        window.console.log(
            "\n%cGostou do que viu?\n%cProcuro uma oportunidade!\n\n%cEntre em contato comigo pelos contatos no footer deste site!\n%chttps://www.linkedin.com/in/marleopiber/\n\n",
            "font-family: serif; font-size: 32px; color: #767676",
            "font-family: serif; font-size: 25px; color: #0091ff; font-weight: bold;",
            "font-family: sans-serif; font-size: 16px; line-height: 1.2rem; color: #767676",
            "font-family: sans-serif; font-size: 11px; text-decoration: underline; line-height: 1.2rem; color: #767676"
        );
    } catch (error) {
        console.error(error);
    }

    // Retornar um elemento vazio para que o componente seja um JSX válido.
    return null;
};

export default EasterEgg;
