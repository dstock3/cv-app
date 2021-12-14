import React, { useState, useEffect } from 'react'
import { newDrag } from '../../DragFunctions'
import BasicWindow from '../Windows/BasicWindow'
import { newController } from '../Main'

const DesktopIcon = (props) => {
    const [newShortcut, setShortcut] = useState({isClicked: false, isRightClicked: false})

    const openWindow = () => {
        setShortcut({ ...newShortcut, isClicked: true})
    }

    const closeWindow = () => {
        setShortcut({...newShortcut, isClicked: false})
    }

    useEffect(() => {
        newController.winParent = document.getElementById(props.shortcutId).parentElement

        let closeButtons = Array.from(document.getElementsByClassName("close"))

        for (let i = 0; i < closeButtons.length; i++) {
            let close = closeButtons[i];
            let newWindow = close.parentElement.parentElement.parentElement;

            function closeSet() {
                let winButtons = Array.from(document.getElementsByClassName("min-win-button"))
                for (let y = 0; y < winButtons.length; y++) {
                    if (props.shortcut === winButtons[y].innerHTML) {
                        winButtons[y].remove()
                    }

                    if (newWindow.id === props.shortcutId + "-window")  {
                        if (newWindow.parentElement !== newController.winParent) {
                            newWindow.classList.add("hidden")
                            newController.winParent.appendChild(newWindow)
                            newWindow.remove()
                        } else {
                            closeWindow()
                            newWindow.remove()
                        }
                    }
                }
            }

            close.addEventListener("click", closeSet)
        }
    })

    return (
        <>
            <div className="shortcut" onDoubleClick={openWindow} id={props.shortcutId} draggable="true" onDragStart={newDrag}>
                <img className="desktop-icon" id={props.shortcutIconId} src={props.imgSrc} alt={props.shortcut}></img>
                <div className="folder-name">{props.shortcut}</div>
            </div>
            <BasicWindow isClicked={(newShortcut.isClicked)} winTitle={props.shortcut} winId={props.shortcutId + "-window"} contents={props.contents}/>
        </>
    )
}

export default DesktopIcon