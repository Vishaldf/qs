import React from "react";
import Column from "./Column";
import "../App.css";

const KanbanBoard = ({ tasks, users, groupBy, sortBy }) => {
  const getGroupedTasks = () => {
    let groupedTasks = {};
    tasks.forEach((task) => {
      let key;
      if (groupBy === "status") {
        key = task.status;
      } else if (groupBy === "user") {
        key = users.find((user) => user.id === task.userId)?.name || "Unknown";
      } else if (groupBy === "priority") {
        key = `Priority ${task.priority}`;
      }

      if (!groupedTasks[key]) groupedTasks[key] = [];
      groupedTasks[key].push(task);
    });

    Object.keys(groupedTasks).forEach((groupKey) => {
      groupedTasks[groupKey].sort((a, b) => {
        if (sortBy === "priority") return b.priority - a.priority;
        if (sortBy === "title") return a.title.localeCompare(b.title);
        return 0;
      });
    });

    return groupedTasks;
  };

  const groupedTasks = getGroupedTasks();

  return (
    <div className="kanban-board">
      {Object.keys(groupedTasks).map((key) => (
        <Column key={key} title={key} tasks={groupedTasks[key]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
