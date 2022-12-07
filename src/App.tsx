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
        return (
            setTasks(tasks.filter(el => el.id !== taskId))
        )
    }


    let tasksForTodolist = tasks
    if (filter === 'Active') {
        tasksForTodolist = tasks.filter(el => !el.isDone)
    }

    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter(el => el.isDone)
    }

    const changeFilter = (value: TasksFilteredType) => {
        setFilter(value)
    }


    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                filter={filter}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
