import { ReduxAction, DvaModelReducers } from '../interfaces/index'
import _modelExtend from 'dva-model-extend'

interface CommonModel {
  reducers: DvaModelReducers
}

const commonModel: CommonModel = {
  reducers: {
    updateState(state: object, { payload }: ReduxAction) {
      return {
        ...state,
        ...payload,
      }
    },
    error(state: object, { payload }: ReduxAction) {
      return {
        ...state,
        error: payload,
      }
    },
  },
}

const modelExtend = (model) => _modelExtend(commonModel, model);

export {
  modelExtend,
  commonModel,
}
