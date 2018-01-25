const SET_DATA = 'asyncActions/SET_DATA'
const FETCHING_STARTED = 'asyncActions/FETCHING_STARTED'
const FETCHING_FINISHED = 'asyncActions/FETCHING_FINISHED'
const FETCHING_FAILED = 'asyncActions/FETCHING_FAILED'

// ACTION CREATOR
export const setData = data => ({
    type: SET_DATA,
    data: data
})

const fetchingStarted = () => ({type: FETCHING_STARTED})
const fetchingFinished = () => ({type: FETCHING_FINISHED})
const fetchingFailed = () => ({type: FETCHING_FAILED})

export const fetchData = () => (dispatch, getState) => {
    dispatch(fetchingStarted())
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
            dispatch(setData(data.results[0]))
            dispatch(fetchingFinished())
        })
        .catch(error => dispatch(fetchingFailed()))
}

const initialState = {
    randomUserData: null,
    messageForUser: ''
}

const messages = {
    started: "Ładowanie",
    failed: "Wystąpił błąd",
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_DATA:
            return {
                ...state,
                randomUserData: action.data
            }
        case FETCHING_STARTED:
            return {
                ...state,
                messageForUser: messages.started
            }
        case FETCHING_FINISHED:
            return {
                ...state,
                messageForUser: initialState.messageForUser // initialState.messageForUser to to samo co '', ale '' to duplikat messageForUser
            }
        case FETCHING_FAILED:
                return {
                    ...state,
                    messageForUser: messages.failed
                }
        default:
            return state
    }
}