import React, {useState} from 'react';

const Form = props => {
    const [member, setMember] = useState({
        id: '',
        name: '',
        role: '',
        email: ''
    });

    // store input, this does the same thing? can we go over this...
    const input = event => {
        setMember({...member, [event.target.name]: event.target.value});
        // {
        //     name: event.target.value.name,
        //     role: event.target.value.role,
        //     email: event.target.value.email  
        // }
    };

    // prevent default effect and send form info back to parent
    const submit = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({
            name: '',
            role: '',
            email: ''
        });
    };
    
    return (
        <form onSubmit={submit} autoComplete='off'>
            <input id='name' name='name' type='text' placeholder='Name' value={member.name} onChange={input}></input>
            
            <input id='role' name='role' type='text' placeholder='Role' value={member.role} onChange={input}></input>
            
            <input id='email' name='email' type='email' placeholder='Email' value={member.email} onChange={input}></input>

            <button type='submit'>Add</button>
        </form>
    )
};

export default Form;