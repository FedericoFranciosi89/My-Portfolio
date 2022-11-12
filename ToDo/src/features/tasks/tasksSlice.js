import { createSlice } from '@reduxjs/toolkit';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStoreage';

const initialState = {
  tasks: {
    id: Date.now(),
    task: '',
  },
  taskArray: getUserFromLocalStorage(),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateTask: (state, action) => {
      if (action.payload !== '') {
        const task = action.payload;
        state.tasks = { id: Date.now(), task: task };
        state.taskArray = [...state.taskArray, state.tasks];
        addUserToLocalStorage(state.taskArray);
        console.log(state.taskArray);
      }
    },
    clearTasks: (state) => {
      state.taskArray = [];
      removeUserFromLocalStorage();
    },
    clearTask: (state, action) => {
      const newTasks = state.taskArray.filter((task) => {
        return action.payload !== task.id;
      });
      state.taskArray = newTasks;
    },
  },
});

export default tasksSlice.reducer;

export const { updateTask, clearTasks, clearTask } = tasksSlice.actions;
