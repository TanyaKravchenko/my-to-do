import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist/Todolist';
import {v1} from 'uuid';

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export type TasksFilteredType = 'All' | 'Active' | 'Completed'

function App() {
    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: 'React', isDone: true},
        {id: v1(), title: 'JS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'TypeScript', isDone: true},
    ])

    const [filter, setFilter] = useState<TasksFilteredType>('All')

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const addTask = (title: string) => {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }

    const changeStatus = (taskID: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === taskID)
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks])
    }

    const filteredTasks = () => {
        let filteredTasks = tasks
        if(filter === 'Active') {
            filteredTasks = tasks.filter(t => !t.isDone)
        }
        if(filter === 'Completed') {
           filteredTasks = tasks.filter(t => t.isDone)
        }
        return filteredTasks
    }

    const changeFilter = (value: TasksFilteredType) => {
        setFilter(value)
    }

    return (
        <div>
            <Todolist
                title={'What to learn'}
                tasks={filteredTasks()}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
            />
        </div>)
}

export default App;


