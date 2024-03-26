import { useState } from "react";


const TASKS = [
    {
      dueDate: "2024-03-30",
      completed: false,
      name: "Pay bank debts"
    },
    {
      dueDate: "2024-03-27",
      completed: false,
      name: "Wash my dog",
    },
    {
      dueDate: "2024-03-28",
      completed: true,
      name: "Prepare breakfast",
    },
    {
      dueDate: "2024-03-29",
      completed: false,
      name: "Visit new neighbors",
    },
    {
      dueDate: "2024-04-01",
      completed: false,
      name: "Study programming",
    },
    {
      dueDate: "2024-03-26",
      completed: true,
      name: "Visit my parents",
    },
    {
      dueDate: "2024-03-31",
      completed: false,
      name: "Update resume",
    },
    {
      dueDate: "2024-04-02",
      completed: false,
      name: "Research career options",
    },
    {
      dueDate: "2024-04-03",
      completed: true,
      name: "Start reading new book",
    },
    {
      dueDate: "2024-04-04",
      completed: true,
      name: "Schedule dentist appointment",
    },
  ];

  export default function TaskList() {
    const [searchText, setSearchText] = useState('');
    const [showCompleted, setShowCompleted] = useState(true);
  
    const handleInputTextChange = (event) => {
      setSearchText(event.target.value);
    };

    const handleCheckboxChange = () => {
        setShowCompleted(!showCompleted);
      };
    
      const filteredTasks = TASKS.filter(task => {
        const taskName = task.name.toLowerCase();
        return (
          taskName.includes(searchText.toLowerCase()) &&
          (showCompleted || task.completed)
        );
      });
      return (
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleInputTextChange}
          />
          <label>
            <input
              type="checkbox"
              checked={!showCompleted}
              onChange={handleCheckboxChange}
            />
            Show completed tasks
          </label>
    
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map(task => (
                <tr key={task.name} className={task.completed ? 'completed-task' : ''}>
                  <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.name}
                  </td>
                  <td>{task.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }