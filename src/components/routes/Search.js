import React, { useEffect, useState } from "react";
import { useRef } from "react";

import SearchResult from "../SearchResult";

import "../../styles/Search.scss";

export default function Search() {
  const [inputValue, setInputValue] = useState("");

  const refInput = useRef(null);

  useEffect(() => {
    refInput.current.focus();
  }, [refInput]);

  const handleSubmit = (e) => {
    setInputValue(refInput.current.value);
    e.preventDefault();
  };

  return (
    <section className="Search" onSubmit={handleSubmit}>
      <form className="Search-form">
        <input
          className="Search-input"
          ref={refInput}
          type="text"
          placeholder="Search your Movie or TV show"
        />
      </form>
      {inputValue && <SearchResult keyword={inputValue} />}
    </section>
  );
}
