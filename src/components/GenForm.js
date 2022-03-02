import React, { useState } from 'react';
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

    const addGenInfo = () => {
        if (genInfo.firstName && genInfo.lastName && genInfo.address && genInfo.city && genInfo.state && genInfo.zip && genInfo.email && genInfo.phone) {
            setGenInfo({...genInfo, isValid: true})
        } else {
            setGenClass("error")
            setPlaceholders({
                firstName: "Required Field", 
                lastName: "Required Field", 
                address: "Required Field", 
                zip: "Required Field", 
                city: "Required Field", 
                email: "Required Field", 
                phone: "Required Field", 
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
                <input className={"first-name-input " + genClass} type="text" value={genInfo.firstName} id="firstname" placeholder={placeholders.firstName} onChange={e =>
                    setGenInfo({...genInfo, firstName: e.target.value})  
                }/>

                <label htmlFor="lastname">Last Name:</label>
                <input className={"last-name-input " + genClass} type="text" value={genInfo.lastName} id="lastname" placeholder={placeholders.lastName} onChange={e =>
                    setGenInfo({...genInfo, lastName: e.target.value})  
                }/>
            </div>

            <div className="address-container">
                <label htmlFor="address">Address:</label>
                <input className={"address-input " + genClass} type="text" value={genInfo.address} id="address" placeholder={placeholders.address} onChange={e =>
                    setGenInfo({...genInfo, address: e.target.value})  
                } />

                <div className="address-subcontainer">
                    <label htmlFor="city">City:</label>
                    <input className={"city-input " + genClass} type="text" value={genInfo.city} id="city" placeholder={placeholders.city} onChange={e =>
                        setGenInfo({...genInfo, city: e.target.value})  
                    } />
                    
                    <label htmlFor="state">State:</label>
                    <select className="state-select" type="text" value={genInfo.state} name="state" onChange={e =>
                        setGenInfo({...genInfo, state: e.target.value})  
                    }>
                        <StateOptions />
                    </select>

                    <label htmlFor="zip">Zip Code:</label>
                    <input className={"zip-input " + genClass} type="text" value={genInfo.zip} id="zip" placeholder={placeholders.zip} onChange={e =>
                        setGenInfo({...genInfo, zip: e.target.value})  
                    } />
                </div>
                <div className="contact-container">
                    <label htmlFor="email">E-Mail Address:</label>
                    <input className={"email-input " + genClass}type="text" value={genInfo.email} id="email" placeholder={placeholders.email} onChange={e =>
                        setGenInfo({...genInfo, email: e.target.value})  
                    }/>

                    <label htmlFor="phone">Phone Number:</label>
                    <input className={"phone-input " + genClass} type="text" value={genInfo.phone} id="phone" placeholder={placeholders.phone} onChange={e =>
                        setGenInfo({...genInfo, phone: e.target.value})  
                    } />
                </div>
            </div>

            <button className="add-info-button" id="add-general-info" onClick={addGenInfo}>+</button>
        </fieldset>
    )
}

export default GenForm