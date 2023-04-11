import React , {useState} from 'react'

export default function TextForm(props) {
    // const [myFont,setMyFont]=useState({fontFamily:"inherit" })
    const handleUpClick = () => {
        let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to Upper Case !","success");
    }
    const handleLoClick = () => {
      let newText = text.toLowerCase();
   setText(newText);
   props.showAlert("Converted to Lower Case !","success");
  }
  const clearText = () => {
    let newText = "";
 setText(newText);
 props.showAlert("Text is cleared !","success");
}
  // const handleAlgerianClick = () => {
  //   setMyFont({ fontFamily: "'Rowdies', cursive" } );
  //   setText(newText);
  // }
  
    const handleOnChange = (event) => {
      setText(event.target.value);
  }

     const [text, setText] = useState("");

  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>    
    <h1>{props.heading}</h1>
<div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
  <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#adb5bd',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-success mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
<button className="btn btn-warning mx-1" onClick={clearText}>Clear</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{ text.split(" ").length } words and {text.length} characters</p>
      <p> In {0.008*text.split(" ").length} Minutes Can Read The Content</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
