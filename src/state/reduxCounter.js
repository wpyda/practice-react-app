// ACTION TYPE
const INC = 'reduxCounter/INC'
const DEC = 'reduxCounter/DEC'
const RES = 'reduxCounter/RES'

// ACTION CREATOR - export by name
export const counterInc = () => ({
    type: INC
})

export const counterDec = () => ({
    type: DEC
})

export const counterReset = () => ({
    type: RES
})

// INITIAL STATE
const initialState = {
    counterValue: 0
}

// REDUCER - export default
export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case DEC:
            return {
                ...state,
                counterValue: state.counterValue - 1
            }
        case RES:
            return {
                ...state,
                counterValue: 0
            }
        default:
            return state

    }
}