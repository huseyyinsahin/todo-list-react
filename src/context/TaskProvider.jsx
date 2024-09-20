import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

function TaskProvider({ children }) {
  const [task, setTask] = useState({ task: "", taskType: "Critical Task" });
  const [tableTasks, setTableTasks] = useState([]);

  const postTask = async () => {
    try {
      await axios.post(
        "https://66ec9aab2b6cf2b89c5ee33e.mockapi.io/todoList",
        task
      );
      getTask();
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async () => {
    try {
      const data = await axios(
        "https://66ec9aab2b6cf2b89c5ee33e.mockapi.io/todoList"
      );
      setTableTasks(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(
        "https://66ec9aab2b6cf2b89c5ee33e.mockapi.io/todoList/" + id
      );
      getTask();
    } catch (error) {
      console.error(error);
    }
  };

  const putTask = async (newTask, id) => {
    try {
      await axios.put(
        "https://66ec9aab2b6cf2b89c5ee33e.mockapi.io/todoList/" + id,
        newTask
      );
      getTask();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <TaskContext.Provider
      value={{ tableTasks, task, setTask, postTask, deleteTask, putTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
