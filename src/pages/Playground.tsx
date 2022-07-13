import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { buttonArr } from "../constants/index";
import { getMutatedArray } from "../helpers";
import PlayGroundLayout from "../layout/PlayGroundLayout";
import { saveMutatedArray } from "../redux/actions/questionActions";
import global from "../resources/global";

export default function Playground() {
  const [index, setIndex] = useState(0);
  const [width, setwidth] = useState(0);
  const [answer, setAnswer] = useState("true");
  const [theArray, setTheArray] = useState([]);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { questions } = useSelector((state: any) => state.questionsReducer);

  let array = getMutatedArray(questions);

  function clickHandler(boolean: string) {
    setAnswer(boolean);
    setwidth(((index + 1) / array.length) * 100);

    if (index + 1 === array.length) {
      dispatch<any>(saveMutatedArray(theArray));
      navigate("/result");
    }

    setIndex((index) => index + 1);
  }

  useEffect(() => {
    setwidth(((index + 1) / array.length) * 100);

    array[index].answered = answer;

    if (array[index].answered !== null) {
      setTheArray((oldArray) => [...oldArray, array[index]]);
    }
  }, [index, answer]);

  return (
    <PlayGroundLayout>
      <div className="playground">
        <div className="playground__title">{array[index].category}</div>
        <div className="playground__level">level 1</div>
        <div className="playground-count">
          <div className="playground-count__number">
            <span>0{index + 1}</span>/{array.length}
          </div>
          <div className="playground-count__bar">
            <div
              className="playground-count__bar--over"
              style={{ width: `${width}%` }}
            />
          </div>
        </div>
        <div className="playground__question">
          <div className="playground__question">{array[index].question}</div>
        </div>

        {buttonArr.map((button) => {
          let className = ["button"];
          if (button.className) className.push(button.className);

          return (
            <button
              key={`${button.value}`}
              className={className.join(" ")}
              onClick={() => clickHandler(button.value)}
            >
              {button.text}
            </button>
          );
        })}
        <Link to={"/"} className="playground-cancel">
          <img
            src={global.images.Cancel}
            alt={global.images.Cancel}
            className="playground-cancel__image"
          />
        </Link>
      </div>
    </PlayGroundLayout>
  );
}
