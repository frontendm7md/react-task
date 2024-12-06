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
            <div className="cards">
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
    return (
        <div className="page">
            <h2>Current Appointment</h2>
            <div className="Page-info">
                <div className="left-data">
                    <div className="user-changes">
                        <img src={user.profileImage} alt=""></img>
                        <h4>{user.name}</h4>
                        <h6>Age: {user.age}</h6>
                        <button>Update</button>
                    </div>
                    <div className="userInfo">
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
                    <div className="testReports">
                        <h3>Test Reports</h3>
                        <div className="reports"><TestReports user={user} /></div>
                    </div>
                    <div className="prescriptions">
                        <h3>Prescriptions</h3>
                        <div className="addPrescription">
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
