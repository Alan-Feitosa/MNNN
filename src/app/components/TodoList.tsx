'use client'

import React, { useState } from 'react';
import Options from './Options';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
  <main>
      <div className=" min-h-screen flex items-center justify-center">
      <div className="max-w-lg  p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">To Do List</h1>
    
      <form onSubmit={handleAddTask} className="flex mb-4">
        <input type="text" value={newTask} onChange={handleInputChange} className="w-full bg-gray-700 rounded-l-lg p-2 focus:outline-none" placeholder="Digite uma nova tarefa" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 py-2">Adicionar</button>
      </form>
      <div className='bg-gray-500 min-h-screen flex-1 p-5 m-5 items-center justify-center'>
        <div className='bg-gray-500  min-h-screen flex-1 p-5 m-5 items-center justify-center'>
          <ul className="space-y-4">
            {tasks.map((task) => (
                <li key={task.id}>
                <table className='w-full'>
                <thead>
                  <tr>
                    <th>Tarefa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 bg-transparent text-white font-semibold" >{task.name}</td>
                    <input type="checkbox" className="mr-2 p-2" />
                    <Options />
                    <input type="button" value="ok"  
                    className={task.completed ? 'completed' : ''}
                    onClick={() => handleToggleTask(task.id)} />
                  </tr>
                </tbody>
              </table>
                <button onClick={() => handleRemoveTask(task.id)} className="ml-auto text-red-500 hover:text-red-600 p-2">Remover</button>
              </li>
            ))}
          </ul>
         </div>
        </div>
      </div>
    </div>
  </main>
  );
};

export default TodoList;
