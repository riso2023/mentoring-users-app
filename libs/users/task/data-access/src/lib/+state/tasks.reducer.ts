import { createFeature, createReducer, on } from '@ngrx/store';
import { tasksAction } from './tasks.action';
import { ITaskBoard } from '../model/tasks.interface';

export const TASKS_FEATURE_KEY = 'tasks';

export const tasksInitialState: ITaskBoard = {
  id: 0,
  created_at: 0,
  email: '',
  authorId: 0,
  columns: [],
};

export const tasksFeature = createFeature({
  name: TASKS_FEATURE_KEY,
  reducer: createReducer(
    tasksInitialState,
    on(tasksAction.loadBoards, (state) => {
      return { ...state };
    }),
    on(tasksAction.loadBoardsSuccess, (state, { boards }) => {
      return {
        ...state,
        boards
      };
    }),
    on(tasksAction.updateColumns, (state, { columns }) => {
      return { ...state, columns: [...columns] };
    }),
    on(tasksAction.updateColumnsSuccess, (state, { columns }) => {
      return { ...state, columns: [...columns] };
    }),
    on(tasksAction.loadMyBoardSuccess, (state, { board }) => ({
      ...state,
      ...board
    }))
  ),
});