export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const FETCH_TODOS_LOADING = 'FETCH_TODOS_LOADING';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

interface FetchTodos {
  loading: boolean;
  todos: Todo[];
  error: string;
}

interface FetchTodosLoading extends FetchTodos {
  type: typeof FETCH_TODOS_LOADING;
}

interface FetchTodosSuccess extends FetchTodos {
  type: typeof FETCH_TODOS_SUCCESS;
}

interface FetchTodosFailure extends FetchTodos {
  type: typeof FETCH_TODOS_FAILURE;
}

export type FetchTodosAction = FetchTodosLoading | FetchTodosSuccess | FetchTodosFailure;
