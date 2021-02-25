// Actions Types
export const GET_LISTS = 'GET_LISTS';
export const GET_LISTS_BY_ID = 'GET_LISTS_BY_ID';
export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const SET_LISTID_DELETE = 'SET_LISTID_DELETE';
export const SET_LIST_EDIT = 'SET_LIST_EDIT'; 

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK= 'DELETE_TASK';
export const SET_TASK_DELETE= 'SET_TASK_DELETE';
export const UNSET_TASK_DELETE= 'UNSET_TASK_DELETE';
export const UPDATE_TASK= 'UPDATE_TASK';
export const SET_TASK_EDIT= 'SET_TASK_EDIT';
export const UNSET_TASK_EDIT = 'UNSET_TASK_EDIT';

export const SET_NOTIFICATION = 'SET_NOTIFICATION';

// task, list interface
export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export interface List {
  id: string;
  name: string;
  tasks: Task[];
}

export interface ListsIF {
  [id: string]: List
}

// Actions interface
interface AddList {
  type: typeof ADD_LIST;
  payload: List;
}

interface GetLists {
  type: typeof GET_LISTS;
}

interface GetListsById {
  type: typeof GET_LISTS_BY_ID;
  payload: string;
}

interface SetListIdDelete {
  type: typeof SET_LISTID_DELETE;
  payload: string;
}

interface SetListEdit {
  type: typeof SET_LIST_EDIT;
}
