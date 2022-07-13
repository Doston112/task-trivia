import React from "react";
import global from "../resources/global";
import { IProps } from "../types/Layout";

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="container-left">
        <div className="container-block">
          <img src={global.images.Shape1} alt={global.images.Shape1} />
          <img src={global.images.Shape2} alt={global.images.Shape1} className="container-block__image" />
        </div>
      </div>
      <div className="container-content">{children}</div>
      <div className="container-right">
        <img src={global.images.Shape3} alt={global.images.Shape1} />
        <img src={global.images.Shape4} alt={global.images.Shape1} />
      </div>
    </div>
  );
};

export default MainLayout;
