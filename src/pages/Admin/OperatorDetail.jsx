import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import GivenTask from "../../components/Admin/GivenTask";
import GoogleMap from "../../components/Admin/GoogleMap";
import { GLOBAL_URL } from "../../config/global/Contant";

const OperatorDetail = () => {
	
    const {uuid} = useParams();

    const [operator, setOperator] = useState(null);
    const [tabSelected, setTabSelected] = useState(0);
    const [locationOpen, setLocationOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get(`${GLOBAL_URL}/auth/operators/${uuid}`, {
                    headers: {
                        Authorization: `Token ${localStorage.getItem("token")}`,
                    },
                })
                .then((res) => {
                    setOperator(res.data.data);
                }).catch((err) => {
                    console.log(err);
                }).finally(() => {
                    // setLoading(false);
                }
            );
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
		<div className="mb-28">
			<AdminHeader />
			<div className="bg-white p-5 m-5 flex justify-between rounded">
                <div>
                    <p className="text-3xl font-bold">{operator?.name}</p>
                    <p className="text-xl">{operator?.email}</p>
                    <p className="text-xl">{operator?.phone_number}</p>
                </div>
                <div className="self-end">
                    <button className="btn btn-primary btn-sm" onClick={() => setLocationOpen(!locationOpen)}>
                        {
                            locationOpen ? "Close Location" : "Live Location 🌍️"
                        }
                    </button>
                </div>
            </div>
            {
                locationOpen ? (
                    <div className="flex justify-center items-center">
                        <GoogleMap />
                    </div>
                ) : (
                    <>
                        <div className="tabs tabs-boxed flex justify-center gap-10 bg-meriCreme">
                            <span onClick={() => setTabSelected(0)} className={`tab tab-lg text-2xl ${tabSelected === 0 ? "tab-active" : ""}`}>Given Task</span> 
                            <span onClick={() => setTabSelected(1)} className={`tab tab-lg text-2xl ${tabSelected === 1 ? "tab-active" : ""}`}>Attendance</span> 
                            <span onClick={() => setTabSelected(2)} className={`tab tab-lg text-2xl ${tabSelected === 2 ? "tab-active" : ""}`}>Feedback</span>
                        </div>
                        <div className="">
                            {tabSelected === 0 && <div className="p-5">
                                <GivenTask />
                            </div>}
                            {tabSelected === 1 && <div className="p-5">
                                <p className="text-2xl font-bold">Attendance</p>
                                <p className="text-xl">{operator?.attendance}</p>
                            </div>}
                            {tabSelected === 2 && <div className="p-5">
                                <p className="text-2xl font-bold">Feedback</p>
                                <p className="text-xl">{operator?.feedback}</p>
                            </div>}
                        </div>
                    </>
                )
            }
			<AdminNavbar />
		</div>
	);
};

export default OperatorDetail;
