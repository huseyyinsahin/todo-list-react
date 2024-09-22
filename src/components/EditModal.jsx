import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { useAlertContext } from "../context/AlertProvider";
import { useTaskContext } from "../context/TaskProvider";

function EditModal({ open, setOpen, item }) {
  const { putTask } = useTaskContext();
  const { showToast } = useAlertContext();
  const [editTask, setEditTask] = useState({});

  useEffect(() => {
    if (item) {
      setEditTask({
        task: item.task,
        taskType: item.taskType,
      });
    }
  }, [open]);

  const handleEdit = (e) => {
    setEditTask({ ...editTask, [e.target.id]: e.target.value });
  };

  const handleClick = () => {
    if (editTask.task.trim() !== "") {
      putTask(editTask, item.id);
      showToast("Task editing successful!", "success");
    } else {
      showToast("Please fill in your task!", "error");
    }
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={setOpen}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 w-full h-full bg-black opacity-40" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
          <div className="bg-white rounded-md shadow-lg px-4 py-6">
            <div className="flex items-center justify-end">
              <Dialog.Close className="p-2 text-gray-400 rounded-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Dialog.Close>
            </div>
            <div className="max-w-sm mx-auto space-y-3 text-center ">
              <Dialog.Title className="text-lg font-medium text-gray-800 ">
                Edit Task
              </Dialog.Title>
              <fieldset className="Fieldset relative">
                <input
                  type="text"
                  id="task"
                  placeholder="Enter task"
                  className="w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none shadow-sm"
                  onChange={handleEdit}
                  value={editTask.task}
                />
                <select
                  id="taskType"
                  className="w-full px-3 py-2 mt-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none shadow-sm"
                  onChange={handleEdit}
                  value={editTask.taskType}
                >
                  <option value="Critical Task">Critical Task</option>
                  <option value="High Priority Task">High Priority Task</option>
                  <option value="Medium Priority Task">
                    Medium Priority Task
                  </option>
                  <option value="Low Priority Task">Low Priority Task</option>
                </select>
              </fieldset>
              <Dialog.Close asChild>
                <button
                  onClick={handleClick}
                  className=" w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
                >
                  Edit
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default EditModal;
