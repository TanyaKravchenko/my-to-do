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
    changeTaskStatus: (taskID: string, isDone: boolean) => void
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

    const onAllClickHandler = () => props.changeFilter('All')
    const onActiveClickHandler = () => props.changeFilter('Active')
    const onCompletedClickHandler = () => props.changeFilter('Completed')


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
                    props.tasks.map(t => {
                            const removeTaskHandler = () => {
                                props.removeTask(t.id)
                            }
                            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                props.changeTaskStatus(t.id, e.currentTarget.checked)
                            }
                            return (
                                <li>
                                    <button onClick={removeTaskHandler}
                                    >
                                        X
                                    </button>
                                    <input
                                        type={'checkbox'}
                                        checked={t.isDone}
                                        onChange={onChangeHandler}
                                    />
                                    <span>{t.title}</span>
                                </li>)
                        }
                    )
                }
            </ul>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
    );
}

