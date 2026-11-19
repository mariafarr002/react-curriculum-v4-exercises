import { useState } from 'react';

import UserProfile from './components/UserProfile';
import TaskFilters from './components/TaskFilterButtons';
import TaskItem from './components/TaskItem';

import useTasks from './hooks/useTasks';
import filterTasks from './utils/filterTasks';

export default function StudentWork() {
  const { tasks, loading } = useTasks();

  const [filter, setFilter] = useState('all');

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <TaskFilters filter={filter} setFilter={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
