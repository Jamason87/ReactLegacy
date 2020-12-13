import React, { Component } from 'react';
import {Input, Button} from 'reactstrap'

class ToDoIndex extends Component {
    constructor() {
        super();

        this.state = {
            taskInput: '',
            tasksId: 0,
            tasks: []
        }

        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        e.preventDefault();

        let task = {
            id: this.state.tasksId,
            content: this.state.taskInput,
            completed: false
        }

        this.setState({
            tasksId: this.state.tasksId + 1
        })

        this.setState({
            tasks: [task, ...this.state.tasks]
        })
    }

    checkboxToggle(id) {
        let tmpTasks = this.state.tasks.map((task) => {
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task;
        });

        this.setState({
            tasks: tmpTasks
        })
    } 

    render() {
        return (
            <div>
                <Input placeholder="Type a task here..." onChange={(e) => {this.setState({
                    taskInput: e.target.value
                })}}/>
                <Button onClick={this.addTask}>Add Task</Button>

                <ul>
                    {this.state.tasks.map((task) => {
                        return <li key={task.id} style={(task.completed) ? {textDecoration: 'line-through'} : {}}>
                            <Input type="checkbox" onChange={() => {this.checkboxToggle(task.id)}} checked={task.completed} />{task.content}
                            </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ToDoIndex;