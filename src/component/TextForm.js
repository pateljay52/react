import React, { useState } from "react";

export default function TextForm(props) {
  const activateLasers = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  
  const handelOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const handelOnClick = () => {
     let newText = text.toUpperCase();
    setText(newText);
  };

  const handelboldClick = () => {
      let newText = "";
    setText(newText);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            id="exampleFormControlTextarea1"
            rows="5"></textarea>
        </div>
        <button className="btn btn-primary" onClick={activateLasers}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary ms-4"  onClick={handelOnClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary ms-4"  onClick={handelboldClick}>
         Clear
        </button>
      </div>
      <div className="container my-3">
          <h1>your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p> {0.008 * text.split(" ").length} Minuts read</p>
      </div>
    </>
  );
}
