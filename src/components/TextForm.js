import React,{useState} from 'react'

export default function TextForm(props) {
    const handelUpClick = () =>{
        let newText= Text.toUpperCase();
        setText(newText);
        props.showAlert('convert to uppercase!','success');
    }
    const handelLoClick = () =>{
        let newText= Text.toLowerCase();
        setText(newText);
        props.showAlert('convert to lowercase!','success');
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Copied to Clipboard!!','success');
    }
    const handleExtraSpaces = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handelOnChange = (event) =>{ 
        setText(event.target.value)
    }
    
    const handelClClick = () =>{
        let newText= '';
        setText(newText);
    }
  
    const [Text,setText]=useState('');
    // setText("Enter The Text");
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2 className="mb-4" >{props.heading}</h2>
           <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handelOnChange}  id="myBox" rows="8"
                 style={{backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',color: props.mode === 'dark'?'white':'black'}}></textarea>
           </div>
           <button disabled={Text.length===0}   className="btn btn-primary mx-3 my-2" onClick={handelUpClick}>Convert to Uppercase</button>
           <button disabled={Text.length===0}  className="btn btn-primary mx-3 my-2" onClick={handelLoClick}>Convert to LowerCase</button>
           <button disabled={Text.length===0}  className="btn btn-primary mx-3 my-2" onClick={handelClClick}>Clear Text</button>
           <button disabled={Text.length===0}  className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy Text</button>
           <button disabled={Text.length===0}  className="btn btn-primary mx-3 my-2" onClick={handleExtraSpaces}>Remove Extra space</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
            <p>{0.008  * Text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{Text.length>0?Text:"Nothing to Preview!"}</p>
        </div>
        </>
    )
}
