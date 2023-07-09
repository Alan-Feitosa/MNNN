'use client';

import React, { useState } from 'react';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState<Task | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const newTaskItem: Task = {
        id: Date.now(),
        name: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskItem]);
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

  const handleEditTask = (task: Task) => {
    setEditTask(task);
    setNewTask(task.name);
  };

  const handleUpdateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editTask && newTask.trim() !== '') {
      setTasks(
        tasks.map((task) =>
          task.id === editTask.id ? { ...task, name: newTask } : task
        )
      );
      setNewTask('');
      setEditTask(null);
    }
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center overflow-auto hover:overflow-scroll">
      <div className="max-w-lg bg-black p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

        <form onSubmit={editTask ? handleUpdateTask : handleAddTask}>
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Digite uma nova tarefa"
            className="bg-slate-600 rounded-l-lg p-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 py-2"
          >
            {editTask ? 'Atualizar' : 'Adicionar'}
          </button>
        </form>

        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-500 text-gray-800 font-semibold">
                Tarefa
              </th>
              <th className="py-2 px-4 bg-gray-500 text-gray-800 font-semibold">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
                className={task.completed ? 'bg-zinc-600' : 'bg-zinc-600'}
              >
                <td className="py-2 px-4 border-b">
                  {editTask?.id === task.id ? (
                    <form onSubmit={handleUpdateTask}>
                      <input
                        type="text"
                        value={newTask}
                        onChange={handleInputChange}
                        className="w-full rounded-lg p-2 focus:outline-none text-black"
                      />
                    </form>
                  ) : (
                    task.name
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editTask?.id === task.id ? (
                    <button
                      onClick={() => setEditTask(null)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Cancelar
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditTask(task)}
                        className="text-blue-500 hover:text-blue-600 mr-2"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleToggleTask(task.id)}
                        className="text-green-500 hover:text-green-600 mr-2"
                      >
                        {task.completed ? 'Desmarcar' : 'Marcar'}
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        Remover
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
