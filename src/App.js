import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb, 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting At School",
      day: "Feb, 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb, 5th at 2:30pm",
      reminder: false,
    },
  ]);
  //Add Tasks
  const addTasks = (task) => {
    console.log(task);
  };
  //To delete files
  const deleteTasks = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <AddTask onAdd={addTasks} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
};

export default App;
