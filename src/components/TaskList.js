import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../features/taskSlice';

const TaskList = () => {
  const [workerTasks, setWorkerTasks] = useState([]);
  const dispatch = useDispatch();
  const { tasks, status } = useSelector((state) => state.tasks);

  // Fetch tasks via Redux
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Fetch tasks via Web Worker
  useEffect(() => {
    const worker = new Worker(`${process.env.PUBLIC_URL}/worker.js`);

    worker.postMessage('fetchTasks');

    worker.onmessage = (event) => {
      setWorkerTasks(event.data);
    };

    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <div>
      <h1>Task List</h1>

      <h2>Fetched by Redux:</h2>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'failed' ? (
        <div>Error loading tasks.</div>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}

      <h2>Fetched by Web Worker:</h2>
      <ul>
        {workerTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;