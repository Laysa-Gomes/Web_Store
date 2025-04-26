import React from "react";
import * as S from "./styled";

export default class Footer extends React.Component {
  state = { result: 1 };

  Add = () => {
    this.setState({
      result: this.state.result >= 1 ? this.state.result + 1 : null
    });
  };
  Remove = () => {
    this.setState({
      result: this.state.result >= 2 ? this.state.result - 1 : 1
    });
  };
  render() {
    return (
      <S.Box>
        <S.ContCounter>
          <S.Minus onClick={this.Remove}>-</S.Minus>
          <S.Quantity>{this.state.result}</S.Quantity>
          <S.More onClick={this.Add}>+</S.More>
        </S.ContCounter>
        <S.ContAdd>
          <S.Add>ADD TO CARD</S.Add>
        </S.ContAdd>
      </S.Box>
    );
  }
}
