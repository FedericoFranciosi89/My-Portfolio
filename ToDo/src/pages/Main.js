import './Main.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearTasks, clearTask } from '../features/tasks/tasksSlice';
const Main = () => {
  const { taskArray } = useSelector((store) => store.tasks);
  const dispatcher = useDispatch();

  return (
    <>
      <div className='main-container'>
        <div className='single-container'>
          <h2>To do</h2>
          {taskArray.map((task) => {
            return (
              <div
                key={task.id}
                className='single-item'
                onClick={() => dispatcher(clearTask(task.id))}
              >
                <h4>{task.task}</h4>
              </div>
            );
          })}

          <button className='btn' onClick={() => dispatcher(clearTasks())}>
            Clear All
          </button>
        </div>
        <Link to='/newTask' className='btn add-btn'>
          New Task
        </Link>
      </div>
    </>
  );
};

export default Main;
