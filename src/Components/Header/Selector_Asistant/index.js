import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import { GeneralAssets } from "../../../Context/Assets_App_Context";

const SelectorAsistant = () => {
  const AssetsData = useContext(GeneralAssets);
  const handlerOnSelect = (e) => {
    const agent_selected = e.target.value;
    AssetsData.setAgentSelected(agent_selected);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <FontAwesomeIcon icon={faHeadset} className="icon_asistant fa-fade" />
      <Form.Select
        onChange={handlerOnSelect}
        size="sm"
        className="selector_asistant"
        value={AssetsData.agentSelected}
      >
        {AssetsData.assets.agents.map((agent, index) => (
          <option key={index}>{agent}</option>
        ))}
      </Form.Select>
    </div>
  );
};
export default SelectorAsistant;
