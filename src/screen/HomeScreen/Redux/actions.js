import constants from './constants';

const actions = {
  updateInfo: (payload) => ({
    type: constants.dispatchType.UPDATE_INFO,
    payload,
  }),
};

export default actions;
