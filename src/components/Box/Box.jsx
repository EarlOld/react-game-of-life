
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Box extends Component {
    selectBox = () => {
        this.props.selectBox(this.props.row, this.props.col);
    };

    render() {
        return (
            <div
                className={this.props.boxClass}
                id={this.props.id}
                onClick={this.selectBox}
            />
        );
    }
}

Box.propTypes = {
    boxClass: PropTypes.string,
    id: PropTypes.number,
    selectBox: PropTypes.func,
    row: PropTypes.number,
    col: PropTypes.number
};


export default Box;
