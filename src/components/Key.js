import React from 'react';
import "./Key.css";
import {NOTE_TO_KEY} from "../global/constants.js";
import _ from "lodash";

class Key extends React.Component {
    render() {
        let keyClassName = "key";
        
        const noteIsFlat = this.props.note.length > 1;
        if(noteIsFlat) {
            keyClassName += " flat";
        }

        const keyIsPressed = _.includes(this.props.pressedKeys, NOTE_TO_KEY[this.props.note])
        if(keyIsPressed) {
            keyClassName += " pressed";
        }

        let key;
        if(noteIsFlat) {
            key = (
                <div className={keyClassName}></div>
            );
        } else {
            key = (
                <div className={keyClassName}>
                    <div className="key-text">
                        {this.props.note.toUpperCase()}
                    </div>
                </div> 
            );   
        }

        return key
    };
}

export {Key};