import Icon from "./Icon";

const STATUS_CLASS = {
  Pending: "note-pending",
  "In Progress": "note-progress",
  Completed: "note-completed",
};

function formatDueDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function isOverdue(value, status) {
  if (!value || status === "Completed") return false;
  const due = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return due < today;
}

function TaskItem({ task, onEdit, onDelete, rotation }) {
  const dueLabel = formatDueDate(task.dueDate);
  const overdue = isOverdue(task.dueDate, task.status);

  return (
    <div
      className={`sticky-note ${STATUS_CLASS[task.status] || "note-pending"}`}
      style={{ "--tilt": `${rotation}deg` }}
    >
      <span className="note-pin" aria-hidden="true">
        <Icon name="pin" />
      </span>

      <h3 className="note-title">{task.title}</h3>

      {task.description && <p className="note-desc">{task.description}</p>}

      <div className="note-footer">
        <span className="note-status">{task.status}</span>
        {dueLabel && (
          <span className={`note-due ${overdue ? "note-due-overdue" : ""}`}>
            <Icon name="calendar" width={14} height={14} />
            {overdue ? `Overdue · ${dueLabel}` : dueLabel}
          </span>
        )}
      </div>

      <div className="note-actions">
        <button className="icon-btn" onClick={() => onEdit(task)} aria-label="Edit task">
          <Icon name="pencil" width={16} height={16} />
        </button>
        <button
          className="icon-btn icon-btn-danger"
          onClick={() => onDelete(task)}
          aria-label="Delete task"
        >
          <Icon name="trash" width={16} height={16} />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
