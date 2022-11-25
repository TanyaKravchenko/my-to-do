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


    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasks}
            />
        </div>
    );
}

export default App;
