import { Card } from "react-bootstrap";
import TimeComponent from "../Time_Component/index";
import AudioPlayerMini from "./Audio_Player_Mini";

const BubbleAudio = ({urlAudio}) => {
    return (
        <Card className="border-0 shadow-sm my-2 bg-primary">
        <div className="p-2">
        {urlAudio && <AudioPlayerMini urlAudio={urlAudio}/>}
        <TimeComponent/>
        </div>
        </Card>
    )
}
export default BubbleAudio;