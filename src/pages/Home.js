import Banner from "../components/Banner";

import { Container } from "react-bootstrap";



export default function Home(){
	const data = {
		title: "Grit & Co.",
		content: "You Workout Tracker.",
		destination: "/workouts",
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