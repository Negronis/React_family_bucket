const throttle = (cb, timer) => {
    let bool = false;
    return function () {
        if (!bool) {
            setTimeout(() => {
                cb()
                bool = false; 
            }, timer || 500)
            bool = true
        } else {
            return;
        }
    }
}

const Util = {
    throttle
}

export default Util;