import PropTypes from 'prop-types';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function WorkoutCard({ workoutProp }) {

    WorkoutCard.propTypes = {
        workoutProp: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired

        })
    }

    const { _id, name, duration, status } = workoutProp;

    return (
        <Col xs={12}>
            <Card className="workout-card text-center shadow-lg mx-3 my-3 border-0 rounded-0 " 
                style={{ width: "100%", minHeight: "200px", border: "1px solid #ddd", borderRadius: "10px" }}>
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="text-dark text-decoration-none">
                        {name}
                    </Card.Title>
                    <Card.Text className="">Duration: {duration} mins</Card.Text>
                    <Card.Text className="">Status: {status}</Card.Text>
                </Card.Body>
                
            </Card>
        </Col>
    )
}
