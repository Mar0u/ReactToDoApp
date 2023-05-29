import { useState } from "react"
const AddTask = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('work')
    const [priority, setPriority] = useState(1)
    const add = (e) => {
        e.preventDefault()
        onAdd({ name, category, priority })
        setName('')
        setCategory('work')
        setPriority(1)
    }
    return (
        <form className='add-list' onSubmit={add}>
            <div>
                <p>Add a new task:</p>
            <div className='input-div'>
                <label>Task</label>
                <input className='input-place' type='text' placeholder='What do you need to do?' value={name} onChange={(e) =>
                    setName(e.target.value)} required />
            </div>
            <div className='input-div'>
                <label>Category</label>
                <select className='input-place' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value='work'>Work</option>
                    <option value='school'>School</option>
                    <option value='house'>Household chores</option>
                </select>
            </div>
            <div className='input-div'>
                <label>Priority(1-10)</label>
                <input className='input-place' type='number' placeholder='0' value={priority} min="0" max="10" onChange={(e) =>
                    setPriority(e.target.value)} />
            </div>
            </div>
            <input type='submit' className='btn' value='Add' />
        </form>
        
    )
}
export default AddTask
