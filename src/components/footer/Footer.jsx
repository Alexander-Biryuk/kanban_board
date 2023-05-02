import { BACKLOG, FINISHED } from '../../data';
import styles from './Footer.module.css';

export default function Footer({ task }) {
  const activeTasks = task.filter((task) => task.status === BACKLOG).length;
  const finishedTasks = task.filter((task) => task.status === FINISHED).length;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.tasks}>
          <div className={styles.active_tasks}>Active tasks: {activeTasks}</div>
          <div className={styles.finished_tasks}>
            Finished tasks: {finishedTasks}
          </div>
        </div>
        <div className={styles.author}>
          Kanban board by Alexander Biryuk, 2023
        </div>
      </div>
    </footer>
  );
}
