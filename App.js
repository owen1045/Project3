import "./styles.css";
import Button from "./Button";
import { useState } from "react";

export default function App() {
  const placeholderUrl =
    "https://github.com/owen1045/Project3/blob/main/backofcardcorrectsize.jpg?raw=true";
  const [image, setImage] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);

  const Generate = function () {
    setIsGenerated(true);
    fetch(
      "https://api.scryfall.com/cards/random?format=image&version=normal"
    ).then((r) => setImage(r.url));
  };

  return (
    <div className="App">
      <div className="content">
        <h1 className="Title">Random Card For Your MTG Deck</h1>
        <h2>
          <Button action={Generate} />
        </h2>
        <div className="image">
          {!isGenerated ? (
            <img src={placeholderUrl} alt="Place Holder"></img>
          ) : (
            <img src={image} alt="Magic The Gathering Card"></img>
          )}
        </div>
        <footer>
          <p id="link">
            <a href="https://github.com/owen1045/Project3" target="_blank">
              Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
