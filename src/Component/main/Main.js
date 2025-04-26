import React from "react";
import Intensity from "../Imagens/intensity.png";
import * as S from "./styled";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <S.ContImg>
          <S.Product src={Intensity} alt="Produto" />
        </S.ContImg>
        <S.ContPassion>
          <h2>PASSION</h2>
          <h2>$15</h2>
        </S.ContPassion>
        <S.Ingredients>
          <h3>WHAT'S INSIDE</h3>
          <p>Chili, oregano, safran, paprika</p>
        </S.Ingredients>
        <S.Description>
          <h3>WHY WE LOVE IT</h3>
          <p>
            This one will add a savoury flavour to any food and turn any meal to
            a culinary masterpiece.
          </p>
        </S.Description>
      </div>
    );
  }
}
