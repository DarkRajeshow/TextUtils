import React, { useState } from 'react'

export default function About() {

    const [colorText, setcolorText] = useState("Enable Dark Mode");

    const [screenStyle, setStyle] = useState({
        color: "black",
        backgroundColor: "white"
    });
    let darkMode = () => {
        if (screenStyle.color === "white") {
            setStyle({
                color: "black",
                backgroundColor: "white"
            });
            setcolorText("Enable Dark Mode");
        }
        else {
            setStyle({
                color: "white",
                backgroundColor: "black"
            });
            setcolorText("Disable Dark Mode");
        }
    }
    return (
        <div style={screenStyle}>
            <div className="container-fluid p-5 bg-dark text-white text-center" style={screenStyle}>
                <h1>About Us</h1>
            </div>

            <div className="container mt-5" style={screenStyle}>
                <div className="row">
                    <div className="col-sm-4" style={screenStyle}>
                        <h3>Column 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4" style={screenStyle}>
                        <h3>Column 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4" style={screenStyle}>
                        <h3>Column 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
            </div>
            <div className="container" style={screenStyle}>
                <button className='btn btn-primary my-4' onClick={darkMode}>{colorText}</button>
            </div>
        </div>
    )
}
