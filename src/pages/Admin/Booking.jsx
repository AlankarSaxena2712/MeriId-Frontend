import React from "react";
import AdminHeader from "../../components/AdminHeader";
import AdminNavbar from "../../components/AdminNavbar";
import BookingCard from "../../components/BookingCard";

const Booking = () => {
	return (
        <div>
            <AdminHeader />
            <div className="flex flex-wrap">
                <BookingCard />
                <BookingCard />
                <BookingCard />
                <BookingCard />
                <BookingCard />
                <BookingCard />
            </div>
            <AdminNavbar />
        </div>
	);
};

export default Booking;
