import React from "react";
import TaskCard from "./TaskCard";
import "../App.css";

const Column = ({ title, tasks }) => (
  <div className="kanban-column">
    <h2>{title}</h2>
    {tasks.map((task) => (
      <TaskCard key={task.id} task={task} />
    ))}
  </div>
);

export default Column;
