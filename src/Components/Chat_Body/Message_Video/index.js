import TimeComponent from "../Time_Component/index";

const BubbleVideo = ({urlVideo}) => {
    return (

        <div className="bubble-message p-2 shadow-sm bg-primary my-2">
        <video controls>
            <source src={urlVideo} type="video/mp4"></source>
        </video>
        <TimeComponent/>
        </div>
    )
}
export default BubbleVideo;