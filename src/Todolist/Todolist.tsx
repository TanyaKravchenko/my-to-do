import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
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

    const addTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewAddedTask(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTask(newAddedTask)
            setNewAddedTask('')
        }
    }

    const onClickHandler = () => {
        props.addTask(newAddedTask)
        setNewAddedTask('')
    }

    return (
        <div className={classes.container}>
            <h3>{props.title}</h3>
            <input
                value={newAddedTask}
                onChange={addTaskHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={onClickHandler}>Add</button>
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
