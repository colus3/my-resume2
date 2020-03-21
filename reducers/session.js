const initialState = {};

export const LOAD_ME_REQUEST = 'LOAD_ME_REQUEST';
export const LOAD_ME_SUCCESS = 'LOAD_ME_SUCCESS';
export const LOAD_ME_FAILURE = 'LOAD_ME_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export default (state = initialState, action) => {

  switch (action.type) {

    case LOAD_ME_REQUEST: {
      return { ...state };
    }
    case LOAD_ME_SUCCESS: {
      return { ...action.data.data };
    }
    case LOAD_ME_FAILURE: {
      return {
        ...state,
        error: action.error,
      };
    }

    case LOG_OUT_REQUEST: {
      return { ...state };
    }
    case LOG_OUT_SUCCESS: {
      return { ...action.data.data };
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        error: action.error,
      };
    }
    default: {
      return { ...state };
    }
  }
};