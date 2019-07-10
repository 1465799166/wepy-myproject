import { handleActions } from 'redux-actions';
import {modify} from '../types/list'

let defaultList = [
  {
    name: 'shenjiaheng',
    age: '22'
  }
];

export default handleActions(
  {
    [modify.MODIFY_NAME](state) {
      console.log('name');
      return {
        ...state,
        name: 'shenjiaheng2'
      };
    },
    [modify.MODIFY_AGE](state) {
      console.log('age');
      return {
        ...state,
        age: '23'
      };
    }
  },
  defaultList
);

