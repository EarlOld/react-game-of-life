import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import Grid from '../components/Grid';
import './App.scss';


class Main extends Component {
    constructor() {
        super();
        this.speed = 100;
        this.rows = 10;
        this.cols = 20;

        this.state = {
            generation: 0,
            gridFull: Array(this.rows)
                .fill()
                .map(() => Array(this.cols).fill(false))
        };
    }

    componentDidMount() {
        this.seed();
        // this.playButton();
    }

    selectBox = (row, col) => {
        const gridFull = this.state.gridFull.map((rowArr, rowIdx) =>
            rowArr.map(
                (item, colIdx) => (rowIdx === row && colIdx === col ? !item : item)
            )
        );
        this.setState(() => ({ gridFull }));
    };

    seed = () => {
        const gridFull = this.state.gridFull.map(rowArr =>
            rowArr.map(() => Math.floor(Math.random() * 4) === 1)
        );
        this.setState(() => ({ gridFull }));
    };

    playButton = () => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.play, this.speed);
    };

    pauseButton = () => {
        clearInterval(this.intervalId);
    };

    slow = () => {
        this.speed = 1000;
        this.playButton();
    };

    fast = () => {
        this.speed = 100;
        this.playButton();
    };

    clear = () => {
        const gridFull = Array(this.rows)
            .fill()
            .map(() => Array(this.cols).fill(false));

        this.setState(() => ({
            gridFull,
            generation: 0
        }));
    };

    gridSize = size => {
        switch (size) {
            case '1':
                this.cols = 20;
                this.rows = 10;
                break;
            case '2':
                this.cols = 50;
                this.rows = 30;
                break;
            default:
                this.cols = 70;
                this.rows = 50;
        }
        this.clear();
    };

    play = () => {
        const { gridFull } = this.state;
        const gridFull2 = [ ... this.state.gridFull ];

        for (let i = this.rows - 1; i !== 0; i--) {
            for (let j = this.cols - 1; j !== 0; j--) {
                let count = 0;

                if (i > 0) if (gridFull[i - 1][j]) count++;
                if (i > 0 && j > 0) if (gridFull[i - 1][j - 1]) count++;
                if (i > 0 && j < this.cols - 1) if (gridFull[i - 1][j + 1]) count++;
                if (j < this.cols - 1) if (gridFull[i][j + 1]) count++;
                if (j > 0) if (gridFull[i][j - 1]) count++;
                if (i < this.rows - 1) if (gridFull[i + 1][j]) count++;
                if (i < this.rows - 1 && j > 0) if (gridFull[i + 1][j - 1]) count++;
                if (i < this.rows - 1 && this.cols - 1) if (gridFull[i + 1][j + 1]) count++;
                if (gridFull[i][j] && (count < 2 || count > 3)) gridFull2[i][j] = false;
                if (!gridFull[i][j] && count === 3) gridFull2[i][j] = true;
            }
        }
        this.setState(prevState => ({
            gridFull: gridFull2,
            generation: prevState.generation + 1
        }));
    };

    render() {
        const { gridFull } = this.state;

        return (
            <div>
                <h1>The Game of Life</h1>
                <Buttons
                    playButton={this.playButton}
                    pauseButton={this.pauseButton}
                    slow={this.slow}
                    fast={this.fast}
                    clear={this.clear}
                    seed={this.seed}
                    gridSize={this.gridSize}
                />
                <Grid
                    gridFull={gridFull}
                    rows={this.rows}
                    cols={this.cols}
                    selectBox={this.selectBox}
                />
                <h2>Generations: {this.state.generation}</h2>
                <div className="by">PIK-16 by Sapozhnyk Dmytro</div>
            </div>
        );
    }
}

export default Main;
