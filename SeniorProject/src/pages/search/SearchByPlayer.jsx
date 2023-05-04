import React, {useState} from "react";
import {ToastContainer} from "react-toastify";
import {FaSearch} from 'react-icons/fa';
import searchService from "../../services/SearchService";
import {Table} from "react-bootstrap";

const SearchByPlayer = () => {
    const [search, setSearch] = useState("");
    const [rocketGame, setRocketGame] = useState([]);
    const [smashGame, setSmashGame] = useState([]);
    const [valorantGame, setValorantGame] = useState([]);
    const [overwatchGame, setOverwatchGame] = useState([]);

    const divStyle = {
        minWidth: "300px",
        maxWidth: "990px",
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

    const titleStyleSub = {
        marginBottom: "1.5rem", position: "relative", display: "inline-block"
    }

    const spanStyle = {
        backgroundColor: "rgba(234,234,234,0.91)", padding: "0 15px 5px", borderRadius: "10px", borderStyle: "solid"
    }

    const handleSearch = async (e) => {
        e.preventDefault();

        await searchService.getSearchByUser(search)
            .then((response) => {
                if (response.status === 200) {
                    setRocketGame(response.data.rocket_game);
                    setSmashGame(response.data.smash_game);
                    setValorantGame(response.data.valorant_game);
                    setOverwatchGame(response.data.overwatch_game);
                } else {
                    console.log("Error");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <ToastContainer/>
            <div className="d-flex justify-content-center align-items-center">
                <div className="p-4 rounded" style={divStyle}>
                    <h1 className="text-center fw-bold" style={titleStyle}>
                        <span style={spanStyle}>Search By Player</span>
                    </h1>

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control text-center"
                            placeholder="Search by player name"
                            aria-label="Search by player name"
                            aria-describedby="button-addon2"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary btn-warning" type="button"
                                    onClick={handleSearch}>
                                <FaSearch/>
                            </button>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <div>
                        {rocketGame.length > 0 && (
                            <>
                                <h4 className="text-center fw-bold" style={titleStyleSub}>
                                    <span style={spanStyle}>Rocket League Game</span>
                                </h4>
                                <div className="table-responsive">
                                    <Table striped bordered hover size="sm" variant="dark">
                                        <thead>
                                        <tr>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent School</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Player 1</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Player 2</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Player 3</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Mountaineer Score</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent Score</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Result</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            rocketGame.map((val, index, player) => (
                                                <tr key={index}>
                                                    <td>{val.OppSchool}</td>
                                                    <td>{val.Player1}</td>
                                                    <td>{val.Player2}</td>
                                                    <td>{val.Player3}</td>
                                                    <td>{val.MountScore}</td>
                                                    <td>{val.OppScore}</td>
                                                    <td>{val.Result}</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </Table>
                                </div>
                            </>
                        )}
                    </div>
                    <br/>

                    <div>
                        {smashGame.length > 0 && (
                            <>
                                <h4 className="text-center fw-bold" style={titleStyleSub}>
                                    <span style={spanStyle}>Smash Game</span>
                                </h4>
                                <div className="table-responsive">
                                    <Table striped bordered hover size="sm" variant="dark">
                                        <thead>
                                        <tr>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent School</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Player</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Player Character</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent Character</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Player Stocks</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent Stocks</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Stage</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Result</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            smashGame.map((val, index, player) => (
                                                <tr key={index}>
                                                    <td>{val.OppSchool}</td>
                                                    <td>{val.Player}</td>
                                                    <td>{val.PlayerCharacter}</td>
                                                    <td>{val.OpponentCharacter}</td>
                                                    <td>{val.PlayerStocks}</td>
                                                    <td>{val.OpponentStocks}</td>
                                                    <td>{val.Stage}</td>
                                                    <td>{val.Result}</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </Table>
                                </div>
                            </>
                        )}
                    </div>
                    <br/>

                    <div>
                        {valorantGame.length > 0 && (
                            <>
                                <h4 className="text-center fw-bold" style={titleStyleSub}>
                                    <span style={spanStyle}>Valorant Game</span>
                                </h4>
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

                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 1 Character
                                            </th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 2 Character
                                            </th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 3 Character
                                            </th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 4 Character
                                            </th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 5 Character
                                            </th>

                                            <th className={"fw-bold"} style={{padding: "15px"}}>Mountaineer Score</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent Score</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Map</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Result</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            valorantGame.map((val, index, player) => (
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
                            </>
                        )}
                    </div>
                    <br/>

                    <div>
                        {overwatchGame.length > 0 && (
                            <>
                                <h4 className="text-center fw-bold" style={titleStyleSub}>
                                    <span style={spanStyle}>OverWatch Game</span>
                                </h4>
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

                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 1 Character
                                            </th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 2 Character
                                            </th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 3 Character
                                            </th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 4 Character
                                            </th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent 5 Character
                                            </th>

                                            <th className={"fw-bold"} style={{padding: "15px"}}>Mountaineer Score</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Opponent Score</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Map</th>
                                            <th className={"fw-bold"} style={{padding: "15px"}}>Result</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            overwatchGame.map((val, index, player) => (
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
                            </>
                        )}
                    </div>

                    <div>
                        {rocketGame.length === 0 && smashGame.length === 0 && valorantGame.length === 0 && overwatchGame.length === 0 && (
                            <>
                                <h4 className="text-center fw-bold" style={titleStyleSub}>
                                    <span style={spanStyle}>No Data Found</span>
                                </h4>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchByPlayer;
