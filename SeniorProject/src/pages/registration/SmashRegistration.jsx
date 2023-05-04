import {useState} from "react";
import SmashService from "../../services/SmashService";
import ToastMessages from "../../components/common/ToastMessages";
import {ToastContainer} from "react-toastify";
import {Button, Form} from "react-bootstrap";

const SmashRegistration = () => {
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
        Player: "",
        PlayerCharacter: "",
        OpponentCharacter: "",
        PlayerStocks: "",
        OpponentStocks: "",
        Stage: "",
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

        SmashService.smashRegistration(formInputs).then(async (response) => {
            if (response.status === 200) {
                await ToastMessages("success", "Registration Successful!").then(
                    () => {
                        // clear form
                        setFormInputs({
                            OppSchool: "",
                            Player: "",
                            PlayerCharacter: "",
                            OpponentCharacter: "",
                            PlayerStocks: "",
                            OpponentStocks: "",
                            Stage: "",
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
                        <span style={spanStyle}>Smash Registration</span>
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <br/>
                        <Form.Group className="mb-3" controlId="OppSchool">
                            <Form.Control type="text" placeholder="Enter Opponent School" name="OppSchool"
                                          value={formInputs.OppSchool} onChange={handleInputChange}
                                        required={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Player">
                            <Form.Control type="text" placeholder="Enter Player" name="Player"
                                          value={formInputs.Player} onChange={handleInputChange}
                                          required={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="playerCharacter">
                            <Form.Control type="text" placeholder="Enter Player Character" name="PlayerCharacter"
                                          value={formInputs.PlayerCharacter} onChange={handleInputChange}
                                          required={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="opponentCharacter">
                            <Form.Control type="text" placeholder="Enter Opponent Character" name="OpponentCharacter"
                                          value={formInputs.OpponentCharacter} onChange={handleInputChange}
                                          required={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="PlayerStocks">
                            <Form.Control type="number" placeholder="Enter Player Stocks" name="PlayerStocks"
                                          value={formInputs.PlayerStocks} onChange={handleInputChange}
                                          required={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="OpponentStocks">
                            <Form.Control type="number" placeholder="Enter Opponent Stocks" name="OpponentStocks"
                                          value={formInputs.OpponentStocks} onChange={handleInputChange}
                                          required={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Stage">
                            <Form.Control type="text" placeholder="Enter Stage" name="Stage"
                                          value={formInputs.Stage} onChange={handleInputChange}
                                          required={true}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Result">
                            <Form.Control type="text" placeholder="Enter Result" name="Result"
                                          value={formInputs.Result} onChange={handleInputChange}
                                          required={true}/>
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

export default SmashRegistration;
