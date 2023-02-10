import List from '../list/List'
import styles from './Main.module.css'
import { BACKLOG, READY, IN_PROGRESS, FINISHED } from '../../data'

export default function Main({ task, setTask }) {
  return (
    <main className={styles.main}>
      <div className={styles.main_container}>
        <List title={BACKLOG} task={task} setTask={setTask} />
        <List title={READY} task={task} setTask={setTask} />
        <List title={IN_PROGRESS} task={task} setTask={setTask} />
        <List title={FINISHED} task={task} setTask={setTask} />
      </div>
    </main>
  )
}