import "./App.css";
import TaskProvider from "./context/TaskProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <AppRouter />
      </TaskProvider>
    </div>
  );
}

export default App;
