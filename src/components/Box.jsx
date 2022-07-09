import React from 'react'
const styles = {
    border: "3px solid #ffdaec",
    fontSize: "40px",
    backgroundColor:"#fff0fa",
    color: "#56354d"

}
const Box = (props) => {
    return (
        <div>
            <button style={styles} onClick={ ()=> props.onClick(props.index)}>
                {props.value}
            </button>
        </div>
    )
}

export default Box
