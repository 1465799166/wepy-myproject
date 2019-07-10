import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../types/counter'

/**
 * handleActions(actions, initState) 创建actions
 * actions 不同aciton对应的返回数据
 * initState 初始化的state
 */

export default handleActions({
  [INCREMENT] (state, action) {
    // console.log(state, action, )
    // 重写state的num并返回
    return {
      ...state,
      num: state.num + 1 
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    console.log(state, action)
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, {
  num: 0,
  asyncNum: 0
})
