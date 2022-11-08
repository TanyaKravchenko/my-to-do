import React from 'react';
import '../App.css';
import {TasksFilteredType, TasksType} from '../App';
import classes from './Todolist.module.css'

export type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    todoDelete: (taskId: number) => void
    filteredTasks: Array<TasksType>
    filtered: (value: TasksFilteredType) => void
}

export const Todolist = (props: TodolistPropsType) => {

    return (
        <div className={classes.container}>
            <h1>{props.title}</h1>
            <input/>
            <button>X</button>
            <ul>
                {props.filteredTasks.map((el, index) => {
                    return (
                        <li key={el.id}>
                            <span><input type="checkbox" checked={el.isDone}/>{el.title}</span>
                            <span>{el.isDone}</span>
                            <button onClick={() => props.todoDelete(el.id)}>X</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.filtered('All')}>All</button>
            <button onClick={() => props.filtered('Active')}>Active</button>
            <button onClick={() => props.filtered('Completed')}>Completed</button>
        </div>
    );
}