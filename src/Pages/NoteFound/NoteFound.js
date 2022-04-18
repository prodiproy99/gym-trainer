import React from 'react';
import NoteFoundImg from '../../images/notfound.png'

const NoteFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                <img width = '100%' height= 'auto' src={NoteFoundImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NoteFound;