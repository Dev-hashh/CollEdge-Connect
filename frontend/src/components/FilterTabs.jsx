const FILTERS = ["All", "Pending", "In Progress", "Completed"];

function FilterTabs({ activeFilter, onChange, counts }) {
  return (
    <nav className="filter-tabs" aria-label="Filter tasks by status">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          className={`tab ${activeFilter === filter ? "tab-active" : ""}`}
          onClick={() => onChange(filter)}
        >
          {filter}
          <span className="tab-count">{counts[filter] ?? 0}</span>
        </button>
      ))}
    </nav>
  );
}

export default FilterTabs;
