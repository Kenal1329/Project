import React, {useInsertionEffect, useState} from 'react'


export default function Form(props) {
    const [text,setText] = useState("");
    const handleUpclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handledownclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleonchange = (event) => {
        setText(event.target.value);
    }

    const handleclear = (event) => {
        setText("");
    }


    return (
    <>
    <div className="container my-3 ">
    <h1>{props.heading}</h1>
  <div className="mb-3">
   <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFromControlTextarea1" aria-describedby="emailHelp" rows="8" ></textarea>
  <button className="btn btn-primary my-3 mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
  <button className="btn btn-primary my-3 mx-1" onClick={handledownclick}>Convert to LowerCase</button>
  <button className="btn btn-primary my-3 mx-1" onClick={handleclear}>ClearAll</button>
  </div>
    </div>
    <div className="container my-2">
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} Characters </p>
    <p>{0.008*text.split(" ").length} words Read </p>
    <h2>Preview</h2>
    <p>{text}</p>

    </div>
      </>
  )
}
