const UserList = ({ todos, onUpdateTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {todo.name}
          <input
            type="checkbox"
            checked={todo.username}
            onChange={() => onUpdateTodo(todo)}
          />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
