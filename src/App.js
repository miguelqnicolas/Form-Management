import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import Container from './Container';

function App() {
    const [team, setTeam] = useState([
        {
            name: 'Miguel',
            role: 'React Developer',
            email: 'miguelqnicolas@gmail.com'
        }
    ]);

    const addNewMember = member => {
        const newMember = {
            name: member.name,
            role: member.role,
            email: member.email
        };
        setTeam([...team, newMember]);
        // ???
    };

    return (
        <div className="App">
            <div>
                <h1>Team Builder</h1>
                <Form addNewMember={addNewMember}/>
            </div>
            <Container team={team}/>
        </div>
    );
}

export default App;
