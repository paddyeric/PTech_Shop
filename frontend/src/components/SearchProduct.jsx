import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const searchHandler = () => {
    const term = searchTerm.trim();

    if (term) {
      navigate(`/shop?search=${encodeURIComponent(term)}`);
    } else {
      navigate("/shop");
    }
  };

  return (
    <div className="flex mt-4">
      <div className="flex items-center border rounded-md border-black text-black bg-white px-2 py-1 mx-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchHandler()}
          placeholder="Search Products"
          className="outline-none bg-transparent px-1 w-32 sm:w-40"
        />
        <button className="ml-2 text-black">
          <AiOutlineSearch size={18} />
        </button>
      </div>

      <div>
      <Button variant="primary" onClick={searchHandler}>
        Search
      </Button>
      </div>
    </div>
  );
};

export default SearchProduct;
