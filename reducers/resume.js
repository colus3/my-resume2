const initialState = {
  id: '',
  type: '',
  name: '',
  shortIntro: '',
  useYn: '',
  resumeUrl: null,
  createDt: '',
  user: {
    username: '',
    phone: '',
    email: '',
    image: '',
    birthDate: '',
    address: '',
    github: '',
    createDt: ''
  },
  resume_content: [],
};

export const LOAD_RESUME_REQUEST = 'LOAD_RESUME_REQUEST';
export const LOAD_RESUME_SUCCESS = 'LOAD_RESUME_SUCCESS';
export const LOAD_RESUME_FAILURE = 'LOAD_RESUME_FAILURE';

export default (state = initialState, action) => {

  switch (action.type) {

    case LOAD_RESUME_REQUEST: {
      return { ...state };
    }
    case LOAD_RESUME_SUCCESS: {
      return { ...action.data };
    }
    case LOAD_RESUME_FAILURE: {
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
