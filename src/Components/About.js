import React from 'react'
import Rainbow from '../HOC/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, blanditiis? Voluptas, porro. Quos accusantium itaque sequi voluptatibus doloribus dicta deleniti.</p>
        </div>
    )
}

export default Rainbow(About)