import React from "react";
import Bag from "../Imagens/2.png";
import Menu from "../Imagens/menu.png";
import * as S from "./styled";

export default class header extends React.Component {
  render() {
    return (
      <S.Cont>
        <S.Div>
          <S.Menu src={Menu} alt="menu" />
          <S.Title>Flavo</S.Title>
          <S.Bag src={Bag} alt="bag" />
        </S.Div>
      </S.Cont>
    );
  }
}
