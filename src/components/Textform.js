import React, { useState } from 'react'

export default function Textform(props) {
    const handleupClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclearClick = () => {

        let newText = '';
        setText(newText)
    }
    const handleonChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container" style={{ Color: props.mode === `dark` ? `white` : `#042743` }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleonChange} style={{ backgroundColor: props.mode === `dark` ? `grey` : `white`, color: props.mode === `dark` ? `white` : `#042743` }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to upper case</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclearClick}>clear all</button>

            </div>
            <div class="container my-3" style={{ Color: props.mode === `dark` ? `white` : `#042743` }}>
                <h2>Your text summry</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something To Preview hear"}</p>
            </div>
        </>
    )
}
