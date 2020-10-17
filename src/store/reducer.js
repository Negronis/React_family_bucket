import state from './state';
import GLOBAL_TYPES from './types/global_type';
let {GET_GLOBAL_WIDTH , GET_GLOBAL_HEIGHT} = GLOBAL_TYPES;

const { global_state } = state;
let Global_Reducer = (state = global_state, action) => { 
    switch (action['type']) {
        case GET_GLOBAL_HEIGHT:
            return {
                ...state,
                height: window.innerHeight
            }
        case GET_GLOBAL_WIDTH:
            return {
                ...state,
                width: window.innerWidth
            }
        default:
            return state;
    }
}


const Reducer = {
    Global_Reducer
}

export default Reducer;