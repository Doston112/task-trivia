import React from "react";

interface IOptions {
  select: (e: React.ChangeEvent<any>) => void;
}

const difficulty = [
  {
    value: "easy"
  },
  {
    value: "hard"
  }
]

const Options: React.FC<IOptions> = ({ select }) => {
  return (
    <div className="form-select__options">
      <ul>
        {
          difficulty.map(item => <li key={item.value} onClick={e => select(e)}>{item.value}</li>)
        }
      </ul>
    </div>
  );
};

export default Options;
