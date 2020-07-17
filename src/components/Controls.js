import React, { Component } from 'react';

class Controls extends Component {
  render() {
    const {
      editingTask,
      stages,
      moveBack,
      moveForward,
    } = this.props;

    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
            value={(editingTask && editingTask.name) || ''}
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!editingTask || editingTask.stage <= 0}
            data-testid="move-back-btn"
            onClick={moveBack}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!editingTask || editingTask.stage >= stages - 1}
            data-testid="move-forward-btn"
            onClick={moveForward}
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
