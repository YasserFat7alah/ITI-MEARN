function TodoList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return <p className="text-muted">No tasks yet...</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
            <button
              className="btn btn-sm btn-success"
              onClick={() => onToggle(task.id)}
            >
          {task.completed ? (
            "Mark undone"
          ) : (
            
              "Mark Done"
            
              )}
         </button>     

          <span
            onClick={() => onToggle(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.text}
          </span>

          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
