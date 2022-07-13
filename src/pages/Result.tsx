import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountAnswers, isCorrectFunc } from "../helpers";
import MainLayout from "../layout/MainLayout";
import global from "../resources/global";

export default function Result() {
  const [data, setData] = useState([]);
  const { mutatedQuestions } = useSelector(
    (state: any) => state.questionsReducer
  );

  let array = [...data].slice(1);

  let count = getCountAnswers(array);

  useEffect(() => {
    setData(mutatedQuestions);
  }, [mutatedQuestions]);

  return (
    <MainLayout>
      <div className="result">
        <div className="result-top">
          <div className="result-top__bg">
            <img
              src={global.images.Avatar}
              alt={global.images.Avatar}
              className="result-top__image"
            />
          </div>
          <div className="result-top__text">
            You scored <span>{count < 10 ? `0${count}` : count}</span>/
            {array.length}
          </div>
        </div>
        <div className="result-stars">
          {!!array.length &&
            array.map((item, index) => (
              <img
                key={`${item.question}${index}`}
                src={index < count ? global.images.FulStar : global.images.Star}
                alt={index < count ? global.images.FulStar : global.images.Star}
                className="result-stars__image"
              />
            ))}
        </div>
        <div className="result-block">
          {!!array.length &&
            array.map((item) => {
              let isCorrect = isCorrectFunc(item);
              let className = ["result-question"];
              if (!isCorrect) {
                className.push("result-wrong");
              }

              return (
                <div className={className.join(" ")} key={item.question}>
                  <div className="result-question__text">{item.question}</div>
                  <img
                    src={isCorrect ? global.images.Right : global.images.Cancel}
                    alt={isCorrect ? global.images.Right : global.images.Cancel}
                    className="result-question__image"
                  />
                </div>
              );
            })}
        </div>
        <Link to="/" className="button button--red">
          PLAY AGAIN
        </Link>
        <Link to="/" className="result-cancel">
          <img
            src={global.images.CancelWhite}
            alt={global.images.CancelWhite}
            className="result-cancel__image"
          />
        </Link>
      </div>
    </MainLayout>
  );
}
