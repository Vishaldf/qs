import React from "react";
import "../App.css";

const TaskCard = ({ task }) => (
  <div className="task-card">
    <h3>{task.title}</h3>
    <p>Priority: {task.priority}</p>
    <p>Status: {task.status}</p>
  </div>
);

export default TaskCard;
