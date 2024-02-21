import React from 'react'

function Counter() {
    return (
        <div>
            <div className=" m-10 border-2 p-5">
                <h2 className='text-3xl'>Counter</h2>
                <h4>the conuter is - 0</h4>
                <button className='border-2'>Increment</button>
                <button className='border-2 m-5'>Decrement</button>
            </div>
        </div>
    )
}

export default Counter