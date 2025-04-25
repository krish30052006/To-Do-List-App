import React, { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          width: '400px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>📝 To-Do List</h1>
        <div style={{ display: 'flex', marginBottom: '30px', gap: '10px' }}>
          <input
            type="text"
            value={newTask}
            placeholder="Enter a new task..."
            onChange={(e) => setNewTask(e.target.value)}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
          <button
            onClick={addTask}
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#4caf50',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Add
          </button>
        </div>

        {tasks.length === 0 ? (
          <p style={{ color: '#888' }}>Your task list is empty 🎉</p>
        ) : (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              maxHeight: '250px',
              overflowY: 'auto',
            }}
          >
            {tasks.map((task, index) => (
              <li
                key={index}
                style={{
                  background: '#f9f9f9',
                  marginBottom: '12px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ textAlign: 'left', wordBreak: 'break-word' }}>
                  {task}
                </span>
                <button
                  onClick={() => removeTask(index)}
                  style={{
                    border: 'none',
                    background: '#ff4d4d',
                    color: '#fff',
                    borderRadius: '8px',
                    padding: '6px 10px',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
