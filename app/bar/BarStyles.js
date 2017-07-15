/**
 * Created by chenwei on 2017/7/15.
 */
import R from '../res/R'
const BarStyles = {

  white: {
    backgroundColor: '#fff',
    titleColor: '#626262',
    titleSize: 16,
    backSrc: R.img.action_blue_back,
  },
  black: {
    backgroundColor: '#000',
    titleColor: '#fff',
    titleSize: 16,
    backSrc: R.img.action_blue_back,
  },
  transparent: {
    backgroundColor: '#00000000',
    titleColor: '#626262',
    titleSize: 16,
    backSrc: R.img.action_blue_back,
  },

  get: (name) => {
    return BarStyles[name] || BarStyles['white']
  },
}

export default BarStyles