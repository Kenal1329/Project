import React, {useState} from 'react'


export default function Form(props) {
    const [text,setText] = useState("");
    const handleUpclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted To UpperCase","success")
        
    }
    const handledownclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted To LowerCase","success")
    }

    const handleonchange = (event) => {
        setText(event.target.value);
    }

    const handleclear = (event) => {
        setText("");
        props.showAlert("Clear All","success")
    }

    const handlecopy = () => {
        let text = document.getElementById("exampleFromControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy All The Text into the ClipBoard","success")
    }


    return (
    <>
    <div className="container my-3 ">
    <h1 style={{color: props.mode === "dark"?'white':'black'}}>{props.heading}</h1>
  <div className="mb-3">
   <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white' , color: props.mode === "dark"?'white':'black'}}  value={text} onChange={handleonchange} id="exampleFromControlTextarea1"  rows="8" ></textarea>
  <button className="btn btn-primary my-3 mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
  <button className="btn btn-primary my-3 mx-1" onClick={handledownclick}>Convert to LowerCase</button>
  <button className="btn btn-primary my-3 mx-1" onClick={handleclear}>ClearAll</button>
  <button className="btn btn-primary my-3 mx-1" onClick={handlecopy}>CopyAll</button>
  </div>
    </div>
    <div className="container my-2 " style={{color: props.mode === "dark"?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} Characters </p>
    <p>{0.008*text.split(" ").length} words Read </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
    </div>
      </>
  )
}
