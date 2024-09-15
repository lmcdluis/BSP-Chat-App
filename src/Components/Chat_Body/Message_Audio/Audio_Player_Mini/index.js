import {
  Card,
  Col,
  Row,
  Button
} from "../../../../../node_modules/react-bootstrap/esm/index";
import React from "react";
import { useWavesurfer } from '@wavesurfer/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faRepeat } from "@fortawesome/free-solid-svg-icons";

const { useState, useCallback, useRef } = React

const AudioPlayerMini = ({ urlAudio }) => {
const [audio] = useState(urlAudio);
const containerRef = useRef(null);
const formatTime = (seconds) => [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':');
const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 50,
    waveColor: '#fff',
    progressColor: 'rgb(65, 98, 230)',
    url: audio,
    barGap: 2,
    barWidth: 3,
    barRadius: 2,
    barAlign: "center",
    fillParent: true,
    cursorWidth: 0
  })

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause()
  }, [wavesurfer]);

const onRewind = () =>{
    wavesurfer.setTime(0);
}
  return (
    <Card className="bg-audioplayer border-0">
      <Card.Body className="text-white">
        <Row className="audio-player-content">
          <Col xs={3}>
          <Button size="sm" onClick={onPlayPause}>{isPlaying ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}</Button>
          </Col>
          <Col xs={7}>
            <div ref={containerRef}></div>
          </Col>
          <Col xs={2}>
          <Button size="sm" onClick={onRewind}>{<FontAwesomeIcon icon={faRepeat}/>}</Button>
          </Col>
          <Col xs={6} className="text-center">
          <small>{formatTime(currentTime)}</small>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default AudioPlayerMini;
