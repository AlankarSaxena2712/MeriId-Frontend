import React, { useState } from "react";
import Ckeditor from "react-ckeditor-component/lib/ckeditor";
import AdminHeader from "../../components/Admin/AdminHeader";
import AdminNavbar from "../../components/Admin/AdminNavbar";

const AddGuidelines = () => {
	const [notification, setNotification] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setNotification("")
	}
	return (
    <>
      <AdminHeader />
		<div className="px-32 pt-16">
			<h1 className="text-3xl font-bold p-4 text-center">
				Add GuideLines
			</h1>
			<div class="w-full">
				<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<div class="mb-4">
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							type="text"
							placeholder="Role"
						/>
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-first-name"
						>
							GuideLine
						</label>
						<Ckeditor activeClass="p10" content={notification} />
					</div>
					<button
						class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
						type="button"
						onClick={handleSubmit}
					>
						post
					</button>
				</form>
			</div>
		</div>
      <AdminNavbar />
    </>
	);
};

export default AddGuidelines;
