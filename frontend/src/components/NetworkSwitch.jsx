import { useOutletContext } from "react-router-dom";
import Ethereum from "./Ethereum";
import Polygon from "./Polygon";
import Optimism from "./Optimism";
import Arbitrum from "./Arbitrum";
import Sepolia from "./Sepolia";
import Goerli from "./Goerli";

const NetworkSwitch = () => {
  const { setIsNetworkButtonClick, setCurrentProvider } = useOutletContext();

  const onClickClose = () => {
    setIsNetworkButtonClick(false);
  };

  const onClickLinea = () => {
    setCurrentProvider();
  };

  const onClickAvalanche = () => {
    setCurrentProvider();
  };

  return (
    <div className="bg-white absolute w-full h-[480px] rounded-lg">
      <div className="h-3/5 flex flex-col justify-center pl-3 gap-2">
        <div>Main Network</div>
        <Ethereum />
        <Polygon />
        <button
          className="border rounded-lg border-black py-1 pl-1 mr-1"
          onClick={onClickLinea}
        >
          Linea Mainnet
        </button>
        <Optimism />
        <Arbitrum />
        <button
          className="border rounded-lg border-black py-1 pl-1 mr-1"
          onClick={onClickAvalanche}
        >
          Avalanche C-Chain
        </button>
      </div>
      <div className="bg-blue-100 h-2/5 flex flex-col justify-center pl-3 gap-2">
        <div>Test Network</div>
        <Sepolia />
        <Goerli />
        <button className="mt-2" onClick={onClickClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default NetworkSwitch;
