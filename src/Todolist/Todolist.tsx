import React, {useState} from 'react';
import '../App.css';
import {TasksFilteredType, TasksType} from '../App';
import classes from './Todolist.module.css'

export type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (taskId: string) => void
    // filter: TasksFilteredType
    changeFilter: (value: TasksFilteredType) => void
    addTask: (title: string) => void
}

export const Todolist = (props: TodolistPropsType) => {
    const [newAddedTask, setNewAddedTask] = useState('')

    // const removeTaskHandler = () => {
    //     props.removeTask(taskId)
    // }

    return (
        <div className={classes.container}>
            <h3>{props.title}</h3>
            <input/>
            <button onClick={() => props.addTask(newAddedTask)}>Add</button>
            <ul>
                {
                    props.tasks.map(t =>
                        <li>
                            <button onClick={() => props.removeTask(t.id)}>X</button>
                            <input type={'checkbox'} checked={t.isDone}/>
                            <span>{t.title}</span>
                        </li>)
                }
            </ul>
            <button onClick={() => props.changeFilter('All')}>All</button>
            <button onClick={() => props.changeFilter('Active')}>Active</button>
            <button onClick={() => props.changeFilter('Completed')}>Completed</button>
        </div>
    );
}


// <h3>{props.title}</h3>
// <input/>
// <button>+</button>
// <ul>
//     {
//         props.tasks.map(el => {
//             return (
//                 <li key={el.id}>
//                     <input type={'checkbox'} checked={el.isDone}/>
//                     <span>{el.title}</span>
//                     <button onClick={() => {
//                         props.removeTask(el.id)
//                     }}>
//                         X
//                     </button>
//                 </li>
//
//             )
//         })
//     }
// </ul>
// <button onClick={() => {
//     props.changeFilter('All')
// }}>All
// </button>
// <button onClick={() => {
//     props.changeFilter('Active')
// }}>Active
// </button>
// <button onClick={() => {
//     props.changeFilter('Completed')
// }}>Completed
// </button>
