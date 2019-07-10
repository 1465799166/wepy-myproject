import { combineReducers } from 'redux' // 合并多个reducers，方便后续管理
import counter from './counter'
import list from './list'

export default combineReducers({
  counter,
  list
})