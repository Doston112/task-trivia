import React from 'react'

interface IRowBadge {
    image: string
    text: string
}

const RowBadge:React.FC<IRowBadge> = ({image, text}) => {
  return (
    <div className="form-row">
        <img src={image} alt={image} className="form-row__image"/>
        <div className="form-row__text">{text}</div>
    </div>
  )
}

export default RowBadge;
