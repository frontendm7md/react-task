import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import user from "../data/user";

function Page() {
    function Row({property, value}) {
        return(<tr>
            <td><h4>{property.charAt(0).toUpperCase() + property.slice(1)} :</h4></td>
            <td><h5>{value}</h5></td>
        </tr>)
    }
    
    function DisplayUserDataInHTML({user}) {
        let elements = []
        for (const property in user.information) {
            elements.push(
                <Row property={property} value={user.information[property]} key={property} />
            )
        }
        return elements
    }
    
    function Vital({value}) {
        return(
            <div className={"cards" + (theme === "light" ? "" : " dark")}>
                <img src={value.logo} alt=""></img>
                <span>{value.title}</span>
                <div>
                    <h3>{value.value}</h3>
                </div>
            </div>
        )
    }

    function Vitals({user}) {
        let elements = []
            for (const object in user.vitals) {
                elements.push(
                    <Vital value={user.vitals[object]} key={object} />
                ) 
            }
        return elements
    }
    
    function TestReport({name, date, id}) {
        return(
            <div className="frame">
                <ion-icon name="medkit" id={id.id}></ion-icon>
                <div>
                    <h4>{name.testName}</h4>
                    <h5>{date.date}</h5>
                </div>
            </div>
        )
    }
    
    function TestReports({user}) {
        let elements = []
        for (const object in user.testReports) {
            elements.push(
                <TestReport name={user.testReports[object]} date={user.testReports[object]} id={user.testReports[object]} key={object} />
            ) 
        }
        return elements
    }

    function Prescription({name, date, duration}) {
        return(<tr>
            <td className="name">
                <ion-icon name="document"></ion-icon>
                <h4>{name.name}</h4>
            </td>
            <td>{date.date}</td>
            <td>{duration.duration}</td>
        </tr>)
    }
    
    function Prescriptions({user}) {
        let elements = []
        for (const property in user.prescriptions) {
            elements.push(
                <Prescription name={user.prescriptions[property]} date={user.prescriptions[property]} duration={user.prescriptions[property]} key={property} />
            )
        }
        return elements
    }

    let { theme } = useContext(ThemeContext);
    const [AddPrescription, SetAddPrescription] = useState(false);
    let [NewPrescription, SetNewPrescription] = useState({
        name: "",
        date: "",
        duration: ""
    })
    function AddNewPrescription() {
        if (NewPrescription.name === "" | NewPrescription.date === "" | NewPrescription.duration === "") {
            SetAddPrescription(!AddPrescription)
        }
        else {
            SetAddPrescription(!AddPrescription)
            user.prescriptions.push(NewPrescription)
        }
        SetNewPrescription({name: "", date: "", duration: ""})
    }
    return (
        <div className={"page" + (theme === "light" ? "" : " dark")}>
            {AddPrescription && (
                <div className="background">
                    <div className={"card" + (theme === "light" ? "" : " dark")}>
                        <h2>Add Prescription</h2>
                        <div className="inputs">
                            <div className="form-control">
                                <input type="value" value={NewPrescription.name} onChange={(event) => {SetNewPrescription({name: event.target.value, date: NewPrescription.date, duration: NewPrescription.duration})}} className={"input" + (theme === "light" ? "" : " dark")} required />
                                <label>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '0ms'}}>N</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '50ms'}}>A</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '100ms'}}>M</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '150ms'}}>E</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="value" value={NewPrescription.date} onChange={(event) => {SetNewPrescription({name: NewPrescription.name, date: event.target.value, duration: NewPrescription.duration})}} className={"input" + (theme === "light" ? "" : " dark")} required />
                                <label>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '0ms'}}>D</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '50ms'}}>A</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '100ms'}}>T</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '150ms'}}>E</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="value" value={NewPrescription.duration} onChange={(event) => {SetNewPrescription({name: NewPrescription.name, date: NewPrescription.date, duration: event.target.value})}} className={"input" + (theme === "light" ? "" : " dark")} required />
                                <label>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '0ms'}}>D</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '50ms'}}>U</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '100ms'}}>R</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '150ms'}}>A</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '200ms'}}>T</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '250ms'}}>I</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '300ms'}}>O</span>
                                    <span className={"span" + (theme === "light" ? "" : " dark")} style={{transitionDelay: '350ms'}}>N</span>
                                </label>
                            </div>
                        </div>
                        <div className="btns">
                            <button onClick={() => SetAddPrescription(!AddPrescription)}>Cancel</button>
                            <button onClick={AddNewPrescription}>Add</button>
                        </div>
                    </div>
                </div>
            )}
            <h2>Current Appointment</h2>
            <div className="Page-info">
                <div className="left-data">
                    <div className={"user-changes" + (theme === "light" ? "" : " dark")}>
                        <img src={user.profileImage} alt=""></img>
                        <h4>{user.name}</h4>
                        <h6>Age: {user.age}</h6>
                        <button>Update</button>
                    </div>
                    <div className={"userInfo" + (theme === "light" ? "" : " dark")}>
                        <h3>Information:</h3>
                        <div className="Info">
                            <table>
                                <tbody><DisplayUserDataInHTML user={user} /></tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="right-data">
                    <div className="healthData">
                        <Vitals user={user} />
                    </div>
                    <div className={"testReports" + (theme === "light" ? "" : " dark")}>
                        <h3>Test Reports</h3>
                        <div className="reports"><TestReports user={user} /></div>
                    </div>
                    <div className={"prescriptions" + (theme === "light" ? "" : " dark")}>
                        <h3>Prescriptions</h3>
                        <div className="addPrescription" onClick={() => SetAddPrescription(!AddPrescription)}>
                            <ion-icon name="add-outline"></ion-icon>
                            <h5>Add Prescription</h5>
                        </div>
                        <div className="prescriptionsData">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Prescriptions</td>
                                        <td>Date</td>
                                        <td>Duration</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Prescriptions user={user} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page
