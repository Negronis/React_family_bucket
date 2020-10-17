import GLOBAL_TYPE from './types/global_type';

const { GET_GLOBAL_HEIGHT, GET_GLOBAL_WIDTH } = GLOBAL_TYPE;
let getHeight = () => {
    return {
        type: GET_GLOBAL_HEIGHT
    }
} 
let getWidth = () => {
    return {
        type: GET_GLOBAL_WIDTH
    }
}





const Actions = {
    globalData: {
        getHeight, getWidth
    }
}



export default Actions;