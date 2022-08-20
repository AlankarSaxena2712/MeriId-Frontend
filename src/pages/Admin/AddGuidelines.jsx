import React, { useState , useEffect } from "react";
import AdminHeader from "../../components/Admin/AdminHeader";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import axios from "axios";
import { GLOBAL_URL } from "../../config/global/Contant";
import gif from '../../static/gif/guideline.gif'
import { ReactComponent as Loader } from "../../static/icons/loader.svg";
import Parser from 'html-react-parser';

const AddGuidelines = () => {

	const [guidelines, setGudelines] = useState("");
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`${GLOBAL_URL}/general/guidelines?role=admin`)
				.then((res) => {
					console.log(res.data.data[0]['guideline']);
					setGudelines(res.data.data[0]['guideline']);
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setLoading(false);
				});
		};
		fetchData();
	}, []);


	return (
    <>
      <AdminHeader />
	  {
	  	loading ?   
		  <div className="flex items-center justify-center h-screen">
					 <Loader />
		  </div>
		  :
			<div className="px-32 pt-16 bg-white   justify-center">
				<h1 className="text-3xl font-bold p-4 text-center text-black ">
					Guidelines
				</h1>		
				<div className="flex">
					<div class="py-12 pr-32"> <img src={gif} alt="loading..." className="max-w-none h-96"/> </div>
  					<div class="py-12 flex-2 text-gray-600 font-normal text-md"> 
					  {Parser(guidelines)}
					</div>
				</div>
		</div> 
	}
      <AdminNavbar />
    </>

	);
};

export default AddGuidelines;
