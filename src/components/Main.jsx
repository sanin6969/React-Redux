import React from 'react'
import Counter from './Counter'
import Aside from './Aside'
import Header from './Header'
import Footer from './Footer'
import ColorChange from './ColorChange'

function Main() {
    return (
        <div >
            <Header />
            <Counter />
            <Aside />
            <Footer />
            {/* <ColorChange/> */}

        </div>
    )
}

export default Main