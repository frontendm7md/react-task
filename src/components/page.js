import user from "../data/user";

function Page() {
    return (
        <div className="page">
            <h2>Current Appointment</h2>
            <div className="Page-info">
                <div className="left-data">
                    <div className="user-changes">
                        <img src={user.userImageChange} alt=""></img>
                        <h4>{user.userNameChange}</h4>
                        <h6>{user.age}</h6>
                        <button>Update</button>
                    </div>
                    <div className="userInfo">
                        <h3>Information:</h3>
                        <div className="Info">
                            <div>
                                <h4>Gender:</h4>
                                <h5 className="Data">{user.userInfo.Gender}</h5>
                            </div>
                            <div>
                                <h4>Blood Type:</h4>
                                <h5 className="Data">{user.userInfo.BloodType}</h5>
                            </div>
                            <div>
                                <h4>Allergies:</h4>
                                <h5 className="Data">{user.userInfo.Allergies}</h5>
                            </div>
                            <div>
                                <h4>Diseases:</h4>
                                <h5 className="Data">{user.userInfo.Diseases}</h5>
                            </div>
                            <div>
                                <h4>Height:</h4>
                                <h5 className="Data">{user.userInfo.Height}</h5>
                            </div>
                            <div>
                                <h4>Weight:</h4>
                                <h5 className="Data">{user.userInfo.Weight}</h5>
                            </div>
                            <div>
                                <h4>Patient ID:</h4>
                                <h5 className="Data">{user.userInfo.PatientID}</h5>
                            </div>
                            <div>
                                <h4>Last Visit:</h4>
                                <h5 className="Data">{user.userInfo.LastVisit}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-data">
                    <div className="healthData">
                        <div className="cards">
                            <img src="/media/heart-rate.jpg" alt=""></img>
                            <span>Heart Rate</span>
                            <div>
                                <h2>{user.healthInfo.heartRate.value}</h2>
                                <h5>{user.healthInfo.heartRate.unit}</h5>
                            </div>
                        </div>
                        <div className="cards">
                            <img src="/media/body-temperature.jpg" alt=""></img>
                            <span>Body Temperature</span>
                            <div>
                                <h2>{user.healthInfo.bodyTemperature.value}</h2>
                                <h5>{user.healthInfo.bodyTemperature.unit}</h5>
                            </div>
                        </div>
                        <div className="cards">
                            <img src="/media/glucose.jpg" alt=""></img>
                            <span>Glucose</span>
                            <div>
                                <h2>{user.healthInfo.glucose.value}</h2>
                                <h5>{user.healthInfo.glucose.unit}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="testReports">
                        <h3>Test Reports</h3>
                        <div className="reports">
                            <div className="frame">
                                <ion-icon name="medkit" id="first"></ion-icon>
                                <div>
                                    <h4>CT Scan -Full Body</h4>
                                    <h5>12th February 2020</h5>
                                </div>
                            </div>
                            <div className="frame">
                                <ion-icon name="medkit" id="second"></ion-icon>
                                <div>
                                    <h4>Creatine Kinase T</h4>
                                    <h5>12th February 2020</h5>
                                </div>
                            </div>
                            <div className="frame">
                                <ion-icon name="medkit" id="third"></ion-icon>
                                <div>
                                    <h4>Eye Fluorescein Test</h4>
                                    <h5>12th February 2020</h5>
                                </div>
                            </div>
                        </div>
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
                                    <tr>
                                        <td className="name">
                                            <ion-icon name="document"></ion-icon>
                                            <h4>{user.PrescriptionsData.first.name}</h4>
                                        </td>
                                        <td>{user.PrescriptionsData.first.date}</td>
                                        <td>{user.PrescriptionsData.first.duration}</td>
                                    </tr>
                                    <tr>
                                        <td className="name">
                                            <ion-icon name="document"></ion-icon>
                                            <h4>{user.PrescriptionsData.second.name}</h4>
                                        </td>
                                        <td>{user.PrescriptionsData.second.date}</td>
                                        <td>{user.PrescriptionsData.second.duration}</td>
                                    </tr>
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
