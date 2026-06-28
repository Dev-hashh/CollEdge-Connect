import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import { getTasks, createTask, updateTask, deleteTask } from "./services/api";

import Header from "./components/Header";
import FilterTabs from "./components/FilterTabs";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeFilter, setActiveFilter] = useState("All");
  const [formOpen, setFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const counts = useMemo(() => {
    const base = { All: tasks.length, Pending: 0, "In Progress": 0, Completed: 0 };
    for (const task of tasks) {
      base[task.status] = (base[task.status] || 0) + 1;
    }
    return base;
  }, [tasks]);

  const visibleTasks = useMemo(() => {
    if (activeFilter === "All") return tasks;
    return tasks.filter((task) => task.status === activeFilter);
  }, [tasks, activeFilter]);

  const openNewTaskForm = () => {
    setEditingTask(null);
    setFormOpen(true);
  };

  const openEditForm = (task) => {
    setEditingTask(task);
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditingTask(null);
  };

  const handleSubmit = async (form) => {
    try {
      if (editingTask) {
        const updated = await updateTask(editingTask._id, form);
        setTasks((prev) => prev.map((t) => (t._id === updated._id ? updated : t)));
        toast.success("Task updated");
      } else {
        const created = await createTask(form);
        setTasks((prev) => [created, ...prev]);
        toast.success("Task pinned to the board");
      }
      closeForm();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDelete = async (task) => {
    if (!window.confirm(`Unpin "${task.title}"? This can't be undone.`)) return;

    try {
      await deleteTask(task._id);
      setTasks((prev) => prev.filter((t) => t._id !== task._id));
      toast.success("Task removed");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="board">
      <div className="board-frame">
        <Header onAddClick={openNewTaskForm} />

        <FilterTabs activeFilter={activeFilter} onChange={setActiveFilter} counts={counts} />

        <main className="board-surface">
          {loading && <p className="board-status">Loading your board…</p>}

          {!loading && error && (
            <div className="board-status board-error">
              <p>Couldn't reach the server: {error}</p>
              <button className="btn btn-ghost" onClick={fetchTasks}>
                Try again
              </button>
            </div>
          )}

          {!loading && !error && (
            <TaskList
              tasks={visibleTasks}
              onEdit={openEditForm}
              onDelete={handleDelete}
              hasAnyTasks={tasks.length > 0}
            />
          )}
        </main>
      </div>

      <TaskForm
        open={formOpen}
        onClose={closeForm}
        onSubmit={handleSubmit}
        editingTask={editingTask}
      />
    </div>
  );
}

export default App;