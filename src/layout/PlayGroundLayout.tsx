import React from 'react'
import global from '../resources/global';
import { IProps } from '../types/Layout';


const PlayGroundLayout:React.FC<IProps> = ({children}) =>{
  return (
    <div className="container ground">
      <div className="container-left ground-left">
      <div className="container-block">
        <img src={global.images.Ellipse} alt={global.images.Ellipse} className="ground-left__image1" />
        <img src={global.images.Shape6} alt={global.images.Shape2} className="ground-left__image2 container-block__image" />
        </div>
      </div>
      <div className="container-content">{children}</div>
      <div className="container-right ground-right">
        <img src={global.images.Shape5} alt={global.images.Shape5} className="ground-right__image1" />
        <img src={global.images.RedEllipse} alt={global.images.RedEllipse} className="ground-right__image2" />
      </div>
    </div>
  )
}

export default PlayGroundLayout;
