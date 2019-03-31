import React from 'react';
import Table from './table';

const students = [
    {
        student: 'Bob Williams',
        course: 'Woodshop',
        grade: 100
    },
    {
        student: 'Bif Biffler',
        course: 'Tennis',
        grade: 99
    },
    {
        student: 'Patty Pleasant',
        course: 'Pleasantries',
        grade: 89
    }
];

const App=()=>(
    <div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>
);

export default App;

