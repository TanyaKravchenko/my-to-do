import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import '../App.css';
import {TasksFilteredType, TasksType} from '../App';
import classes from './Todolist.module.css'

export type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (taskId: string) => void
    filter: TasksFilteredType
    changeFilter: (value: TasksFilteredType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

export const Todolist = (props: TodolistPropsType) => {
    const [newAddedTask, setNewAddedTask] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onClickHandler = () => {
        if (newAddedTask.trim() !== '') {
            props.addTask(newAddedTask.trim())
            setNewAddedTask('')
        } else {
            setError('Title is required')
        }
    }

    const addTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewAddedTask(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter') {
            props.addTask(newAddedTask)
            setNewAddedTask('')
        }
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
                className={error ? 'error' : ''}
            />
            <button onClick={onClickHandler}>Add</button>
            {error && <div className={'error-message'}>{error}</div>}
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
                                <li key={t.id} className={t.isDone ? 'isDone' : ''}>
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
            <button className={props.filter === 'All' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'Active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'Completed' ? 'active-filter' : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    );
}

