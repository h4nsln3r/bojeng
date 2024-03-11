import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// @ts-ignore
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storageSession from 'redux-persist/lib/storage/session';
// import { WindowObject } from '../models';
import createSagaMiddleware from 'redux-saga';

// import configuration, { State as ConfigurationState } from '../store/configuration/reducer';
// import general, { State as GeneralState } from '../store/general/reducer';


export interface RootState {
    // configuration: ConfigurationState;
    // general: GeneralState;
}
export type AnyType = any;
export interface WindowObject {
    [key: string]: AnyType;
}

export type ReducerStatus = 'INITIAL' | 'LOADING' | 'LOADED' | 'CREATING' | 'UPDATING' | 'DELETING' | 'FAILED' | 'COMPLETED';
export type DispatchFunction = any;

export const ACTION_RESET_STATE = 'RESET_STATE';

const persistConfig = {
    key: 'root',
    storage: storageSession,
    stateReconciler: autoMergeLevel2,
    blacklist: ['configuration', 'general'],
};

const configurationConfig = {
    key: 'configuration',
    storage: storageSession,
    blacklist: [],
};

const generalConfig = {
    key: 'general',
    storage: storageSession,
    blacklist: [],
};



const rootReducer = combineReducers<RootState>({
    // configuration: persistReducer(configurationConfig, configuration),
    // general: persistReducer(generalConfig, general),
});

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);
const __REDUX_DEVTOOLS_EXTENSION__ = (window as WindowObject).__REDUX_DEVTOOLS_EXTENSION__ && (window as WindowObject).__REDUX_DEVTOOLS_EXTENSION__();

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
    persistedReducer,
    __REDUX_DEVTOOLS_EXTENSION__ ? compose(applyMiddleware(...middlewares), __REDUX_DEVTOOLS_EXTENSION__) : compose(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
export default store;
