import { useContext } from "react";
import { GeneralAssets } from "../../../Context/Assets_App_Context";

function AvatarMesage() {
  const agentData = useContext(GeneralAssets);
  const name_agent = agentData.agentSelected;
  const lettersAget = name_agent
    .split(" ")
    .map((item) => item.toUpperCase().substring(0, 1));
  return (
    <div className="avatar-message shadow-sm">
      <h6>{lettersAget}</h6>
    </div>
  );
}
export default AvatarMesage;
