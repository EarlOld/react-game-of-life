
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';


const Grid = ({ cols, gridFull, selectBox}) => {
    const width = cols * 14;
    let boxClass = '';
    const rowsArr = gridFull.map((rowArr, rowIdx) =>
        rowArr.map((item, colIdx) => {
            const boxId = `${rowIdx}_${colIdx}`;

            boxClass = gridFull[rowIdx][colIdx] ? 'box on' : 'box';
            return (
                <Box
                    boxClass={boxClass}
                    key={boxId}
                    boxId={boxId}
                    row={rowIdx}
                    col={colIdx}
                    selectBox={selectBox}
                />
            );
        })
    );

    return (
        <div className="grid" style={{ width }}>
            {rowsArr}
        </div>
    );
};

Grid.propTypes = {
    cols: PropTypes.number,
    gridFull: PropTypes.array,
    selectBox: PropTypes.any
};


export default Grid;
