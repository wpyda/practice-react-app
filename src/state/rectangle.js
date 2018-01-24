// ACTION TYPE
const TOGGLE_RECT = 'rectangle/TOGGLE_RECT'

// ACTION CREATOR - export by name
export const toggleRect = () => (
    {
        type: TOGGLE_RECT        // AKCJA - obiekt (każda akcja musi mieć type) ||| KREATOR AKCJI - funkcja, która zwraca obiekt (akcję)
    }
)

// INITIAL STATE
const initialState = {
    isRectVisible: true
}

// REDUCER - export default
export default (state = initialState, action) => {
    // jeśli state nie istnieje ( = null, itp., na początku), przypisz initial state (defaultowy), ten state (wycinek) siedzi w store w store.js
    switch (action.type) {
        case TOGGLE_RECT:
            return {
                ...state,
                isRectVisible: !state.isRectVisible         // REDUCER musi zwracać nowy stan, state z argumentu ^
            }
        default:
            return state
    }
}