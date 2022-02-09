import React from 'react'
import ReactDOM from 'react-dom'
import '../clouds.css'

function determineHeight() {
    let base = Math.random() * (3 - 1) + 3;

    return `${base * 30}px`
}

function determineWidth() {
    let base = Math.random() * (3 - 1) + 3;

    return `${base * 95}px`
}

function determinePosition() {
    let xAxis = Math.floor(Math.random(1) * 25);
    let yAxis = Math.floor(Math.random(33) * 66);
    return {horizontal: `${xAxis}%`, vertical:`${yAxis}%`} 
}

function createCloud() {
    let cloudPosition = determinePosition()

    let newCloud = {
        position: `absolute`,
        left: cloudPosition.horizontal,
        top: cloudPosition.vertical,
        height: determineHeight(),
        width: determineWidth(),
        backgroundColor: '#e5e7e9',
        borderRadius: '55%',
        opacity: '92%',
    }
    return newCloud
}

function Cloud(props) {
    const cloudOneSpecs = createCloud();
    const cloudTwoSpecs = createCloud();
    const cloudThreeSpecs = createCloud();
    const cloudFourSpecs = createCloud();

    return ReactDOM.createPortal (
        <>
            <div className="cloud" style={cloudOneSpecs}></div>

            <div className="cloud" style={cloudTwoSpecs}></div>

            <div className="cloud" style={cloudThreeSpecs}></div>

            <div className="cloud" style={cloudFourSpecs}></div>
        </>, 
        document.getElementById(props.cloudSet)
    )
}

export default Cloud
