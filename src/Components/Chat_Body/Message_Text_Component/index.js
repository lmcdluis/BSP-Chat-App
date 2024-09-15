import { Card } from "react-bootstrap";
import TimeComponent from "../Time_Component";
function MessageTextComponent({message}) {
  return (
    <Card className="shadow-sm bg-primary border-0 my-2 text-white">
      <div className="p-2">
      <span>{message}</span>
      <TimeComponent/>
      </div>
    </Card>
  );
}
export default MessageTextComponent;
