import React from 'react'
import Box from './Box'

const styles = {
    width: '300px',
    height: '300px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr)/ repeat(3, 1fr)'
}
const Board = (props) => {
    return (
        <div style={styles} >
            {[...Array(9)].map((_, index) =>(
                <Box key={index} onClick={() => props.onClick(index)} value={props.value[index]}  />
            ))}
            
        </div>
    )
}

export default Board
