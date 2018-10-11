import {combineReducers,applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import axios from 'axios';
import {composeWithDevTools} from 'redux-devtools-extension';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
/*const reducer=function(state,action){
    if(action.type==='INC'){
        return state+action.payload;
    }
    if(action.type==='DEC'){
        return state-action.payload;
    }
    return state;
}
const store=createStore(reducer,1);
store.subscribe(()=>{
    console.log("store changed"+store.getState())
})

store.dispatch({type:'INC',payload:1});
store.dispatch({type:'INC',payload:3});
store.dispatch({type:'DEC',payload:20});*/

/*const reducer=function(state,action){
    if(action.type==='INC'){
        return state+action.payload;
    }
    if(action.type==='DEC'){
        return state-action.payload;
    }
    return state;
}

const middlewware=applyMiddleware(logger);
const store=createStore(reducer,1,middlewware);
store.dispatch({type:'INC',payload:1});
store.dispatch({type:'INC',payload:3});
store.dispatch({type:'DEC',payload:20});*/

/*const userReducer=(state={},action)=>{
    switch(action.type){
        case "CHANGE_NAME":{
            return state={...state,name:action.payload};
        }
        case "CHANGE_AGE":{
            return state={...state,age:action.payload};
        }
    }
    return state;
}

const tweetReducer=(state=[],action)=>{
    return state;
}

const reducers=combineReducers({
    user:userReducer,
    tweets:tweetReducer
});

const store=createStore(reducers,composeWithDevTools(applyMiddleware(logger)));
store.subscribe(()=>{
    console.log("store changed"+store.getState())
});

store.dispatch({type:'CHANGE_NAME',payload:"sai"});
store.dispatch({type:'CHANGE_AGE',payload:35});
store.dispatch({type:'CHANGE_NAME',payload:"VIJAY"});*/

/*const initialState={
    fetching:false,
    fetched:false,
    user:[],
    error:null
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_USERS_START":{
            return state={...state,fetching:true};
        }
        case "FETCH_USERS_ERROR":{
            return state={...state,fetching:false,error:action.payload};
        }
        case "RECEIVE_USERS":{
            return {...state,fetching:false,fetched:true,users:action.payload}
        }
    }
    return state;
}
const middlewware=applyMiddleware(thunk,logger);
const store=createStore(reducer,middlewware);

store.dispatch((dispatch)=>{
    dispatch({type:'FETCH_USERS_START'})
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        dispatch({type:"RECEIVE_USERS",payload:response.data})
    }).catch((error)=>{
        dispatch({type:"FETCH_USERS_ERROR",payload:error})
    })
})*/

const store=createStore(allReducers,composeWithDevTools(applyMiddleware(logger)))
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, 
document.getElementById('root'));

serviceWorker.unregister();


