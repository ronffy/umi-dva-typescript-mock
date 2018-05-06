import { query } from "../services/page1";
export default {

  namespace: 'page1',

  state: {
    list: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const { data } = yield call(query);
      const { list } = data;
      yield put({ 
        type: 'updateState',
        payload: {
          list
        },
      });
    },
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
