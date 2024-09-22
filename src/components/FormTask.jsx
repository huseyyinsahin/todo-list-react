import { useAlertContext } from "../context/AlertProvider";
import { useTaskContext } from "../context/TaskProvider";

function FormTask() {
  const { task, setTask, postTask } = useTaskContext();
  const { showToast } = useAlertContext();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.task.trim() !== "") {
      postTask();
      setTask({ task: "", taskType: "Critical Task" });
      showToast("Adding task successful!", "success");
    } else {
      showToast("Please fill in your task!", "error");
    }
  };

  const handleTask = (e) => setTask({ ...task, [e.target.id]: e.target.value });

  return (
    <div className="w-[350px] p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl text-center font-semibold text-indigo-600 mb-4">
        ADD LIST
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          id="task"
          placeholder="Enter task"
          className="w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none shadow-sm"
          onChange={handleTask}
          value={task.task}
        />
        <select
          id="taskType"
          className="w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none shadow-sm"
          onChange={handleTask}
          value={task.taskType}
        >
          <option value="Critical Task">Critical Task</option>
          <option value="High Priority Task">High Priority Task</option>
          <option value="Medium Priority Task">Medium Priority Task</option>
          <option value="Low Priority Task">Low Priority Task</option>
        </select>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg transition duration-150 ease-in-out"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default FormTask;
