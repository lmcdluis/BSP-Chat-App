import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./Components/Header";
import SearchBox from "./Components/Search_Box";
import ChatBody from "./Components/Chat_Body";
import GeneralAssetsProvider from "./Context/Assets_App_Context";

function App() {
  return (
    <GeneralAssetsProvider>
      <div className="bg-body-tertiary">
        <div className="header-container">
          <Header />
          <SearchBox />
        </div>
        <ChatBody />
      </div>
    </GeneralAssetsProvider>
  );
}

export default App;
