import { Dispatch } from 'redux';
import { Todo, FetchTodosAction, FETCH_TODOS_LOADING, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../Types';

type AppActions = FetchTodosAction /* | FooAction | BarAction */;

const requestTodos = (): AppActions => ({
  type: FETCH_TODOS_LOADING,
  loading: true,
  todos: [],
  error: '',
})

const successTodos = (todos: Todo[]): AppActions => ({
  type: FETCH_TODOS_SUCCESS,
  loading: false,
  todos,
  error: '',
})

const failureTodos = (): AppActions => ({
  type: FETCH_TODOS_FAILURE,
  loading: false,
  todos: [],
  error: 'Unable to fetch todo list',
})

export const boundRequestTodos = () => {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(requestTodos());
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`);
      const result = await res.json();
      dispatch(successTodos(result))
    }
    catch(err) {
      dispatch(failureTodos());
      console.log(err);
    }
    // return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
    //   .then((res) => res.json())
    //   .then((result) => dispatch(successTodos(result)))
  }
}