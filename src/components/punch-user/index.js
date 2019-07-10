import wepy from 'wepy';
import { connect } from 'wepy-redux';
import { INCREMENT, DECREMENT } from '@/store/types/counter';
import { modify } from '@/store/types/list'
import { asyncInc } from '@/store/actions';
// @connect(states, actions)
// 第一个参数对应读操作，第二个参数对应写操作
function getNum(state) {
    return state.counter.name
}

@connect(
  {
    stateNum: getNum,
    // stateNum(state) {
    //     // console.log(state)
    //   return state.counter.num;  // 相当于stateNum = state.counter.num
    // },
    asyncNum(state) {
      return state.counter.asyncNum;
    },
  },
  {
    incNum: INCREMENT, // 相当于incNum = INCREMENT(state, action) 执行相应的reducer,隐式传参
    decNum: DECREMENT,
    asyncInc,
    modifyName: modify.MODIFY_NAME
  }
)
export default class PunchUser extends wepy.component {
    
    methods = {
        sdIncre() {
            /**
             * 手动调用reducer 接收一个对象
             * type保留字段 指定 action
             * payload 传参
             * 
             *  */ 
            wepy.$store.dispatch({
                type: INCREMENT,
                payload: {
                    title: '111',
                    text: 'haha'
                }
            })
           
        }
    }
    onLoad() {
        // 仅能通过reducer改写state
        wepy.$store.dispatch({
            type: modify.MODIFY_NAME,
            payload: {
                
            }
        })
    }
    
}
