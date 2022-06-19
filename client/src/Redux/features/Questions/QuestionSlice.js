import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    selectAnswer: '', // selected answer of user
    showAnswer:false, // show correct answer - true 
    indexQuestion:0, // index of currentQuestion
    disableAnswer: false, // true - Disable user to click on answers 
    setvisibleFeedback:false, // feedback at the end - true for visible
    CantCheck:true // user didn't answer - disable check btn
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
       },
       setindexQuestion(state,action){
        state.indexQuestion = action.payload
       },
       setDisabled(state,action){
        state.disableAnswer = action.payload
       },
       setvisibleFeedback(state,action){
        state.visibleFeedback = action.payload
       },
       setCantCheck(state,action){
        state.CantCheck = action.payload
       }
    },
})

    // ---------------------------------------------------------------------

export const getSelectAnswer = (state) => state.Question.selectAnswer
export const getShowAnswer = (state) => state.Question.showAnswer
export const getindexQuestion = (state) => state.Question.indexQuestion
export const getDisabled = (state) => state.Question.disableAnswer
export const getvisibleFeedback = (state) => state.Question.visibleFeedback
export const getCantCheck = (state) => state.Question.CantCheck

export const {setSelectAnswer,setShowAnswer,setindexQuestion,setDisabled,setvisibleFeedback,setCantCheck} = QuestionSlice.actions

export default QuestionSlice.reducer