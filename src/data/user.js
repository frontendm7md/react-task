let user = {
	logo: "/media/logo.jpg",
    userImage: "/media/user-image.jpg",
    userName: "Dr. Alex Hess",
    userImageChange : "/media/user-image2.jpg",
    userNameChange: "Roger Curtis",
    age: "Age: 36",

    userInfo: {
        Gender: "Male",
        BloodType: "O+ (Positive)",
        Allergies: "Milk, Penicilin",
        Diseases: "Diabetes, Blood Disorders",
        Height: "1.78m",
        Weight: "65 kg",
        PatientID: "208898786",
        LastVisit: "25th October 2019"
    },

    healthInfo: {
        heartRate: { value: "80", unit: "bpm" },
        bodyTemperature: { value: "36.5", unit: "°C" },
        glucose: { value: "100", unit: "mg/dl" }
    },

    PrescriptionsData: {
        first: { name: "Heart Diseases", date: "25th October 2019", duration: "3 months" },
        second: { name: "Skin Care", date: "8th August 2019", duration: "2 months" }
    }
};

export default user;