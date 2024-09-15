import { Card } from "react-bootstrap";
import TimeComponent from "../Time_Component/index";

const BubbleVideo = ({urlVideo}) => {
    return (

        <Card className="shadow-sm bg-primary my-2 border-0">
        <div className="p-2">
        <video controls>
            <source src={urlVideo} type="video/mp4"></source>
        </video>
        <TimeComponent/>
        </div>
        </Card>
    )
}
export default BubbleVideo;