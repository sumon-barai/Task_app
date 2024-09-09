import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./taskConstant";

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [
        ...state,
        {
          id: nextId(state) + 1,
          text: action.payload,
          isActive: false,
        },
      ];
    }
    case DELETE_TASK: {
      return state.filter((task) => task.id !== action.payload);
    }
    case EDIT_TASK: {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    }

    default:
      return state;
  }
};

const nextId = (data) => {
  return data.reduce((first, second) => {
    if (first > second.id) {
      return first;
    } else {
      return second.id;
    }
  }, 0);
};

export default taskReducer;
