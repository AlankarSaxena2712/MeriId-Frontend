import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = () => {
	return (
		<div className="absolute top-0 left-0 flex justify-center items-center w-4 h-4 bg-orange-500 rounded-full">
			<div className="w-2 h-2 bg-white rounded-full"></div>
		</div>
	);
};

const GoogleMap = () => {
	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 16,
	};

	return (
		<div style={{"height": "600px", "width": "1500px"}}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyC71uktesLZfNFqlMcKRgJFdNiyZoug9o0",
				}}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<Marker
					lat={defaultProps.center.lat}
					lng={defaultProps.center.lng}
					text="My Marker"
				/>
			</GoogleMapReact>
		</div>
	);
};

export default GoogleMap;
