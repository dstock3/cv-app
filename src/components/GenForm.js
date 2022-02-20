import React, { useState, useRef, useEffect } from 'react';
import StateOptions from './StateOptions';

const GenForm = ({genInfo, setGenInfo}) => {
    const [genClass, setGenClass] = useState('')

    const [placeholders, setPlaceholders] = useState({
        firstName: "First Name", 
        lastName: "Last Name", 
        address: "Address",
        zip: "Zip Code",
        city: "City",
        email: "E-Mail Address",
        phone: "Phone Number",
    })

    const inputRef = useRef()
    
    useEffect(()=> {
        inputRef.current.focus()
    })

    const changeHandler = (property, event) => {
        for (let prop in genInfo) {
            console.log(event.target.value)
            /*
            if (prop === property) {
                genInfo[prop]
                

            }*/
        }
    }

    const addGenInfo = () => {
        if (firstName && lastName && address && city && state && zip && email && phone) {
            /*
            setGenInfo({
                newFirstName: firstName,
                newLastName: lastName,
                newAddress: address,
                newCity: city,
                newState: state,
                newZip: zip,
                newEmail: email,
                newPhone: phone,
            })*/
        } else {
            setGenClass("error")
            setPlaceholders({
                firstNamePlaceholder: "Required Field", 
                lastNamePlaceholder: "Required Field", 
                addressPlaceholder: "Required Field", 
                zipPlaceholder: "Required Field", 
                cityPlaceholder: "Required Field", 
                emailPlaceholder: "Required Field", 
                phonePlaceholder: "Required Field", 
            })
        }

    }

    return (
        <fieldset>
            <div className="gen-info">
                <legend>General Information</legend>
            </div>

            <div className="name-container">
                <label htmlFor="firstname">First Name:</label>
                <input ref={inputRef} className={"first-name-input " + genClass} type="text" value={genInfo.firstName} id="firstname" placeholder={placeholders.firstName} onChange={(e) => changeHandler("firstName", e)}/>

                <label htmlFor="lastname">Last Name:</label>
                <input className={"last-name-input " + genClass} type="text" value={genInfo.lastName} id="lastname" placeholder={placeholders.lastName} onChange={(e) => changeHandler("lastName", e)}/>
            </div>

            <div className="address-container">
                <label htmlFor="address">Address:</label>
                <input className={"address-input " + genClass} type="text" value={genInfo.address} id="address" placeholder={placeholders.address} onChange={(e) => changeHandler("address", e)} />

                <div className="address-subcontainer">
                    <label htmlFor="city">City:</label>
                    <input className={"city-input " + genClass} type="text" value={genInfo.city} id="city" placeholder={placeholders.city} onChange={(e) => changeHandler("city", e)} />
                    
                    <label htmlFor="state">State:</label>
                    <select className="state-select" type="text" value={genInfo.state} name="state" onChange={(e) => changeHandler("state", e)}>
                        <StateOptions />
                    </select>

                    <label htmlFor="zip">Zip Code:</label>
                    <input className={"zip-input " + genClass} type="text" value={genInfo.zip} id="zip" placeholder={placeholders.zip} onChange={(e) => changeHandler("zip", e)} />
                </div>
                <div className="contact-container">
                    <label htmlFor="email">E-Mail Address:</label>
                    <input className={"email-input " + genClass}type="text" value={genInfo.email} id="email" placeholder={placeholders.email} onChange={(e) => changeHandler("email", e)}/>

                    <label htmlFor="phone">Phone Number:</label>
                    <input className={"phone-input " + genClass} type="text" value={genInfo.phone} id="phone" placeholder={placeholders.phone} onChange={(e) => changeHandler("phone", e)} />
                </div>
            </div>

            <button className="add-info-button" id="add-general-info" onClick={addGenInfo}>+</button>
        </fieldset>
    )
}

export default GenForm