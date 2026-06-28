import TaskItem from "./TaskItem";
import Icon from "./Icon";

// A small, deterministic "tilt" per card (based on its id) so the board
// looks hand-pinned rather than perfectly aligned, without jittering on
// every re-render.
function tiltFor(id) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) % 997;
  return (hash % 7) - 3; // roughly -3deg to +3deg
}

function TaskList({ tasks, onEdit, onDelete, hasAnyTasks }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <Icon name="board" width={32} height={32} />
        <p>
          {hasAnyTasks
            ? "Nothing pinned under this filter yet."
            : "The board's empty — pin your first task to get started."}
        </p>
      </div>
    );
  }

  return (
    <div className="board-grid">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          rotation={tiltFor(task._id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
