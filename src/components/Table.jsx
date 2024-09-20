import React, { useState } from "react";
import EditModal from "./EditModal";

function Table({ tableTasks, deleteTask, putTask }) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState("");

  return (
    <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
          <tr>
            <th className="py-3 px-56">Task</th>
            <th className="py-3 px-6">Task Type</th>
            <th className="py-3 px-12">Edit Delete</th>
          </tr>
        </thead>
        <tbody className="text-black-100 text-[1rem]  divide-y">
          {tableTasks.map((item) => (
            <tr key={item.id}>
              <td className="px-6 max-w-[200px] break-words py-4 whitespace-normal">
                {item.task}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.taskType}</td>
              <td className="text-right px-6 whitespace-nowrap">
                <button
                  onClick={() => {setOpen(true); setItem(item);}}
                  className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(item.id)}
                  className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditModal open={open} setOpen={setOpen} putTask={putTask} item={item}/>
    </div>
  );
}

export default Table;
