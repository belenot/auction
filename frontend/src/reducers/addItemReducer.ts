import { RootState } from ".";
import { AddItemState } from "./types";
import { SyncAction, HANDLE_ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE } from "../actions/types";

const initState: AddItemState = {
  name: '',
  description: '',
  price: 0,
  error: '',
  isRequest: false,
  image: undefined
}

export function addItemReducer(state = initState, action: SyncAction): AddItemState {
  switch (action.type) {
    case HANDLE_ADD_ITEM:
      return { ...state, ...action.payload.state }
    case ADD_ITEM_SUCCESS: {
      return { ...initState }
    }
    case ADD_ITEM_FAILURE: {
      return { ...state, error: action.payload.error }
    }
    default: return state;
  }
}