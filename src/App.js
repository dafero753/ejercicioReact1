import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
      ],
      editingTask: null,
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }

  editTask = (name) => (e) => {
    const { tasks } = this.state;
    const [ editingTask ] = tasks.filter(task => task.name === name);

    this.setState({ editingTask });
  }

  moveBack = (e) => {
    const { editingTask, tasks } = this.state;
    const newTask = { ...editingTask, stage: editingTask.stage - 1 }
    const newTasks = tasks.map(task => {
      return task.name === editingTask.name ? newTask : task;
    });

    this.setState({ tasks: newTasks, editingTask: newTask });
  }

  moveForward = (e) => {
    const { editingTask, tasks } = this.state;
    const newTask = { ...editingTask, stage: editingTask.stage + 1}
    const newTasks = tasks.map(task => {
      return task.name === editingTask.name ? newTask : task;
    });

    this.setState({ tasks: newTasks, editingTask: newTask });
  }

  render() {
    const { tasks, editingTask } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="App">
        <Controls
          stages={NUM_STAGES}
          editingTask={editingTask}
          moveBack={this.moveBack}
          moveForward={this.moveForward}
        />
        <Board
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
          editTask={this.editTask}
        />
      </div>
    );
  }
};

export default App;
