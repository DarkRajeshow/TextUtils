import React, { useState } from 'react'


export default function TextArea(props) {

    let words;
    let [text, setText] = useState("");

    let convertUppercase = () => {
        if (text === "") {
            props.showAlert("The text area is empty", "warning");
            return;
        }

        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "success");
    }

    let convertLowercase = () => {
        if (text === "") {
            props.showAlert("The text area is empty", "warning");
            return;
        }

        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase", "success");
    }

    let Capitalized = () => {
        if (text === "") {
            props.showAlert("The text area is empty", "warning");
            return;
        }
        let word = text.split(" ");
        let firstChar;
        for (let i = 0; i < word.length; i++) {
            firstChar = word[i].charAt(0).toUpperCase();
            word[i] = word[i].substring(1).toLowerCase();
            word[i] = firstChar + word[i];
        }
        setText(word.join(" "));
        props.showAlert("Text was Capitalized", "success");

    }

    let InvertCase = () => {

        if (text === "") {
            props.showAlert("The text area is empty", "warning");
            return;
        }

        let Invertword = text.split(" ");
        for (let i = 0; i < Invertword.length; i++) {
            Invertword[i] = Invertword[i].split("");
            for (let j = 0; j < Invertword[i].length; j++) {
                if (Invertword[i][j] === Invertword[i][j].toLowerCase()) {
                    Invertword[i][j] = Invertword[i][j].toUpperCase();
                }
                else {
                    Invertword[i][j] = Invertword[i][j].toLowerCase();
                }
            }
            Invertword[i] = Invertword[i].join("");
        }
        setText(Invertword.join(" "));
        props.showAlert("Text is inverted.", "success");

    }

    let sentanceCase = () => {
        if (text === "") {
            props.showAlert("The text area is empty", "warning");
            return;
        }

        let Sentance = text.split(".");
        let firstChar;
        firstChar = Sentance[0].substring(0, 1).toUpperCase();
        Sentance[0] = Sentance[0].substring(1).toLowerCase();
        Sentance[0] = firstChar + Sentance[0];

        for (let i = 1; i < Sentance.length; i++) {
            firstChar = Sentance[i].substring(1, 2).toUpperCase();
            Sentance[i] = Sentance[i].substring(2).toLowerCase();
            Sentance[i] = firstChar + Sentance[i];
        }
        setText(Sentance.join(". "));
        props.showAlert("Conveted in sentance-case.", "success");

    }

    let copyText = () => {
        if (text === "") {
            props.showAlert("The text area is empty", "warning");
            return;
        }

        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard.", "success");
    }

    let handleSpaces = () => {
        if (text === "") {
            props.showAlert("The text area is empty", "warning");
            return;
        }
        let text2 = text.replace(/\s+/g, " ");
        console.log(text2);
        setText(text2);
        props.showAlert("Extra spaces are removed.", "success");

    }

    let clearText = () => {
        if (text === "") {
            props.showAlert("The text area is empty", "warning");
            return;
        }
        setText("");
        props.showAlert("Text-area is already empty", "success");
    }

    let SpecificChar = () => {
        if (text === "") {
            props.showAlert("The text area is empty", "warning");
            return;
        }

        let char = prompt("Enter a character or name in which you want to perform an action.");
        let re = new RegExp(char, "gi");

        console.log(re);
        let action = prompt("Enter Y for UpperCase and N for LowerCase.");
        props.showAlert(action === "Y" || action === "y" ? `The "${char}" is converted to uppecase Successfully` : action === "N" || action === "N" ? `The "${char}" is converted to uppecase Successfully` : "", "success");
        if (action === "Y" || action === "y") {
            char = text.replace(re, char.toUpperCase());
        }
        else if (action === "N" || action === "n") {
            char = text.replace(re, char.toLowerCase());
        }
        else {
            alert("Please enter valid Choice.");
        }

        setText(char);
    }

    let readParagraph = () => {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    }

    let onChangeHandler = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container my-8">
                <h1>Text Converter</h1>
                <div className="form-group">
                    <textarea type="text" className="form-control" id="myBox" aria-describedby="emailHelp" value={text} onChange={onChangeHandler} rows="6"></textarea>
                </div>
                <button type="submit" className="btn btn-success" onClick={convertUppercase}>Convert To UpperCase</button>
                <button type="submit" className="btn btn-success" onClick={convertLowercase}>Convert To LowerCase</button>
                <button type="submit" className="btn btn-success" onClick={Capitalized}>Capitalize text</button>
                <button type="submit" className="btn btn-success" onClick={InvertCase}>Invert Text</button>
                <button type="submit" className="btn btn-success" onClick={sentanceCase}>To Sentance Case</button>

                <button type="submit" className="btn btn-success" onClick={SpecificChar}>Specific Character Capitalization</button>
                <button type="submit" className="btn btn-success" onClick={handleSpaces}>Remove Extra Spaces</button>
                <button type="submit" className="btn btn-success" onClick={readParagraph}>Read text</button>

                <button type="submit" className="btn btn-primary" onClick={copyText}>Copy Text</button>
                <button type="submit" className="btn btn-danger" onClick={clearText}>Clear all</button>
            </div>

            <div className="container my-3">
                <h2>Your Sentance has</h2>
                <p>{words = (text.split(" ")[text.split(" ").length - 1] === " ") || text.split(" ")[text.split(" ").length - 1] === "" ? text.split(" ").length - 1 : text.split(" ").length} Words & {text.length} characters</p>
                <p>It takes around {Math.round((0.48 * words)) < 60 ? Math.round((0.48 * words)) : (Math.round((0.48 * words) / 60)) + " minutes and " + (Math.round((0.48 * words) % 60))} seconds to read.</p>
            </div>
            <div className="container my-4">
                <h2>Preview</h2>
                <div>
                    <p>{text.length === 0 ? "Enter the text and try it out!" : text}</p>
                </div>
            </div>
        </>
    )
}
