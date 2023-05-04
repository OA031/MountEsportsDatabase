import React, {useEffect, useState} from "react";
import RocketService from "../../services/RocketService";
import {ToastContainer} from "react-toastify";
import {Button, Form, Table} from "react-bootstrap";
import {TbRefresh} from "react-icons/tb";
import ValorantService from "../../services/ValorantService";
import OverwatchService from "../../services/OverwatchService";

const OverWatchList = () => {
    const [loading, setLoading] = useState(false);
    const [players, setPlayers] = useState([]);
    const [sortMode, setSortMode] = useState('default');
    const [originalPlayers, setOriginalPlayers] = useState([]);

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

    useEffect(() => {
        setLoading(true);
    }, []);

    const handleRefresh = () => {
        OverwatchService.getOverwatchList().then((response) => {
            if (response.status === 200) {
                setPlayers(response.data);
                setSortMode('Default');
            } else {
                console.log("Error");
            }
        });
    }

    useEffect(() => {
        OverwatchService.getOverwatchList().then((response) => {
            if (response.status === 200) {
                setPlayers(response.data);
            } else {
                console.log("Error");
            }
        });
    }, []);

    useEffect(() => {
        if (sortMode === 'Default') {
            handleRefresh();
        }

        if (sortMode === 'Mountaineer Score') {
            let copyPlayers = [...players];
            let sortedPlayers = players.sort((a, b) => (a.MountScore < b.MountScore) ? 1 : -1);
            setPlayers(sortedPlayers);
            setOriginalPlayers(copyPlayers);
        }

        if (sortMode === 'Opponent Score') {
            let copyPlayers = [...players];
            let sortedPlayers = players.sort((a, b) => (a.OpponentScore < b.OpponentScore) ? 1 : -1);
            setPlayers(sortedPlayers);
            setOriginalPlayers(copyPlayers);
        }

        if (sortMode === 'Result') {
            let copyPlayers = [...players];
            let sortedPlayers = players.sort((a, b) => (a.Result < b.Result) ? 1 : -1);
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
                        <span style={spanStyle}>OverWatch Players</span>
                    </h1>

                    <div className="row">
                        <div className="col d-flex justify-content-start">
                            <Form.Control style={{width: '160px'}}
                                          as="select"
                                          onChange={event => {
                                              setSortMode(event.target.value)
                                          }}
                                          value={sortMode}>
                                <option>Default</option>
                                <option>Mountaineer Score</option>
                                <option>Opponent Score</option>
                                <option>Result</option>
                            </Form.Control>
                        </div>

                        <div className="col d-flex justify-content-end">
                            <Button onClick={handleRefresh} variant="warning" className="align-self-center">
                                <TbRefresh/>
                                &nbsp;Refresh
                            </Button>
                        </div>
                    </div>
                    <br/>

                    <div className="table-responsive">
                        <Table striped bordered hover size="sm" variant="dark">
                            <thead>
                            <tr>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Opponent School</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Player 1</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Player 2</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Player 3</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Player 4</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Player 5</th>

                                <th className={"fw-bold"} style={{padding: "15px"}}>Player 1 Character</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Player 2 Character</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Player 3 Character</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Player 4 Character</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Player 5 Character</th>

                                <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 1 Character</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 2 Character</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 3 Character</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 4 Character</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 5 Character</th>

                                <th className={"fw-bold"} style={{padding: "15px"}}>Mountaineer Score</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Opponent Score</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Map</th>
                                <th className={"fw-bold"} style={{padding: "15px"}}>Result</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                players.map((val, index, player) => (
                                    <tr key={index}>
                                        <td>{val.OppSchool}</td>
                                        <td>{val.Player1}</td>
                                        <td>{val.Player2}</td>
                                        <td>{val.Player3}</td>
                                        <td>{val.Player4}</td>
                                        <td>{val.Player5}</td>

                                        <td>{val.Player1Character}</td>
                                        <td>{val.Player2Character}</td>
                                        <td>{val.Player3Character}</td>
                                        <td>{val.Player4Character}</td>
                                        <td>{val.Player5Character}</td>

                                        <td>{val.Opponent1Character}</td>
                                        <td>{val.Opponent2Character}</td>
                                        <td>{val.Opponent3Character}</td>
                                        <td>{val.Opponent4Character}</td>
                                        <td>{val.Opponent5Character}</td>

                                        <td>{val.MountScore}</td>
                                        <td>{val.OpponentScore}</td>
                                        <td>{val.Map}</td>
                                        <td>{val.Result}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverWatchList;
