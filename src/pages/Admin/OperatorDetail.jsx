import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import Attendance from "../../components/Attendance";
import Feedback from "../../components/Feedback";
import GivenTask from "../../components/GivenTask";
import GoogleMap from "../../components/GoogleMap";
import Spinner from "../../components/Spinner";
import { GLOBAL_URL } from "../../config/global/Contant";
import Email from "../../static/img/email.png";
import Phone from "../../static/img/phone.png";
import User from "../../static/img/user.png";

const OperatorDetail = () => {
	const { uuid } = useParams();

	const [operator, setOperator] = useState(null);
	const [tabSelected, setTabSelected] = useState(0);
	const [locationOpen, setLocationOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();


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
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setLoading(false);
				});
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="mb-28">
			<AdminHeader />
			<div className="container px-5 mx-auto">
                <Link to="/admin/operator/list">
                    <button className="btn btn-primary btn-sm bg-orange-500 border-orange-500 hover:bg-orange-600 hover:border-orange-600 flex gap-2" onClick={() => navigate}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        Back to home
                    </button>
                </Link>
			</div>
   
			<div className="bg-slate-100 p-5 m-5 flex justify-between rounded mt-6 container px-5 mx-auto">		
            {
                loading ?
                <div class="flex justify-center items-center h-full w-full ">
                        <Spinner />
                </div>
                 :  
            	<div>
					<div className="flex gap-5">
						<img src={User} alt="email" className="h-6 w-6" />
						<p className="text-xl font-bold">{operator?.name}</p>
					</div>
					<div className="flex gap-5">
						<img src={Email} alt="email" className="h-6 w-6" />
						<p className="text-xl">{operator?.email}</p>
					</div>
					<div className="flex gap-5">
						<img src={Phone} alt="phone" className="h-6 w-6" />
						<p className="text-xl">{operator?.phone_number}</p>
					</div>
				</div>
            }
				<div className="self-end">
					<button
						className="btn btn-primary bg-orange-500 border-orange-500 hover:bg-orange-600 hover:border-orange-600"
						onClick={() => setLocationOpen(!locationOpen)}
					>
						{locationOpen ? "Close Location" : "Live Location 🌍️"}
					</button>
				</div>
			</div>
			{locationOpen ? (
				<div className="flex justify-center items-center">
					<GoogleMap uuid={uuid} />
				</div>
			) : (
				<>
					<div className="tabs tabs-boxed flex justify-center gap-10 bg-meriWhite">
						<span
							onClick={() => setTabSelected(0)}
							className={`tab tab-lg text-2xl ${
								tabSelected === 0 ? "text-white rounded-md bg-orange-500 border-orange-500 hover:bg-orange-600 hover:border-orange-600" : ""
							}`}
						>
							Given Task
						</span>
						<span
							onClick={() => setTabSelected(1)}
							className={`tab tab-lg text-2xl ${
								tabSelected === 1 ? "text-white rounded-md bg-orange-500 border-orange-500 hover:bg-orange-600 hover:border-orange-600" : ""
							}`}
						>
							Attendance
						</span>
						<span
							onClick={() => setTabSelected(2)}
							className={`tab tab-lg text-2xl ${
								tabSelected === 2 ? "text-white rounded-md bg-orange-500 border-orange-500 hover:bg-orange-600 hover:border-orange-600" : ""
							}`}
						>
							Feedback
						</span>
					</div>
					<div className="">
						{tabSelected === 0 && (
							<div className="p-5">
								<GivenTask uuid={uuid} />
							</div>
						)}

						{tabSelected === 1 && (
							<div className="p-5">
								<Attendance uuid ={uuid} />
							</div>
						)}

						{tabSelected === 2 && (
							<div className="p-5">
								<Feedback uuid ={uuid} />
							</div>
						
                        )}
					</div>
				</>
			)}
			{/* <AdminNavbar /> */}
		</div>
	);
};

export default OperatorDetail;
