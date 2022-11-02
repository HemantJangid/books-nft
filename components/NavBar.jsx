import { useRouter } from "next/router";
import { useState } from "react";
import { Avatar, Button } from "web3uikit";

const NavBar = () => {
  const router = useRouter();
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState(
    "0xBB0d8f6360157307658f4dA1A21BB49516BBF725"
  );
  const handleProfileClick = () => {
    router.push(`/profile`);
  };
  return (
    <div className="w-full h-20 flex flex-row justify-between p-2 bg-white align-middle">
      <div className="container m-auto px-4 py-2 flex justify-between items-center">
        <span className="text-2xl font-bold"></span>
        {!walletConnected ? (
          <Button
            onClick={() => setWalletConnected(true)}
            size="large"
            text="Connect"
            theme="outline"
          />
        ) : (
          <div className="flex flex-row items-center">
            <p className="text-2xl font-bold">{`${address.slice(
              0,
              6
            )}......${address.slice(-6)}`}</p>
            <Avatar
              isRounded
              theme="image"
              className="ml-6"
              size={48}
              onClick={handleProfileClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
