import {useEffect, useState} from "react";
import ESportService from "../../services/ESportService";
import {ToastContainer} from "react-toastify";
import {Button, Form, Table} from "react-bootstrap";
import {TbRefresh} from 'react-icons/tb';

const ViewPlayers = () => {
    const divStyle = {
        minWidth: "300px",
        maxWidth: "800px",
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

    const [players, setPlayers] = useState([]);
    const [sortMode, setSortMode] = useState('default');
    const [originalPlayers, setOriginalPlayers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    const handleRefresh = () => {
        ESportService.getEsportsPlayers().then((response) => {
            if (response.status === 200) {
                setPlayers(response.data);
                setSortMode('Default');
            } else {
                console.log("Error");
            }
        });
    }

    useEffect(() => {
        ESportService.getEsportsPlayers().then((response) => {
            if (response.status === 200) {
                setPlayers(response.data);
            } else {
                console.log("Error");
            }
        });
    }, []);

    useEffect(() => {
        if (sortMode === 'Default') {
            setPlayers(originalPlayers);
        }

        if (sortMode === 'ESport') {
            let copyPlayers = [...players];
            let sortedPlayers = players.sort((a, b) => (a.Esport > b.Esport) ? 1 : -1);
            setPlayers(sortedPlayers);
            setOriginalPlayers(copyPlayers);
        }
    }, [sortMode]);


    return (
        <div className="container">
            <ToastContainer/>
            <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                <div className="p-4 rounded" style={divStyle}>
                    <h1 className="text-center fw-bold" style={titleStyle}>
                        <span style={spanStyle}>ESport Players</span>
                    </h1>

                    <div className="row">
                        <div className="col d-flex justify-content-start">
                            <Form.Control style={{width: '100px'}}
                                          as="select"
                                          onChange={event => {
                                              setSortMode(event.target.value)
                                          }}
                                          value={sortMode}>
                                <option>Default</option>
                                <option>ESport</option>
                            </Form.Control>
                        </div>

                        <div className="col d-flex justify-content-end">
                            <Button onClick={handleRefresh} variant="warning" className="align-self-center">
                                <TbRefresh/>
                                &nbsp;Refresh
                            </Button>
                        </div>
                    </div>

                    {/*<br/><Button onClick={handleRefresh} variant="warning"><TbRefresh/>&nbsp;Refresh</Button> <br/><br/>*/}
                    <br/>


                    <Table striped bordered hover size="sm" variant="dark">
                        <thead>
                        <tr>
                            <th className={"fw-bold"} style={{padding: "15px"}}>Name</th>
                            <th className={"fw-bold"} style={{padding: "15px"}}>Gamers Tag</th>
                            <th className={"fw-bold"} style={{padding: "15px"}}>ESport</th>
                            <th className={"fw-bold"} style={{padding: "15px"}}>Main</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            players.map((player, index, val) => (
                                <tr key={index}>
                                    <td>{player.Name}</td>
                                    <td>{player.Gamerstag}</td>
                                    <td>{player.Esport}</td>
                                    <td>{player.Main}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
export default ViewPlayers;
