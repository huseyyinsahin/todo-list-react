import React from "react";

export default () => {
  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center flex justify-between px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block">
          <div>
            <h1 className="font-bold font-serif text-[2rem] text-indigo-600">
              To Do List
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};
