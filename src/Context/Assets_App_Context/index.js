import { createContext, useState, useEffect } from "react";
export const GeneralAssets = createContext({});

export default function GeneralAssetsProvider({ children }) {
  const [assets, setAssets] = useState({
    agents: ["John Doe", "Marcela Carrasco", "Rodrigo Chavez"],
    backgroundColor: "primary",
  });
  const [agentSelected, setAgentSelected] = useState("Marcela Carrasco");
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [widthScreen]);
  return (
    <GeneralAssets.Provider
      value={{
        assets,
        setAssets,
        agentSelected,
        setAgentSelected,
        widthScreen,
      }}
    >
      {children}
    </GeneralAssets.Provider>
  );
}
