import "./App.css";
import React from "react";
const data = [
  {
    title: "ETH Transactions Hash",
    values: [
      "0x56d96295bb2fe92939cd98f175dc7c3367e88c45b936448bddee69e370e33bec",
      "0x58ab2fc3d6a2b9bfded1f9489ed98a57a8eab22753cc03e00554786adda298a7",
    ],
  },
  {
    title: "ETH Addresses",
    values: [
      "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
      "0xa6a694b30A29831452B9a3d1D5c3d42331E00EB9",
    ],
  },
  { title: "ENS", values: ["johndoe.eth", "vitalik.eth"] },
  { title: "Block", values: ["17968975", "17968948"] },
];

function App() { 
  const linkClick = (hash) => {
    const message = {
      chainId: "1",
      hash,
    };
    const event = new CustomEvent("super-search-tx", { detail: message });
    window.dispatchEvent(event);
  };
  return (
    <>
      <h1 class="p-4">ETHGlobal - SuperHack 2023</h1>
      <div className="App">
        <div className="p-4">
          <div>
            {data.map((_item) => (
              <div className="p-4">
                <div className="textHeading">{_item.title}</div>
                {_item.values.map((_val) => (
                  <React.Fragment key={_val}>
                  <p
                    className="pargagraph p-1 clickableText d-sm-inline "
                    onClick={() => linkClick(_val)}
                  >
                    {_val}
                  </p>
                  <br/>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="pb-4">
          <div className="textHeading">Code To Embed in your Dapp</div>
          <div className="heading6">Code To Embed in your Dapp</div>
          <div className="d-flex justify-content-start flex-column row-gap-3 pb-2">
            <p>1.open index.html in your Dapp</p>
            <p>2.Update super search js and css code give in the head part of your code</p>
            <p>3.If you want to override the styling you can update local variables present in css</p>
          </div>
          <a
            className="pargagraph p-1 d-sm-inline"
            href="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/SuperSearch/ss_v_1.css"
          >
            https://ds-storage.sgp1.cdn.digitaloceanspaces.com/SuperSearch/ss_v_2.css
          </a>
          <br />
          <a
            className="pargagraph p-1 d-sm-inline"
            href="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/SuperSearch/ss_v_1.js"
          >
            https://ds-storage.sgp1.cdn.digitaloceanspaces.com/SuperSearch/ss_v_2.js
          </a>
          <br />
          <div className="p-4">
            <img
              src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/SuperSearch/code"
              alt="code"
            />
          </div>
        </div>
        <div className="pb-4">
          <a
            className="pargagraph p-1 d-sm-inline"
            href=" https://github.com/GouthamJM/SuperSearch"
          >
            Repo link Github
          </a>
          <a
            className="pargagraph p-1 d-sm-inline"
            href="https://www.linkedin.com/in/gouthamjm/"
          >
           Connect with me in LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
