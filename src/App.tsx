import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist/Todolist';
import {v1} from 'uuid';

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export type TodoListsType = {
    id: string
    title: string
    filter: TasksFilteredType
}

export type TasksFilteredType = 'All' | 'Active' | 'Completed'

function App() {
    // const [tasks, setTasks] = useState<Array<TasksType>>([
    //     {id: v1(), title: 'React', isDone: true},
    //     {id: v1(), title: 'JS', isDone: false},
    //     {id: v1(), title: 'Redux', isDone: false},
    //     {id: v1(), title: 'TypeScript', isDone: true},
    // ])

    const [todolists, setTodolists] = useState<Array<TodoListsType>>([
        {id: v1(), title: 'What to learn', filter: 'Active'},
        {id: v1(), title: 'What to buy', filter: 'Completed'},
    ])

    let todolistId1 = v1()
    let todolistId2 = v1()

    const [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: 'React', isDone: true},
            {id: v1(), title: 'JS', isDone: false},
            {id: v1(), title: 'Redux', isDone: false},
            {id: v1(), title: 'TypeScript', isDone: true},
        ],
        [todolistId2]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Bread', isDone: false},
            {id: v1(), title: 'Tea', isDone: false},
        ]
    })

    const removeTask = (taskId: string) => {
        let tasks = tasks[todolistId]
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

    const changeFilter = (value: TasksFilteredType, todolistId: string) => {
        let todolist =todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }

    return (
        <div>
            {
                todolists.map(t => {
                    const filteredTasks = () => {
                        let filteredTasks = tasks[t.id]
                        if (t.filter === 'Active') {
                            filteredTasks = tasks[t.id].filter(t => !t.isDone)
                        }
                        if (t.filter === 'Completed') {
                            filteredTasks = tasks[t.id].filter(t => t.isDone)
                        }
                        return filteredTasks
                    }
                    return (
                        <Todolist
                            key={t.id}
                            id={t.id}
                            title={t.title}
                            tasks={filteredTasks()}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={t.filter}
                        />
                    )
                })
            }

        </div>)
}

export default App;


