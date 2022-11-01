import { Button } from "web3uikit";

const NavBar = () => {
  return (
    <div className=" w-full flex flex-row justify-between p-2 bg-white align-middle">
      <div className="container m-auto px-4 py-2 flex justify-between items-center">
        <span className="text-2xl font-bold">Name</span>
        <Button
          color="blue"
          onClick={function noRefCheck() {}}
          size="large"
          text="Connect"
          theme="colored"
        />
      </div>
    </div>
  );
};

export default NavBar;
