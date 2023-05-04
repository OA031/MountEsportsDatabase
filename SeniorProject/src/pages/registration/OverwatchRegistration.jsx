import {useState} from "react";
import {ToastContainer} from "react-toastify";
import {Button, Form} from "react-bootstrap";
import ToastMessages from "../../components/common/ToastMessages";
import OverwatchService from "../../services/OverwatchService";

const OverwatchRegistration = () => {
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
        Player4: "",
        Player5: "",
        Player1Character: "",
        Player2Character: "",
        Player3Character: "",
        Player4Character: "",
        Player5Character: "",
        Opponent1Character: "",
        Opponent2Character: "",
        Opponent3Character: "",
        Opponent4Character: "",
        Opponent5Character: "",
        MountScore: "",
        OpponentScore: "",
        Map: "",
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

        OverwatchService.overwatchRegistration(formInputs).then(async (response) => {
            if (response.status === 200) {
                await ToastMessages("success", "Registration Successful!").then(
                    () => {
                        // clear form
                        setFormInputs({
                            OppSchool: "",
                            Player1: "",
                            Player2: "",
                            Player3: "",
                            Player4: "",
                            Player5: "",
                            Player1Character: "",
                            Player2Character: "",
                            Player3Character: "",
                            Player4Character: "",
                            Player5Character: "",
                            Opponent1Character: "",
                            Opponent2Character: "",
                            Opponent3Character: "",
                            Opponent4Character: "",
                            Opponent5Character: "",
                            MountScore: "",
                            OpponentScore: "",
                            Map: "",
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
            <div className="d-flex justify-content-center align-items-center">
                <div className="p-4 rounded" style={divStyle}>
                    <h1 className="text-center fw-bold" style={titleStyle}>
                        <span style={spanStyle}>OverWatch Registration</span>
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <br/>
                        <Form.Group className="mb-3" controlId="OppSchool">
                            <Form.Control className={"form-control"} type="text" name="OppSchool"
                                          value={formInputs.OppSchool} onChange={handleInputChange}
                                          placeholder="Enter Opponent School"required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="player1">
                            <Form.Control className={"form-control"} type="text" name="Player1"
                                          value={formInputs.Player1} onChange={handleInputChange}
                                          placeholder="Enter Player 1" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="player2">
                            <Form.Control className={"form-control"} type="text" name="Player2"
                                          value={formInputs.Player2} onChange={handleInputChange}
                                          placeholder="Enter Player 2" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="player3">
                            <Form.Control className={"form-control"} type="text" name="Player3"
                                          value={formInputs.Player3} onChange={handleInputChange}
                                          placeholder="Enter Player 3" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="player4">
                            <Form.Control className={"form-control"} type="text" name="Player4"
                                          value={formInputs.Player4} onChange={handleInputChange}
                                          placeholder="Enter Player 4" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="player5">
                            <Form.Control className={"form-control"} type="text" name="Player5"
                                          value={formInputs.Player5} onChange={handleInputChange}
                                          placeholder="Enter Player 5" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="player1Character">
                            <Form.Control className={"form-control"} type="text" name="Player1Character"
                                          value={formInputs.Player1Character} onChange={handleInputChange}
                                          placeholder="Enter Player 1 Character" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="player2Character">
                            <Form.Control className={"form-control"} type="text" name="Player2Character"
                                          value={formInputs.Player2Character} onChange={handleInputChange}
                                          placeholder="Enter Player 2 Character" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="player3Character">
                            <Form.Control className={"form-control"} type="text" name="Player3Character"
                                          value={formInputs.Player3Character} onChange={handleInputChange}
                                          placeholder="Enter Player 3 Character" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="player4Character">
                            <Form.Control className={"form-control"} type="text" name="Player4Character"
                                          value={formInputs.Player4Character} onChange={handleInputChange}
                                          placeholder="Enter Player 4 Character" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="player5Character">
                            <Form.Control className={"form-control"} type="text" name="Player5Character"
                                          value={formInputs.Player5Character} onChange={handleInputChange}
                                          placeholder="Enter Player 5 Character" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="opponent1Character">
                            <Form.Control className={"form-control"} type="text" name="Opponent1Character"
                                          value={formInputs.Opponent1Character} onChange={handleInputChange}
                                          placeholder="Enter Opponent 1 Character" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="opponent2Character">
                            <Form.Control className={"form-control"} type="text" name="Opponent2Character"
                                          value={formInputs.Opponent2Character} onChange={handleInputChange}
                                          placeholder="Enter Opponent 2 Character" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="opponent3Character">
                            <Form.Control className={"form-control"} type="text" name="Opponent3Character"
                                          value={formInputs.Opponent3Character} onChange={handleInputChange}
                                          placeholder="Enter Opponent 3 Character" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="opponent4Character">
                            <Form.Control className={"form-control"} type="text" name="Opponent4Character"
                                          value={formInputs.Opponent4Character} onChange={handleInputChange}
                                          placeholder="Enter Opponent 4 Character" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="opponent5Character">
                            <Form.Control className={"form-control"} type="text" name="Opponent5Character"
                                          value={formInputs.Opponent5Character} onChange={handleInputChange}
                                          placeholder="Enter Opponent 5 Character" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="MountScore">
                            <Form.Control className={"form-control"} type="number" name="MountScore"
                                          value={formInputs.MountScore} onChange={handleInputChange}
                                          placeholder="Enter Mount Score" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="OpponentScore">
                            <Form.Control className={"form-control"} type="number" name="OpponentScore"
                                          value={formInputs.OpponentScore} onChange={handleInputChange}
                                          placeholder="Enter Opponent Score" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="map">
                            <Form.Control className={"form-control"} type="text" name="Map" value={formInputs.Map}
                                          onChange={handleInputChange} placeholder="Enter Map" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Result">
                            <Form.Control className={"form-control"} type="text" name="Result" value={formInputs.Result}
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

export default OverwatchRegistration;
