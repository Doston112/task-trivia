import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import Options from "../components/atoms/Options";
import Select from "../components/atoms/Select";
import RowBadge from "../components/molecules/RowBadge";
// import useComponentVisible from "../hooks/useOutsideAlerter";
import MainLayout from "../layout/MainLayout";
import { getQuestionList } from "../redux/actions/questionActions";
import { store } from "../redux/configReduxStore";
import global from "../resources/global";

export type AppDispatch = typeof store.dispatch;

export default function HomePage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.questionsReducer);

  const [difficulty, setdifFiculty] = useState("easy");
  const [amount, setAmount] = useState(10);
  const [expanded, setExpanded] = useState(false);

  function expandToggle() {
    setExpanded(!expanded);
  }

  function select(event) {
    const value = event.target.textContent;

    setExpanded(false);
    setdifFiculty(value);
  }

  function goPlay() {
    navigate("/play");
  }

  function clickHandler() {
    dispatch<any>(
      getQuestionList({ amount, difficulty, type: "boolean" }, goPlay)
    );
  }

  function inputHandler(event: React.ChangeEvent<any>): void {
    let amountNum = event.target.value;
    setAmount(amountNum);
  }

  if (loading) return <Loader />;

  return (
    <MainLayout>
      <div className="home">
        <div className="home__text">Welcome to the</div>
        <div className="home__logo" />
        <div className="form">
          <RowBadge image={global.images.Badge} text="Difficulty" />
          <div className="form-select">
            <Select text={difficulty} isArrow={true} onClick={expandToggle} />
            {expanded && <Options select={select} />}
          </div>
          <input
            onChange={(e) => inputHandler(e)}
            type="number"
            className="form__input"
            placeholder="Amount"
          />
          {/* <div className="form-select">
            <Select text="hard" />
          </div> */}
        </div>
        <button onClick={clickHandler} className="button button--red">
          START
        </button>
      </div>
    </MainLayout>
  );
}
