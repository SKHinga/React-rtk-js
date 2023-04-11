import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
import drinkReducer from'../features/drink/drinkBottle'
import chaserReducer from'../features/chaser/chaser'
import userReducer from'../features/user/userSlice'

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        drink: drinkReducer,
        chaser: chaserReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})

export default store