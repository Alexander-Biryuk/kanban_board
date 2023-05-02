import styles from './List.module.css';
import Form from '../form/Form';
import { Link } from 'react-router-dom';

export default function List({ title, task, setTask, dragItem, setDragItem }) {
  function dragStartHandler(event, item) {
    setDragItem(item);
    event.target.style.opacity = '0.3';
  }
  function dragEndHandler(event) {
    event.target.style.opacity = '1';
  }

  function dragOverHandler(event) {
    event.preventDefault();
  }

  function dropHandler(event, title) {
    handleTaskMove(title);
  }

  function handleTaskMove(title) {
    const updatedTask = task.map((item) => {
      if (dragItem.id === item.id) {
        return { ...item, status: title };
      } else {
        return { ...item };
      }
    });
    setTask(updatedTask);
  }

  const list = task
    .filter((item) => item.status === title)
    .map((item) => (
      <Link key={item.id} className={styles.link} to={`tasks/${item.id}`}>
        <li
          key={item.id}
          className={styles.task_item}
          draggable
          onDragStart={(e) => dragStartHandler(e, item)}
          onDragEnd={dragEndHandler}
        >
          {item.name}
        </li>
      </Link>
    ));

  return (
    <div
      className={styles.container}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, title)}
    >
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.task_list}>{list}</ul>
      <Form title={title} task={task} setTask={setTask} />
    </div>
  );
}
