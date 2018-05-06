import { modelExtend } from "utils/commonModel";
import { ReduxAction, ReduxSagaEffects } from 'interfaces/index'
import { query } from "../services/page1";

export default modelExtend({

  namespace: 'page1',

  state: {
    list: [],
  },

  effects: {
    *fetch({ payload }: ReduxAction, { call, put }: ReduxSagaEffects) {
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

});
