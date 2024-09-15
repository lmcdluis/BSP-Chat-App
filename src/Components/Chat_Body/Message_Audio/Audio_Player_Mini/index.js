import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row, Button } from "../../../../../node_modules/react-bootstrap/esm/index";
import { faDownload, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const AudioPlayerMini = ({urlAudio}) => {
    const [isActive, setIsActive] = useState(false);
    const audio = new Audio(urlAudio);
    const handlerPlay = () => {
        setIsActive(!isActive);
    }
    useEffect(()=> {
        console.log(audio);
        console.log(isActive);
        isActive ? audio?.play() : audio?.pause();
    }, [audio, isActive])

    return (
        <Card className="bg-audioplayer border-0">
            <Card.Body className="text-white">
                <Row className="audio-player-content">
                    <Col xs={2}>
                     <Button className="rounded-pill" onClick={handlerPlay}>
                     {isActive && <FontAwesomeIcon icon={faPlay} />}
                     {!isActive && <FontAwesomeIcon icon={faPause}/>}
                     </Button>
                    </Col>
                    <Col xs={8}>
                    <input type="range" className="form-range"/>
                    <small>{audio.duration}</small>
                    </Col>
                    <Col xs={2}>
                    <Button>
                    <FontAwesomeIcon icon={faDownload}/>
                    </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default AudioPlayerMini;