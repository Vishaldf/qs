import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import DisplayToggle from "./components/DisplayToggle";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState("status"); // Default group by status
  const [sortBy, setSortBy] = useState("priority"); // Default sorting by priority

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      const data = await response.json();
      setTasks(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <div className="App">
      <DisplayToggle groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <KanbanBoard tasks={tasks} users={users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
