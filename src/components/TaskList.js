import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDeleteTask }) {
  const tasksBeingDisplayed = tasks.map((task) => (
      <Task 
      key={task.text}
      category={task.category} 
      text={task.text} 
      handleDeleteTask={handleDeleteTask} 
       />
    ))

  return (
    <div className="tasks">
      {tasksBeingDisplayed}
    </div>
  );
}

export default TaskList;
