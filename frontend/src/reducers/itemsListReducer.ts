import { ItemsListState } from "./types";
import { SyncAction, GET_ITEMS_SUCCESS } from "../actions/types";

const initState: ItemsListState = {
  items: []
}

export function itemsListReducer(state = initState, action: SyncAction): ItemsListState {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return { ...state, items: [...action.payload.items] };
    default: return state
  }
}