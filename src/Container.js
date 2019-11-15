import React from 'react';

const Container = props => {
    return (
        <div className='container'>
            {props.team.map((iteration, index) => (
                <div className='card' key={index}>
                    <h2>{iteration.name}</h2>
                    <p>{iteration.role}</p>
                    <p>{iteration.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Container;