import { useState, useEffect } from "react";
import API from "../services/api";

function TaskForm({ fetchTasks, editingTask, setEditingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
    }
  }, [editingTask]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return alert("Title is required");
    }

    const task = {
      title,
      description,
      status,
    };

    if (editingTask) {
      await API.put(`/${editingTask._id}`, task);
    } else {
      await API.post("/", task);
    }

    setTitle("");
    setDescription("");
    setStatus("Pending");

    setEditingTask(null);

    fetchTasks();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button>
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;