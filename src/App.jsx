import "./App.css";
import { useState } from "react";

function App() {
  const [imageStack, setStack] = useState([]);

  const addToStack = () => {
    let imageStackCopy = [...imageStack];
    let imageToAdd = "image.jpg";
    imageStackCopy.push(imageToAdd);
    setStack(imageStackCopy);
  };

  const removeFromStack = () => {
    let imageStackCopy = [...imageStack];
    imageStackCopy.pop();
    setStack(imageStackCopy);
  };
  const imageList = imageStack.map((image, i) => (
    // eslint-disable-next-line react/jsx-key
    <div>
      <img src={image}></img> <span>{i + 1}</span>
    </div>
  ));

  return (
    <>
      <div>
        <h1>Build a stack!</h1>
        <div className="container">
          <div>{imageList}</div>
          <div>
            <button id="buttonAdd" onClick={addToStack}>
              Add Image
            </button>
            <button id="buttonRemove" onClick={removeFromStack}>
              Remove Image
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
