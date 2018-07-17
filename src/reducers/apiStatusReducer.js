import { REQ_INIT, REQ_ONBOARDED } from '../actions/apiStatus'

export default function apiStatusReducer(state=false, action){
  switch(action.type){
    case REQ_INIT:
      return action.payload
    case REQ_ONBOARDED:
      return action.payload
    default:
        return state;
  }
}