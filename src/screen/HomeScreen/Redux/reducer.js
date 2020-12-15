import constants from './constants';

const initial = {
  name: null,
  age: null,
  sex: null,
};

const InforReducer = (state = initial, action) => {
  switch (action.type) {
    case constants.dispatchType.UPDATE_INFO:
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age,
        sex: action.payload.sex,
      };
    default:
      return state;
  }
};

export default InforReducer;
