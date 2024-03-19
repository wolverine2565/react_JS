import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasksSlice';

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Tasks List</h1>
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.title} - {task.completed ? 'Completed' : 'Incomplete'}</p>
        </div>
      ))}
    </div>
  );
};

export default TasksList;