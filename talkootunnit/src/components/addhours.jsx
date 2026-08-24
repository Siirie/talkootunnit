import React from 'react';
import './login.css';
import { useState } from 'react';


const Dropdown =() => {
    let people = [
    { name: 'Henkilö 1', tunteja: 0 },
    { name: 'Henkilö 2', tunteja: 2 },
    { name: 'Henkilö 3', tunteja: 3 },
    ];
    let [person, setPerson] = useState('valitse')
    let handlePersonChange = (e) => {
        setPerson(e.target.value)
    }
    return (
        <div className='inputDropdown'>
            
        
        <select onChange={handlePersonChange}>
            <option value="valitse">Valitse henkilö</option>
            {people.map((person) => (
                <option key={person.name} value={person.name}>
                    {person.name}
                </option>
            ))}
        </select>
            { '  ' }{person }  
        </div>
    )
}

const AddHours = () => {
  return (
    <div className="login-container">
        <div className='login-header'>
            Lisää talkoot
            <div className='underline'></div>
        </div>
        <div className='ohjeet'>
            Tähän tulee ohjeet talkoiden ilmoittamiseen tapahtuman jälkeen 
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac gravida lorem. Mauris vestibulum porttitor suscipit. Curabitur rutrum justo a augue luctus, sed vulputate dolor dictum. 
            Nam at dui in arcu volutpat auctor et eget leo.
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac gravida lorem. Mauris vestibulum porttitor suscipit. Curabitur rutrum justo a augue luctus, sed vulputate dolor dictum. 
            Nam at dui in arcu volutpat auctor et eget leo.
            
        </div>
        <div className='inputs'>
            <div className='input'>
                <input type='date' placeholder='pvm' />
            </div>
            <div className='input'>
                <Dropdown/> {/*muuttuu hakemaan tietokannasta kaikki jäsenet */}
            </div>
            <div className='input'> {/*add validation, vain numeroita*/}
                <input type='number' placeholder='tunnit' />
            </div>
            <div className='input'> {/*kirjoittaa uuden tapahtuman tietokantaan*/}
                <input type='text' placeholder='tapahtuma' />
            </div>
        </div>
        <div className='submit-container'>
            <div className='submit-button'> Lisää </div>
            
        </div>
    
    </div>
    );
};

export default AddHours;