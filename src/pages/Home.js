import Banner from "../components/Banner";

import { Container } from "react-bootstrap";



export default function Home(){
	const data = {
		title: "Welcome to FitSync Workouts",
		content: "Your Workout Tracker!",
		destination: "/login",
		buttonLabel: "Login to get Started"
	}

	return(
		<>	
			<Container className="mb-5">
			<Banner data={data} />

			</Container>
		</>
	)
}