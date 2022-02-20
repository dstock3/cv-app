import React from 'react'

const GenForm = ({genInfo, setGenInfo}) => {
    
    return (
        <fieldset>
            <div className="gen-info">
                <legend>General Information</legend>
            </div>

            <div className="name-container">
                <label htmlFor="firstname">First Name:</label>
                <input ref={this.inputRef} className={"first-name-input " + genClass} type="text" value={genInfo.firstName} id="firstname" placeholder={firstNamePlaceholder} onChange={this.changeFirstNameHandler}/>

                <label htmlFor="lastname">Last Name:</label>
                <input className={"last-name-input " + genClass} type="text" value={genInfo.lastName} id="lastname" placeholder={lastNamePlaceholder} onChange={this.changeLastNameHandler}/>
            </div>

            <div className="address-container">
                <label htmlFor="address">Address:</label>
                <input className={"address-input " + genClass} type="text" value={genInfo.address} id="address" placeholder={addressPlaceholder} onChange={this.changeAddressHandler} />

                <div className="address-subcontainer">
                    <label htmlFor="city">City:</label>
                    <input className={"city-input " + genClass} type="text" value={genInfo.city} id="city" placeholder={cityPlaceholder} onChange={this.changeCityHandler} />
                    
                    <label htmlFor="state">State:</label>
                    <select className="state-select" type="text" value={genInfo.state} name="state" onChange={this.changeStateHandler}>
                        <StateOptions />
                    </select>

                    <label htmlFor="zip">Zip Code:</label>
                    <input className={"zip-input " + genClass} type="text" value={genInfo.zip} id="zip" placeholder={zipPlaceholder} onChange={this.changeZipCodeHandler} />
                </div>
                <div className="contact-container">
                    <label htmlFor="email">E-Mail Address:</label>
                    <input className={"email-input " + genClass}type="text" value={genInfo.email} id="email" placeholder={emailPlaceholder} onChange={this.changeEmailHandler}/>

                    <label htmlFor="phone">Phone Number:</label>
                    <input className={"phone-input " + genClass} type="text" value={genInfo.phone} id="phone" placeholder={phonePlaceholder} onChange={this.changePhoneHandler} />
                </div>
            </div>

            <button className="add-info-button" id="add-general-info" onClick={this.addGenInfo}>+</button>
        </fieldset>
    )
}

export default GenForm