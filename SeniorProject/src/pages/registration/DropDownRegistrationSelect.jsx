import {useState} from "react";
import RocketRegistration from "./RocketRegistration";
import SmashRegistration from "./SmashRegistration";
import ValorantRegistration from "./ValorantRegistration";
import OverwatchRegistration from "./OverwatchRegistration";
import { Form } from 'react-bootstrap';
import RocketList from "../games/RocketList";
import ValorantList from "../games/ValorantList";
import OverWatchList from "../games/OverWatchList";
import SmashList from "../games/SmashList";

const DropDownRegistrationSelect = () => {

    const divStyle = {
        minWidth: "300px",
        maxWidth: "200px",
        width: "100%",
        boxShadow: '2px 2px 9px #414141FF',
        margin: 'center',
        padding: '1em',
        backgroundColor: 'rgba(240, 240, 240, 0.5)',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    const [value, setValue] = useState('RocketLeague');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <><br/>
            <div className="container" style={divStyle}>
                <Form.Select value={value} onChange={handleChange} className={'text-center text-bg-warning text-black'}>
                    <option value="RocketLeague">Rocket League</option>
                    <option value="Smash">Smash</option>
                    <option value="Valorant">Valorant</option>
                    <option value="Overwatch">Overwatch</option>
                </Form.Select>
            </div>

            <div>
                {value === 'RocketLeague' && (
                    <div>
                        <RocketRegistration/>
                        <RocketList/>
                    </div>
                )}
                {value === 'Smash' && (
                    <div>
                        <SmashRegistration/>
                        <SmashList/>
                    </div>
                )}
                {value === 'Valorant' && (
                    <div>
                        <ValorantRegistration/>
                        <ValorantList/>
                    </div>
                )}
                {value === 'Overwatch' && (
                    <div>
                        <OverwatchRegistration/>
                        <OverWatchList/>
                    </div>
                )}
            </div>
        </>
    )
}

export default DropDownRegistrationSelect;
