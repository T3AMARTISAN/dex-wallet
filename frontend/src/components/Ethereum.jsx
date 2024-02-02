import { useOutletContext } from "react-router-dom";
import { ethers } from "ethers";

const Ethereum = () => {
  const { setIsNetworkButtonClick, setCurrentProvider } = useOutletContext();

  const onClickETH = () => {
    setCurrentProvider(new ethers.InfuraProvider());
    setIsNetworkButtonClick(false);
  };

  return (
    <button
      className="border rounded-lg border-black py-1 px-1 mr-1"
      onClick={onClickETH}
    >
      Ethereum Mainnet
    </button>
  );
};
export default Ethereum;