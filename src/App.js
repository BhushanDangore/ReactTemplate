import React, { Fragment } from 'react';
import './App.css';
import AppBar from "./Components/AppBar";
import Drawer from "./Components/Drawer";

function App() {
    return (
        <Fragment >
            <div id="toggle"><h2> + </h2></div>
            <div className="App">
                <div className="main-area" >
                    <AppBar />
                    <Drawer />

                    As designing in the browser becomes more popular (and convenient), the need for helpful design tools is increasing. One set of tools that is becoming quite helpful revolves around filler content. Currently, a variety of resources exist to aid designers who need filler content, whether it be text or images.

Because a lot of website design used to take place in Photoshop, manually copying/pasting text from the web was the best method for 'filling in' a design with dummy content. However, now that a lot of website design takes place in the browser, why not have the computer do all 'filling in' work for you?
                </div>
            </div>
        </Fragment>
    );
}

export default App;
