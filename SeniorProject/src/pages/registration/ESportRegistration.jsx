import {useState} from "react";
import {Form, Button} from "react-bootstrap";
import ESportService from "../../services/ESportService";
import {ToastContainer} from "react-toastify";
import ToastMessages from "../../components/common/ToastMessages";
import 'react-toastify/dist/ReactToastify.css';
import ViewPlayers from "../players/ViewPlayers";
import DropDownRegistrationSelect from "./DropDownRegistrationSelect";
import SearchByPlayer from "../search/SearchByPlayer";

const ESportRegistration = () => {

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
        Name: "",
        Gamerstag: "",
        Esport: "",
        Main: "",
    });

    const handleInputChange = (event) => {
        setFormInputs({
            ...formInputs,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        ESportService.esportsRegistration(formInputs).then(async (response) => {
            if (response.status === 200) {
                await ToastMessages("success", "Registration Successful!").then(
                    () => {
                        // clear form
                        setFormInputs({
                            Name: "",
                            Gamerstag: "",
                            Esport: "",
                            Main: "",
                        });
                    }
                );
            } else {
                await ToastMessages("error", "Registration Failed!");
            }
        });
    };

    return (
        <div className="container">
            <ToastContainer/>
            <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                <div className="p-4 rounded" style={divStyle}>
                    <h1 className="text-center fw-bold" style={titleStyle}>
                        <span style={spanStyle}>ESport Registration</span>
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <br/>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Enter name" name="Name" value={formInputs.Name}
                                          onChange={handleInputChange} required={true}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicGamerstag">
                            <Form.Control type="text" placeholder="Enter gamerstag" name="Gamerstag"
                                          value={formInputs.Gamerstag} onChange={handleInputChange} required={true}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEsport">
                            <Form.Control type="text" placeholder="Enter esport" name="Esport" value={formInputs.Esport}
                                          onChange={handleInputChange} required={true}/>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicMain">
                            <Form.Control type="text" placeholder="Enter main" name="Main" value={formInputs.Main}
                                          onChange={handleInputChange} required={true}/>
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" className="w-50" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>

            {/*Get ESport Players*/}
            <ViewPlayers/>

            <br/>
            {/*Get Other Registration Forms*/}
            <DropDownRegistrationSelect/>

            <SearchByPlayer/>
        </div>
    );
};

export default ESportRegistration;
