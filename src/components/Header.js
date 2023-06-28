import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchInput, toggleMenu } from "../utils/appSlice";
import SearchSuggestion from "./SearchSuggestion";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearchInput = (text) => {
    dispatch(setSearchInput(text));
  };

  return (
    <div className=" flex justify-between my-2 p-1 px-1 border-b">
      <div className=" flex ">
        <img
          onClick={() => handleToggleMenu()}
          className=" h-6 mt-1 mx-4 cursor-pointer "
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///90d3lxdHZtcHJqbW/AwcHk5eWVmJlnam1rbnCpq6yBhIb5+fnHyMng4eH29veKjI6ztLWipKV5fH6OkZLZ2tvq6+vLzMy5u7zIycnR0tLCw8OanJ7n5uYQAAACyUlEQVR4nO3di27iMBCFYcfOFodbEiBAgfd/ziXQSlvJNqkWCc3h/54gR3ac1p4xzgEAAAAAAAAAAAAAAAAoa4fVH2tWQzs13vK4qJtgT1MvjsspAfsYfGWTD7F/mG+/Da9+zv8StvtywKG2On7ffD2UAn7EVz/gE8SPfMCl7Rn6LeTXm5n1KXrnZ7mAa4U5Oopr7SHMD2KrMoTXQUz/eXPQWGdG4ZBMOFeZpNdpOk8m3Akl3CUTLoQSLt40YSeUsEsm3Agl3CQTnoW+Fudkwr3QFz/zT6LMUpNZaJw71a9+tCepT5mEKoOYHUKZNzH3Fo7OChFjeiH9crQfMR5LAZ37jLbfRR8/ywGv72JneEPR192D7dKbYReb4O0JTdwV90r/0Z76zcyaTX+afDQDAAAAAAAAAAAAYDL180P1M2D5c/yV+VqMVTmgfD2NfE2UROtasXlNvjbxIFNfmm6ZkRnC/CCKVJeOMhWm+rX6+v0W+j0zMgvNG3d26fcf6veQ6vcB6/dy6/fjv8GdCiqDmL8X4w3uNtH4J790P41zg/GttnGz7cGeqfw9UU7/ri93u68tmryvLU68r23UDquzNb+4cw8AAAAAAAAAAADAdKd5V726i+nXqm6evSD5p2UfGm/xnNv7JvQTDoFXwXKpQggP2p6cu1ivqImXcsCd5QG8C+nq2S8b+wGvEdOF+jcn61P0LubXVIsraIrPBTwqzNFRyDVZvvrBnigdcK3SnFdVdbpIWGaSZqfpRWWhuS416c8+nV2GvG1nl0gvwijTj9ALraXpYuihefWDPU2TqdcX+uKnA+o0IGbaD51rVQaxzta0i6w1mXXmRuKTWPhRMueWlf2IviruKLbG257GxqdHjSUX091r/tFm4mhYRJNb3uOmd1xM+0mr9Xzb1PY023mxt/Kn5f7Dmv3kvjUAAAAAAAAAAAAAUPUXCyx+ltjBidoAAAAASUVORK5CYII="
        />
        <img
          className=" h-8 rounded-lg"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmX0x9KawlD7gHC-FGLp_bpRNh9KE1m6zmzxdf62Tt8WVEXlRkItuq6CAW1BmI-R1NQ&usqp=CAU"
        />
      </div>
      <div className=" relative text-lg">
        <div>
          <input
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearchInput(searchQuery);
            }}
            className=" border border-gray-400 p-1 px-8 rounded-l-full w-[500px]"
          />
          <button className=" border border-gray-400 p-1 px-4  rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className=" absolute">
            <SearchSuggestion searchQuery={searchQuery} />
          </div>
        )}
      </div>
      <div>
        <img
          className=" h-8 mx-12"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEwalaRUsDXz_hi03tVaA56X2bP3ocnStKw&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Header;
