import { Todo, FetchTodosAction, FETCH_TODOS_LOADING, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../Types';

interface TodoState {
  loading: boolean;
  todos: Todo[];
  error: string;
}

const initialState: TodoState = {
  loading: false,
  todos: [],
  error: '',
}

const todoReducer = (state = initialState, action: FetchTodosAction) => {
  switch(action.type) {
    case FETCH_TODOS_LOADING:
      return { ...state, loading: true}
    case FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.todos}
    case FETCH_TODOS_FAILURE:
      return { ...state, error: action.error}
    default:
      return state;
  }
}

export default todoReducer;