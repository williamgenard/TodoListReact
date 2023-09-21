import { nanoid } from "nanoid"
import { useState } from "react"

function Form(props) {

    const { onAddTask } = props

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [priorite, setPriorite] = useState("normal")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: nanoid(),
            name,
            description,
            priorite,
            fini: false
        }
        onAddTask(newTask)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div>
                <label>Priorité</label>
                <select value={priorite} onChange={e => setPriorite(e.target.value)}>
                    <option value="basse">Basse</option>
                    <option value="normal">Normal</option>
                    <option value="urgente">Ugente</option>
                </select>
            </div>

            <input type="submit" />
        </form>
    )
}

export default Form