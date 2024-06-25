import { Book, ActionType} from "../types/types"


  type AddBookAction = {
    type: ActionType.ADD_BOOK,
    payload: Book
  }
  
  type DeleteBookAction = {
    type: ActionType.DELETE_BOOK,
    payload: { id: number }
  }
  
  type Action = AddBookAction | DeleteBookAction
  
const bookReducer = (state: Book[], action: Action): Book[] => {
    switch (action.type) {
      case ActionType.ADD_BOOK:
        return [...state, action.payload];
      case ActionType.DELETE_BOOK:
        return state.filter(book => book.id !== action.payload.id);
      default:
        return state;
    }
  }

export default bookReducer