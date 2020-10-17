import Actions from '../store/action';
const getReduxState = (state) => {
    return {
        ...state
    }
}
const { globalData } = Actions;

const setReduxState = (describe) => {
    return {
        getHeight: () => describe(globalData['getHeight']()),
        getWidth: () => describe(globalData['getWidth']())
    }
}
const GlobalFunc = [
    getReduxState, setReduxState
]
export default GlobalFunc;
