import React, { useState } from "react";
import EditModal from "./EditModal";
import { useAlertContext } from "../context/AlertProvider";

function Table({ tableTasks, deleteTask, putTask }) {
  const { showToast } = useAlertContext();
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState("");

  return (
    <div className="mt-6 shadow-lg border rounded-lg overflow-x-auto">
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-white text-gray-600 font-medium border-b sticky top-0">
          <tr>
            <th className="py-3 px-4 sm:px-56">Task</th>
            <th className="py-3 px-4 sm:px-6">Task Type</th>
            <th className="py-3 px-4 sm:px-12">Edit Delete</th>
          </tr>
        </thead>
        <tbody className="text-black-100 text-[1rem] divide-y">
          {tableTasks.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-4 max-w-[100px] sm:max-w-[200px] break-words whitespace-normal">
                {item.task}
              </td>
              <td className="px-4 py-4 whitespace-nowrap max-w-[100px] lg:max-w-[200px] ">
                {item.taskType}
              </td>
              <td className="text-right px-4 sm:px-6 whitespace-nowrap">
                <button
                  onClick={() => {
                    setOpen(true);
                    setItem(item);
                  }}
                  className="py-2 px-2 sm:px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteTask(item.id);
                    showToast("Task deletion successful!", "success");
                  }}
                  className="py-2 px-2 sm:px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditModal open={open} setOpen={setOpen} putTask={putTask} item={item} />
    </div>
  );
}

export default Table;
