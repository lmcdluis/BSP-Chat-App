import axios from "axios";
const BubbleImage = () => {
  function getImageExample() {
    axios
      .get("https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill")
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  getImageExample();
  return (
    <>
      <p>aqui va la imagen</p>
    </>
  );
};
export default BubbleImage;
