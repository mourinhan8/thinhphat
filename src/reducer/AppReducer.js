export default function reducer(state, action) {
  switch (action.type) {
    case 'GET_ALL_DOCUMENTS':
      return { ...state, documentsList: action.payload };
    case 'USER_LOGIN':
      return { ...state, user: action.payload };
    case 'UNDO_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}
