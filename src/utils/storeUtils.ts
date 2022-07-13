import createNextState from "immer";

export const getInitialState = (name, initState) => {
  // if (localStorage.getItem("storeVersion") === HttpConfig.STORE_VERSION) {
  //   const savedState = JSON.parse(localStorage.getItem("store"))[name];
  //   return Object.assign({}, initState, savedState);
  // } else {
    return initState;
  // }
};

export function createReducer(initialState: any, actionsMap) {
  return function(state = initialState, action) {
    return createNextState(state, draft => {
      const caseReducer = actionsMap[action.type];

      if (caseReducer) {
        return caseReducer(draft, action);
      }

      return draft;
    });
  };
}
