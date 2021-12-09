import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// srcS
import reducer from './slice';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: reducer,
    middleware: [
        sagaMiddleware,
    ],
})

export { store, sagaMiddleware }
