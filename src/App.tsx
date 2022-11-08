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

    const TodoDelete = (taskId: string) => {
        const deleteTask = tasks.filter(el => el.id !== taskId)
        setTasks(deleteTask)
    }

    const AddTask = (newTitle: string) => {
        let newTask = {id: v1(), title: newTitle, isDone: true}
        setTasks([newTask, ...tasks])
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
                addTask={AddTask}
            />
        </div>
    );
}

export default App;
