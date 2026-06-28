import TaskItem from "./TaskItem";

function TaskList({ tasks, fetchTasks, setEditingTask }) {
  if (tasks.length === 0) {
    return <p>No Tasks Found</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          fetchTasks={fetchTasks}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
}

export default TaskList;