export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          checked: false,
        },
      ];
    }

    case 'change': {
      return tasks.map((t) => {
        if (t.id === action.id) {
          return {
            ...t,
            text: action.text,
          };
        }
        return t;
      });
    }

    case 'changeChecked': {
      return tasks.map((t) => {
        if (t.id === action.id) {
          return {
            ...t,
            checked: !t.checked,
          };
        }
        return t;
      });
    }

    case 'delete': {
      return tasks.filter((t) => t.id !== action.id);
    }

    default:
      break;
  }
}
