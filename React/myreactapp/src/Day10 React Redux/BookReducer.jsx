const initialState = {
    bookName: "React Redux",
    numOfBooks: 100
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_BOOK":
            return {
                ...state,
                numOfBooks: state.numOfBooks - action.payload
            };
        case "SELL_BOOK":
            return {
                ...state,
                numOfBooks: state.numOfBooks + action.payload
            };
        default:
            return state;
    }
};

export default bookReducer;

//Immutable state update
//Keep the state immutable, never change the state directly. Always return a new object with the updated values.