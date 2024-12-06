const user = {
    id: 1,
    name: "Roger Curtis",
    age: 36,
    profileImage: "/media/user-image2.jpg",
    vitals: [
        {
            logo: "/media/heart-rate.jpg",
            title: "Heart Rate",
            value: "80 bpm",
        },
        {
            logo: "/media/body-temperature.jpg",
            title: "Body Temperature",
            value: "36.5°C",
        },
        {
            logo: "/media/glucose.jpg",
            title: "Glucose",
            value: "100 mg/dl",
        },
    ],
    information: {
        gender: "Male",
        bloodType: "O+ (Positive)",
        allergies: ["Milk", "Penicillin"],
        diseases: ["Diabetes", "Blood Disorders"],
        height: "1.78m",
        weight: "65 kg",
        patientId: "208898786",
        lastVisit: "25th October 2019",
    },
    testReports: [
        { testName: "CT Scan - Full Body", date: "12th February 2020", id: "first" },
        { testName: "Creatine Kinase T", date: "12th February 2020", id: "second" },
        { testName: "Eye Fluorescein Test", date: "12th February 2020", id: "third" },
    ],
    prescriptions: [
        { name: "Heart Diseases", date: "25th October 2019", duration: "3 months" },
        { name: "Skin Care", date: "8th August 2019", duration: "2 months" },
    ],
};

export default user;
