import React, { Component } from "react";
import "./Life.css";

const Board = () => (
  <div>
    <table />{" "}
  </div>
);

function PauseButton(props) {
  const { gameRunning, gamePaused } = props.state;
  if (!gameRunning) {
    return <> </>;
  } else return <button>{gamePaused ? "RESUME" : "PAUSE"}</button>;
}

class Life extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameRunning: false,
      gamePaused: false
    };

    // This binding is necessary to make `this` work in the callback
    this.doStartStop = this.doStartStop.bind(this);
    this.doPauseResume = this.doPauseResume.bind(this);
  }

  doClear = e => {};
  changeFn = e => {
    return e;
  };

  doStartStop() {
    this.setState(state => ({ gameRunning: !state.gameRunning }));
  }

  doPauseResume() {
    //if(this.state.gameRunning)
    console.log("pauesstate", this.state);
    this.setState(state => ({ gamePaused: !state.gamePaused }));
  }

  render() {
    return (
      <div id="App">
        <div className="cmdList">
          <button id="start_stop" onClick={this.doStartStop}>
            {this.state.gameRunning ? "STOP" : "START"}
          </button>
          <PauseButton state={this.state} onClick={this.doPauseResume} />

          <button id="random">Seed</button>
          <label id="pool">Pool Size</label>
          <input id="pool" type="number" min="0" max="1" step="0.05" value=".5" onChange={this.changeFn} />
          <button id="clear" onClick={this.doClear}>
            CLEAR
          </button>
        </div>

        <Board id="board-container" />
      </div>
    );
  }
}

export default Life;
