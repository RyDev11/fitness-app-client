import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import WorkoutCard from "../components/WorkoutCard";


export default function Workouts() {
  const { user } = useContext(UserContext);
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Function to fetch all workouts
  const fetchData = async () => {
    setLoading(true);
    setError("");

    const fetchUrl = `${process.env.REACT_APP_API_BASE_URL}/workouts/getMyWorkouts`;

    try {
      const res = await fetch(fetchUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await res.json();
      console.log("Fetched Data:", data); // Debugging output

      if (Array.isArray(data)) {
        setWorkouts(data);
      } else if (data.workouts && Array.isArray(data.workouts)) {
        setWorkouts(data.workouts);
      } else {
        setWorkouts([]); // No workouts available
        setError(data.message || "No workouts found.");
      }
    } catch (error) {
      console.error("Error fetching workouts:", error);
      setWorkouts([]);
      setError("Failed to load workouts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <Container className="my-4 text-center">
      <h1>Workouts</h1>

      {loading ? (
        <p>Loading workouts...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : workouts.length > 0 ? (
        <Row className="g-4 mt-4">
          {workouts.map((workout) => (
            <Col key={workout._id} xs={12} sm={6} md={4}>
              <WorkoutCard workoutProp={workout} />
            </Col>
          ))}
        </Row>
      ) : (
        <p>No workouts available.</p>
      )}
    </Container>
  );
}
