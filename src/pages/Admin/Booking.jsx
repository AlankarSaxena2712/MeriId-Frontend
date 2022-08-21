import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import AdminNavbar from "../../components/AdminNavbar";
import BookingCard from "../../components/BookingCard";
import { GLOBAL_URL } from "../../config/global/Contant";

const Booking = () => {
	const [bookings, setBookings] = useState([]);
	const [loading, setLoading] = useState(true);

	const getBookings = async () => {
		await axios
			.get(`${GLOBAL_URL}/booking/booking/admin`, {
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			})
			.then((res) => {
				setBookings(res.data.data);
				console.log(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getBookings();
	}, []);

	return (
		<div>
			<AdminHeader />
			<h1 className="text-4xl font-bold pt-10 pb-10 text-center text-black">
				Bookings
			</h1>
			<div className="flex flex-wrap px-36 mb-32 justify-center gap-0">
				{loading ? (
					<div className="items-center justify-center h-screen pt-20">
                        <div className="loader"></div>
					</div>
				) : (
					bookings.map((booking) => {
						return (
							<BookingCard key={booking.uuid} booking={booking} />
						);
					})
				)}
			</div>

			<AdminNavbar />
		</div>
	);
};

export default Booking;
