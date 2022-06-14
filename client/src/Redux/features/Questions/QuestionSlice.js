import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    selectAnswer: '',
    showAnswer:''
}

const QuestionSlice = createSlice({
    name:'Question',
    initialState,
    reducers:{
       setSelectAnswer(state,action){
        state.selectAnswer = action.payload
       },
       setShowAnswer(state,action){
        state.showAnswer = action.payload
       }
    },
})

    // ---------------------------------------------------------------------

export const getSelectAnswer = (state) => state.Question.selectAnswer
export const getShowAnswer = (state) => state.Question.showAnswer


export const {setSelectAnswer} = QuestionSlice.actions
export const {setShowAnswer} = QuestionSlice.actions

export default QuestionSlice.reducer