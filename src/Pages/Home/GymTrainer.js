import React from 'react';
import Trainer from '../../images/About us.jpg'
import './GymTrainer.css'

const GymTrainer = () => {
    return (
        <div>
            <div className="container gym-container">
                <div className="row">
                    <div className="col-md-5 left-side">
                        <img src={Trainer} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h2>About <span className='orange'>Trainer</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatem quod enim et odio, ullam quaerat molestiae perferendis tenetur laborum repudiandae corporis numquam aliquid sint cumque voluptates itaque ad? Laudantium?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatem quod enim et odio, ullam quaerat molestiae perferendis tenetur laborum repudiandae corporis numquam aliquid sint cumque voluptates itaque ad? Laudantium?</p>
                        <button className='btn btn-secondary mt-4'>View More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GymTrainer;