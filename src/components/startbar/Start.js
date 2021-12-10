import React, {useState, useEffect} from 'react'
import Clock from './Clock'
import StartMenu from './StartMenu'

const Start = (props) => {
    const [start, setStart] = useState({isStarted: false})
    
    useEffect(() => {
        if (start.isStarted) {
            let offStart = document.querySelector(".col-container")
            offStart.addEventListener("click", startToggle)
        }
    })

    const startToggle = () => {
        if (start.isStarted) {
            setStart({ ...start, isStarted: false })
        } else {
            setStart({ ...start, isStarted: true })
        }
    }
    
    return (
        
        <div className="start-bar">
            <div className="start-button" onClick={startToggle}>
                Start
            </div>
            <StartMenu canStart={start.isStarted} />
            <div className="bar-body"></div>

            <Clock />
        </div>
    )
}

export default Start
