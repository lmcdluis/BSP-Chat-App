import TimeComponent from "Components/Chat_Body/Time_Component/index";

const BubbleMesage = () => {
  return (
    <div className="bubble-message p-2 shadow-sm bg-primary">
      <small>Texto de mensaje con bastante texto para probar</small>
      <TimeComponent />
    </div>
  );
};
export default BubbleMesage;
