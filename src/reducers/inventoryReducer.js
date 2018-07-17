import { ADD_ITEM, UPD_ITEM, SUB_ITEM, BULK_UPLOAD } from '../actions/inventory'

export default function inventoryReducer(state={}, action){
  switch(action.type){
    case ADD_ITEM:{
      return state
    }
    case SUB_ITEM:{
      //check if item is last, and trigger upd_item
      return state
    }
    case UPD_ITEM:{
      return state
    }
    case BULK_UPLOAD:{
      return action.payload.items
    }
    default:
      return state
  }

}