import {useState} from "react";
import RocketService from "../../services/RocketService";
import ToastMessages from "../../components/common/ToastMessages";
import {ToastContainer} from "react-toastify";
import {Button, Form} from "react-bootstrap";

const RocketRegistration = () => {
    const divStyle = {
        minWidth: "300px",
        maxWidth: "500px",
        width: "100%",
        boxShadow: '2px 2px 9px #414141FF',
        margin: '4em',
        padding: '1em',
        backgroundColor: 'rgba(240, 240, 240, 0.5)',
        border: '1px solid #ccc',
        borderRadius: '5px'
    };

    const titleStyle = {
        fontSize: "2.0rem", marginBottom: "1.5rem", position: "relative", display: "inline-block"
    }

    const spanStyle = {
        backgroundColor: "rgba(234,234,234,0.91)", padding: "0 15px 5px", borderRadius: "10px", borderStyle: "solid"
    }

    const [formInputs, setFormInputs] = useState({
        OppSchool: "",
        Player1: "",
        Player2: "",
        Player3: "",
        MountScore: "",
        OppScore: "",
        Result: "",
    });

    const handleInputChange = (event) => {
        setFormInputs({
            ...formInputs,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        RocketService.rocketRegistration(formInputs).then(async (response) => {
            if (response.status === 200) {
                await ToastMessages("success", "Registration Successful!").then(
                    () => {
                        // clear form
                        setFormInputs({
                            OppSchool: "",
                            Player1: "",
                            Player2: "",
                            Player3: "",
                            MountScore: "",
                            OppScore: "",
                            Result: "",
                        });
                    }
                );
            } else {
                await ToastMessages("error", "Registration Failed!");
            }
        });
    }

    return (
        <div className="container">
            <ToastContainer/>
            <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                <div className="p-4 rounded" style={divStyle}>
                    <h1 className="text-center fw-bold" style={titleStyle}>
                        <span style={spanStyle}>Rocket League Registration</span>
                    </h1>

                    <Form onSubmit={handleSubmit}>
                        <br/>
                        <Form.Group className="mb-3" controlId="OppSchool">
                            <Form.Control type="text" name="OppSchool" value={formInputs.OppSchool}
                                          onChange={handleInputChange} placeholder="Enter Opponent School" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Player1">
                            <Form.Control type="text" name="Player1" value={formInputs.Player1}
                                          onChange={handleInputChange} placeholder="Enter Player 1" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Player2">
                            <Form.Control type="text" name="Player2" value={formInputs.Player2}
                                          onChange={handleInputChange} placeholder="Enter Player 2" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Player3">
                            <Form.Control type="text" name="Player3" value={formInputs.Player3}
                                          onChange={handleInputChange} placeholder="Enter Player 3" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="MountScore">
                            <Form.Control type="number" name="MountScore" value={formInputs.MountScore}
                                          onChange={handleInputChange} placeholder="Enter Mountaineer Score" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="OppScore">
                            <Form.Control type="number" name="OppScore" value={formInputs.OppScore}
                                          onChange={handleInputChange} placeholder="Enter Opponent Score" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Result">
                            <Form.Control type="text" name="Result" value={formInputs.Result}
                                          onChange={handleInputChange} placeholder="Enter Result" required/>
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" className="w-50" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default RocketRegistration;
