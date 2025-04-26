import React from "react";
import Header from "./Component/header/header";
import Footer from "./Component/footer/Footer";
import Main from "./Component/main/Main";
import GlobStyled from "./styled";

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobStyled />
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
