import Icon from "./Icon";

function Header({ onAddClick }) {
  return (
    <header className="board-header">
      <div className="tape-sign">
        <span className="tape" aria-hidden="true" />
        <div>
          <h1>CollEdge Connect</h1>
          <p className="tagline">Keep track of what's due, pinned in one place.</p>
        </div>
      </div>

      <button className="btn btn-primary" onClick={onAddClick}>
        <Icon name="plus" />
        Pin a task
      </button>
    </header>
  );
}

export default Header;
