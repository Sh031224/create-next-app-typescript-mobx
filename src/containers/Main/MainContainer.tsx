import { inject, observer } from "mobx-react";
import React from "react";
import Main from "../../components/Main";

const MainContainer = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default inject("store")(observer(MainContainer));
