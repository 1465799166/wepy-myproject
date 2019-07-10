import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise' // 方便action做异步处理的中间件
import rootReducer from './reducers' // 纯函数，接收Action和当前State，返回新的State

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
  return store
}


/**
 * |-store 
 * |——————|-types 定义actions名称
 * |——————|-reducers 纯函数，用于改变state
 * 
 * 
 * 
 */