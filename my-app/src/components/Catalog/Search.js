import React, { useRef, useState, useEffect } from "react";
import ManuContext from "./ManuContext";
import NameContext from "./NameContext";
import ManuItems from "./ManuItems";

function Search() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const onClear = () => {
    inputRef.current.value = "";
    setUserManu("all");
    setUserName("");
  };
  const [userManu, setUserManu] = useState("all");
  const [userName, setUserName] = useState("");

  return (
    <ManuContext.Provider value={userManu}>
      <NameContext.Provider value={userName}>
        <div class="column-left">
          <div class="filter">
            <div class="filter-header">
              <h4>Search</h4>
              <span class="clear" onClick={onClear}>
                Clear
              </span>
            </div>
            <div>
              <input
                id="field"
                type="text"
                placeholder="search..."
                ref={inputRef}
                onInput={() => setUserName(`${inputRef.current.value}`)}
              />
            </div>
            <h4>Manufacturer</h4>
            <div>
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id="all"
                  value="all"
                  onClick={() => setUserManu("all")}
                  defaultChecked
                />
                <label for="all">All</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id="apple"
                  value="apple"
                  onClick={() => setUserManu("Apple")}
                />
                <label for="apple">Apple</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id="dell"
                  value="dell"
                  onClick={() => setUserManu("Dell")}
                />
                <label for="dell">Dell</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id="lenovo"
                  value="lenovo"
                  onClick={() => setUserManu("Lenovo")}
                />
                <label for="lenovo">Lenovo</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id="microsoft"
                  value="microsoft"
                  onClick={() => setUserManu("Microsoft")}
                />
                <label for="microsoft">Microsoft</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id="xiaomi"
                  value="xiaomi"
                  onClick={() => setUserManu("Xiaomi")}
                />
                <label for="xiaomi">Xiaomi</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id="intel"
                  value="intel"
                  onClick={() => setUserManu("Intel")}
                />
                <label for="intel">Intel</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id="asus"
                  value="asus"
                  onClick={() => setUserManu("Asus")}
                />
                <label for="asus">Asus</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="manufacturere"
                  id="samsung"
                  value="samsung"
                  onClick={() => setUserManu("Samsung")}
                />
                <label for="samsung">Samsung</label>
              </div>
            </div>
          </div>
        </div>
        <ManuItems />
      </NameContext.Provider>
    </ManuContext.Provider>
    // {/* <NameContext.Provider value={userName}>
    //   <ManuItems />
    // </NameContext.Provider> */}
  );
}

export default Search;
