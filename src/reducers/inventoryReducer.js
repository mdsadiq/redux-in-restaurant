import { ADD_ITEM, UPD_ITEM, SUB_ITEM, BULK_UPLOAD } from '../actions/inventory'

export default function inventoryReducer(state={}, action){
  switch(action.type){
    case ADD_ITEM:{
      console.log(action.payload)
      console.log(action.payload.item)
      const newDish = action.payload.item
      const newState = { ...state, ...newDish}
      console.log(newState);
      return newState
    }
    case SUB_ITEM:{
      //check if item is last, and trigger upd_item
      return state
    }
    case UPD_ITEM:{
      return state
    }
    case BULK_UPLOAD:{
      return { ...state, ...action.payload.items }
    }
    default:
      return state
  }

}