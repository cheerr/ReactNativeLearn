/**
 * Created by chenwei on 2017/7/15.
 *
 * merge两个字典对象，后一个属性会覆盖前一个
 */
const JsonMerge = {

  merge: function () {

    let result = {}

    for (let i = 0; i < arguments.length; i++) {
      let args = arguments[i]
      if (typeof args === 'object') {
        for (let key in args) {
          result[key] = args[key]
        }
      }
    }

    return result
  }
}

export default JsonMerge