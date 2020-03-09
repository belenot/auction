import { ItemsListState } from "./types";
import { SyncAction, GET_ITEMS_SUCCESS, BUY_SUCCESS } from "../actions/types";

const initState: ItemsListState = {
  items: []
}

export function itemsListReducer(state = initState, action: SyncAction): ItemsListState {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return { ...state, items: [...action.payload.items] };
    case BUY_SUCCESS:
      return {
        ...state,
        items: state.items.map(
          (item) => item._id == action.payload.item._id ? action.payload.item : item
        )
      }
    default: return state
  }
}