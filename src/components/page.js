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
                <div className="right-data"></div>
            </div>
        </div>
    );
}

export default Page
