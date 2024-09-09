import TimeComponent from "../Time_Component/index";

const BubbleAudio = ({urlAudio}) => {
    return (
        <div className="bubble-message p-2 shadow-sm bg-primary my-2">
        <audio controls>
            <source src={urlAudio} type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
        <TimeComponent/>
        </div>
    )
}
export default BubbleAudio;