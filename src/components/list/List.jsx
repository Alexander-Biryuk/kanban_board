import styles from './List.module.css'
import Form from '../form/Form'
import { Link } from 'react-router-dom'


export default function List({ title, task, setTask }) {

  const list = task.filter(item => item.status === title).map(
    item =>
      <Link key={item.id} className={styles.link} to={`tasks/${item.id}`}>
        <li key={item.id} className={styles.task_item}>{item.name}</li>
      </Link>
  )

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.task_list}>
        {list}
      </ul>
      <Form title={title} task={task} setTask={setTask} />
    </div>
  )
}