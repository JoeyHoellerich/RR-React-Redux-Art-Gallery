import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    objectId: "",
    apiData: {}
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setAPIdata: (state) => {

        },
        incrementID: (state) => {

        },
        decrementID: (state) => {

        },
        setCustomID: (state) => {

        },
        resetID: (state) => {
            
        }
    }
})

export default dataSlice.reducer