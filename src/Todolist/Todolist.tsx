import React, {useState} from 'react';
import '../App.css';
import {TasksFilteredType, TasksType} from '../App';
import classes from './Todolist.module.css'

export type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (taskId: string) => void
    filter?: TasksFilteredType
    changeFilter?: (value: TasksFilteredType) => void
}

export const Todolist = (props: TodolistPropsType) => {
    const [filter, setFilter] = useState<TasksFilteredType>('All')
    let tasksForTodolist = props.tasks
    if (filter === 'Active') {
        tasksForTodolist = props.tasks.filter(el => !el.isDone)
    }
    if (filter === 'Completed') {
        tasksForTodolist = props.tasks.filter(el => el.isDone)
    }

    return (
        <div className={classes.container}>
            <h3>{props.title}</h3>
            <input/>
            <button>+</button>
            <ul>
                {
                    tasksForTodolist.map(el => {
                        return (
                            <li key={el.id}>
                                <input type={'checkbox'} checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button onClick={() => {
                                    props.removeTask(el.id)
                                }}>
                                    X
                                </button>
                            </li>

                        )
                    })
                }
            </ul>
            <button onClick={() => {
                setFilter('All')
            }}>All
            </button>
            <button onClick={() => {
                setFilter('Active')
            }}>Active
            </button>
            <button onClick={() => {
                setFilter('Completed')
            }}>Completed
            </button>
        </div>
    );
}
