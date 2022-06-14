import { configureStore } from '@reduxjs/toolkit'
import QuestionSlice from '../features/Questions/QuestionSlice'
export const store = configureStore({
    reducer:{ Question: QuestionSlice,}
})
