import React, { Component } from 'react'
import Resume from './Resume';
import StateOptions from './StateOptions';

export class Form extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            zip: '',
            city: '',
            state: '',
            email: '',
            phone: '',
            genClass: '',
            firstNamePlaceholder: "First Name", 
            lastNamePlaceholder: "Last Name", 
            addressPlaceholder: "Address",
            zipPlaceholder: "Zip Code",
            cityPlaceholder: "City",
            emailPlaceholder: "E-Mail Address",
            phonePlaceholder: "Phone Number",
            school: '',
            degree: '',
            year: '',
            honors: '',
            gpa: '',
            edClass: '',
            schoolPlaceholder: "University",
            degreePlaceholder:  "Degree",
            yearPlaceholder: "Graduation Date",
            gpaPlaceholder: "GPA",
            profClass: '',
            compPlaceholder: "Company", 
            titlePlaceholder: "Title", 
            datePlaceholder: "Date of Employment",
            company: '',
            title: '',
            duties: '',
            date: '',
            
            newFirstName: 'Sally',
            newLastName: 'Smith',
            newAddress: '555 New Ave, Apt. #4',
            newCity: 'New Orleans',
            newState: 'LA',
            newZip: '70726',
            newEmail: 'SallySmith@gmail.com',
            newPhone: '(777) 809-2222',
            newSchool: 'University of Iowa',
            newMajor: 'Finance',
            newHonors: 'Magna Cum Laude',
            newGPA: '3.7',
            newYear: '2012',
            newCompany: 'Google',
            newTitle: 'Business Manager',
            newDutiesOne: 'Manage operations and employees',
            newDutiesTwo: 'Manage operations and employees',
            newDutiesThree: 'Manage operations and employees',
            newDate: '2017-Present',

            jobClickCount: 1,
            jobOne: 'job-one',
            jobTwo: '',
            jobThree: '',
            newCompanyTwo: '',
            newTitleTwo: '',
            newDutiesTwoOne: '',
            newDutiesTwoTwo: '',
            newDutiesTwoThree: '',
            newDateTwo: '',

            newCompanyThree: '',
            newTitleThree: '',
            newDutiesThreeOne: '',
            newDutiesThreeTwo: '',
            newDutiesThreeThree: '',
            newDateThree: '',
        }
    }
    
    changeFirstNameHandler = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    changeLastNameHandler = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    changeAddressHandler = event => {
        this.setState({
            address: event.target.value,
        })
    }

    changeCityHandler = event => {
        this.setState({
            city: event.target.value
        })
    }

    changeStateHandler = event => {
        this.setState({
            state: event.target.value,
        })
    }

    changeZipCodeHandler = event => {
        this.setState({
            zip: event.target.value,
        })
    }

    changeEmailHandler = event => {
        this.setState({
            email: event.target.value
        })
    }

    changePhoneHandler = event => {
        this.setState({
            phone: event.target.value
        })
    }

    changeSchoolHandler = event => {
        this.setState({
            school: event.target.value
        })
    }

    changeDegreeHandler = event => {
        this.setState({
            degree: event.target.value
        })
    }

    changeYearHandler = event => {
        this.setState({
            year: event.target.value,
        })
    }

    changeHonorsHandler = event => {
        this.setState({
            honors: event.target.value,
        })
    }

    changeGPAHandler = event => {
        this.setState({
            gpa: event.target.value,
        })
    }

    changeCompanyHandler = event => {
        this.setState({
            company: event.target.value
        })
    }

    changeTitleHandler = event => {
        this.setState({
            title: event.target.value
        })
    }

    changeDutiesOneHandler = event => {
        this.setState({
            dutiesOne: event.target.value
        })
    }

    changeDutiesTwoHandler = event => {
        this.setState({
            dutiesTwo: event.target.value
        })
    }

    changeDutiesThreeHandler = event => {
        this.setState({
            dutiesThree: event.target.value
        })
    }

    changDateHandler = event => {
        this.setState({
            date: event.target.value
        })
    }

    addGenInfo = () => {
        const {genClass, firstName, lastName, address, city, state, zip, email, phone} = this.state

        if (firstName && lastName && address && city && state && zip && email && phone) {
            this.setState({
                newFirstName: firstName,
                newLastName: lastName,
                newAddress: address,
                newCity: city,
                newState: state,
                newZip: zip,
                newEmail: email,
                newPhone: phone,
            })
        } else {
            this.setState({
                genClass: "error",
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

    addEdInfo = () => {
        const {edClass, school, degree, year, honors, gpa} = this.state

        if (school && degree && year && gpa) {
            this.setState({
                newSchool: school,
                newDegree: degree,
                newHonors: honors,
                newYear: year,
                newGPA: gpa,
            })
        } else {
            this.setState({
                edClass: "error",
                schoolPlaceholder: "Required Field",
                degreePlaceholder:  "Required Field",
                yearPlaceholder: "Required Field",
                gpaPlaceholder: "Required Field"
            })
        }
    }

    addProfInfo = () => {
        const {jobClickCount, company, title, dutiesOne, dutiesTwo, dutiesThree, date} = this.state

        if (company && title && date) {
            this.setState({
                jobClickCount: jobClickCount + 1
            })
        } else {
            this.setState({
                profClass: "error",
                compPlaceholder: "Required Field",
                titlePlaceholder: "Required Field",
                datePlaceholder:"Required Field"
            })
        }
        
        if (jobClickCount === 1) {
            this.setState({
                newCompany: company,
                newTitle: title,
                newDutiesOne: dutiesOne,
                newDutiesTwo: dutiesTwo,
                newDutiesThree: dutiesThree,
                newDate: date,
            })
        } else if (jobClickCount === 2) {
            this.setState({
                jobTwo: 'job-two',
                newCompanyTwo: company,
                newTitleTwo: title,
                newDutiesTwoOne: dutiesOne,
                newDutiesTwoTwo: dutiesTwo,
                newDutiesTwoThree: dutiesThree,
                newDateTwo: date,
            })
        } else if (jobClickCount === 3) {
            this.setState({
                jobTwo: 'job-three',
                newCompanyThree: company,
                newTitleThree: title,
                newDutiesThreeOne: dutiesOne,
                newDutiesThreeTwo: dutiesTwo,
                newDutiesThreeThree: dutiesThree,
                newDateThree: date,
            })
        }
    }

    handleSubmit = (event) => {
        const {firstName, lastName, address, city, state, zip, email, phone, genClass, edClass, school, degree, year, honors, gpa, profClass, company, title, dutiesOne, dutiesTwo, dutiesThree, date} = this.state

        if (!genClass) {
            this.setState({
                newFirstName: firstName,
                newLastName: lastName,
                newAddress: address,
                newCity: city,
                newState: state,
                newZip: zip,
                newEmail: email,
                newPhone: phone,
            })
        }

        if (!edClass) {
            this.setState({
                newSchool: school,
                newDegree: degree,
                newHonors: honors,
                newGPA: gpa,
                newYear: year,
            })
        }

        if (!profClass) {
            this.setState({
                newCompany: company,
                newTitle: title,
                newDutiesOne: dutiesOne,
                newDutiesTwo: dutiesTwo,
                newDutiesThree: dutiesThree,
                newDate: date,
            })
        }
        event.preventDefault()
    }

    removeInfo = () => {
        this.setState({
            firstName: '',
            lastName: '',
            address: '',
            zip: '',
            city: '',
            state: '',
            email: '',
            phone: '',
            school: '',
            degree: '',
            year: '',
            honors: '',
            gpa: '',
            company: '',
            title: '',
            dutiesOne: '',
            dutiesTwo: '',
            dutiesThree: '',
            date: '',
            newFirstName: '',
            newLastName: '',
            newAddress: '',
            newCity: '',
            newState: '',
            newZip: '',
            newEmail: '',
            newPhone: '',
            newSchool: '',
            newMajor: '',
            newYear: '',
            newCompany: '',
            newTitle: '',
            newDutiesOne: '',
            newDutiesTwo: '',
            newDutiesThree: '',
            newDate: '', 
        })
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    render() {
        const {firstName, lastName, address, city, state, zip, email, phone, firstNamePlaceholder, genClass, lastNamePlaceholder, addressPlaceholder, zipPlaceholder, cityPlaceholder, emailPlaceholder, phonePlaceholder, school, degree, honors, gpa, year, edClass, schoolPlaceholder, degreePlaceholder, yearPlaceholder, gpaPlaceholder, profClass, compPlaceholder, titlePlaceholder, datePlaceholder, company, title, dutiesOne, dutiesTwo, dutiesThree, date, newFirstName, newLastName, newAddress, newCity, newState, newZip, newEmail, newPhone, newSchool, newDegree, newMajor, newHonors, newGPA, newYear, newCompany, newTitle, newDutiesOne, newDutiesTwo, newDutiesThree, newDate, newCompanyTwo, newTitleTwo, newDutiesTwoOne, newDutiesTwoTwo, newDutiesTwoThree, newDateTwo, newCompanyThree, newTitleThree, newDutiesThreeOne, newDutiesThreeTwo, newDutiesThreeThree, newDateThree, jobOne, jobTwo, jobThree} = this.state

        return (
            <div className="section-container">
                <section className="form-container">
                    <h1>Resume Builder</h1>
                    <form className="resume-form" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <div className="gen-info">
                                <legend>General Information</legend>
                            </div>
                            
                            <div className="name-container">
                                <label htmlFor="firstname">First Name:</label>
                                <input ref={this.inputRef} className={"first-name-input " + genClass} type="text" value={firstName} id="firstname" placeholder={firstNamePlaceholder} onChange={this.changeFirstNameHandler}/>

                                <label htmlFor="lastname">Last Name:</label>
                                <input className={"last-name-input " + genClass} type="text" value={lastName} id="lastname" placeholder={lastNamePlaceholder} onChange={this.changeLastNameHandler}/>
                            </div>
                            
                            <div className="address-container">
                                <label htmlFor="address">Address:</label>
                                <input className={"address-input " + genClass} type="text" value={address} id="address" placeholder={addressPlaceholder} onChange={this.changeAddressHandler} />

                                <div className="address-subcontainer">
                                    <label htmlFor="city">City:</label>
                                    <input className={"city-input " + genClass} type="text" value={city} id="city" placeholder={cityPlaceholder} onChange={this.changeCityHandler} />
                                    
                                    <label htmlFor="state">State:</label>
                                    <select className="state-select" type="text" value={state} name="state" onChange={this.changeStateHandler}>
                                        <StateOptions />
                                    </select>

                                    <label htmlFor="zip">Zip Code:</label>
                                    <input className={"zip-input " + genClass} type="text" value={zip} id="zip" placeholder={zipPlaceholder} onChange={this.changeZipCodeHandler} />
                                </div>
                                <div className="contact-container">
                                    <label htmlFor="email">E-Mail Address:</label>
                                    <input className={"email-input " + genClass}type="text" value={email} id="email" placeholder={emailPlaceholder} onChange={this.changeEmailHandler}/>

                                    <label htmlFor="phone">Phone Number:</label>
                                    <input className={"phone-input " + genClass} type="text" value={phone} id="phone" placeholder={phonePlaceholder} onChange={this.changePhoneHandler} />
                                </div>
                            </div>
                            <button className="add-info-button" id="add-general-info" onClick={this.addGenInfo}>+</button>
                        </fieldset>

                        <fieldset>
                            <legend>Education</legend>
                            <div className="education-container">
                                <div className="education-subcontainer-left">
                                    <label htmlFor="school">School:</label>
                                    <input className={edClass} type="text" value={school} name="school" placeholder={schoolPlaceholder} onChange={this.changeSchoolHandler} />

                                    <label htmlFor="degree">Degree:</label>
                                    <input className={edClass} type="text" value={degree} name="degree" placeholder={degreePlaceholder} onChange={this.changeDegreeHandler} />

                                    <label htmlFor="year">Year of Completion:</label>
                                    <input className={edClass} type="text" value={year} name="year" placeholder={yearPlaceholder} onChange={this.changeYearHandler} />
                                </div>
                                <div className="education-subcontainer-right">
                                    <label htmlFor="honors">Honors:</label>
                                    <input type="text" value={honors} name="honors" placeholder='Honors' onChange={this.changeHonorsHandler} />

                                    <label htmlFor="gpa">GPA:</label>
                                    <input className={edClass} type="text" value={gpa} name="gpa" placeholder={gpaPlaceholder} onChange={this.changeGPAHandler} />
                                </div>
                            </div>

                            <button className="add-info-button" id="add-ed-info" onClick={this.addEdInfo}>+</button>
                        </fieldset>
                        <fieldset>
                            <legend>Professional Experience</legend>

                            <div className="experience-container">
                                <div className="experience-subcontainer">
                                    <div className="experience-sub-left">
                                        <label htmlFor="company">Company:</label>
                                        <input className={profClass} type="text" value={company} name="company" placeholder={compPlaceholder} onChange={this.changeCompanyHandler}/>

                                        <label htmlFor="title">Title:</label>
                                        <input className={profClass} type="text" value={title} name="title" placeholder={titlePlaceholder} onChange={this.changeTitleHandler}/>

                                        <label htmlFor="date">Date of Employment:</label>
                                        <input className={profClass} type="text" value={date} name="date" placeholder={datePlaceholder} onChange={this.changDateHandler}/>
                                    </div>

                                    <div className="experience-sub-right">
                                        <label htmlFor="duties">Duties:</label>
                                        <input type="text" value={dutiesOne} name="duties" placeholder='Duties' onChange={this.changeDutiesOneHandler}/>

                                        <label htmlFor="dutiestwo">Duties:</label>
                                        <input type="text" value={dutiesTwo} name="dutiestwo" placeholder='Duties' onChange={this.changeDutiesTwoHandler}/>

                                        <label htmlFor="dutiesthree">Duties:</label>
                                        <input type="text" value={dutiesThree} name="dutiesthree" placeholder='Duties' onChange={this.changeDutiesThreeHandler}/>
                                    </div>
                                </div>

                                <button className="add-info-button" id="add-prof-info" onClick={this.addProfInfo}>Add New</button>
                            </div>
                        </fieldset>
                        
                        <div className="button-container">
                            <button className="submit" type="submit">Submit</button>
                            <button className="remove" onClick={this.removeInfo}>Clear</button>
                        </div>
                    </form>   
                </section>
                
                <section className="resume-container">
                    <div className="preview-head-container">
                        <h2 className="preview">Preview</h2>
                    </div>
                    
                    <Resume firstName={newFirstName} lastName={newLastName} address={newAddress} city={newCity + ","} state={newState} zip={newZip} email={newEmail} phone={newPhone} school={newSchool} degree={newDegree} honors={newHonors} major={newMajor} gpa={newGPA} year={newYear} company={newCompany} title={newTitle} dutiesOne={newDutiesOne} dutiesTwo={newDutiesTwo} dutiesThree={newDutiesThree} date={newDate} newCompanyTwo={newCompanyTwo} newTitleTwo={newTitleTwo} newDutiesTwoOne={newDutiesTwoOne} newDutiesTwoTwo={newDutiesTwoTwo} newDutiesTwoThree={newDutiesTwoThree} newDateTwo={newDateTwo} newCompanyThree={newCompanyThree} newTitleThree={newTitleThree} newDutiesThreeOne={newDutiesThreeOne} newDutiesThreeTwo={newDutiesThreeTwo} newDutiesThreeThree={newDutiesThreeThree} newDateThree={newDateThree} jobOne={jobOne} jobTwo={jobTwo} jobThree={jobThree}/>
                </section>
            </div>
        )
    }
}

export default Form
