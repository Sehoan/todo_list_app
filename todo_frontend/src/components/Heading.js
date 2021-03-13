import React from 'react'

const Heading = ({ list }) => {

    const numCompleted = (list) => {
        let cnt = 0
        list.forEach(todo => {
            if(todo.finished) {
                cnt++
            }
        })
        return cnt
    }

    return (
        <div>
            <h1> My To-do List </h1>
            <h3> Total To-do's: {list.length} </h3>
            <h3> Completed To-do's: {numCompleted(list)} </h3>
        </div>
    )

}

export default Heading
