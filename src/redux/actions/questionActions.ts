import * as questionActionType from "../actionTypes/questionActionType";
import { getQuestion } from "../../api/questionApi";

type Params = {
  amount: number;
  difficulty: string;
  type: string;
};

export const getQuestionList =
  (params: Params, callback) => (dispatch: any) => {
    return dispatch({
      api: getQuestion,
      types: [
        questionActionType.GET_QUESTION_REQUEST,
        questionActionType.GET_QUESTION_SUCCESS,
        questionActionType.GET_QUESTION_ERROR,
      ],
      query: params,
      callback,
    });
  };

export const saveMutatedArray = (arr) => (dispatch: any) => {
  return dispatch({
    type: questionActionType.SAVE_ARRAY,
    payload: arr,
  });
};
