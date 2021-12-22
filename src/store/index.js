import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhances = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Creamos nuestro store pasandole el/los reducers que hayamos creado
const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)) );

export default store;


