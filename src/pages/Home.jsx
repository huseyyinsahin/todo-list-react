import React from "react";
import FormTask from "../components/FormTask";
import Table from "../components/Table";

function Home() {
  return (
    <div className="h-[95vh] py-8 w-full flex items-center flex-col  bg-gray-100">
      <FormTask />
      <Table />
    </div>
  );
}

export default Home;
