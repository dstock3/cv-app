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

        function closeSet() {
            
            let winButtons = Array.from(document.getElementsByClassName("min-win-button"))
            for (let i = 0; i < winButtons.length; i++) {
                let close = closeButtons[i];
                
                if (winButtons[i].innerHTML === props.shortcut) {
                    winButtons[i].remove()
                    let newWindow = close.parentElement.parentElement.parentElement;
                    if (newWindow.id === props.shortcutId + "-window") {
                        if (newWindow.parentElement !== newController.winParent) {
                            newController.winParent.appendChild(newWindow)
                        }
                    /* think i need to loop though em again */

                        closeWindow()
                    }
                }
            }
        }

        for (let i = 0; i < closeButtons.length; i++) {
            let close = closeButtons[i];
            let newWindow = close.parentElement.parentElement.parentElement;
            if (newWindow.id === props.shortcutId + "-window") {
                close.addEventListener("click", closeSet)
            }
        }

        return () => {
            for (let i = 0; i < closeButtons.length; i++) {
                closeButtons[i].removeEventListener("click", closeSet);
            }
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