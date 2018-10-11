import React, { Component } from 'react';
import Trainerlist from '../containers/Trainerlist';
import TrainerDetails from '../containers/TrainerDetails';
import '../index.css'

const App=()=>(
    <div>
        <h2>Trainers List- Infotech</h2>
        <Trainerlist></Trainerlist>
        <br></br>
        <h2>Trainer Details</h2>
        <TrainerDetails></TrainerDetails>
    </div>
)

export default App;