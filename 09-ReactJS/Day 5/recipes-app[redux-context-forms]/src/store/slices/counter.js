import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterVal: 0,
    maxCounterVal: 200,
  },
  reducers: {
    increaseCounter: (state, action) => {
      state.counterVal =  state.counterVal + 1;
    },
    decreaseCounter: (state, action) => {
      state.counterVal = state.counterVal - 1;
    },
    increaseByCount : (state, action) => {
      state.counterVal = state.counterVal + action.payload
    },
    resetCounter: (state) => {
      state.counterVal = 0;
    },
  },
});

// TO BE USED IN COMPONENT TO CHANGE VALUE
export const { increaseCounter, decreaseCounter, resetCounter , increaseByCount } =
  counterSlice.actions;

// TO BE USED IN STORE REDUCER
export default counterSlice.reducer;


// COUNTER => ACTION => TYPE , Payload
// TYPE => reducer => payload => update state


// const COUNTERACTIONS = () => {
//     return {
//         type: "INCREASE_COUNTER",
//         payload: ""
//     }
// }


// const COUNTERREDUCER = (state, action ) => {
//    (action.type): 

//    case 'INCREASE_COUNTER':
//     state.counter = action.payload
// }


// TO READ STORE/STATE IN COMPONENT => useSelector(state => state.value);
// TO UPDATE STORE/STATE IN COMPONENT => useDispatch => dispatch(action())