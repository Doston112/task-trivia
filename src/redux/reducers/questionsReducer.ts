import * as questionActionType from "../actionTypes/questionActionType";
import { createReducer } from "../../utils/storeUtils";

const initState = {
  mutatedQuestions: [],
  questions: [],
  loading: false,
  error: null,
};

const reducers = {
  [questionActionType.GET_QUESTION_REQUEST](state) {
    state.loading = true;
    state.error = null;
  },
  [questionActionType.GET_QUESTION_SUCCESS](state, action) {
    state.questions = action.payload.results;
    state.loading = false;
  },
  [questionActionType.GET_QUESTION_ERROR](state, action) {
    state.loading = false;
    state.error = action.error;
    state.questions = [];
  },

  [questionActionType.SAVE_ARRAY](state, action) {
    state.mutatedQuestions = action.payload;
  },
};

export default createReducer(initState, reducers);
