import React, {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from "react";
import axios from "axios";
import useToken from "../hooks/useToken";
import { initialState, reducer } from "../hooks/useReducer";
import { GLOBAL_URL } from "../global/Contant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [error, setError] = useState(null);
	const { saveToken } = useToken();
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(true);
	const [loginLoading, setLoginLoading] = useState(false);

	const navigate = useNavigate();

	const getUserData = async () => {
		await axios
			.get(`${GLOBAL_URL}/auth/profile`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			})
			.then(async (response) => {
				let data = [await response.data.data];
				setUser(data[0]);
				localStorage.setItem("user", JSON.stringify(data[0]));
			})
			.catch(async (error) => {
				toast.error("Something went wrong! Please try again.");
				setError(await error);
			});
	};

	const adminLogin = async (email, password) => {
		setLoginLoading(true);
		await axios
			.post(
				`${GLOBAL_URL}/auth/login/admin`,
				{
					email,
					password,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((res) => {
				localStorage.setItem("token", res.data.data.token);
			})
			.then(() => {
				getUserData();
			})
			.then(() => {
				navigate("/admin/operator/list");
			})
			.catch((err) => {
				toast.error("Something went wrong! Please try again.");
				setError("Something went wrong");
			})
			.finally(() => {
				setLoginLoading(false);
			});
	};

	const logout = async () => {
		saveToken("");
		dispatch({ type: "USER", payload: false });
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		navigate("/admin/login");
	};

	useEffect(() => {
		const fun = async () => {
			setLoading(true);
			if (
				localStorage.getItem("token") !== "" &&
				localStorage.getItem("user") !== ""
			) {
				dispatch({ type: "USER", payload: true });
			} else {
				dispatch({ type: "USER", payload: false });
			}
			setLoading(false);
		};
		fun();
	}, []);

	const [state, dispatch] = useReducer(reducer, initialState);

	const memoedValue = {
		logout,
		user,
		loading,
		error,
		state,
		dispatch,
		getUserData,
		adminLogin,
		loginLoading,
	};

	return (
		<AuthContext.Provider value={memoedValue}>
			{loading ? <Spinner /> : !loading && children}
		</AuthContext.Provider>
	);
};

export default function useAuth() {
	return useContext(AuthContext);
}
