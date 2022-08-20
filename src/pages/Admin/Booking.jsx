import React from "react";
import AdminHeader from "../../components/AdminHeader";
import AdminNavbar from "../../components/AdminNavbar";
import BookingCard from "../../components/BookingCard";

const Booking = () => {
	return (
        <div>
            <AdminHeader />
            <h1 className="text-4xl font-bold pt-10 pb-10 text-center text-black">Booking</h1>
            <div className="flex flex-wrap px-24 pb-12 ">       
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
