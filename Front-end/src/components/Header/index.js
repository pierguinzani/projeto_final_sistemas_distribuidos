import React from 'react';

import './styles.css';
import headerLogo from '../../assets/logo.png'

function Header() {
  return (
    <div className="containerWrapper">
      <div className="imgcontainer">
        <div className="headerwrapper">
          <img id= "logo" src={headerLogo} alt="HeaderLogo" draggable={false} />
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="apresentantion">
        <h1>Bem Vindo(a)</h1>
        <div className="divisor"></div>
        <h6>Agradecemos pela preferência <span role="img" aria-label="emoji piscando e sorrindo">
                😉
              </span> </h6>
              <div className="divisor"></div>
        
        <p>Selecione os itens para adicionar ao carrinho. Ao clicar em finalizar compra você será redirecionado para o nosso WhatsApp com tudo certinho no corpo da mensagem, aí é só enviar. Mágico não? Mas garanto que não tão mágico quanto o sabor.</p>
      </div>
    </div>
  );
}

export default Header;