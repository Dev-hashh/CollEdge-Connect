import API from "../services/api";

function TaskItem({ task, fetchTasks, setEditingTask }) {
  const deleteTask = async () => {
    if (window.confirm("Delete this task?")) {
      await API.delete(`/${task._id}`);
      fetchTasks();
    }
  };

  return (
    <div className="card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <button onClick={() => setEditingTask(task)}>
        Edit
      </button>

      <button onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;