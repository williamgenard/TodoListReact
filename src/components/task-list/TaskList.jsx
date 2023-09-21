import TaskListItem from "./TaskListItem"

function TaskList(props) {

    const { tasks } = props
    const { onFinish, onDelete } = props

    const tasksJSX = tasks.map(
        t => <TaskListItem key={t.id} task={t}
            onFinishTask={(id) => onFinish(id)}
            onDeleteTask={onDelete}/>
    )

    return (
        <>
            <h1>List des tâches</h1>
            {tasksJSX}
        </>
    )
}

export default TaskList