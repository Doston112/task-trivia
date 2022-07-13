import React from "react";
import global from "../../resources/global";

interface ISelect {
  text: string;
  isArrow?: boolean;
  onClick?: () => void

}

const Select: React.FC<ISelect> = ({ text, isArrow = false, onClick }) => {
  return (
    <div className="form-select__element" onClick={onClick}>
      {text}{" "}
      <div>
        {isArrow && (
          <img
            src={global.images.Arrow}
            alt={global.images.Arrow}
            className="form-select__image"
          />
        )}
      </div>
    </div>
  );
};

export default Select;
