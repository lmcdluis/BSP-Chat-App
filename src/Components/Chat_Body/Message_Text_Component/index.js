function MessageTextComponent({message}) {
  return (
    <div className="bubble-message p-2 shadow-sm bg-primary">
      <span>{message}</span>
    </div>
  );
}
export default MessageTextComponent;
