import React from 'react';
import ReactDOM from 'react-dom';


function luckyNumber(){
    return Math.floor(Math.random()*(1000+1));
}

const user = {
    name : 'Bob',
    luckyNumber: luckyNumber()
};
const Greeting = ()=>(
    <div className= 'container'>
        <h1>Hello {user.name}</h1>
        <h2 className= 'text-muted'>{user.name}, your lucky number is: {user.luckyNumber}</h2>
    </div>
);
ReactDOM.render(
    <Greeting/>,
    document.getElementById('root')
);

