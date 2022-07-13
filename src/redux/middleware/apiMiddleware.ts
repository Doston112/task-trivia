// import { push } from "react-router-redux";
// import {notification} from "antd/lib/index";
// import fp from "lodash/fp";

// const getErrorMessage = fp.get("response.data.message");
const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  if (!action.api || !action.types) {
    return next(action);
  }
  const {
    api,
    types: [START, SUCCESS, ERROR],
    query,
    callback,
    hideErrorNotification,
  } = action;

  dispatch({
    type: START,
    query,
  });

  // dispatch(loaderActions.start());

  return api(query)
    .then((response) => {
      // dispatch(loaderActions.stop());

      if (
        response &&
        response.data &&
        response.status >= 200 &&
        (response.data.statusCode < 400 || !response.data.statusCode)
      ) {
        dispatch({
          type: SUCCESS,
          payload: response.data,
        });

        callback()

        return {
          payload: response.data,
          query,
          responseStatus: response.status,
        };
      } else if (response.data.statusCode === 401) {
        // dispatch(authActions.logout());
        // dispatch(push("/login"));

        throw { response };
      } else {
        throw (
          (response && response.data && { response }) || {
            response: { data: { message: "Что-то не так!" } },
          }
        );
      }
    })
    .catch((error) => {
      // if (error.response.data.message) {
      //     const {enqueueSnackbar} = useSnackbar()
      //     enqueueSnackbar(getErrorMessage(error),{variant:"error"})
      // }
      dispatch({
        type: ERROR,
        error,
        query,
      });
      // dispatch(toggleSnackbar(getErrorMessage(error)));

      // dispatch(loaderActions.stop());

      if (!hideErrorNotification) {
        // notification.open({
        //     type: "error",
        //     message: "error",
        //     description: (error.response && error.response.data && error.response.data.message) || error.message
        // });
      }

      error.requestData = query;
      if (error.response && error.response && error.response.status === 401) {
        // dispatch(authActions.logout());
      }

      throw error;
    });
};

export default apiMiddleware;
