import React, { useState } from "react";
import FormTask from "../components/FormTask";
import Table from "../components/Table";
import { useTaskContext } from "../context/TaskProvider";

function Home() {
  const { tableTasks, task, setTask, postTask } =
    useTaskContext();

  return (
    <div className="h-[90vh] py-8 w-full flex items-center flex-col  bg-gray-100">
      <FormTask
        task={task}
        setTask={setTask}
        postTask={postTask}
      />
      <Table tableTasks={tableTasks} />
    </div>
  );
}

export default Home;
