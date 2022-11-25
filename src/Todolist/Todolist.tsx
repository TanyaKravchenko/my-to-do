import React, {useState} from 'react';
import '../App.css';
import {TasksFilteredType, TasksType} from '../App';
import classes from './Todolist.module.css'

export type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
}

export const Todolist = (props: TodolistPropsType) => {

    return (
        <div className={classes.container}>
            <h3>{props.title}</h3>
            <input/>
            <button>+</button>
            <ul>
                {
                    props.tasks.map(el => {
                        return (
                            <li>
                                <input type={'checkbox'} checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button>X</button>
                            </li>

                        )
                    })
                }
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}


// export type TodolistPropsType = {
//     title: string
//     tasks: Array<TasksType>
//     todoDelete: (taskId: string) => void
//     filteredTasks: Array<TasksType>
//     filtered: (value: TasksFilteredType) => void
//     addTask: (newTitle: string) => void
// }

// export const Todolist = (props: TodolistPropsType) => {
//     const [title, setTitle] = useState('')
//
//     const addTask = () => {
//         props.addTask(title)
//     }
//
//     return (
//         <div className={classes.container}>
//             <h1>{props.title}</h1>
//             <input/>
//             <button onClick={addTask}>add</button>
//             <ul>
//                 {props.filteredTasks.map((el, index) => {
//                     return (
//                         <li key={el.id}>
//                             <span><input type="checkbox" checked={el.isDone}/>{el.title}</span>
//                             <span>{el.isDone}</span>
//                             <button onClick={() => props.todoDelete(el.id)}>X</button>
//                         </li>
//                     )
//                 })}
//             </ul>
//             <button onClick={() => props.filtered('All')}>All</button>
//             <button onClick={() => props.filtered('Active')}>Active</button>
//             <button onClick={() => props.filtered('Completed')}>Completed</button>
//         </div>
//     );
// }