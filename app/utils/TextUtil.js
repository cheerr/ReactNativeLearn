/**
 * Created by chenwei on 2017/7/13.
 */

const TextUtil = {

    isEmpty: (str) => {

        if (str === undefined) return true;

        return str === null || str === "" || str === "null";

    },
};

export default TextUtil;