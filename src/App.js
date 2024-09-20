import { AlertProvider } from "./context/AlertProvider";
import TaskProvider from "./context/TaskProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <AlertProvider>
          <AppRouter />
        </AlertProvider>
      </TaskProvider>
    </div>
  );
}

export default App;
