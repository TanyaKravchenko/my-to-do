import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist/Todolist';

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export type TasksFilteredType = 'All' | 'Active' | 'Completed'

function App() {
    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: 'React', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'Redux', isDone: false},
        {id: 4, title: 'TypeScript', isDone: true},
    ])

    const [filter, setFilter] = useState<TasksFilteredType>('All')

    const TodoDelete = (taskId: number) => {
        const deleteTask = tasks.filter(el => el.id !== taskId)
        setTasks(deleteTask)
    }

    let filteredTasks = tasks;
    if (filter === 'Active') {
        filteredTasks = tasks.filter(el => el.isDone !== true)
    }
    if (filter === 'Completed') {
        filteredTasks = tasks.filter(el => el.isDone === true)
    }
    const Filtered = (value: TasksFilteredType) => {
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasks}
                todoDelete={TodoDelete}
                filteredTasks={filteredTasks}
                filtered={Filtered}
            />
        </div>
    );
}

export default App;
