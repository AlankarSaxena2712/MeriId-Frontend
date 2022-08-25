import React , {useState , useEffect} from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import { ReactComponent as Void } from "../static/icons/void.svg";
import { GLOBAL_URL } from "../config/global/Contant";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const Marker = () => {
	return (
		<div className="absolute top-0 left-0 flex justify-center items-center w-8 h-8 bg-orange-500 rounded-full">
			<div className="w-2 h-2 bg-white rounded-full"></div>
		</div>
	);
};


const GoogleMap = ({uuid}) => {

	const [isLoading, setLoading] = useState(true);
	const [noOfCall, setNoOfCall] = useState(0);
	const [google, setGoogle] = useState({
		center: {
			lat: null,
			lng: null,
		},
		zoom: 16,
		status:'absent'
	});
	
	const getMapData = async () => {
		await axios
			.get(
				`${GLOBAL_URL}/auth/operator/location/${uuid}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Token ${localStorage.getItem("token")}`,
					},
				}
			)
			.then(async (response) => {
				let data = response.data.data
				setGoogle({
						center: {
							lat: parseFloat(data.lat),
							lng: parseFloat(data.long),
						},
						zoom: 16,
						status : data.status
			});
			})
			.catch(async (error) => {
				if (noOfCall < 2) {
					toast.error("Something went wrong! Please try again.");
				}
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		setNoOfCall(noOfCall + 1);
		getMapData();
		const interval = setInterval(() => {
			getMapData();
		} , 15000);
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		isLoading ? (
			<div className="flex justify-center items-center h-full w-full mt-36">
				<Spinner />
			</div>
		) :
		google.status === 'present' && google.center.lat !== null && google.center.lng !== null ? 
		<div style={{"height": "600px", "width": "1500px"}} className="container px-5 mx-auto">
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyC71uktesLZfNFqlMcKRgJFdNiyZoug9o0",
				}}
				defaultCenter={google.center}
				defaultZoom={google.zoom}
			>
				<Marker
					lat={google.center.lat}
					lng={google.center.lng}
					text="My Marker"
				/>
			</GoogleMapReact>
		</div> 
		:
		<>
		<div className="flex flex-col gap-8 justify-center items-center h-full w-full mt-12">
						<Void />
						<div className=" text-2xl font-bold "> Operator is Inactive Right Now </div>
		</div>
		</>
	);

};

export default GoogleMap;
