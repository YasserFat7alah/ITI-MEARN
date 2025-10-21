import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from './slices/counter';
import themeSliceReducer from './slices/theme';

const store = configureStore({
    reducer: {
        counter : counterSliceReducer,
        theme : themeSliceReducer
    }
})

export default store;



// store.js => configureStore({ reducer : {} })
// slices/slice.js => createSlice({ name , initialState, reducers  }) => export slice.actions , export slice.reducer;