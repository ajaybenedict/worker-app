import React, { useEffect, useState } from 'react';

const TaskListWorker = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const worker = new Worker(new URL('../worker.js', import.meta.url));

    worker.postMessage('fetchTasks');

    worker.onmessage = (event) => {
      setTasks(event.data);
    };

    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <div>
      <h1>Task List (Web Worker)</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListWorker;