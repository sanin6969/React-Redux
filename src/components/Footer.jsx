import React from 'react'
import { useSelector } from 'react-redux'
function Footer() {
    const color = useSelector(state => state.color.value)
    return (
        <div className='text 5xl font-semibold text-center border-2 p-5'>
            <h1 style={{ color }} className='text-3xl font-semibold' >FoooooooTER</h1>
        </div>
    )
}

export default Footer