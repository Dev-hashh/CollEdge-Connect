import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Modal from "./Modal";
import Icon from "./Icon";

const STATUSES = ["Pending", "In Progress", "Completed"];

const emptyForm = { title: "", description: "", status: "Pending", dueDate: "" };

// Mongo/JS dates come back as full ISO strings; <input type="date"> only
// wants the yyyy-mm-dd portion.
const toDateInputValue = (value) => (value ? value.slice(0, 10) : "");

function TaskForm({ open, onClose, onSubmit, editingTask }) {
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title,
        description: editingTask.description || "",
        status: editingTask.status,
        dueDate: toDateInputValue(editingTask.dueDate),
      });
    } else {
      setForm(emptyForm);
    }
  }, [editingTask, open]);

  if (!open) return null;

  const updateField = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      toast.error("Give the task a title first.");
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit(form);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal onClose={onClose}>
      <form className="task-form" onSubmit={submitHandler}>
        <div className="task-form-head">
          <h2>{editingTask ? "Edit task" : "Pin a new task"}</h2>
          <button
            type="button"
            className="icon-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <Icon name="x" />
          </button>
        </div>

        <label className="field">
          <span>Title</span>
          <input
            autoFocus
            placeholder="e.g. Finish DBMS assignment"
            value={form.title}
            onChange={updateField("title")}
          />
        </label>

        <label className="field">
          <span>Description</span>
          <textarea
            placeholder="Add any notes — what's needed, links, anything to remember"
            rows={3}
            value={form.description}
            onChange={updateField("description")}
          />
        </label>

        <div className="field-row">
          <label className="field">
            <span>Due date</span>
            <input
              type="date"
              value={form.dueDate}
              onChange={updateField("dueDate")}
            />
          </label>

          <div className="field">
            <span>Status</span>
            <div className="status-swatches">
              {STATUSES.map((status) => (
                <button
                  type="button"
                  key={status}
                  className={`swatch swatch-${status.replace(/\s/g, "")} ${
                    form.status === status ? "swatch-active" : ""
                  }`}
                  onClick={() => setForm((prev) => ({ ...prev, status }))}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="task-form-actions">
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting
              ? "Saving…"
              : editingTask
              ? "Save changes"
              : "Pin task"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default TaskForm;
