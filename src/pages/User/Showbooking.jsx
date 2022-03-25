import react  from "react";
import { Link } from "react-router-dom";

const Showbooking = () => {
    return <div > 
        <h1 className="flex justify-center items-center text-4xl font-bold h-full">Show Active Bookings</h1>
        
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2">Booking Id</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Booking Date</th>
                    <th className="px-4 py-2">Booking Time</th>
                    <th className="px-4 py-2">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">12/12/2020</td>
                    <td className="border px-4 py-2">12:00 PM</td>
                    <td className="border px-4 py-2">Active</td>
                </tr>

                <tr>    
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">12/12/2020</td>
                    <td className="border px-4 py-2">12:00 PM</td>
                    <td className="border px-4 py-2">Active</td>
                </tr>

                <tr>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">12/12/2020</td>
                    <td className="border px-4 py-2">12:00 PM</td>
                    <td className="border px-4 py-2">Active</td>
                </tr>
            </tbody>
        </table>
         </div>


}

export default Showbooking;