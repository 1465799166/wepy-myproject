import { ASYNC_INCREMENT } from '../types/counter'
import { createAction } from 'redux-actions' // 便捷的生成action

/**
 * createAction(type, playload)
 * type action的类型
 * payload action的返回
 * 
 */
export const asyncInc = createAction(ASYNC_INCREMENT, () => {
  console.log('doasync')
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})