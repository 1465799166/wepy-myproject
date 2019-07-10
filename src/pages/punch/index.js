import wepy from 'wepy';
import { connect } from 'wepy-redux';
// components
import PunchUser from '@/components/punch-user/index'

@connect({
  num(state) {
    return state.counter.num;
  },
  asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  }
})
export default class Punch extends wepy.page {
  config = {
    navigationBarTitleText: '打卡'
  };
  components = {
    'punch-user': PunchUser
  }
  data = {};

  computed = {};

  methods = {};

  events = {};

  onLoad() {}
}
