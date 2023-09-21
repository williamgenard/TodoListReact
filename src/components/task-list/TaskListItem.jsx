import style from "./TaskListItem.module.css"

function TaskListItem(props) {

    const { task } = props
    const { onFinishTask, onDeleteTask } = props

    const handleDelete = () => {
        onDeleteTask(task.id)
    }

    return (
        <div className={task.fini ? `${style.taskContainer} ${style.finished}` : style.taskContainer}>
            <div>
                <h4 className={task.priorite === "urgente" ? style.red : undefined}>
                    {task.name} {task.priorite === "urgente" && "(Urgent)"}
                </h4>
                <p>{task.description}</p>
            </div>
            <div className={style.buttonContainer}>
                <button onClick={() => onFinishTask(task.id)}>Terminer</button>
                <button onClick={handleDelete}>Supprimer</button>
            </div>
        </div>
    )
}

export default TaskListItem