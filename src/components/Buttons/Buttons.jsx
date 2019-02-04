
import React, { Component } from 'react';
import { ButtonToolbar, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Buttons extends Component {
    handleSelect = eventKey => {
        this.props.gridSize(eventKey);
    };

    render() {
        return (
            <div className="center">
                <ButtonToolbar>
                    <button className="btn btn-default" onClick={this.props.playButton}>
                        Play
                    </button>
                    <button className="btn btn-default" onClick={this.props.pauseButton}>
                        Pause
                    </button>
                    <button className="btn btn-default" onClick={this.props.clear}>
                        Clear
                    </button>
                    <button className="btn btn-default" onClick={this.props.slow}>
                        Slow
                    </button>
                    <button className="btn btn-default" onClick={this.props.fast}>
                        Fast
                    </button>
                    <button className="btn btn-default" onClick={this.props.seed}>
                        Seed
                    </button>

                    <Dropdown
                        onSelect={this.handleSelect}
                    >
                        <Dropdown.Toggle variant="default" id="size-menu">
                            Grid Size
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1">20x10</Dropdown.Item>
                            <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
                            <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonToolbar>
            </div>
        );
    }
}

Buttons.propTypes = {
    gridSize: PropTypes.func,
    playButton: PropTypes.func,
    pauseButton: PropTypes.func,
    clear: PropTypes.func,
    slow: PropTypes.func,
    fast: PropTypes.func,
    seed: PropTypes.func
};


export default Buttons;
