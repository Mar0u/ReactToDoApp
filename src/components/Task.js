import { useState } from "react"
import { FiX } from "react-icons/fi"
import { GiSuitcase, GiGraduateCap, GiHouse } from 'react-icons/gi'
const Task = ({ task, onDelete }) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className='task'>
            <div className='task-info'>
                <div className='input-name'>
                    <input type='checkbox' value={isChecked}
                        onChange={(e) => setIsChecked(!isChecked)}
                        required />
                        <div className="task-name">
                    <p className={
                        isChecked ? 'checked' : ''}>{task.name}</p>
                        </div>
                </div>
                <p className="task-priority">!:{task.priority}</p>
            </div>
            <div className='category-icons'>
                {task.category === "work" && <GiSuitcase className='category'></GiSuitcase>}
                {task.category === "school" && <GiGraduateCap className='category'></GiGraduateCap>}
                {task.category === "house" && <GiHouse className='category'></GiHouse>}
                <FiX className='delete' onClick={() => onDelete(task.id)}></FiX>
            </div>
        </div>
    )
}
export default Task