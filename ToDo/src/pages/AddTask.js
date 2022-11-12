import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddTask.css';
import { useDispatch } from 'react-redux';
import { updateTask } from '../features/tasks/tasksSlice';

const AddTask = () => {
  const [task, setTask] = useState('');

  const dispatcher = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='main-container-single'>
        <form onSubmit={onSubmit} className='my-form'>
          <input
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className='form-input'
            placeholder='Insert Task'
          />
          <Link to='/'>
            <button
              onClick={() => dispatcher(updateTask(task))}
              type='button'
              className='btn'
              style={{ marginTop: '2rem' }}
            >
              Add Task
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default AddTask;
