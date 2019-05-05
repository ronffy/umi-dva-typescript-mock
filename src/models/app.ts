import { queryMenu } from "../services/app";
import { ReduxAction, ReduxSagaEffects } from '../interfaces/index'
import { modelExtend } from "../utils/commonModel";

export default modelExtend({

  namespace: 'app',

  state: {
    menu: [],
  },

  subscriptions: {
    setup({ dispatch, history }: any) {
      dispatch({
        type: 'fetchMenu',
      })
    },
  },

  effects: {
    *fetchMenu({ payload }: ReduxAction, { call, put }: ReduxSagaEffects) {
      let { data: menu } = yield call(queryMenu);
      yield put({ 
        type: 'updateState',
        payload: {
          menu,
        }
      });
    },
  },

});
