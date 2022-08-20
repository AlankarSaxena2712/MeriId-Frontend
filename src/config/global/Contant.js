import axios from "axios";

const GLOBAL_URL = "https://meriid.herokuapp.com/api"

export {GLOBAL_URL}

const setError = () => {}



const getBookings = async () => {
    await axios
        .get(`${GLOBAL_URL}/auth/profile`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        })
        .then(async (response) => {
            let data = [await response.data.data];
        })
        .catch(async (error) => {
            setError(await error);
        });
};



const getOperatorOfForBookingByPincode = async () => {
    await axios
        .get(`${GLOBAL_URL}/auth/profile`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        })
        .then(async (response) => {
            let data = [await response.data.data];
        })
        .catch(async (error) => {
            setError(await error);
        });
};



const getTimeSlotOfOperator = async () => {
    await axios
        .get(`${GLOBAL_URL}/auth/profile`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        })
        .then(async (response) => {
            let data = [await response.data.data];
        })
        .catch(async (error) => {
            setError(await error);
        });
};

const feedBackOfOperator = async () => {
    // pass operartor id
    await axios
        .get(`${GLOBAL_URL}/general/feedback?operator=`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        })
        .then(async (response) => {
            let data = [await response.data.data];
        })
        .catch(async (error) => {
            setError(await error);
        });
};



const getAttendanceOfOperator = async () => {
    await axios
        .get(`${GLOBAL_URL}/auth/feedback`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        })
        .then(async (response) => {
            let data = [await response.data.data];
        })
        .catch(async (error) => {
            setError(await error);
        });
};


const submitBooking = async () => {
    await axios
        .get(`${GLOBAL_URL}/auth/feedback`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        })
        .then(async (response) => {
            let data = [await response.data.data];
        })
        .catch(async (error) => {
            setError(await error);
        });
};


