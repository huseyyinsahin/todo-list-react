import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

function TaskProvider({ children }) {
  const [tableTasks, setTableTasks] = useState([]);
  const url = "https://66ec9aab2b6cf2b89c5ee33e.mockapi.io/todoList";

  const postTask = async (newTask) => {
    try {
      await axios.post(url, newTask);
      addTask();
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async () => {
    try {
      const data = await axios(url);
      setTableTasks(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      addTask();
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (newTask, id) => {
    try {
      await axios.put(`${url}/${id}`, newTask);
      addTask();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    addTask();
  }, []);

  return (
    <TaskContext.Provider
      value={{ tableTasks, postTask, deleteTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
